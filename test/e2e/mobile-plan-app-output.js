var config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['mobilePlanApp'],
  'We have an app that outputs': function(browser) {
    browser.url(config.test_settings.default.launch_url + '/index.html');
    browser.waitForElementVisible('body');
    browser.expect.element('#output').text.to.contain("Please give me some input");
    browser.setValue('#dataPlan', '10');
    browser.setValue('#talkPlan', '5');
    browser.click('#searchPlans');
    browser.saveScreenshot(config.imgpath(browser) + 'mobile-plan-output.png');
    browser.expect.element('#output').text.to.contain("Oister, P3");    
    browser.end();
  }
};
