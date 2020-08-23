import React, {useState, useEffect} from 'react';
import { Row, Col, Card, CardGroup, Modal, Button } from 'react-bootstrap';

const ProductsModal = props => {
    const [items, setItems] = useState(props);

    // On retourne nos props dans un useEffect
    useEffect(() => {
        setItems(props);
    }, [props]);

    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Ingrédients :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{items.ingredients}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
}

const Cards = props => {
    const [items, setItems] = useState(props);
    const [modalShow, setModalShow] = useState(false);
    // console.log('Cards#Component#props', useState(props));

    // On retourne nos props dans un useEffect
    useEffect(() => {
        setItems(props);
    }, [props]);

    // console.log(items.poster_path, items.title)
    return (
        <>
            <Card>
                <Card.Img variant="top" src={items.image} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Row className="text-align-center">
                        <Col xs={6}>
                            <Button variant="primary" onClick={() => setModalShow(true)}>See more details</Button>
                        </Col>
                        <Col xs={6}>
                            <Button variant="success" >Add to bag</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* We call our modal on click */}
            <ProductsModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Cards;