package com.streaming.service.data;

import javax.persistence.*;

@Entity
@Table(name = "media_type")
public class Type {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(nullable = false, unique = true)
    public String mediaType;

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
