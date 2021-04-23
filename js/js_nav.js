var openNav = document.getElementById("openbtn");
openNav.addEventListener('click', function() { 
			var mySidebar = document.getElementById("mySidebar");
			mySidebar.style.width = "250px";
		});

var closeNav = document.getElementById("closebtn");
closeNav.addEventListener('click', function() { 
			var mySidebar = document.getElementById("mySidebar");
			mySidebar.style.width = "0";
		});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("breadcrumb").style.top = "0";
  } else {
    document.getElementById("breadcrumb").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// Не относится к навигации, но хранится здесь. Запрет на перетаскивание телефона и почты.

var noaction = document.getElementsByClassName("noaction");

for (var i = 0; i < noaction.length; i++) {
    noaction[i].addEventListener('mousedown', function() {
event.preventDefault ? event.preventDefault() : event.returnValue = false});
};