
let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("formulario");
let elementoPorTag = document.getElementsByTagName("p");



console.log(elementosPorClass);
console.log(elementosPorClass[0]); //Array
console.log(elementoPorID);
console.log(elementoPorTag);

elementoPorTag[0].textContent = "Verdades secretas"; // Modifica o conteúdo  do elemento.
elementoPorTag[0].style.color = "red"; 
elementoPorTag[0].style.fontSize = "30px"; 
console.log(elementoPorTag[0].textContent);