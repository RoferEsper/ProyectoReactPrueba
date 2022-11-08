import './Cards.css';
import { Card, Button } from 'react-bootstrap';





function CardsComponent({image, title, type}) {

    return (

        <div className='cardsContainer'>
            
                <Card  style={{ width: '13rem' }} className="m-2">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Genero: {type}</Card.Text>
                        
                    </Card.Body>
                </Card>
           

        </div>

    );

}

export default CardsComponent;