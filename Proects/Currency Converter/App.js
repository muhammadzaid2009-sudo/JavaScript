const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const amountInput = document.querySelector("#amount-input");
const dropdowns = document.querySelectorAll(".dropdown select");
const submitBtn = document.querySelector(".submit-btn");
const fromCurr = document.querySelector("#from-select");
const toCurr = document.querySelector("#to-select");
const msg = document.querySelector(".msg");
const exchangeBtn = document.querySelector(".exchange-btn");

if (!fromCurr || !toCurr || !amountInput || !msg) {
  throw new Error("Required form elements are missing.");
}

const populateCurrencyDropdowns = () => {
  for (const select of dropdowns) {
    for (const currCode in countryList) {
      if (!Object.prototype.hasOwnProperty.call(countryList, currCode)) continue;

      const option = document.createElement("option");
      option.textContent = currCode;
      option.value = currCode;
      
      if (select.name === "from" && currCode === "USD") {
        option.selected = true;
      } else if (select.name === "to" && currCode === "INR") {
        option.selected = true;
      }

      select.append(option);
    }

    select.addEventListener("change", () => {
      updateFlag(select);
      updateExchangeRate();
    });
  }
};

const updateExchangeRate = async () => {
  let amtVal = parseFloat(amountInput.value);

  if (Number.isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const fromCode = fromCurr.value.toLowerCase();
  const toCode = toCurr.value.toLowerCase();

  
  const url = `${BASE_URL}/${fromCode}.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    // FIX 2: Extract the rate correctly from the new nested JSON response
    const rate = data[fromCode][toCode];

    if (typeof rate !== "number" || Number.isNaN(rate)) {
      throw new Error("Invalid rate data from API");
    }

    const finalAmount = (amtVal * rate).toFixed(4);
    msg.textContent = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error(error);
    msg.textContent = "Unable to load exchange rate right now. Please try again later.";
  }
};

const updateFlag = (select) => {
  const code = select.value;
  const countryCode = countryList[code];
  const img = select.closest(".select-container").querySelector("img");

  if (countryCode && img) {
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img.alt = `${code} country flag`;
  }
};

const swapCurrencies = () => {
  const fromValue = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = fromValue;

  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
};

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

exchangeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  swapCurrencies();
});

window.addEventListener("load", () => {
  populateCurrencyDropdowns();
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});