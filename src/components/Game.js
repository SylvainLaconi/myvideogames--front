import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import {
  Dimmer,
  Loader,
  Image,
  Header,
  Rating,
  Container,
  Button,
} from "semantic-ui-react";
import "./Game.css";

const Game = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  const getGame = async () => {
    try {
      const game = await axios
        .get(`/api/games/${id}`)
        .then((res) => res.data)
        .then((data) => setResult(data[0]));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGame();
    return () => {
      setResult([]);
    };
  }, []);

  const deleteGame = (e) => {
    e.preventDefault();
    const deleteConfirm = window.confirm(
      `Do you really want to delete ${result.title} ?`
    );
    try {
      deleteConfirm &&
        axios.delete(`/api/games/${id}`).then((resp) => resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      history.push("/");
    }
  };

  return loading ? (
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>
  ) : (
    <Container>
      <Image src={result.cover} size="medium" floated="left" />
      <Button icon="delete" floated="right" onClick={deleteGame} />
      <Container>
        <Header as="h2" className="gametitle">
          {result.title}
        </Header>
        <Header as="h4" className="plateform">
          {result.plateform} / {result.year}
        </Header>
      </Container>

      <Container className="rate-ctn">
        <Rating icon="star" defaultRating={result.rate} maxRating={10} />
        <p>{result.rate} / 10</p>
      </Container>
      <Container>
        <Header as="h4">Description</Header>
        <p>{result.description}</p>
      </Container>
    </Container>
  );
};

export default Game;
