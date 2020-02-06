class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;

    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);

  }
  handleGetGradeError(error) {
    // console.log("Error: ",error);
  }
  handleGetGradeSuccess(grades) {
    console.log("Grades: ", grades);
    this.gradeTable.updateGrades(grades);

    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    var average = sum / grades.length;
    console.log(`Average: ${average}`);
    this.pageHeader.updateAverage(average);

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
