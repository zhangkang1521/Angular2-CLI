import { Angular2CLIPage } from './app.po';

describe('angular2-cli App', function() {
  let page: Angular2CLIPage;

  beforeEach(() => {
    page = new Angular2CLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
