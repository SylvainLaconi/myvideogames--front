import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Dimmer,
  Loader,
  Container,
  Button,
  Input,
  Select,
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { plateforms } from "./Plateforms";

const Home = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState("alphabet");
  const [name, setName] = useState("");
  const [device, setDevice] = useState("");

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
          size="medium"
          onClick={() => setDisplay("alphabet")}
        />
        <Button
          icon="sort descending"
          content="rating"
          size="medium"
          onClick={() => setDisplay("rating")}
        />
        <Input
          icon="search"
          placeholder="Search..."
          size="medium"
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          placeholder="Select plateform"
          options={plateforms}
          size="big"
          onChange={(e, { value }) => setDevice(value)}
        />
      </Container>
      {display === "alphabet" ? (
        <Grid container doubling columns={4}>
          {result
            .filter((item) => item.plateform.includes(device))
            .filter((item) => item.title.toLowerCase().includes(name))
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
      ) : (
        <Grid container doubling columns={4}>
          {result
            .filter((item) => item.plateform.includes(device))
            .filter((item) => item.title.toLowerCase().includes(name))
            .sort((a, b) => b.rate - a.rate)
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
      )}
    </Container>
  );
};

export default Home;
