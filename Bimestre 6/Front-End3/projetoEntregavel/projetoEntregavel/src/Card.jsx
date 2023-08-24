
//Este componente deverá receber dados por Props e mostrar as Informações em Tela



function Card({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;