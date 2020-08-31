# MovieFinder

Movie Finder is a search engine (kinda) for movies. It fetched data from [omdbapi](http://omdbapi.com/) and shows the results into a carousel.


## Basic Components

The project is structured in a way that utilizes components for future maintenance. Some of the most important components are listed below.

### Search

The search component consists of  two input. If you don't type any keyword in the search bar and still try to search for a movie, MovieFinder will suggest a movie from a rather small list of prefetched movies.

### Movies

The movies components are separated in two big components. The `SingleMovie` component is responsible for showcasing a movie card to be later fetched and displayed in the carousel.

The `MovieDetails` is a component that renders a movie details fetched from the API. It is a two collumn minimal design.

## Store

The Vuex store is an attempt to keep track of current movies and list the results in the result page. MovieFinder searches any valid `imdbID` given in the URL `/movies/ID`.

The store itself consists of 3 main actions and some utilitius mutations and getters.

### searchMovie

In this action we fetch data from the API using the `searchTerm` and we get the additional data from another call due to the API endpoint design.


### loadMoreMovies

This action will fetch the extra pages of the initial search result. Some results might give more than 10 results back so we need a way to fetch those extra pages without overwhelming the results page with all data from the beginning.

### movieExtraDetails

Given a valid imdbID this action searches for the details of the movie. It is used throught the app as this is responsible for fetching the `Director`, `Plot` and other usefull data for the movies.

## Test

I created some `jest` test in order to test some basic functionalities of the components and `vuex store`. It is not  a 100% coverage, it just introduces the concept of tests and TDD.

That's all!! 😊

