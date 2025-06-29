import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/event-1.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Welcome to the Quiz App</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/event-2.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Test Your Knowledge</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
