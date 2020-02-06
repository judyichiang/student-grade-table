class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    console.log("Update Grades:", grades);
    this.tableElement.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      td1.textContent = grades[i].name;
      tr.appendChild(td1);
      td2.textContent = grades[i].course;
      tr.appendChild(td2);
      td3.textContent = grades[i].grade;
      tr.appendChild(td3);
      this.tableElement.appendChild(tr);
    }
  }
}
