import './HomePage.css';

import Carrusel from '../../components/carrusel/Carrusel'
import Header from '../../components/header/Header'
import CardsComponent from '../../components/cards/Cards'
import useHome from "../../utils/useHome";
import FooterContent from '../../components/footer/Footer'

import { Pagination } from 'react-bootstrap';

import { useState, useEffect } from "react";
import axios from 'axios';






function HomePage() {

    const { movie, OnChangeInput, setpage } = useHome();


    const MapMovie = movie.map((item, i) =>
    (<CardsComponent
        key={i}
        image={item.Poster}
        title={item.Title}
        type={item.Type}
    />))

    return (

        <div>
            <Header />

            <Carrusel />

            <div className='bodyCards'>
                {MapMovie}
            </div>
            <div className='BodyPagination w-100 d-flex justify-content-center'>
                <div className='m-5'>
                    <Pagination>

                        <Pagination.Item onClick={() => setpage(1)} >{1}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(2)}>{2}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(3)}>{3}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(4)}>{4}</Pagination.Item>
                        <Pagination.Item onClick={() => setpage(5)}>{5}</Pagination.Item>


                    </Pagination>
                </div>
            </div>

            <FooterContent />
        </div>

    )


}
export default HomePage;