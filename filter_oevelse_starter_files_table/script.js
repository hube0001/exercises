const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const elVehicle = vehicles.filter((vehicle) => vehicle.isElectric);
const vehicleSeats = vehicles.filter((vehicle) => vehicle.passengers > 2);
const jonasBiler = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas");
const ryeBread = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ? each.fuel : "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : "-"}</td>
  <td>${each.ownedBy ? each.ownedBy : "-"}</td>
  <td>${each.isElectric ? "Electric" : "unknown"}</td>
  <td>${each.isTandem ? "Tandem" : "unknown"}</td>
</tr>`;
  });
}

// Få fat i alle knapperne
document.querySelector("#showAll").addEventListener("click", () => {
  tbodyPointer.innerHTML = ""; // Ryd tabellen først
  showTheseVehicles(vehicles);
});

document.querySelector("#showElectric").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(elVehicle);
});

document.querySelector("#showSeats").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(vehicleSeats);
});

document.querySelector("#showJonas").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(jonasBiler);
});

document.querySelector("#showRye").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(ryeBread);
});
