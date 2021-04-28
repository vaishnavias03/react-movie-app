import { Button, Card, CardBody, CardDeck, CardFooter, CardHeader, CardImg, CardTitle, InputGroup, Label } from 'reactstrap'
import React,{useState} from 'react'
import { Form, Input } from 'reactstrap'
import styled from 'styled-components'
import Movie from './Movie'


const MovieForm = () =>{
    //For the search input to be passed inside query
    const [query, setQuery]= useState('')
    //To display movie to the user
    const [movie, setMovie]=useState([])
    
    const QueryHandler  = (e)=>{
        setQuery(e.target.value)
    }

    const searchMovies = async (e)=>{
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&query=${query}&page=1&include_adult=false`;
        try{
            const res =await fetch(url)
            const data = await res.json()
            console.log(data.results)
            setMovie(data.results)

        }
        catch(err){
            <p>Error!</p>
        }
    
    }
    
    return(
        <div>
            <Form onSubmit={searchMovies}>
                <InputGroup >
                    <Input type="text" placeholder="Enter a movie name.." onChange={QueryHandler}></Input>
                    <Button color="success" type="submit">Search</Button>
                </InputGroup>
            </Form>

            <Grids>
                {movie.map((item) =>{
               return(
                   <Movie item={item}/>
                )})}
            </Grids>
        </div>
    )
}

const Grids = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    
    @media (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);

    }

    
`;

export default MovieForm