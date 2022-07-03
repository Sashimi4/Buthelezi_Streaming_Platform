package com.streaming.service.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String release_year;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer runtime;

    @Column(nullable = false)
    private String imgUrl;

    @Column(nullable = false)
    private String videoUrl;

    @Column(nullable = false)
    private Long rating;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_type")
    private Movie movie_type_relation;

    @JsonIgnore
    @OneToMany(mappedBy = "movie_movie_relation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name = "id_movie", nullable = false)
    public Set<Movie> movie_movie_relation = new HashSet<>();

    public Movie() {
    }

    public Movie(Integer id, String title, String release_year, String description, Integer runtime, String imgUrl, String videoUrl, Long rating) {
        this.id = id;
        this.title = title;
        this.release_year = release_year;
        this.description = description;
        this.runtime = runtime;
        this.imgUrl = imgUrl;
        this.videoUrl = videoUrl;
        this.rating = rating;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getRelease_year() {
        return release_year;
    }

    public void setRelease_year(String release_year) {
        this.release_year = release_year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getRuntime() {
        return runtime;
    }

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public Long getRating() {
        return rating;
    }

    public void setRating(Long rating) {
        this.rating = rating;
    }
}
