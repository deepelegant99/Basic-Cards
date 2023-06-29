import Card from "../components/Card";
import cards from '../datas/CardData'
const Home = () => {
  return (
    <>
      {" "}
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </>
  );
};

export default Home;
