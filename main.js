var header = document.querySelector("header");

var tbody = document.querySelector("tbody");

var gradeTable = new GradeTable(tbody);
var pageHeader = new PageHeader(header);

var app = new App(gradeTable, pageHeader);
app.start();
