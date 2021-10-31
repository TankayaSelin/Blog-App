import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../actions";
import CardList from "../components/CardList";
import Layout from "../Layout";

const Home = () => {
  const [cards, setCards] = useState([]);
  const cardList = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
    setCards(cardList);
  }, []);
  return <Layout>{cardList && <CardList cardList={cardList} />}</Layout>;
};

export default Home;
