
var headerNav = document.createElement("nav");
headerNav.style.border = "solid red";
headerNav.style.position = "relative";
headerNav.className = "navbar-expand-lg";

var containerDiv = document.createElement("div");
containerDiv.className = "container";
containerDiv.style.position = "relative";

var brandAtag = document.createElement("a");
brandAtag.className = "navbar-brand";
brandAtag.style.position = "relative";
brandAtag.innerHTML = "Destructodon Media";

var navDiv = document.createElement("div");
navDiv.className = "navbar-collapse collapse";
navDiv.style.position = "relative";
navDiv.id = "navbarsExample07";

var navUl = document.createElement("ul");
navUl.className = "navbar-nav ml-auto";
navUl.style.position = "relative";

var navLi = document.createElement("li");
navLi.className = "nav-item";
navLi.style.position = "relative";

var homeLink = document.createElement("a");
homeLink.className = "nav-link";
homeLink.style.position = "relative";
homeLink.innerHTML = "Home";

var currentSpan = document.createElement("span");
currentSpan.className = "sr-only";
currentSpan.style.position = "relative";
currentSpan.innerHTML = "(current)";



document.body.appendChild(headerNav);
document.body.insertBefore(headerNav, document.body.childNodes[0]);

headerNav.appendChild(containerDiv);
containerDiv.appendChild(brandAtag);
containerDiv.appendChild(navDiv);
navDiv.appendChild(navUl);
navUl.appendChild(navLi);
navLi.appendChild(homeLink);
homeLink.appendChild(currentSpan);
