import React from 'react'
import {Carousel} from 'react-bootstrap'

const Carousels = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
      style={{objectFit:'cover',width:'100%',height:'500px',borderRadius:'10px'}}
        className="d-block w-100"
        src="/images/react.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Travel</h3>
        <p>Travel and Enjoy rour life</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      style={{objectFit:'cover',width:'100%',height:'500px',borderRadius:'10px'}}
        className="d-block w-100"
        src="/images/react2.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Programming</h3>
        <p>Try to your best</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      style={{objectFit:'cover',width:'100%',height:'500px',borderRadius:'10px'}}
        className="d-block w-100"
        src="/images/react3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Nataural Beauty</h3>
        <p>
          Enjoy your Life
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default Carousels