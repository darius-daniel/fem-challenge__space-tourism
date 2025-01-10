function displayCurrentCrewMemberData(currentCrewMember) {
  const imageContainer = document.getElementsByClassName(
    "crew-data__image-container",
  )[0];
  const { role, name, bio, images } = currentCrewMember;
  const { png } = images;

  document.getElementsByClassName("crew-data__role")[0].innerText = role;
  document.getElementsByClassName("crew-data__name")[0].innerText = name;
  document.getElementsByClassName("crew-data__bio")[0].innerText = bio;
  // imageContainer.style.background = `url(${png}) center / cover no-repeat`;
  document.getElementsByClassName('crew-data__image')[0].src = png;
}

function setActiveBtn(target) {
  if (target) {
    document
      .getElementsByClassName("active-pagination-button")[0]
      .classList.remove("active-pagination-button");
    target.classList.add("active-pagination-button");
  } else {
    document
      .getElementsByClassName("crew-data__small-pagination-button")[0]
      .classList.add("active-pagination-button");
  }
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const paginationBtns = document.getElementsByClassName(
      "crew-data__small-pagination",
    )[0];

    let newBtn;
    let currentCrewMember = data.crew[0];
    for (const crewMember of data.crew) {
      newBtn = document.createElement("button");
      newBtn.type = "button";
      newBtn.classList.add("crew-data__small-pagination-button");

      newBtn.addEventListener("click", (event) => {
        setActiveBtn(event.target);
        displayCurrentCrewMemberData(crewMember);
      });

      paginationBtns.appendChild(newBtn);
    }

    displayCurrentCrewMemberData(currentCrewMember);
    setActiveBtn(null);
  })
  .catch((error) => console.error(error.message));
