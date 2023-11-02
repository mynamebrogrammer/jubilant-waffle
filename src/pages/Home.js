import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-4">
            <Card.Body>
              <Card.Title>
                THE FUTURE OF NEXT GEN SEQUENCING IS HERE!
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {/* Add content for the current page */}
                Discover the safest self-driving experience with NiemzSeq.
              </Card.Subtitle>
              <Card.Text>
                {/* Add content for the current page */}
                WORDs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
