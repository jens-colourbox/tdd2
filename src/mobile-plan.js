class MobilePlan {
  constructor(valueObject = {}) {
    let { id = null, company = null, plan = null, data = null, hours = null, price = null } = valueObject;
    this.id = id;
    this.company = company;
    this.plan = plan;
    this.data = data;
    this.hours = hours;
    this.price = price;
  }
};

module.exports = MobilePlan;