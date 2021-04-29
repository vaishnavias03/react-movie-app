import React, { Component, useState } from 'react'
import { Badge, Button, ButtonGroup, Card } from 'reactstrap'
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Delete } from '@material-ui/icons';

const Favourite = (item) =>{
    console.log("one")
}

const Movie= ({item}) =>{
    const [fav, setFav] = useState([])

    const viewMovie = () =>{
        const url = "https://www.themoviedb.org/movie/"+ item.id
        window.location.href = url
    }

    const Favorite = ({e}) =>{
        e.preventDefault()
        console.log(e)
    }
        return (
            <div>
                <Cards key={item.id}  className="m-2">
                
                <ButtonGroup>
                    <Button color="info"  className="m-1" onClick={viewMovie}> 
                    Check it out 
                    </Button>
                    <Button color="danger" type="submit" onSubmit={Favorite} className="m-1"><FavoriteIcon/></Button>
                    <Button color="danger"   className="m-1" style={{display:'none'}}><Delete/></Button>
                </ButtonGroup>
                
                <img className="m-2" style={{width:"200px", height:"200px"}}
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title}/>
                   
                   <p><center>{item.title}<Badge style={{backgroundColor:'palevioletred' , fontFamily: 'monospace'}} className="ml-2">{item.vote_average}</Badge></center></p> 
                
                
               
        </Cards>
         
            </div>
        )          
}

const Cards = styled(Card)`
    width: 220px;
    height: 350px;


   
`;

const Desc = styled.p`
    font-size: 10px;
    
`;

export default Movie;