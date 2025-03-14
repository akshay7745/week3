// class CustomSlider extends HTMLElement {
//     constructor() {
//       super();
//       this.splideNode = this.querySelector(".splide");
//     }

//     connectedCallback() {
//       this.mountSplider();
//     }

//     mountSplider() {
//       const splide = new Splide(this.splideNode, {
//         type: 'loop',
//         perPage: 4,
//         autoplay: true,
//       });
//       splide.mount();
//     }
//   }

//   customElements.define("slider-custom", CustomSlider);

const searchInput = document.querySelector(".search-bar");

const firstResult = document.querySelector(".first-result");
console.log("first result div", firstResult);
searchInput.addEventListener("keyup", (e) => {
  console.log(e.target.value, e.key);
  if (e.target.value.length > 0) {
    searchImage(e.target.value);
  }
});

async function searchImage(query) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "QvM7I0zgQ0GEHKXxjPnWqKGRm6qzvYalnJZxX2yqmusLF8uPTBz4az7g",
        },
      }
    );

    const data = await response.json();

    firstResult.innerHTML = `
    <div class="result-img-container">
        <img src="${data.photos[0].src.original}" alt="${data.photos[0].alt}">
    </div>
    <div class="result-text-container">
        <h2>${data.photos[0].alt}</h2>
        <p>${data.photos[0].photographer}</p>
        <button class="result-button">Explore More</button>
    </div>`;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

searchImage("laptop");

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    height: "9rem",
    perPage: 4,
    breakpoints: {
      640: {
        height: "6rem",
      },
    },
  });
  splide.mount();
});
