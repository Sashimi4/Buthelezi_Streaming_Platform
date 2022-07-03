package com.streaming.service.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "movie_genre")
public class Movie_Genre {

    @Id
    @GeneratedValue
    private Integer id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_movie")
    private Movie_Genre movie_movie_relation;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_genre")
    public Movie_Genre movie_genre_relation;

    public Movie_Genre() {
    }

    public Integer getId() {
        return id;
    }
}
