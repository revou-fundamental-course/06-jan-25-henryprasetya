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