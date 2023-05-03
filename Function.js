//Print Country Name
function callname(name) {
  output.innerHTML = name;
}

//Mouse position
function printMousePos(event) {
  XYoutput.innerHTML = "X: " + event.clientX + ", Y: " + event.clientY;
}
document.addEventListener("click", printMousePos);

document.querySelectorAll(".allPaths").forEach((e) => {
  e.addEventListener("mouseover", function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById("name").style.top = y - 50 + "px";
      document.getElementById("name").style.left = x + 50 + "px";
    };

    //e.style.fill = "pink";
    document.getElementById("name").style.opacity = 1;
    document.getElementById("countryName").innerText = e.id;
  });

  e.addEventListener("mouseleave", function () {
    // e.style.fill = "pink";
    document.getElementById("name").style.opacity = 0;   
  });
  e.addEventListener("click", function () {
    e.style.fill = "pink";
    // getUser(e.id);
  });
});

// dialog function

// Color all countries in a region
function changeColor(name) {
  document.querySelectorAll("." + name).forEach((e) => {
    e.style.fill = "orange";
  });
}