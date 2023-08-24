import Input from "./Input";
import CardList from "./CardList";
import { useState } from "react";



function App() {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [cards, setCards] = useState([]);

  function handleSubmit() {
    const input1Value = document.querySelector("#input1").value;
    const input2Value = document.querySelector("#input2").value;

    if (input1Value.length < 4 && input2Value.length < 4) {
      alert("Por favor, verifique os dados inseridos no formulário");
    } else {
      setInput1Value(input1Value);
      setInput2Value(input2Value);
      setCards([
        {
          title: input1Value,
          description: input2Value,
        },
      ]);
    }
  }

  return (
    <div className="App">
     <h1>Adicionar Nova Cor</h1>
     <form>
      {/* Comece a desenvolver o seu Código por aqui :) */}
      <Input
        value={input1Value}
        onChange={(e) => {
          setInput1Value(e.target.value);
        }}
      />
      <Input
        value={input2Value}
        onChange={(e) => {
          setInput2Value(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Enviar</button>
      <CardList cards={cards} />
     </form>
    </div>
  )
}


export default App;
