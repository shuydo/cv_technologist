burger.addEventListener("click", () => {
  burger.classList.toggle("active"); //toggler class 'active' by click on #burger & #mnu
  mnu.classList.toggle("active"); // console.log("in listener");
  document.body.classList.toggle("lock"); //scroll lock under active burger-mnu
});
