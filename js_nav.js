function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
 	document.getElementById("mySidebar").style.width = "0";

}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("breadcrumb").style.top = "0";
  } else {
    document.getElementById("breadcrumb").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
