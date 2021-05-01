import React from 'react'
import { Badge, Button, ButtonGroup, Card, CardImgOverlay } from 'reactstrap'
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Call, Delete } from '@material-ui/icons';

const Favourite = (item) =>{
    console.log("one")
}

const Movie= ({item, fav, setFav, setMovie, movie, Favourite, isFavorite }) =>{
    
    

    const viewMovie = () =>{
        const url = "https://www.themoviedb.org/movie/" + item.id
        window.location.href = url
    }

    
    const AddFav = ({e, item}) =>{
        e.preventDefault()
        console.log(item.id)
        
        
    }
    const AddFAv = (item) =>{
       
       
        item.Favourite = true
            console.log(fav)
            setFav([
            ...fav,
            {
                 id: item.id, 
                 title: item.title, 
                 Favourite: true, 
                 overview: item.overview,
                 vote_average: item.vote_average,
                 poster_path: item.poster_path
             }    
            ])
       }

    
    const RemoveFAv = () =>{
            setMovie((movie.filter((el) => el.id !== item.id)))
            item.Favourite = false
            setFav(movie)
       
    }
    
        return (
            <div>
                <Cards key={item.id}  className="m-2">
                <ButtonGroup>
                    <Button color="info"  className="m-1" onClick={viewMovie}> 
                    Check it out 
                    </Button>
                    {item.Favourite  ?   <Button color="danger"   className="m-1" onClick={RemoveFAv}><Delete/></Button>:
                     <Button color="danger"  className="m-1" type="submit" onSubmit={() =>AddFav(item)} onClick={() => AddFAv(item) }><FavoriteIcon/></Button>
                    }
                </ButtonGroup>
                
                <img className="m-2" style={{width:"200px", height:"200px"}}
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title}/>
                   
                   <p><Badge style={{backgroundColor:' rgb(219, 156, 97)' , fontFamily: 'monospace', float:'left', color: 'black', margin:'5px'}} className="ml-2">{item.vote_average}</Badge><center>{item.title}</center></p> 
                   <Desc>
                       {item.overview}
                    </Desc>
                
               
        </Cards>
         
            </div>
        )          
}

const Cards = styled(Card)`
    width: 220px;
    height: 350px;
    


   
`;

const Desc = styled(CardImgOverlay)`
    position: absolute;
    top: 20%;
    left: 0;
    font-size: 90%;
    background-color: white;
    transition: .5s  ease-in-out;
    cursor: pointer;
    opacity: 0;
    overflow: auto;

    &&:hover{
        top: 15%;
        opacity: 1;
    }
    
`;

export default Movie;