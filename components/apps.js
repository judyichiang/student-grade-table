class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;

    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);

    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)

  }
  handleGetGradeError(error) {
    // console.log(`Error: ${error}');
  }
  handleGetGradeSuccess(grades) {
    console.log(`Get Grades: ${grades}`);
    this.gradeTable.updateGrades(grades);

    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    var average = sum / grades.length;
    // console.log(`Average: ${average}`);
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
  createGrade(name, course, grade) {
    console.log(`createdGrade: ${name}, ${course}, ${grade}`);
  }

  handleCreateGradeError(error) {
    console.log(`handleCreateGradeError: ${error}`)
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
