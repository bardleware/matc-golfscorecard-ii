import { MATCGolfIiPage } from './app.po';

describe('matc-golf-ii App', () => {
  let page: MATCGolfIiPage;

  beforeEach(() => {
    page = new MATCGolfIiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
