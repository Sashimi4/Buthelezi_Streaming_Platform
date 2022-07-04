package com.streaming.service.repository;

import com.streaming.service.data.Movie;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

    @Query(value = "SELECT * FROM movie WHERE title LIKE %:keyword%", nativeQuery = true)
    List<Movie> findAllMovies(@Param("keyword") String keyword);
}
