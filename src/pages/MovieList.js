import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[],
      isLoading: false
    }
  }
 
  componentDidMount() {
    this.setState({isLoading:true});
    movieAPI.getMovies()
    .then(data =>{
     this.setState({movies:[...data]});
     this.setState({isLoading:false});    
    }   
    )    
   
   }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    {
      if(this.state.isLoading){
        return <Loading />
      } else{
       return <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
     </div>
      }
    }    
  }
}

export default MovieList;
