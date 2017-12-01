const MobilePlan = require('../../src/mobile-plan');
const MobilePlanRepo = require('../../src/mobile-plan-repo');

test('there is such a thing as a mobile plan repo', () => {
  const mobilePlanRepo = new MobilePlanRepo();
  expect(mobilePlanRepo).toBeDefined();
});

test('we can pass a url to the mobile plan repo fetchAllPlans method', () => {
  const url = 'foo/bar.json';
  const mobilePlanRepo = new MobilePlanRepo();
  try {
    mobilePlanRepo.fetchAllPlans(url);
  } catch (error) {

  }
  expect(mobilePlanRepo.url).toBe(url);
});

test('we can set the mobile plans array in repo', () => {
  const testPlans = [
    {
      "id": 1,
      "company": "Telmore",
      "plan": "Home",
      "data": 20,
      "hours": 20,
      "price": 129
    },
    {
      "id": 2,
      "company": "Telmore",
      "plan": "Play",
      "data": 30,
      "hours": 15,
      "price": 129
    },
    {
      "id": 2,
      "company": "Oister",
      "plan": "P1",
      "data": 1,
      "hours": 2,
      "price": 59
    }
  ];
  const expectedPlansInRepo = [];  
  testPlans.forEach(props => {
    expectedPlansInRepo.push(new MobilePlan(props));
  });
  
  const mobilePlanRepo = new MobilePlanRepo();
  mobilePlanRepo.mobilePlans = testPlans;
  
  expect(mobilePlanRepo.mobilePlans).toEqual(expect.arrayContaining(expectedPlansInRepo));
  
});

test('we can search for the cheapest mobile plans', () => {
  const testPlans = [
    {
      "id": 1,
      "company": "Telmore",
      "plan": "Home",
      "data": 20,
      "hours": 20,
      "price": 129
    },
    {
      "id": 2,
      "company": "Telmore",
      "plan": "Play",
      "data": 30,
      "hours": 15,
      "price": 129
    },
    {
      "id": 2,
      "company": "Oister",
      "plan": "P1",
      "data": 1,
      "hours": 2,
      "price": 59
    }
  ];

  const mobilePlanRepo = new MobilePlanRepo();
  mobilePlanRepo.mobilePlans = testPlans;

  expect(mobilePlanRepo.mobilePlans.length).toBe(3);

  let minData = 10;
  let minTalk = 5;
  let cheapestPlan = mobilePlanRepo.searchForBestMobilePlan(minData, minTalk);
  expect(cheapestPlan.id).toBe(2);
});
