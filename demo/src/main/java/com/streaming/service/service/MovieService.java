package com.streaming.service.service;

import com.streaming.service.data.Movie;
import com.streaming.service.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(@Autowired MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> retrieveAllMovies() {
        return getMovieRepository().findAll();
    }

    public List<Movie> retrieveSearchMovies(String searchKeyword) {
        return getMovieRepository().findAllMovies(searchKeyword);
    }


    public MovieRepository getMovieRepository() {
        return movieRepository;
    }
}
