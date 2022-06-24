package com.streaming.service.controller;

import com.streaming.service.data.Movie;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {

    public MovieController(){
    }

    @GetMapping("movies/here")
    @CrossOrigin(origins = "http://localhost:8080")
    @ResponseBody
    public Movie[] getMovieData() throws InterruptedException {
        Movie[] movies = new Movie[6];
        Thread.sleep(5000); //testing loading
        movies[0] = new Movie(1,"Moonknight1","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[1] = new Movie(2,"Moonknight2","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[2] = new Movie(3,"Moonknight3","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[3] = new Movie(4,"Moonknight4","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[4] = new Movie(5,"Moonknight5","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[5] = new Movie(6,"Moonknight6","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        return movies;
    }

}
