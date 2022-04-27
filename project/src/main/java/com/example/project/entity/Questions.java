package com.example.project.entity;


public class Questions {

  private long questionId;
  private long userId;
  private long categoryId;
  private long subCategoryId;
  private String title;
  private String body;
  private java.sql.Timestamp postTime;


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


  public long getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(long categoryId) {
    this.categoryId = categoryId;
  }


  public long getSubCategoryId() {
    return subCategoryId;
  }

  public void setSubCategoryId(long subCategoryId) {
    this.subCategoryId = subCategoryId;
  }


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }


  public String getBody() {
    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }


  public java.sql.Timestamp getPostTime() {
    return postTime;
  }

  public void setPostTime(java.sql.Timestamp postTime) {
    this.postTime = postTime;
  }

}
