// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

//creating an array with new sort
const createRandomArr = () => {
  const randArr = [];
  const pushToArray = () => {
    for (let i = 0; i < 6; i++) {
      randArr.push(Math.floor(Math.random() * 20));
    }
  };
  pushToArray();
  return randArr;
};

//making the new sort class with the randomly created array and supporting variables
const mySort = new Sort(createRandomArr());
const randomArr = mySort.returnArray();

//assigning variables to each list item in the first list
const firstArrayItemOne = document.querySelector(".itm1a");
const firstArrayItemTwo = document.querySelector(".itm2a");
const firstArrayItemThree = document.querySelector(".itm3a");
const firstArrayItemFour = document.querySelector(".itm4a");
const firstArrayItemFive = document.querySelector(".itm5a");
const firstArrayItemSix = document.querySelector(".itm6a");

//assigning variables to each list item in the second list
const secondArrayItemOne = document.querySelector(".itm1b");
const secondArrayItemTwo = document.querySelector(".itm2b");
const secondArrayItemThree = document.querySelector(".itm3b");
const secondArrayItemFour = document.querySelector(".itm4b");
const secondArrayItemFive = document.querySelector(".itm5b");
const secondArrayItemSix = document.querySelector(".itm6b");

//A function to populate the first list boxes
const handleFirstButton = () => {
  firstArrayItemOne.textContent = randomArr[0];
  firstArrayItemTwo.textContent = randomArr[1];
  firstArrayItemThree.textContent = randomArr[2];
  firstArrayItemFour.textContent = randomArr[3];
  firstArrayItemFive.textContent = randomArr[4];
  firstArrayItemSix.textContent = randomArr[5];
};
//adds values to the first list
const firstButton = document.querySelector("#firstbtn");
firstButton.addEventListener("click", handleFirstButton);

//a function that sorts then populates the second list
const handleSecondButton = () => {
  mySort.sort();
  setInterval(() => {
    secondArrayItemOne.textContent = randomArr[0];
  }, 2000);
  setInterval(() => {
    secondArrayItemTwo.textContent = randomArr[1];
  }, 4000);
  setInterval(() => {
    secondArrayItemThree.textContent = randomArr[2];
  }, 6000);
  setInterval(() => {
    secondArrayItemFour.textContent = randomArr[3];
  }, 8000);
  setInterval(() => {
    secondArrayItemFive.textContent = randomArr[4];
  }, 10000);
  setInterval(() => {
    secondArrayItemSix.textContent = randomArr[5];
  }, 12000);
};

//sorts and populates the list on click
const secondButton = document.querySelector("#secondbtn");
secondButton.addEventListener("click", handleSecondButton);
