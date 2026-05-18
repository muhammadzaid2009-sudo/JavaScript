let DATA = "secret information";

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data = ", DATA);
  }
}
class Admin extends user {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new data";
  }
}

let stu1 = new user("harry", "abc@gmail.com");
let stu2 = new user("bob", "123@gmail.com");
let Admin1 = new user("admin", "admin@gmail.com");
