require('./plans.json');
const MobilePlanRepo = require('./mobile-plan-repo');

class MobilePlanApp {
  constructor() {
    this.mobilePlanRepo = new MobilePlanRepo();
    this.mobilePlanRepo.fetchAllPlans('/plans.json');

    this.inputs = { dataPlan: null, talkPlan: null };
    this.output = {};

    //do some quick and dirty DOM stuff
    this.inputs.dataPlan = document.querySelector('#dataPlan');
    this.inputs.talkPlan = document.querySelector('#talkPlan');
    document.querySelector('#searchPlans').addEventListener('click', this.searchMobilePlansController.bind(this));

    this.output.element = document.querySelector('#output');
    this.output.update = (mobilePlanDescription) => {
      this.output.element.innerHTML = mobilePlanDescription;
    }
  }

  searchMobilePlansController() {
    let data = this.inputs.dataPlan.value;
    let talk = this.inputs.talkPlan.value;
    let mobilePlanDescription = 'nothing';
    let plan = this.mobilePlanRepo.searchForBestMobilePlan(data, talk);
    if(plan !== null) {
      mobilePlanDescription = `${plan.company}, ${plan.plan}`
    }
    this.output.update(mobilePlanDescription); 
  }

};

module.exports = MobilePlanApp;