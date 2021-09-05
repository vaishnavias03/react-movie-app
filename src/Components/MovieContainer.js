
import MovieForm from './MovieForm'
import React, {useState} from 'react'
import { Route } from 'react-router'

function MovieContainer (){
    //For the search input to be passed inside query
    const [query, setQuery]= useState('')
    //To display movie to the user
    const [movie, setMovie]=useState([])
    //to set the query(search name) in teh url
    const [url, setUrl] = useState(``)
    //To set the page of the search
    const [pg, setPg] = useState(1)
    //To know from where this setPg is coming from Popular, search or Genre
    const [where, setWhere] = useState('')
    //set the Genre
    const [genre, setGenre] = useState()

    return(
        <div >
           
            <div>
               <h3 style={{color:"white", marginBottom: '20px'}}>React Movies App</h3>


               <MovieForm query={query} setQuery={setQuery} movie={movie} 
               setMovie={setMovie} url={url} setUrl={setUrl} 
               pg={pg} setPg={setPg} where={where} setWhere={setWhere}
               genre={genre} setGenre={setGenre}/>
               
               </div> 
           
          
        </div>
    )
}

export default MovieContainer
