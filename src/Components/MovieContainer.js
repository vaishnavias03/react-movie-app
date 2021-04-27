import { Button, Container, Jumbotron } from 'reactstrap'
import MovieForm from './MovieForm'
import React from 'react'
import { Badge } from 'reactstrap'
import { Route } from 'react-router'

function MovieContainer (){
    return(
        <div >
           <Route>
           <Container>
               <h3 style={{color:"white"}}>React Movies App</h3>
               <MovieForm/>
               
           </Container>
           </Route>
        </div>
    )
}

export default MovieContainer