var header = document.querySelector("header");
var contHeader = document.querySelector("cont-header");
var rowAvg = document.querySelector("row-avg");
var colAvg = document.querySelector("col-avg");
var h3Elem = document.querySelector("h3");
var badgeElem = document.querySelector("badge");


var tbody = document.querySelector("tbody");

var gradeTable = new GradeTable(tbody);
var pageHeader = new PageHeader(header);

var app = new App(gradeTable, pageHeader);
app.start();
