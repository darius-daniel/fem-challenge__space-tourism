let currentDestination = "moon";
const destinationNavItems = document.getElementsByClassName(
  "destination-data__nav-list-item",
);
Array.prototype.forEach.call(destinationNavItems, function (item) {
  item.onclick = async function () {
    currentDestination = item.innerText.toLowerCase();
    document
      .getElementsByClassName("current-destination")[0]
      .classList.remove("current-destination");
    item.classList.add("current-destination");

    document.getElementsByClassName(
      "destination-data__article-heading",
    )[0].innerText = currentDestination.toUpperCase();

    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        const destinations = data.destinations;
        const destination = destinations.find(
          (destination) =>
            destination.name.toLowerCase() === currentDestination.toLowerCase(),
        );

        document.getElementsByClassName(
          "destination-data__article-desc",
        )[0].innerHTML = destination.description;

        document.getElementsByClassName(
          "destination-data__article-desc",
        )[0].style.minWidth =
          document.getElementsByClassName(
            "destination-data__article-heading",
          )[0].offsetWidth + "px";

        document.getElementsByClassName(
          "destination-data__stat--distance",
        )[0].innerHTML = destination.distance;

        document.getElementsByClassName(
          "destination-data__stat--travel-time",
        )[0].innerHTML = destination.travel;

        document.getElementsByClassName("destination-data__image")[0].src =
          `./destination/image-${currentDestination}.png`;
      });
  };

  if (item.innerText.toLowerCase() === currentDestination.toLowerCase()) {
    item.classList.add("current-destination");
  }
});
