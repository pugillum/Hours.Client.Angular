import { HoursClientAngularPage } from './app.po';

describe('hours-client-angular App', () => {
  let page: HoursClientAngularPage;

  beforeEach(() => {
    page = new HoursClientAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
