class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.deleteGrade;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    console.log("Update Grades:", grades);
    this.tableElement.textContent = "";
    var hide = document.querySelector('p')
    console.log(`hide: ${hide}`)

    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }

    if (grades.length === 0) {
      hide.classList.remove('d-none');

    } else {
      hide.classList.add('d-none');
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    console.log("renderGradeRow:", data);

    // this.tableElement.textContent = "";

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");

    td1.textContent = data.name;
    td2.textContent = data.course;
    td3.textContent = data.grade;

    // deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "fas fa-trash")
    editButton.setAttribute("class", "fas fa-edit")

    td4.appendChild(deleteButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    this.tableElement.appendChild(tr);

    editButton.addEventListener("click", function () {
      console.log("hi")
    })

    deleteButton.addEventListener("click", function () {
      deleteGrade(data.id);
    });


  }
}
