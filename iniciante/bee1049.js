//Não consegui fazer, mas encontrei essa solução aqui. Não entendi porque deu certo, mas vou deixar o repo que quem me ajudou nessa questão!
//https://github.com/debora28/uri-judge-exercicios/blob/master/uri1049.js

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let palavras = [];
palavras.push(lines.shift());
palavras.push(lines.shift());
palavras.push(lines.shift());

if (palavras[0] === "vertebrado") {
  if (palavras[1] === "ave") {
    if (palavras[2] === "carnivoro") {
      console.log("aguia");
    } else if (palavras[2] === "onivoro") {
      console.log("pomba");
    }
  } else if (palavras[1] === "mamifero") {
    if (palavras[2] === "onivoro") {
      console.log("homem");
    } else if (palavras[2] === "herbivoro") {
      console.log("vaca");
    }
  }
} else if (palavras[0] === "invertebrado") {
  if (palavras[1] === "inseto") {
    if (palavras[2] === "hematofago") {
      console.log("pulga");
    } else if (palavras[2] === "herbivoro") {
      console.log("lagarta");
    }
  } else if (palavras[1] === "anelideo") {
    if (palavras[2] === "hematofago") {
      console.log("sanguessuga");
    } else if (palavras[2] === "onivoro") {
      console.log("minhoca");
    }
  }
}
