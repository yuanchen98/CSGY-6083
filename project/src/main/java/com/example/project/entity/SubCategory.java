package com.example.project.entity;


public class SubCategory {

  private long subCategoryId;
  private long categoryId;
  private String subCategoryName;


  public long getSubCategoryId() {
    return subCategoryId;
  }

  public void setSubCategoryId(long subCategoryId) {
    this.subCategoryId = subCategoryId;
  }


  public long getCategoryId() {
    return categoryId;
  }

  public void setCategoryId(long categoryId) {
    this.categoryId = categoryId;
  }


  public String getSubCategoryName() {
    return subCategoryName;
  }

  public void setSubCategoryName(String subCategoryName) {
    this.subCategoryName = subCategoryName;
  }

}
