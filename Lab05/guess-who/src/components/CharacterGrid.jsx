import { Container, Row, Col, Card } from 'react-bootstrap';

function CharacterGrid(props) {
  const { characters } = props; // Estraggo i personaggi da props

  return (
    <Container>
      <h2 className="text-center mb-4">Characters</h2>
      <Row>
        {characters.map((character) => (
          <Col key={character.id} md={3} className="mb-4">
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function CharacterCard(props) {
  const { character } = props; // Estraggo il personaggio da props

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
        <strong>Fiction Genre:</strong> {character.fictionGenre}<br />
          <strong>Role:</strong> {character.role}<br />
          <strong>Hair:</strong> {character.hairColor}<br />
          <strong>Glasses:</strong> {character.glasses ? 'Yes' : 'No'}<br />
          <strong>Gender:</strong> {character.gender}<br />
          <strong>Power:</strong> {character.hasPower ? 'Yes' : 'No'}<br />
          <strong>Visible:</strong> {character.visible ? 'Yes' : 'No'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterGrid;