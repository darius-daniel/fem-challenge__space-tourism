document
  .getElementsByClassName("explore-btn")[0]
  .addEventListener("click", () => {
    window.location.href = "/destination";
  });

if (window.innerWidth >= 1025) {
  const heroTitleLargeText = document.getElementsByClassName("hero__title")[0].lastElementChild;
  const heroDesc = document.getElementsByClassName("hero__desc")[0];

  heroDesc.style.width = heroTitleLargeText.offsetWidth + 'px';
}
