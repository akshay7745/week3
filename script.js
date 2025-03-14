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

searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value,e.key)
    if (e.target.value.length>0) {
      
        searchImage(e.target.value);
    }
})

async function searchImage(query){
    try {
        
        const response =await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
            method: 'GET',
            headers: {
              'Authorization': 'QvM7I0zgQ0GEHKXxjPnWqKGRm6qzvYalnJZxX2yqmusLF8uPTBz4az7g'
            }
          });
        
          const data = await response.json();
          console.log(data);
    } catch (error) {
        console.log(error)
    }
}




searchImage("laptop")
