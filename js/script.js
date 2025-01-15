var slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

window.onload = function() {
  showDivs(slideIndex);
  setInterval(() => {
    plusDivs(1);
  }, 3000);

  /// Prompt nama user ketika pertama kali load halaman HTML
  function changeName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
      document.getElementById("name").innerText = name;
    }
  }
  changeName();
};


function formValidation() {
  let nameInput = document.getElementById('name-input').value;
  let lahirInput = document.getElementById('lahir-input').value;
  let jenisKelamin = document.getElementById('jenis-kelamin').value;
  let pesanInput = document.getElementById('pesan-input').value;

  console.log(nameInput);
  console.log(lahirInput);
  console.log(jenisKelamin);
  console.log(pesanInput);

  if (nameInput === "") {
    alert('Name must be filled out');
  }
  else {
    document.getElementById('outpur-nama').innerHTML = nameInput;
  }

  if (lahirInput === "") {
    alert('Date of Birth must be filled out');
  }
  else {
    document.getElementById('output-lahir').innerHTML = lahirInput;
  }

  if (jenisKelamin === "") {
    alert('Jenis Kelamin must be filled out');
  }
  else {
    document.getElementById('output-kelamin').innerHTML = jenisKelamin;
  }

  if (pesanInput === "") {
    alert('Pesan must be filled out');
  }
  else {
    document.getElementById('output-pesan').innerHTML = pesanInput;
  }
}

document.getElementById('submit-btn').addEventListener('click', formValidation);