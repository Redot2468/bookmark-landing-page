const defaultLogo = document.querySelector(".main__logo-default");
const editedLogo = document.querySelector(".main__logo-edit");
const openNav = document.querySelector(".logo__menu-open");
const closeNav = document.querySelector(".logo__menu-close");
const navMenu = document.querySelector(".main__nav");
const nav = document.querySelector(".nav");

// menu
openNav.addEventListener("click", (e) => {
  openNav.classList.add("hidden");
  navMenu.classList.remove("hidden");
  defaultLogo.classList.add("hidden");
});

closeNav.addEventListener("click", () => {
  openNav.classList.remove("hidden");
  navMenu.classList.add("hidden");
  defaultLogo.classList.remove("hidden");
});

// features block..
const tab1 = document.querySelector(".simple__bookmarking");
const tab2 = document.querySelector(".speedy__searching");
const tab3 = document.querySelector(".easy__sharing");
const featuresHero = document.querySelector(".features__hero");
const featuresHeading = document.querySelector(".features__heading");
const featuresInfo = document.querySelector(".features__info");

tab2.addEventListener("click", () => {
  const img = `
            <img
                src="./images/illustration-features-tab-2.svg"
                alt=""
                class="w-full"
              />
            `;

  featuresHero.innerHTML = img;
  featuresHeading.textContent = "Intelligent search";
  featuresInfo.textContent =
    "  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
});

tab3.addEventListener("click", () => {
  const img = `
              <img
                  src="./images/illustration-features-tab-3.svg"
                  alt=""
                  class="w-full"
                />
              `;

  featuresHero.innerHTML = img;
  featuresHeading.textContent = "Share your bookmarks";
  featuresInfo.textContent =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
});

tab1.addEventListener("click", () => {
  const img = `
                <img
                    src="./images/illustration-features-tab-1.svg"
                    alt=""
                    class="w-full"
                  />
                `;

  featuresHero.innerHTML = img;
  featuresHeading.textContent = " Bookmark in one click";
  featuresInfo.textContent =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
});

// faq block
const questionBlock = document.querySelectorAll(".question__block");
const answer = document.querySelectorAll(".answer");
for (let i = 0; i < questionBlock.length; i++) {
  questionBlock[i].addEventListener("click", (e) => {
    if (e.target.className.includes("arrowIcon")) {
      e.target.classList.toggle("arrow");
      answer[i].classList.toggle("hidden");
    }
  });
}

// form

const inputField = document.querySelector(".email__input");
const submitBtn = document.querySelector(".btn__submit");
const errorMessage = document.querySelector(".error__message");
const errorIcon = document.querySelector(".error__logo");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputField.value.includes("@") || !inputField.value.includes(".")) {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Whoops, make sure it's an email";
  } else if (inputField.value === "") {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please enter a valid email";
  } else {
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");
  }
});
