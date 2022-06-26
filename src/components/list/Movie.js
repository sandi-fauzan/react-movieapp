import React from 'react'
import Card from 'react-bootstrap/Card'


const Movie = () => {
  return (
    <>
        <Card className="card">
            <Card.Img variant="top" src="https://i.pinimg.com/564x/a5/8e/ad/a58ead170b42f7da411a62be67ebac94.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </>
  )
}

export default Movie