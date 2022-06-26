import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
// import Movie from "./Movie"
import "./Trending.css"
import axios from "axios"

function Trending() {
    const limitOverview = 50
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((result) => {
            setMovies(result.data.results)
        })
    }, [])
  return (
      <>  
        <Container className="trending w-full" style={{ paddingBottom: "80px" }}>
            <h1 style={{ padding: '30px', marginTop: '40px' }}>Trending Movies</h1>
                <Row>
                        {movies.map((result, index) => {
                            return (
                                <Col md={3} xs={12} key={index}>
                                    <Card className="card" >
                                        <Card.Img variant="top" src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title>{ result.title }</Card.Title>
                                            <Card.Text>
                                            { `${result.overview.substring(0, limitOverview)}.....` }
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body>
                                            <Card.Link href="#" variant="secondary">See Detail</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        } )}
                </Row>
        </Container>
      </>
  );
}

export default Trending;