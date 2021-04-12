function myFunction() {
    var x = document.getElementById("topLinks");
    if (x.style.display === "block") {
            x.style.display = "none";
    } 
    else {
    x.style.display = "block";
    }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";

}
