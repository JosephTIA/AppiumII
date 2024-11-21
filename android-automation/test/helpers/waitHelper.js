const { browser } = require ('webdriverio');

  async function waitUntilElementExist(element, timeout = 10000) { 
    element.waitForExist(timeout);
  }

  async function waitAndClick(element){
    await waitUntilElementExist(element);
    await element.click();
} 

async function waitAndClickLocation(element, offset){
    await waitUntilElementExist(element);
    await element.click({ y: offset });
} 

export {
    waitUntilElementExist,
    waitAndClick,
    waitAndClickLocation
  };