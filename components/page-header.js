class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }
  updateAverage(newAverage) {
    console.log(`Update Average ${newAverage}`);
    var badge = this.headerElement.querySelector('.badge')
    badge.textContent = newAverage;
  }
}
