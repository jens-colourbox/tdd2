var config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['mobilePlanApp'],
  'We have a web site that takes input': function(browser) {
    browser
      .url(config.test_settings.default.launch_url + '/index.html')
      .waitForElementVisible('body')
      .assert.title('Mobile Plan')
      .saveScreenshot(config.imgpath(browser) + 'here-we-are.png')
      .clearValue('#dataPlan')
      .setValue('#dataPlan', '10')
      .saveScreenshot(config.imgpath(browser) + 'data-plan-input.png')
      .clearValue('#talkPlan')
      .setValue('#talkPlan', '2')
      .saveScreenshot(config.imgpath(browser) + 'talk-plan-input.png')
      .end();
  }
};
