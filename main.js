let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");


let currentFetch = 'number fact';
let buttons = document.querySelectorAll('.btn-group > label');
let wording = document.querySelectorAll(".wording");
let active;

let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("input", getFactFetch);



buttons.forEach(function (current) {
  current.addEventListener("click", function() {
    if (active) {
      active.classList.remove("active")
    }
    currentFetch = this.innerText.toLowerCase();
    wording.forEach(function (e) {
      e.innerText = currentFetch;
    });
    if (document.querySelector(".hidden")) {
      document.querySelector(".hidden").classList.remove("hidden");
    }
    active = this;
    if (active) {
      active.classList.add("active")
    }
    getFactFetch();
  });
});

// function getFactAjax() {
//   let number = numberInput.value;
//
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://numbersapi.com/' +number);
//
//   xhr.onload = function () {
//     if (this.status == 200 && number != "") {
//       fact.style.display = "block";
//
//       factText.innerText = this.responseText;
//     }
//   }
//
//   xhr.send();
// }


// fetch api

function getFactFetch() {
  let number = numberInput.value;

  if (currentFetch === "number fact") {
    fetch('http://numbersapi.com/' +number)
      .then(response => response.text())
      .then(data => {
        if (number != "") {
          fact.style.display = "block";
          factText.innerText = data;
        }
      })
      .catch(err => console.log("err"))
  } else if (currentFetch === "year fact") {
    fetch('http://numbersapi.com/' +number + "/year")
      .then(response => response.text())
      .then(data => {
        if (number != "") {
          fact.style.display = "block";
          factText.innerText = data;
        }
      })
      .catch(err => console.log("err"))
  }
}
