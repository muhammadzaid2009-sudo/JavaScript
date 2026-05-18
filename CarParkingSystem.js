/*
Topic: Smart Parking Management System 🚗 📌 Scenario: You are developing a system for a parking plaza that manages: 
Vehicle entry & exit Parking slots Billing based on time 
❓ Question 1: Data Structure Design (10 Marks) Create a structure to store parking data.
 Each vehicle record must include: Vehicle Number (string) Owner Name (string) Entry Time (timestamp) Exit Time (timestamp) Slot Number (number) Fee (number) 
👉 Create an array to store all parked vehicles.
*/

// at entry
// let parkingLot = [];

// let vehicles = {
//     VehicleNumber: "KQZ-123",
//     OwnerName: "Ali",
//     EntryTime: new Date(),
//     ExitTime: null,
//     SlotNumber: 5,
//     Fee: 0
// };

// function parkVehicle(VehicalNumber,ownerName,slotNumber) {
//     let vehicle = {
//         vehicleNumber,
//         ownerName,
//         entryTime: new Date(),
//         eeitTime: null,
//         slotNumber,
//         fee  
//     }
//     parkingLot.push(vehicle);
// }

// function findVehicle(vehicleNumber){
//     return parkingLot.find(v =>  v.vehicleNumber === vehicleNumber);
// }

// //exit parking

// Array to store all parked vehicles
let parkingLot = [];

// Function to park a vehicle (ENTRY)
function parkVehicle(vehicleNumber, ownerName, slotNumber) {
    // Check if vehicle already exists
    let existing = parkingLot.find(v => v.vehicleNumber === vehicleNumber);

    if (existing) {
        console.log("Vehicle already parked!");
        return;
    }

    let vehicle = {
        vehicleNumber: vehicleNumber,
        ownerName: ownerName,
        entryTime: new Date(),
        exitTime: null,
        slotNumber: slotNumber,
        fee: 0
    };

    parkingLot.push(vehicle);
    console.log("Vehicle parked successfully!");
}

// Function to find a vehicle
function findVehicle(vehicleNumber) {
    return parkingLot.find(v => v.vehicleNumber === vehicleNumber);
}

// Function for vehicle exit (EXIT + BILLING)
function exitVehicle(vehicleNumber) {
    let vehicle = findVehicle(vehicleNumber);

    if (!vehicle) {
        console.log("Vehicle not found!");
        return;
    }

    if (vehicle.exitTime !== null) {
        console.log("Vehicle already exited!");
        return;
    }

    // Set exit time
    vehicle.exitTime = new Date();

    // Calculate time difference in minutes
    let timeDiff = (vehicle.exitTime - vehicle.entryTime) / 1000; // seconds
    let minutes = Math.ceil(timeDiff / 60);

    // Fee calculation (example: 2 per minute)
    vehicle.fee = minutes * 2;

    console.log("Vehicle exited successfully!");
    console.log("Total Time:", minutes, "minutes");
    console.log("Total Fee:", vehicle.fee);
}

// Function to show all parked vehicles
function showParkingLot() {
    console.log(parkingLot);
}
