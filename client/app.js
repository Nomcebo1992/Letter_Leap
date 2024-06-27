const alphabetData = [
  {
    letter: "A",
    sound: "audio/a_sound.mp3",
    examples: ["Apple", "Ant"],
    imageUrls: ["images/apple.jpg", "images/ant.jpg"],
  },
  {
    letter: "B",
    sound: "audio/b_sound.mp3",
    examples: ["Ball", "Bear"],
    imageUrls: ["images/ball.jpg", "images/bear.jpg"],
  },
  {
    letter: "C",
    sound: "audio/c_sound.mp3",
    examples: ["Cat", "Car"],
    imageUrls: ["images/cat.jpg", "images/car.jpg"],
  },
  {
    letter: "D",
    sound: "audio/d_sound.mp3",
    examples: ["Dog", "Duck"],
    imageUrls: ["images/dog.jpg", "images/duck.jpg"],
  },
  {
    letter: "E",
    sound: "audio/e_sound.mp3",
    examples: ["Elephant", "Egg"],
    imageUrls: ["images/elephant.jpg", "images/egg.jpg"],
  },
  {
    letter: "F",
    sound: "audio/f_sound.mp3",
    examples: ["Fish", "Frog"],
    imageUrls: ["images/fish.jpg", "images/frog.jpg"],
  },
  {
    letter: "G",
    sound: "audio/g_sound.mp3",
    examples: ["Giraffe", "Goat"],
    imageUrls: ["images/giraffe.jpg", "images/goat.jpg"],
  },
  {
    letter: "H",
    sound: "audio/h_sound.mp3",
    examples: ["Hat", "Horse"],
    imageUrls: ["images/hat.jpg", "images/horse.jpg"],
  },
  {
    letter: "I",
    sound: "audio/i_sound.mp3",
    examples: ["Ice", "Igloo"],
    imageUrls: ["images/ice.jpg", "images/igloo.jpg"],
  },
  {
    letter: "J",
    sound: "audio/j_sound.mp3",
    examples: ["Juice", "Jelly"],
    imageUrls: ["images/juice.jpg", "images/jelly.jpg"],
  },
  {
    letter: "K",
    sound: "audio/k_sound.mp3",
    examples: ["Kite", "Kangaroo"],
    imageUrls: ["images/kite.jpg", "images/kangaroo.jpg"],
  },
  {
    letter: "L",
    sound: "audio/l_sound.mp3",
    examples: ["Lion", "Lemon"],
    imageUrls: ["images/lion.jpg", "images/lemon.jpg"],
  },
  {
    letter: "M",
    sound: "audio/m_sound.mp3",
    examples: ["Monkey", "Moon"],
    imageUrls: ["images/monkey.jpg", "images/moon.jpg"],
  },
  {
    letter: "N",
    sound: "audio/n_sound.mp3",
    examples: ["Nest", "Nut"],
    imageUrls: ["images/nest.jpg", "images/nut.jpg"],
  },
  {
    letter: "O",
    sound: "audio/o_sound.mp3",
    examples: ["Owl", "Orange"],
    imageUrls: ["images/owl.jpg", "images/orange.jpg"],
  },
  {
    letter: "P",
    sound: "audio/p_sound.mp3",
    examples: ["Pig", "Panda"],
    imageUrls: ["images/pig.jpg", "images/panda.jpg"],
  },
  {
    letter: "Q",
    sound: "audio/q_sound.mp3",
    examples: ["Queen", "Quilt"],
    imageUrls: ["images/queen.jpg", "images/quilt.jpg"],
  },
  {
    letter: "R",
    sound: "audio/r_sound.mp3",
    examples: ["Rabbit", "Rocket"],
    imageUrls: ["images/rabbit.jpg", "images/rocket.jpg"],
  },
  {
    letter: "S",
    sound: "audio/s_sound.mp3",
    examples: ["Snake", "Sun"],
    imageUrls: ["images/snake.jpg", "images/sun.jpg"],
  },
  {
    letter: "T",
    sound: "audio/t_sound.mp3",
    examples: ["Tiger", "Tree"],
    imageUrls: ["images/tiger.jpg", "images/tree.jpg"],
  },
  {
    letter: "U",
    sound: "audio/u_sound.mp3",
    examples: ["Umbrella", "Unicorn"],
    imageUrls: ["images/umbrella.jpg", "images/unicorn.jpg"],
  },
  {
    letter: "V",
    sound: "audio/v_sound.mp3",
    examples: ["Violin", "Vase"],
    imageUrls: ["images/violin.jpg", "images/vase.jpg"],
  },
  {
    letter: "W",
    sound: "audio/w_sound.mp3",
    examples: ["Whale", "Watch"],
    imageUrls: ["images/whale.jpg", "images/watch.jpg"],
  },
  {
    letter: "X",
    sound: "audio/x_sound.mp3",
    examples: ["Xylophone", "X-ray"],
    imageUrls: ["images/xylophone.jpg", "images/xray.jpg"],
  },
  {
    letter: "Y",
    sound: "audio/y_sound.mp3",
    examples: ["Yogurt", "Yak"],
    imageUrls: ["images/yogurt.jpg", "images/yak.jpg"],
  },
  {
    letter: "Z",
    sound: "audio/z_sound.mp3",
    examples: ["Zebra", "Zoo"],
    imageUrls: ["images/zebra.jpg", "images/zoo.jpg"],
  },
];

const matchingGameData = [
  { word: "Apple", imageUrl: "images/apple-game.jpg", letter: "A" },
  { word: "Ant", imageUrl: "images/ant-game.jpg", letter: "A" },
  { word: "Ball", imageUrl: "images/ball-game.jpg", letter: "B" },
  { word: "Bear", imageUrl: "images/bear-game.jpg", letter: "B" },
  { word: "Cat", imageUrl: "images/cat-game.jpg", letter: "C" },
  { word: "Car", imageUrl: "images/car-game.jpg", letter: "C" },
  { word: "Dog", imageUrl: "images/dog-game.jpg", letter: "D" },
  { word: "Duck", imageUrl: "images/duck-game.jpg", letter: "D" },
  { word: "Elephant", imageUrl: "images/elephant-game.jpg", letter: "E" },
  { word: "Egg", imageUrl: "images/egg-game.jpg", letter: "E" },
  { word: "Fish", imageUrl: "images/fish-game.jpg", letter: "F" },
  { word: "Frog", imageUrl: "images/frog-game.jpg", letter: "F" },
  { word: "Giraffe", imageUrl: "images/giraffe-game.jpg", letter: "G" },
  { word: "Goat", imageUrl: "images/goat-game.jpg", letter: "G" },
  { word: "Hat", imageUrl: "images/hat-game.jpg", letter: "H" },
  { word: "Horse", imageUrl: "images/horse-game.jpg", letter: "H" },
  { word: "Ice", imageUrl: "images/ice-game.jpg", letter: "I" },
  { word: "Igloo", imageUrl: "images/igloo-game.jpg", letter: "I" },
  { word: "Juice", imageUrl: "images/juice-game.jpg", letter: "J" },
  { word: "Jelly", imageUrl: "images/jelly-game.jpg", letter: "J" },
  { word: "Kite", imageUrl: "images/kite-game.jpg", letter: "K" },
  { word: "Kangaroo", imageUrl: "images/kangaroo-game.jpg", letter: "K" },
  { word: "Lion", imageUrl: "images/lion-game.jpg", letter: "L" },
  { word: "Lemon", imageUrl: "images/lemon-game.jpg", letter: "L" },
  { word: "Monkey", imageUrl: "images/monkey-game.jpg", letter: "M" },
  { word: "Moon", imageUrl: "images/moon-game.jpg", letter: "M" },
  { word: "Nest", imageUrl: "images/nest-game.jpg", letter: "N" },
  { word: "Nut", imageUrl: "images/nut-game.jpg", letter: "N" },
  { word: "Owl", imageUrl: "images/owl-game.jpg", letter: "O" },
  { word: "Orange", imageUrl: "images/orange-game.jpg", letter: "O" },
  { word: "Pig", imageUrl: "images/pig-game.jpg", letter: "P" },
  { word: "Panda", imageUrl: "images/panda-game.jpg", letter: "P" },
  { word: "Queen", imageUrl: "images/queen-game.jpg", letter: "Q" },
  { word: "Quilt", imageUrl: "images/quilt-game.jpg", letter: "Q" },
  { word: "Rabbit", imageUrl: "images/rabbit-game.jpg", letter: "R" },
  { word: "Rocket", imageUrl: "images/rocket-game.jpg", letter: "R" },
  { word: "Snake", imageUrl: "images/snake-game.jpg", letter: "S" },
  { word: "Sun", imageUrl: "images/sun-game.jpg", letter: "S" },
  { word: "Tiger", imageUrl: "images/tiger-game.jpg", letter: "T" },
  { word: "Tree", imageUrl: "images/tree-game.jpg", letter: "T" },
  { word: "Umbrella", imageUrl: "images/umbrella-game.jpg", letter: "U" },
  { word: "Unicorn", imageUrl: "images/unicorn-game.jpg", letter: "U" },
  { word: "Violin", imageUrl: "images/violin-game.jpg", letter: "V" },
  { word: "Vase", imageUrl: "images/vase-game.jpg", letter: "V" },
  { word: "Whale", imageUrl: "images/whale-game.jpg", letter: "W" },
  { word: "Watch", imageUrl: "images/watch-game.jpg", letter: "W" },
  { word: "Xylophone", imageUrl: "images/xylophone-game.jpg", letter: "X" },
  { word: "X-ray", imageUrl: "images/xray-game.jpg", letter: "X" },
  { word: "Yogurt", imageUrl: "images/yogurt-game.jpg", letter: "Y" },
  { word: "Yak", imageUrl: "images/yak-game.jpg", letter: "Y" },
  { word: "Zebra", imageUrl: "images/zebra-game.jpg", letter: "Z" },
  { word: "Zoo", imageUrl: "images/zoo-game.jpg", letter: "Z" },
];

function displayAlphabetButtons() {
  const alphabetButtonsDiv = document.getElementById("alphabet-buttons");
  alphabetData.forEach((letterObj) => {
    const button = document.createElement("button");
    button.textContent = letterObj.letter;
    button.addEventListener("click", () => showLetterDetails(letterObj));
    alphabetButtonsDiv.appendChild(button);
  });
}

function showLetterDetails(letterObj) {
  const letterContentDiv = document.getElementById("letter-content");
  letterContentDiv.innerHTML = `
        <h3>${letterObj.letter}</h3>
        <audio controls>
            <source src="${letterObj.sound}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <h4>Examples:</h4>
        <ul>
            ${letterObj.examples
              .map((example) => `<li>${example}</li>`)
              .join("")}
        </ul>
        <h4>Images:</h4>
        <div class="image-gallery">
            ${letterObj.imageUrls
              .map((imgUrl) => `<img src="${imgUrl}" alt="Image">`)
              .join("")}
        </div>
    `;
  displayMatchingGame(letterObj.letter);
  updateProgress(letterObj.letter);
}

function displayMatchingGame(letter) {
  const gamesListDiv = document.getElementById("games-list");
  gamesListDiv.innerHTML = "";

  const matchingGameDiv = document.createElement("div");
  matchingGameDiv.classList.add("matching-game");

  matchingGameData.forEach((item) => {
    if (item.letter === letter) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.word}">
                <p>${item.word}</p>
            `;
      card.addEventListener("click", () => handleCardClick(card));
      matchingGameDiv.appendChild(card);
    }
  });

  gamesListDiv.appendChild(matchingGameDiv);
}

function handleCardClick(card) {
  card.classList.toggle("selected");
  checkMatchingGame();
}

function checkMatchingGame() {
  const selectedCards = document.querySelectorAll(".card.selected");
  if (selectedCards.length === 2) {
    const firstCardWord = selectedCards[0].querySelector("p").textContent;
    const secondCardWord = selectedCards[1].querySelector("p").textContent;
    if (firstCardWord === secondCardWord) {
      selectedCards.forEach((card) => {
        card.classList.add("matched");
      });
    } else {
      setTimeout(() => {
        selectedCards.forEach((card) => {
          card.classList.remove("selected");
        });
      }, 1000);
    }
  }
}

function updateProgress(letter) {
  const totalLetters = localStorage.getItem("totalLetters") || 0;
  const lastLetter = localStorage.getItem("lastLetter") || "-";

  localStorage.setItem("totalLetters", parseInt(totalLetters) + 1);
  localStorage.setItem("lastLetter", letter);

  document.getElementById("total-letters").textContent =
    localStorage.getItem("totalLetters");
  document.getElementById("last-letter").textContent =
    localStorage.getItem("lastLetter");
}

function initApp() {
  displayAlphabetButtons();
}

initApp();
