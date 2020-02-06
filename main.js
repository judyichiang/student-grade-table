var header = document.querySelector("header")
var tbody = document.querySelector("tbody");



const gradeTable = new GradeTable(tbody);
const app = new App(gradeTable);
app.start();

const pageHeader = new PageHeader(header);
