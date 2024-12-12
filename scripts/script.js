<<<<<<< HEAD
const userInfo = document.getElementById('user-info');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const generateButton = document.getElementById('generate-button');
const result = document.getElementById('result');

const Slots = ['pear', 'strawberry', 'lime', 'cherry', 'grape'];
setTimeout(beginGame, 300);
generateButton.disabled = true;


let attempts = 0;
let maxAttempts = 3;
let userName;

function beginGame(){
    userName = prompt("Введіть своє ім\'я:");
    slot1.src = "Resources/bg.png";
    slot2.src = "Resources/bg.png";  
    slot3.src = "Resources/bg.png";
    userInfo.textContent = "Гравець: " + userName;
    generateButton.disabled = false;
}

function getRandomSymbol() {
    return Slots[Math.floor(Math.random() * Slots.length)];
}

function restartGame(){
    attempts = 0;
    result.textContent = "";
    generateButton.disabled = false;
    slot1.src = "Resources/bg.png";
    slot2.src = "Resources/bg.png";  
    slot3.src = "Resources/bg.png";
}

function spinSlots() {
    ++attempts;

    const randomSymbols = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

    slot1.src = "Resources/" + randomSymbols[0]+".png";
    slot2.src = "Resources/" + randomSymbols[1]+".png";  
    slot3.src = "Resources/" + randomSymbols[2]+".png";

    if ((randomSymbols[0] == randomSymbols[1]) && (randomSymbols[1] == randomSymbols[2])) {    
        generateButton.disabled = true;
        result.textContent = "Перемагає " + userName + "!";
        setTimeout(restartGame, 2000);
    } else if (attempts >= maxAttempts) {
        generateButton.disabled = true;
        result.textContent = "Перемагає комп'ютер!";
        setTimeout(restartGame, 2000);
    } else {
        result.textContent = "Спроба " + attempts + " з " + maxAttempts;
=======
$(document).ready(function () {
    const words = [
      { word: "always", translation: "завжди" },
      { word: "never", translation: "ніколи" },
      { word: "see", translation: "бачити" },
      { word: "goodbye", translation: "прощавай" },
      { word: "thanks", translation: "дякую" },
      { word: "please", translation: "будь ласка" },
      { word: "sorry", translation: "вибач" },
      { word: "if", translation: "якщо" },
      { word: "how", translation: "як" },
      { word: "maybe", translation: "можливо" },
    ];
    
    let currentIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
  
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
>>>>>>> 25268e5dfe076cbb070d2252bcf571bde64e55f9
    }
  
    const shuffledWords = shuffle([...words]);
  
    function updateUI() {
      $("#word").text(shuffledWords[currentIndex].word);
      $("#translation").val("");
      $("#progress").text("Крок: " + (currentIndex + 1)  + "/" + words.length);
      $("#stats").text("Правильно: " + correctCount + " ,  Помилок: " + incorrectCount);
    }
  
    function showModal() {
      let level;
      const checkLevel = (correctCount / words.length) * 100;
  
      if (checkLevel >= 80) level = "Високий";
      else if (checkLevel >= 50) level = "Середній";
      else level = "Початківець";
  
      $("#result").text("Ваш рівень: " + level);
      $("#modal").show();
    }
  
    $("#check").click(function () {
      const userInput = $("#translation").val().trim().toLowerCase();
      const correctTranslation = shuffledWords[currentIndex].translation;
  
      if (userInput === correctTranslation) {
        correctCount++;
      } else {
        incorrectCount++;
      }
  
      currentIndex++;
  
      if (currentIndex < words.length) {
        updateUI();
      } else {
        showModal();
      }
    });
  
    $("#restart").click(function () {
      currentIndex = 0;
      correctCount = 0;
      incorrectCount = 0;
  
      shuffle(shuffledWords);
      updateUI();
      $("#modal").hide();
    });
    updateUI();
  });
  