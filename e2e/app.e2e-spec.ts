import { AuraPage } from './app.po';

describe('Aura App', () => {
  let page: AuraPage;

  beforeEach(() => {
    page = new AuraPage();
  });

  it('should expect true to be true', () => {
    expect(true).toBe(true);
  });
});
