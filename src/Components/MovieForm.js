import { Button, InputGroup, ButtonGroup  } from 'reactstrap'
import React,{useState, useEffect, useRef} from 'react'
import { Form, Input } from 'reactstrap'
import styled from 'styled-components'
import Movie from './Movie'
import { SearchOutlined, Add, Remove } from '@material-ui/icons'
import {Genres} from './Genre'


const MovieForm = ({query, setQuery, movie, setMovie, url, setUrl, pg, setPg, where, setWhere, genre, setGenre}) =>{
    const [fav, setFav] = useState([ ])
    const [Favourite, isFavorite] = useState(false)

    
    useEffect(() =>{
        document.title = `${where} page ${pg}` 
    },[url, where, pg])

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
        console.log(pg)
        setWhere('search')
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&query=${query}&page=${pg}&include_adult=false`)
        
    }
    const popular = () =>{
        console.log(pg)
        setWhere('popular')
        setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&page=${pg}&include_adult=false`)
    }
    const Genre = () =>{
        console.log(pg)
        setWhere('Genre')
        setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=efebebf1d8f85627837d9fe3d0f69a96&page=${pg}&include_adult=false&with_genres=${genre}`)
    }

    

    const callPages =() =>{
        switch (where) {
            case 'search':
               search()
                break;
            case 'popular':
                popular() 
                break;
            case 'Genre':
                Genre() 
            break;
            default:
                ListFavourites()  
                break;
        }
    }


    const ShowFav= (e) =>{
        e.preventDefault()
    }
    const ListFavourites = () =>{
        setWhere('Favourite')
        console.log(movie)
        setMovie(fav)
    }


    return(
        <div>
            <Form onSubmit={searchMovies}>
                <ButtonGroup className="mb-3" >
                    <Contents>
                        <Button outline color="primary" className="m-1" type="submit" onClick={() => popular()}>Popular</Button>
                        {Genres.map((items) =>{
                            return(
                                <Button outline color="secondary" style={{width:'90px'}} className="m-1" type="submit" 
                                onClick={() => { setGenre(items.id); Genre();}}>{items.name}</Button>
                            )})}
                    </Contents>
                </ButtonGroup>


                <InputGroup className="mb-5">
                    <Input type="text" placeholder="Enter a movie name.." onChange={QueryHandler}></Input>
                    <Button color="success" className="ml-2" type="submit" onClick={search}><SearchOutlined color="secondary"/>Search</Button>
                </InputGroup>
            </Form>
           
            <center>
                <ButtonGroup>
                    <Button color="warning" className="mb-3 mr-5 p-2" type="submit" onSubmit={ShowFav} onClick={ListFavourites}>Favourites</Button>
                    <Form onSubmit={searchMovies}>
                        <ButtonGroup>
                            <p className="mb-3 p-2" style={{color:'white'}}>Pages</p>
                            <Button color="warning" className="mb-3" type="submit"  onClick={() => {setPg(pg - 1); callPages()}}><Remove/></Button>
                            <p style={{color:'white', margin: '10px'}}>{pg}</p>
                            <Button color="warning" className="mb-3" type="submit"  onClick={() => {setPg(pg + 1); callPages()}} ><Add/></Button>
                        </ButtonGroup>
                    </Form> 
                </ButtonGroup>
            </center>

            <Grids>
                {movie.map((item) =>{
                    return(
                        <Movie item={item} fav={fav} setFav={setFav} 
                         setMovie={setMovie} movie={movie} Favourite={Favourite} isFavorite= {isFavorite}/>
                    )})}
            </Grids>


        </div>
    )
}

const Grids = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
    }
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


    
