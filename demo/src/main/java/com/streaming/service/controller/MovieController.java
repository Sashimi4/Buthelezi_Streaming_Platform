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
        Thread.sleep(3000); //testing loading icon
        movies[0] = new Movie(1,"Moonknight1","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[1] = new Movie(2,"Moonknight2","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[2] = new Movie(3,"Moonknight3","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[3] = new Movie(4,"Moonknight4","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[4] = new Movie(5,"Moonknight5","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[5] = new Movie(6,"Moonknight6","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        return movies;
    }


    @GetMapping("search")
    @CrossOrigin(origins = "http://localhost:8080")
    @ResponseBody //Will need to be limited to roughly 50 results
    public Movie[] searchMovies(@RequestParam String keyword) throws InterruptedException {
        Movie[] movies = new Movie[6];
        Thread.sleep(3000); //testing loading icon
        movies[0] = new Movie(1,keyword + "1","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[1] = new Movie(2,keyword + "2","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[2] = new Movie(3,keyword + "3","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[3] = new Movie(4,keyword + "4","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[4] = new Movie(5,keyword + "5","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        movies[5] = new Movie(6,keyword + "6","https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_moonknight_v2_20656-1_f84e4b69.jpeg");
        return movies;
    }

}
