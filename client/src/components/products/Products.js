import React, { useState, useEffect } from 'react';
import { CardColumns } from 'react-bootstrap';
import axios from 'axios';

import Cards from './cards/productsCards';
import IsLoadingHOC from '../loader/withLoadingScreen';

const Products = props => {
    const {setLoading} = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(false)
    }, []);

    // Lifecycle update for our fetch
    useEffect(() => {
            const fetchProducts = () => {
                // On set un loader avant le fetch sur true pour l'afficher
                setLoading(true);
                setTimeout(() => {
                    axios.get('http://localhost:9000/food')
                    .then(response => {
                        // console.log(response.data.data.id)
                        setData(
                            response.data.data.map(item => ({
                                id: item.id,
                                name: item.name_translations.fr,
                                image: item.images.map(item => (item.large)),
                                ingredients: item.ingredients_translations.fr
                            }))
                        );
                         // on switch notre loader indicator après avoir fetch pour le désactiver
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }, 3000);
            };
            // On retourne notre fetch
            fetchProducts();
            // return () => clearTimeout(timer);
    }, []);

    // Testing fetchs
    // console.log("résultat du fetch", data)

    // console.log(data.map(item => (
    //     <p key={item.id}>{item.name}</p>
    // )))

    return (
        <CardColumns>
            {data.map(item => (
                <Cards key={item.id} {...item}/>
            ))}
        </CardColumns>
    )
}

{/* <Row className="justify-content-center align-content-center">
    <Spinner animation="grow" variant="primary" />
</Row> */}

export default IsLoadingHOC(Products, 'Loading...');