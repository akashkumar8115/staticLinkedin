function search() {
  document.getElementById("search").style.display = "block";
  document.getElementById("midnav").style.display = "none";
  document.getElementById("rightnav").style.display = "none";
  document.getElementById("search-button").style.display = "none";
  document.getElementById("logoimg").style.display = "none";
  document.getElementById("gg-arrow-left-button").style.display = "block";
}

function back() {
    document.getElementById("search").style.display = "none";
    document.getElementById("midnav").style.display = "block";
    document.getElementById("rightnav").style.display = "block";
    document.getElementById("search-button").style.display = "block";
    document.getElementById("logoimg").style.display = "block";
    document.getElementById("gg-arrow-left-button").style.display = "none";
  }
