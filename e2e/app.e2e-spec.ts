import { XsolveAppPage } from './app.po';

describe('xsolve-app App', () => {
  let page: XsolveAppPage;

  beforeEach(() => {
    page = new XsolveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
