const MobilePlan = require('../../src/mobile-plan');

test('there is such a thing as a mobile plan', () => {
  const mobilePlan = new MobilePlan();
  expect(mobilePlan).toBeDefined();
});

test('a mobile plan has props "id", "company", "plan", "data", "hours" and "price"', () => {
  const mobilePlan = new MobilePlan();
  ["id", "company", "plan", "data", "hours", "price"].forEach((propName) => {
    expect(mobilePlan[propName]).toBeDefined();
  });
});

test('we can pass all prop values to the mobile plan contructor', () => {
  const planValues = {
    "id": 2,
    "company": "Telmore",
    "plan": "Play",
    "data": 30,
    "hours": 15,
    "price": 129
  };
  const mobilePlan = new MobilePlan(planValues);
  Object.keys(planValues).forEach(propName => {
    expect(mobilePlan[propName]).toBe(planValues[propName]);
  });
});
