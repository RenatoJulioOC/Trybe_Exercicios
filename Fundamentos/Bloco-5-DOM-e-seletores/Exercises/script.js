//Exercise 1
function changeText(){
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Salvador-BA, praia, água de côco, notebook na bag, e 1k pra brincar"
}
changeText(); 


//Exercise 2
function squareChangingGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
squareChangingGreen(); 


//Exercise 3
function squareChangingWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
 squareChangingWhite(); 


//Exercise 4
function correctTitle() {
  let title = document.getElementsByClassName('title')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript"
}
correctTitle();


//Exercise 5
 function fixaText() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
  fixaText();


//Exercise 6
function showParagraph() {
  let paragraph = document.getElementsByTagName('p')[0];
  for(let i = 0; i < paragraph.length; i += 1){
    console.log(paragraph[i].innerHTML);
  }
}
showParagraph();