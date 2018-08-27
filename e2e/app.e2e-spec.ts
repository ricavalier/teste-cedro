import { TesteCedroPage } from './app.po';

describe('teste-cedro App', function() {
  let page: TesteCedroPage;

  beforeEach(() => {
    page = new TesteCedroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
