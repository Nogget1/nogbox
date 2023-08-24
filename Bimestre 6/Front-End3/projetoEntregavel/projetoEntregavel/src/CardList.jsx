import Card from "./Card";

function CardList({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default CardList;