function displayCurrentCrewMemberData(currentCrewMember) {
    document.getElementsByClassName("crew-data__role")[0].innerText =
        currentCrewMember.role;
    document.getElementsByClassName("crew-data__name")[0].innerText =
        currentCrewMember.name;
    document.getElementsByClassName("crew-data__bio")[0].innerText =
        currentCrewMember.bio;
    document.getElementsByClassName("crew-data__image")[0].src =
        currentCrewMember.images.png;
    document.getElementsByClassName("crew-data__image")[0].alt =
        `An Image of ${currentCrewMember.name}`;
}

function setActiveBtn(activeBtn) {
    if (activeBtn) {
        document
            .getElementsByClassName("active-pagination-button")[0]
            .classList.remove("active-pagination-button");
        event.target.classList.add("active-pagination-button");
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
                setActiveBtn(event);
                displayCurrentCrewMemberData(crewMember);
            });

            paginationBtns.appendChild(newBtn);
        }

        displayCurrentCrewMemberData(currentCrewMember);
        setActiveBtn(null);
    })
    .catch((error) => console.error(error.message));
