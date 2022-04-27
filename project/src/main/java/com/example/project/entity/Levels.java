package com.example.project.entity;


public class Levels {

  private long levelId;
  private String levelName;
  private long lowPoints;
  private long highPoints;


  public long getLevelId() {
    return levelId;
  }

  public void setLevelId(long levelId) {
    this.levelId = levelId;
  }


  public String getLevelName() {
    return levelName;
  }

  public void setLevelName(String levelName) {
    this.levelName = levelName;
  }


  public long getLowPoints() {
    return lowPoints;
  }

  public void setLowPoints(long lowPoints) {
    this.lowPoints = lowPoints;
  }


  public long getHighPoints() {
    return highPoints;
  }

  public void setHighPoints(long highPoints) {
    this.highPoints = highPoints;
  }

}
