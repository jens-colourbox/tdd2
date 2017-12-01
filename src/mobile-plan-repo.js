const MobilePlan = require('./mobile-plan');

class MobilePlanRepo {
  constructor() {
    this._mobilePlans = [];
  }

  set mobilePlans(mobilePlanDataArray) {
    this._mobilePlans = [];
    mobilePlanDataArray.forEach(mobilePlanData => {
      this._mobilePlans.push(new MobilePlan(mobilePlanData));
    });
  }

  get mobilePlans() {
    return this._mobilePlans;
  }

  fetchAllPlans(url) {
    return new Promise((resolve, reject) => {
      this.url = url;
      fetch(this.url)
        .then(response => response.json())
        .then(mobilePlanDataArray => {
          this.mobilePlans = mobilePlanDataArray;
          resolve();
        });

    })
  }

  searchForBestMobilePlan(minData, minTalk) {
    let bestMobilePlan = null;
    if (this.mobilePlans.length > 0) {
      let data = 0;
      let talk = 0;
      this.mobilePlans.forEach((mobilePlan) => {
        if (mobilePlan.data === 'inf') {
          data = minData;
        } else {
          data = mobilePlan.data;
        }
        if (mobilePlan.hours === 'inf') {
          talk = minTalk;
        } else {
          talk = mobilePlan.hours;
        }
        if (data >= minData && talk >= minTalk) {
          if (bestMobilePlan === null || bestMobilePlan.price > mobilePlan.price) {
            bestMobilePlan = mobilePlan;
          } else if (bestMobilePlan.price === mobilePlan.price) {
            if (bestMobilePlan.data < mobilePlan.data) {
              bestMobilePlan = mobilePlan;
            } else if (bestMobilePlan.data === mobilePlan.data && bestMobilePlan.hours < mobilePlan.hours) {
              bestMobilePlan = mobilePlan;
            }
          }
        }
      });
    }
    return bestMobilePlan;
  }

}

module.exports = MobilePlanRepo;