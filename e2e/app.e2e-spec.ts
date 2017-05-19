import { PortFolioPage } from './app.po';

describe('port-folio App', () => {
  let page: PortFolioPage;

  beforeEach(() => {
    page = new PortFolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
