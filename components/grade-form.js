class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    preventDefault(event);
    console.log("Hi");

  }
}
