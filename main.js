var header = document.querySelector("header");

var tbody = document.querySelector("tbody");
var hidden = document.querySelector("p");

var form = document.querySelector("form")

var gradeTable = new GradeTable(tbody, hidden);
var pageHeader = new PageHeader(header);

var gradeForm = new GradeForm(form);

var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
