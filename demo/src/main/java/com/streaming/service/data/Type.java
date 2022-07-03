package com.streaming.service.data;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "media_type")
public class Type {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false, unique = true)
    public String mediaType;

    @JsonIgnore
    @OneToMany(mappedBy = "movie_type_relation", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name = "id_type", nullable = false)
    public Set<Type> movie_type_relation = new HashSet<>();

    public Type() {
    }

    public Type(Integer id, String mediaType) {
        this.id = id;
        this.mediaType = mediaType;
    }

    public Integer getId() {
        return id;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }
}
