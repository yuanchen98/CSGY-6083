package com.example.project.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "answers")
public class Answers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @ManyToOne
    @JoinColumn(name = "question_id", referencedColumnName = "question_id", insertable = false, updatable = false)
    private Questions questions;

    @ManyToOne
    @JoinColumn(name = "User_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    private User user;

    @Column(name = "post_time", columnDefinition = "datetime not null")
    private java.sql.Timestamp postTime;

    @Column(name = "answer_body", columnDefinition = "text not null")
    private String answerBody;


}
