//DOM Manipulation
//Storytelling App
/*const storyContainer = document.querySelector(".story-container");
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.", borderColor: "#ee4b2b"},
  funny: {story: "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.", borderColor:  "#f1be32"},
  adventure: {story: "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.", borderColor: "#acd157"} 
};

function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre.toLowerCase())) {
    resultParagraph.textContent = storyObj[genre.toLowerCase()].story;
    storyContainer.style.borderColor = storyObj[genre.toLowerCase()].borderColor;
  }
}

scaryStoryBtn.addEventListener("click", () => {
  displayStory("scary");
});
funnyStoryBtn.addEventListener("click", () => {
  displayStory("funny");
})
adventureStoryBtn.addEventListener("click", () => {
  displayStory("adventure");
})*/

//Emoji Reactor
// function updateCount(buttonElement) {
//   const countEl = buttonElement.querySelector(".count");
//   let currCount = +countEl.textContent.split("/")[0];

//   if (currCount === 10) return;
//   currCount++;
//   countEl.textContent = `${currCount}/10`;
// }

// const btns = document.querySelectorAll(".emoji-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     updateCount(btn);
//   });
// })

// Favorite Icon Toggler
// const faveBtns = document.querySelectorAll('.favorite-icon');

// faveBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         if (btn.classList.contains("filled")) {
//             btn.classList.remove("filled");
//             btn.innerHTML = "&#9825;";
//         } else {
//             btn.classList.add("filled");
//             btn.innerHTML = "&#10084;";
//         }
//     });
// });

//Musical Instrument Filter
const instrumentsArr = [
    {category: "woodwinds", instrument: "Flute", price: 500},
    {category: "woodwinds", instrument: "Clarinet", price: 200},
    {category: "woodwinds", instrument: "Oboe", price: 4000},
    { category: "brass", instrument: "Trumpet", price: 200 },
    { category: "brass", instrument: "Trombone", price: 300 },
    { category: "brass", instrument: "French Horn", price: 4300 },
    { category: "percussion", instrument: "Drum Set", price: 500 },
    { category: "percussion", instrument: "Xylophone", price: 3000 },
    { category: "percussion", instrument: "Cymbals", price: 200 },
    { category: "percussion", instrument: "Marimba", price: 3000 }
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
    return instruments.map(({ instrument, price }) => {
        return `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`;
  }).join("");
}

selectContainer.addEventListener("change", (event) => {
    productsContainer.innerHTML = instrumentCards(event.target.value);
});