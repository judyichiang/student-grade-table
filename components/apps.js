class APP {
  constructor() {
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);


  }
  handleGetGradeError(error) {
    console.log(error);
  }
  handleGetGradeSuccess(grades) {
    console.log(grade);
  }
  getGrades() {
    $.ajax({
      method: "Get",
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradeSuccess,
      error: this.handleGetGradeError,
    })
  }
  start() {
    this.getGrades();

  }
}
