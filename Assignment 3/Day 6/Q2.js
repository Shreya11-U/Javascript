window.onload = function () {
  let initialbus = [
    {
      name: "Thor",
      number: 1500,
      source: "Asgard",
      destination: "6.3",
    },
    {
      name: "Iron Man",
      number: 34,
      source: "Earth",
      destination: "5.10",
    },
    {
      name: "Captain America",
      number: 101,
      source: "Earth",
      destination: "6",
    },
  ];

  if (localStornumber.getItem("bus") == null) {
    localStornumber.setItem("bus", JSON.stringify(initialbus));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let ;
  if (superarray == undefined) {
    bus = JSON.parse(localStornumber.getItem("bus"));
  } else {
    bus = superarray;
  }

  bus.forEach(function (bus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.number}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>
      <button onclick='deletebus(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addbus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  bus.name = name;
  bus.number = Number(number);
  bus.source = source;
  bus.destination = destination;

  //   bus.push(bus);

  let bus = JSON.parse(localStornumber.getItem("bus"));
  bus.push(bus);
  localStornumber.setItem("bus", JSON.stringify(bus));

  display();

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
}

function deletebus(index) {
  let bus = JSON.parse(localStornumber.getItem("bus"));
  bus.splice(index, 1);
  localStornumber.setItem("bus", JSON.stringify(bus));
  display();
}

function updatebus(e) {
  e.preventDefault();
  let bus = JSON.parse(localStornumber.getItem("bus"));
  let bus = bus[updateIndex];
  console.log(bus);
  let name = document.getElementById("upname").value;
  let number = document.getElementById("upnumber").value;
  let source = document.getElementById("upsource").value;
  let destination = document.getElementById("updestination").value;
  bus.name = name;
  bus.number = Number(number);
  bus.source = source;
  bus.destination = destination;

  localStornumber.setItem("bus", JSON.stringify(bus));
  display(bus);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}