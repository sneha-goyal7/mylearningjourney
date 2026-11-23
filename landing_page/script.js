// ---------- 1. Hamburger menu ----------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// ---------- 2. Newsletter email validation ----------
const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribe");
const formMessage = document.getElementById("formMessage");

subscribeBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();

  if (email === "") {
    formMessage.textContent = "Please enter your email";
    formMessage.className = "error";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email";
    formMessage.className = "error";
  } else {
    formMessage.textContent = "Thanks for subscribing!";
    formMessage.className = "success";
    emailInput.value = "";
  }
});

// ---------- 3. Pricing toggle (Monthly / Yearly) ----------
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const prices = document.querySelectorAll(".price");

yearlyBtn.addEventListener("click", function () {
  prices.forEach(function (price) {
    price.textContent = price.dataset.yearly;
  });
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});

monthlyBtn.addEventListener("click", function () {
  prices.forEach(function (price) {
    price.textContent = price.dataset.monthly;
  });
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");
});