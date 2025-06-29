import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const newLists = [
  {
    id: 1,
    title: 'Woman bakes pies...',
    description: 'What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition.',
    images: 'images/event-1.jpg'
  },
  {
    id: 2,
    title: 'Martha Stewart shows off 30 pies',
    description: 'Martha may not host dinner this year, but she still made 30 pies.',
    images: 'images/event-2.jpg'
  },
  {
    id: 3,
    title: 'Burger King is testing a new sandwich',
    description: 'This is a win for the flatbread fans.',
    images: 'images/event-3.jpg'
  },
  {
    id: 4,
    title: 'Popeyes adds chicken wings',
    description: 'And you can get them in five flavors.',
    images: 'images/event-4.jpg'
  }
];

export default function News() {
  return (
    <div>
      <h2>News</h2>
      <Row>
        {newLists.map((news) => (
          <Col key={news.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={news.images} alt={news.title} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
