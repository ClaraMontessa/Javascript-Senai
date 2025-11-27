let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); // Cria um elemento no meu HTML
let formularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");
novoParagrafo.textContent = "Paragráfo criado via JS"; // Põe um conteúdo no paragráfo

secao[0].appendChild(novoParagrafo);

formularioElemento.removeChild(labelElemento);