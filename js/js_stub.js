var prevScrollPos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	document.getElementById("stub").style.display = prevScrollPos > currentScrollPos ? "block" : "none";
	prevScrollPos = currentScrollPos;
}