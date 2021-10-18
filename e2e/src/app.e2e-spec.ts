import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/dia');
    });
    it('should say dia', () => {
      expect(page.getParagraphText()).toContain('dia');
    });
  });
});
