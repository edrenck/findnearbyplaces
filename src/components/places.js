import { Container, Form } from "react-bootstrap";
import { useState } from "react";

const Places = ({ edit }) => {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      {edit ? <h1>Edit Place</h1> : <h1>Add Place</h1>}
      <Form>
        <Form.Group controlId="PlaceName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(namebox) => setName(namebox.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="PlaceLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Latitude"
            onChange={(lat) => setLatitude(lat.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="PlaceLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Longitude"
            onChange={(lon) => setLongitude(lon.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="PlaceDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={(dec) => setDescription(dec.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="submit" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Places;
