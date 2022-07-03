package com.streaming.service.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "genre")
public class Genre {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false, unique = true)
    public String genre;

    @JsonIgnore
    @OneToMany(mappedBy = "movie_genre_relation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name = "id_genre", nullable = false)
    public Set<Genre> movie_genre_relation = new HashSet<>();

    public Genre() {
    }

    public Genre(Integer id, String genre) {
        this.id = id;
        this.genre = genre;
    }

    public Integer getId() {
        return id;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
