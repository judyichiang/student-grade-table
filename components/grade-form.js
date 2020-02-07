class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.formElement.addEventListener("submit",func); line 4

  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    preventDefault(event);
    console.log("Hi");

    var formData = new FormData(event.target)

    var name = formData.get("name");
    var course = formData.get("course");
    var grade = formData.get("grade");
    console.log(name, course, grade);

    event.target.reset();

  }
}
