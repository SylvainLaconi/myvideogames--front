import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Dimmer,
  Loader,
  Container,
  Button,
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState("alphabet");

  //GetMyGames
  const getMyGames = async () => {
    try {
      const list = await axios
        .get("/api/games")
        .then((res) => res.data)
        .then((data) => setResult(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyGames();
    return () => {
      setResult([]);
    };
  }, [loading]);

  console.log(display);

  return loading ? (
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>
  ) : (
    <Container>
      <Container textAlign="center" className="sort-ctn">
        <Button
          icon="sort alphabet down"
          size="big"
          onClick={() => setDisplay("alphabet")}
        />
        <Button
          icon="sort descending"
          content="rating"
          size="big"
          onClick={() => setDisplay("rating")}
        />
      </Container>
      {display === "alphabet" ? (
        <Grid container doubling columns={4}>
          {result
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item) => (
              <Grid.Column>
                <Card
                  key={item.id}
                  image={item.cover}
                  header={item.title}
                  meta={item.plateform}
                  extra={item.year}
                  as={Link}
                  to={`/game/${item.id}`}
                />
              </Grid.Column>
            ))}
        </Grid>
      ) : display === "rating" ? (
        <Grid container doubling columns={4}>
          {result
            .sort((a, b) => b.id < a.id)
            .map((item) => (
              <Grid.Column>
                <Card
                  key={item.id}
                  image={item.cover}
                  header={item.title}
                  meta={item.plateform}
                  extra={item.year}
                  as={Link}
                  to={`/game/${item.id}`}
                />
              </Grid.Column>
            ))}
        </Grid>
      ) : (
        "null"
      )}
    </Container>
  );
};

export default Home;
