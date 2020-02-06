class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);

  }
  handleGetGradeError(error) {
    // console.log(error);
  }
  handleGetGradeSuccess(grades) {
    // console.log(grades);
    this.gradeTable.updateGrades(grades);

  }
  getGrades() {
    $.ajax({
      // method: "Get",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "cUvco5hF"
      },
      success: this.handleGetGradeSuccess,
      error: this.handleGetGradeError,
    })
  }

  start() {
    this.getGrades();

  }
}
