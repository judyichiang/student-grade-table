class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    console.log("Update Grades:", grades);
    this.tableElement.textContent = "";
    var hide = document.querySelector(".d-none")


    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (grades.length === 0) {
      hide.setAttribute("class", "d-none");

    } else {
      hide.setAttribute("class", " ");
    }



  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    console.log("renderGradeRow:", data);

    this.tableElement.textContent = "";
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.addEventListener("click", function () {
        deleteGrade(data.id);
      });

      td1.textContent = data[i].name;
      td2.textContent = data[i].course;
      td3.textContent = data[i].grade;
      td4.appendChild(deleteButton);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      this.tableElement.appendChild(tr);
    }
  }
}
