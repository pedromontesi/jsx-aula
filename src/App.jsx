import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
  .map((item) => +item.preco.replace("R$ ", "")) 
  .reduce((a, b) => a + b, 0);

  return (
    <div>
      <h1>Nome: {dados.cliente}</h1>
      <h1>Idade: {dados.idade}</h1>
      <h1>Total: {total} </h1>
    </div>
  );
};

export default App;
