if (window.innerWidth >= 680 && window.innerWidth <= 1120) {
  const techImg = document.getElementsByClassName('technology__image')[0];
  techImg.src = './technology/image-launch-vehicle-landscape.jpg';
}

if (window.innerWidth <= 680 || window.innerWidth >= 1120) {
  const techImg = document.getElementsByClassName('technology__image')[0];
  techImg.src = './technology/image-launch-vehicle-portrait.jpg';
}

fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    const technology = data.technology;
    const largeButtons = document.getElementsByClassName(
      'large-pagination__btn'
    );
    Array.prototype.forEach.call(largeButtons, (button, index) => {
      button.onclick = () => {
        const heading = document.getElementsByClassName(
          'technology-details__explanation-heading'
        )[0];
        heading.innerText = technology[index].name;

        const description = document.getElementsByClassName(
          'technology-details__explanation-desc'
        )[0];
        description.innerText = technology[index].description;

        const image = document.getElementsByClassName('technology__image')[0];
        if (window.innerWidth >= 680 && window.innerWidth <= 1120) {
          image.src = technology[index].images.landscape;
        } else {
          image.src = technology[index].images.portrait;
        }

        document
          .getElementsByClassName('active-pagination-button')[0]
          .classList.remove('active-pagination-button');
        button.classList.add('active-pagination-button');
      };
    });
  });
