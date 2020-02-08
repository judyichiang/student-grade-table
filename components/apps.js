class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;

    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);

    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);

    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  handleGetGradeError(error) {
    // =console.log(`Error: ${error}');
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
  createGrade(name, course, grade) {
    console.log(`createdGrade: ${name}, ${course}, ${grade}`);
    $.ajax({
      method: "Post",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "cUvco5hF"
      },
      data: { name, course, grade },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    })
  }

  handleCreateGradeError(error) {
    console.log(`handleCreateGradeError: ${error}`)
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id) {
    console.log(`delete: ${id}`);
    $.ajax({
      method: "Delete",
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      headers: {
        "X-Access-Token": "cUvco5hF"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,

    })
  }

  handleDeleteGradeError(error) {
    console.error(`handleDeleteGradeError: ${error}`);
  }

  handleDeleteGradeSuccess() {
    this.getGrades()
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);

  }


}
