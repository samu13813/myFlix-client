import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import NavbarComp from '../navbar/navbar';

class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
    };
  }

componentDidMount() {
  let accessToken = localStorage.getItem('token');
  if (accessToken !== null) {
    this.setState({
      user: localStorage.getItem('user')
    });
    this.getMovies(accessToken);
  }
}

// When a movie is clicked, this function is called and updates the state of 'selectedMovie'
  setSelectedMovie(movie) {
    this.setState ({
      selectedMovie: movie
    });
  }

  // When a user succesfully logs in, this function updates the 'user' property in state to that particular user
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  // Below function gets updated when a new user register
  onRegistration(register) {
    this.setState({
      register
    });
  }

  getMovies(token) {
    axios.get('https://myflixmovies-app.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      //Asign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  render() {
    const { movies, selectedMovie, user, register } = this.state;

    if (!register) return (
      <div>
        <NavbarComp/>
        <RegistrationView onRegistration={register => this.onRegistration(register)} />
      </div>
    );

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView
    if (!user) return (
      <div>
        <NavbarComp/>
        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
      </div>
    );

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        <NavbarComp/>
        <button onClick={() => { this.onLoggedOut() }}>Logout</button>
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
}

};

export default MainView;
