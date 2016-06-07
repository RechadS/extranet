export class ExtranetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('extranet-app h1')).getText();
  }
}
