import { ExtranetPage } from './app.po';

describe('extranet App', function() {
  let page: ExtranetPage;

  beforeEach(() => {
    page = new ExtranetPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('extranet works!');
  });
});
