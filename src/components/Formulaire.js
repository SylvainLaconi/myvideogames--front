import React, { useState } from "react";
import { Form, Container } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import { plateforms } from "./Plateforms";

const options = [
  { key: "PS4", text: "Playstation 4", value: "Playstation 4" },
  { key: "PS3", text: "Playstation 3", value: "Playstation 3" },
  { key: "PS2", text: "Playstation 2", value: "Playstation 2" },
  { key: "PSone", text: "Playstation", value: "Playstation" },
  { key: "PC", text: "PC", value: "PC" },
  { key: "Switch", text: "Switch", value: "Switch" },
];

const Formulaire = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [plateform, setPlateform] = useState("");
  const [year, setYear] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  let history = useHistory();

  //Post a new game
  const postGame = async (e) => {
    e.preventDefault();
    const newGame = axios
      .post("/api/games", {
        title: title,
        cover: cover,
        plateform: plateform,
        year: year,
        rate: rate,
        description: description,
      })
      .then((res) => console.log(res));
    alert(`${title} successfully added`);
    history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={postGame}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Input
            fluid
            label="URL cover"
            placeholder="URL cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
          <Form.Select
            fluid
            label="Plateform"
            options={plateforms}
            placeholder="Plateform"
            value={plateform}
            onChange={(e, { value }) => setPlateform(value)}
          />
          <Form.Input
            fluid
            label="Year"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Rate</label>
          <Form.Radio label="0" value="0" onChange={() => setRate(0)} />
          <Form.Radio label="1" value="1" onChange={() => setRate(1)} />
          <Form.Radio label="2" value="2" onChange={() => setRate(2)} />
          <Form.Radio label="3" value="3" onChange={() => setRate(3)} />
          <Form.Radio label="4" value="4" onChange={() => setRate(4)} />
          <Form.Radio label="5" value="5" onChange={() => setRate(5)} />
          <Form.Radio label="6" value="6" onChange={() => setRate(6)} />
          <Form.Radio label="7" value="7" onChange={() => setRate(7)} />
          <Form.Radio label="8" value="8" onChange={() => setRate(8)} />
          <Form.Radio label="9" value="9" onChange={() => setRate(9)} />
          <Form.Radio label="10" value="10" onChange={() => setRate(10)} />
        </Form.Group>
        <Form.TextArea
          label="Description"
          placeholder="Game's description ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Container>
  );
};

export default Formulaire;
