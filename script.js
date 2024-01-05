function toggle() {
  document.querySelector(".drop-down").classList.toggle("open");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  document.getElementById("toTop").style.display = "none";
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
