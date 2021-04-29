import { Button, InputGroup, ButtonGroup  } from 'reactstrap'
import React,{useState} from 'react'
import { Form, Input } from 'reactstrap'
import styled from 'styled-components'
import Movie from './Movie'
import Favourite from './Movie'
import { SearchOutlined } from '@material-ui/icons'
import {Genres} from './Genre'


const MovieForm = () =>{
    //For the search input to be passed inside query
    const [query, setQuery]= useState('')
    //To display movie to the user
    const [movie, setMovie]=useState([])
    const [url, setUrl] = useState(``)
    const [fav, setFav] = useState([])
    
    const QueryHandler  = (e)=>{
        setQuery(e.target.value)
    }

    const searchMovies = async (e)=>{
        e.preventDefault()
       
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
    const search = () =>{
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&query=${query}&page=1&include_adult=false`)
    }
    const popular = () =>{
        setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&page=1&include_adult=false`)
    }
    const Genre = (id) =>{
        setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&page=1&include_adult=false&with_genres=${id}`)
    }

    const Favourites = () =>{
        <Favourite fav={fav} setFav={setFav}/>
    }

    return(
        <div>
            <Form onSubmit={searchMovies}>
            <ButtonGroup className="mb-3" >
                <Contents>
                    <Button outline color="primary" className="m-1" type="submit" onClick={popular}>Popular</Button>
                    
                     {Genres.map((genre) =>{
                         return(
                            <Button outline color="secondary" style={{width:'90px'}} className="m-1" type="submit" onClick={() => Genre(genre.id)}>{genre.name}</Button>
                         )
                     })}
                    </Contents>
                </ButtonGroup>
                <InputGroup className="mb-5">
                    <Input type="text" placeholder="Enter a movie name.." onChange={QueryHandler}></Input>
                    
                    <Button color="success" className="ml-2" type="submit" onClick={search}><SearchOutlined color="secondary"/>Search</Button>
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

    @media (max-width: 1300px){
        grid-template-columns: repeat(3, 1fr);

    }
    @media (max-width: 1100px){
        grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);

    }

    
`;
const Contents = styled.div`

    display: grid;
    grid-template-columns: repeat(10, 1fr);

    @media (max-width: 1060px){
        grid-template-columns: repeat(5, 1fr);

    }

    @media (max-width: 600px){

        grid-template-columns: repeat(4, 1fr);

    }
`; 

export default MovieForm