import './Carrusel';
import { Carousel } from 'react-bootstrap';





function Carrusel() {

    return (

        <div >
            <div className='bodyCarrusel'>
                <Carousel  fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://www.themoviedb.org/t/p/original/9xkwRzeNMBJ1bSmhSPmnAo5OxC3.jpg"
                            alt="First slide" />
                        <Carousel.Caption>
                            <h3>She-Hulk: abogada Hulka (2022)</h3>
                            <p>Jennifer Walters —una abogada especializada en derecho sobrehumano— tendrá que lidiar con los problemas típicos de una treintañera soltera que además resulta ser una Hulka verde de 2 metros.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.themoviedb.org/t/p/original/qBx97wytqlyPqXATHqRgIVFxJRU.jpg"
                            alt="Second slide" />

                        <Carousel.Caption>
                            <h1>Black Adam (2022)</h1>
                            <p>Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses -y encarcelado con la misma rapidez-, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.themoviedb.org/t/p/original/b3uuEiYO8HH046c9BR09E6dvmHy.jpg"
                            alt="Third slide" />

                        <Carousel.Caption>
                            <h3>Proyecto Gemini (2022)</h3>
                            <p>
                            Una misión espacial es enviada para terraformar un planeta distante. Sin embargo, la misión se encuentra con algo desconocido que tiene su propio plan para el planeta.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
         
        </div>


    );
}

export default Carrusel;