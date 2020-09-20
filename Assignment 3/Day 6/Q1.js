window.onload = function () {
  let initialsuperheroes = [
    {
      name: "Thor",
      age: 1500,
      planet: "Asgard",
      height: "6.3",
    },
    {
      name: "Iron Man",
      age: 34,
      planet: "Earth",
      height: "5.10",
    },
    {
      name: "Captain America",
      age: 101,
      planet: "Earth",
      height: "6",
    },
  ];

  if (localStorage.getItem("superheroes") == null) {
    localStorage.setItem("superheroes", JSON.stringify(initialsuperheroes));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let ;
  if (superarray == undefined) {
    superheroes = JSON.parse(localStorage.getItem("superheroes"));
  } else {
    superheroes = superarray;
  }

  superheroes.forEach(function (superhero, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${superhero.name}</td>
      <td>${superhero.age}</td>
      <td>${superhero.planet}</td>
      <td>${superhero.height}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      <button onclick='showModal(${index})'>update</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addSuperhero(e) {
  e.preventDefault();
  let superhero = {};
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let planet = document.getElementById("planet").value;
  let height = document.getElementById("height").value;
  superhero.name = name;
  superhero.age = Number(age);
  superhero.planet = planet;
  superhero.height = height;

  //   superheroes.push(superhero);

  let superheroes = JSON.parse(localStorage.getItem("superheroes"));
  superheroes.push(superhero);
  localStorage.setItem("superheroes", JSON.stringify(superheroes));

  display();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("planet").value = "";
  document.getElementById("height").value = "";
}

function deleteSuperhero(index) {
  let superheroes = JSON.parse(localStorage.getItem("superheroes"));
  superheroes.splice(index, 1);
  localStorage.setItem("superheroes", JSON.stringify(superheroes));
  display();
}

function updateSuperhero(e) {
  e.preventDefault();
  let superheroes = JSON.parse(localStorage.getItem("superheroes"));
  let superhero = superheroes[updateIndex];
  console.log(superhero);
  let name = document.getElementById("upname").value;
  let age = document.getElementById("upage").value;
  let planet = document.getElementById("upplanet").value;
  let height = document.getElementById("upheight").value;
  superhero.name = name;
  superhero.age = Number(age);
  superhero.planet = planet;
  superhero.height = height;

  localStorage.setItem("superheroes", JSON.stringify(superheroes));
  display(superheroes);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}