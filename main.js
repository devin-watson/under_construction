document.addEventListener(
  "DOMContentLoaded",
  function () {
    const randomNumber = Math.floor(Math.random() * Math.floor(4));
    const chef = document.querySelector(".chefWrapper");
    const construction = document.querySelector(".constructionWrapper");
    const rider = document.querySelector(".riderWrapper");
    const pirate = document.querySelector(".pirateWrapper");

    const possibleImages = [chef, construction, rider, pirate];

    possibleImages.forEach((image) => {
      const imageRandomId = image.getAttribute("data-random-id");
      console.log({ imageRandomId, randomNumber });
      if (parseInt(imageRandomId) === randomNumber) {
        image.toggleAttribute("data-visible", true);
      } else {
        image.toggleAttribute("data-visible", false);
      }
    });
  },
  false
);
