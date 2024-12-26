fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    const paginationBtns = document.getElementsByClassName(
      'crew-data__small-pagination'
    )[0];

    let newBtn;
    let currentCrewMember = data.crew[0];
    for (const crewMember of data.crew) {
      newBtn = document.createElement('button');
      newBtn.type = 'button';
      newBtn.classList.add('crew-data__small-pagination-button');

      newBtn.addEventListener('click', (event) => {
        document
          .getElementsByClassName('active-pagination-button')[0]
          .classList.remove('active-pagination-button');
        event.target.classList.add('active-pagination-button');
        document.getElementsByClassName('crew-data__role')[0].innerHTML =
          crewMember.role;
        document.getElementsByClassName('crew-data__name')[0].innerHTML =
          crewMember.name;
        document.getElementsByClassName('crew-data__bio')[0].innerHTML =
          crewMember.bio;
        document.getElementsByClassName('crew-data__image')[0].src =
          crewMember.images.png;
        document.getElementsByClassName(
          'crew-data__image'
        )[0].alt = `An Image of ${crewMember.name}`;
      });

      paginationBtns.appendChild(newBtn);
    }

    document.getElementsByClassName('crew-data__role')[0].innerHTML =
      currentCrewMember.role;
    document.getElementsByClassName('crew-data__name')[0].innerHTML =
      currentCrewMember.name;
    document.getElementsByClassName('crew-data__bio')[0].innerHTML =
      currentCrewMember.bio;
    document.getElementsByClassName('crew-data__image')[0].src =
      currentCrewMember.images.png;

    document
      .getElementsByClassName('crew-data__small-pagination-button')[0]
      .classList.add('active-pagination-button');

    document.getElementsByClassName(
      'crew-data__image'
    )[0].alt = `An Image of ${crewMember.name}`;
  })
  .catch((error) => console.error(error.message));
