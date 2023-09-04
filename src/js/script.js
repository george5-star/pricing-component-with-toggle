const toggleEl = document.querySelector(".price-toggle");
const indicator = document.querySelector(".indicator");

toggleEl.addEventListener("click", togglePrice);
window.addEventListener("keydown", togglePrice);

function togglePrice(e) {
  let basicAmount = document.querySelector(".amt-basic");
  let proAmount = document.querySelector(".amt-pro");
  let masterAmount = document.querySelector(".amt-master");

  if (indicator.classList.contains("clicked")) {
    indicator.classList.remove("clicked");
    basicAmount.textContent = 19.99;
    proAmount.textContent = 24.99;
    masterAmount.textContent = 39.99;
  } else {
    indicator.classList.add("clicked");
    basicAmount.textContent = 199.99;
    proAmount.textContent = 249.99;
    masterAmount.textContent = 399.99;
  }

  if (e.key === "ArrowRight") {
    indicator.classList.remove("clicked");
    basicAmount.textContent = 19.99;
    proAmount.textContent = 24.99;
    masterAmount.textContent = 39.99;
  } else if (e.key === "ArrowLeft") {
    indicator.classList.add("clicked");
    basicAmount.textContent = 199.99;
    proAmount.textContent = 249.99;
    masterAmount.textContent = 399.99;
  } else {
    return;
  }
}
