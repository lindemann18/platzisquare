import { PlatzisquarePage } from './app.po';

describe('platzisquare App', function() {
  let page: PlatzisquarePage;

  beforeEach(() => {
    page = new PlatzisquarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
