import Carousel from 'react-bootstrap/Carousel';
import './Main.css'

function Main() {
  return (
    <Carousel>
      <Carousel.Item interval={6000} className="carousel-item" style={{ height: '100vh' }}>
        <img
          className="d-block w-100 bg-cover"
          src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className=' text-5xl'>Bingung Mau Nonton Film Dimana?</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000} className="carousel-item"  style={{ height: '100vh' }}>
        <img
          className="d-block w-100  bg-cover"
          src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Cobain di<span className='font-semibold'> Pilem.</span> dong!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000} className="carousel-item"  style={{ height: '100vh' }}>
        <img
          className="d-block w-100 bg-cover"
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Di Pilem. menyediakan film yang lengkap</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;