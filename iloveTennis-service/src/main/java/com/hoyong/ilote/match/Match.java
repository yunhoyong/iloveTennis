package com.hoyong.ilote.match;


import com.hoyong.ilote.stadium.Stadium;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;

    private String contents;

    //private Stadium stadium;

    private LocalDateTime matchStartDate;

    private LocalDateTime matchEndtDate;

    //private RequiredThings required;
}