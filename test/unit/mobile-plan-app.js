const MobilePlanApp = require('../../src/mobile-plan-app');

test('there is such a thing as a mobile plan app', () => {
  const mobilePlanApp = new MobilePlanApp();
  expect(mobilePlanApp).toBeDefined();
});
