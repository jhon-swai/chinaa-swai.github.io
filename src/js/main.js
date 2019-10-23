function toggleNavigationBar() {
  let smallNav = document.getElementById("smallNav");

  // check if smallNav has class with name "w3-show"
  if (smallNav.classList.contains("w3-show")) {
    // remove "w3-show" if already there
    smallNav.classList.remove("w3-show");
  }
  else {
    // add "w3-show" if not there
    smallNav.classList.add("w3-show");
  }

}

// commented out unnecessary function 
// function loginModal() {
//   document.getElementById()
// }
