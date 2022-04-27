package com.example.project.entity;


public class Answers {

  private long answerId;
  private long questionId;
  private long userId;
  private java.sql.Timestamp postTime;
  private String answerBody;


  public long getAnswerId() {
    return answerId;
  }

  public void setAnswerId(long answerId) {
    this.answerId = answerId;
  }


  public long getQuestionId() {
    return questionId;
  }

  public void setQuestionId(long questionId) {
    this.questionId = questionId;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }


  public java.sql.Timestamp getPostTime() {
    return postTime;
  }

  public void setPostTime(java.sql.Timestamp postTime) {
    this.postTime = postTime;
  }


  public String getAnswerBody() {
    return answerBody;
  }

  public void setAnswerBody(String answerBody) {
    this.answerBody = answerBody;
  }

}
