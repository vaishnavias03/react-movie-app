import React, { Component, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Card, CardBody, CardDeck, CardFooter, CardHeader, CardImg, CardImgOverlay, CardTitle, InputGroup, Label } from 'reactstrap'
import styled from 'styled-components';


const Movie= ({item}) =>{
    const viewMovie = () =>{
        const url = "https://www.themoviedb.org/movie/"+ item.id
        window.location.href = url
    }
        return (
            <div>
                <Card key={item.id} style={{width:"220px"}} className="m-4">
                
               
                <Button color="info" className="m-2" onClick={viewMovie} > 
                 Check it out 
                </Button>
        
                <CardImg className="m-2" style={{width:"200px", height:"200px"}}
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title}/>
                 {/* <Desc>{item.overview}</Desc> */}
                   
                <CardHeader tag="h6">{item.title}</CardHeader>
                
               
        </Card>
         
            </div>
        )          
}

// const Desc = styled.p`
//     font-size: 10px;
//     float: right;
// `;

export default Movie;