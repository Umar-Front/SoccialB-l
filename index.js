var settingsmenu = document.querySelector(".settings_menu");
var darkBtn = document.querySelector("#dark-btn")

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings_menu-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on")
  document.body.classList.toggle("dark-theme")

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark")
  }
  else {
    localStorage.setItem("theme", "light")
  }
}


if (localStorage.getItem("them") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}



else if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme")
}

else {
  localStorage.setItem("theme", "light")
}

// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme")