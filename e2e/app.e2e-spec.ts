import { PruebamaterialPage } from './app.po';

describe('pruebamaterial App', () => {
  let page: PruebamaterialPage;

  beforeEach(() => {
    page = new PruebamaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
