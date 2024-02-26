// Get the button
const mybutton = document.getElementById("btn-back-to-top");
const maskbutton = document.getElementById("btn-back-to-top-mask");
// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.classList.remove("hidden");
    maskbutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
    maskbutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
maskbutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);