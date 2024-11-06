import { Card, CardBody } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function GameCard({ name, image, category, provider }) {
  return (
    <Card
      className="card rounded mx-auto my-1"
      key={name}
      style={{
        background: `url("./GAME ICOn/${image}")`,
        backgroundSize: `cover`,
        width: "122px",
        height: "122px",
      }}
    >
      <FormControl hidden value={`${name}`} />
      <FormControl hidden value={`${category}`} />
      <FormControl hidden value={`${provider}`} />
    </Card>
  );
}
