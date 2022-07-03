package com.streaming.service.controller;

import com.streaming.service.data.Movie;
import com.streaming.service.service.MovieService;
import com.streaming.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    private final MovieService movieService;

    public MovieController(@Autowired MovieService movieServiceService){
        this.movieService = movieServiceService;
    }

    @GetMapping("movies/here")
    @ResponseBody
    public List<Movie> getMovieData() throws InterruptedException {
        Thread.sleep(3000); //testing loading icon
        return movieService.retrieveAllMovies();
    }


    @GetMapping("search")
    @ResponseBody //Will need to be limited to roughly 50 results
    public List<Movie> searchMovies(@RequestParam String keyword) throws InterruptedException {
        Thread.sleep(3000); //testing loading icon
        return movieService.retrieveAllMovies();
    }

}
