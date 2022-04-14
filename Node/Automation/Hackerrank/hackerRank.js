const puppeteer = require("puppeteer");
// let { email, password } = require('./secrets.js');
let email = "1903044@kiit.ac.in";
let password = "";

let curTab;
let browserOPenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
  //chrome://version/
  // executablePath:
  //   "//Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
// Let's try .....
// Headless :- by default ye true hota h, agr false na kre to background m kam hoga or hme dikhega nhi ya hmara page redirect nhi hoga
// Default viewport :- for screen size, agr null nhi krenge to kisi specific size pr window open hogi
// Args :- jo hmara output h vo maximum means full screen pr ho...
// And jo comment m h chrome version use chrome m type krne pe hme executable path milega jise program m copy krke output chrome browser m khol skte h ..... Otherwise vo chromium m hota h......

// // Note :- This data may be not fully correct
browserOPenPromise //fulfill
  .then(function (browser) {
    console.log("browser is open");
    // console.log(browser);
    //An array of all open pages inside the Browser.
    //returns an array with all the pages in all browser contexts
    let allTabsPromise = browser.pages();
    return allTabsPromise;
  })
  .then(function (allTabsArr) {
    curTab = allTabsArr[0];
    console.log("new tab");
    //URL to navigate page to
    let visitingLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromise;
  })
  .then(function (data) {
    // console.log(data);
    console.log("Hackerrank login page opened");
    //selector(where to type), data(what to type)
    let emailWillBeTypedPromise = curTab.type("input[name='username']", email);
    return emailWillBeTypedPromise;
  })

  .then(function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = curTab.type("input[type='password']", password);
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    console.log("password has been typed");
    let willBeLoggedInPromise = curTab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise;
  })
  .then(function () {
    console.log("logged into hackerrank successfully");
    //waitAndClick will wait for the selector to load , and then click on the node
    let algorithmTabWillBeOPenedPromise = waitAndClick(
      "div[data-automation='algorithms']"
    );
    return algorithmTabWillBeOPenedPromise;
  })
  .then(function () {
    console.log("algorithm pages is opened");
  })
  .catch(function (err) {
    console.log(err);
  });
  // waitAndClick->ka improtant hai ki butoon pey click kaneye kye baad wait kiya for response
function waitAndClick(algoBtn) {
  let waitClickPromise = new Promise(function (resolve, reject) {
    let waitForSelectorPromise = curTab.waitForSelector(algoBtn);
    waitForSelectorPromise
    // promise fullfill of ->waitClickPromise
      .then(function () {
        console.log("algo btn is found");
        let clickPromise = curTab.click(algoBtn);
        return clickPromise;
      })
      // promise fullfill of ->clickPromise
      .then(function () {
        console.log("algo btn is clicked");
        // resolve();
        // it will resolve the prromise one after other
      })
      .catch(function (err) {
        console.log(err);
      })
  });

  // waitClickPromise.then(function () {
  //   console.log("inside then of waitclick");
  // });
  return waitClickPromise;
}

function questionSolver(url, idx) {
  return new Promise(function (resolve, reject) {
    let fullLink = `https://www.hackerrank.com${url}`;
    let goToQuesPagePromise = curTab.goto(fullLink);
    goToQuesPagePromise
      .then(function () {
        console.log("question opened");
        //tick the custom input box mark
        let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
        return waitForCheckBoxAndClickPromise;
      })
      .then(function () {
        //select the box where code will be typed
        let waitForTextBoxPromise = curTab.waitForSelector(".custominput");
        return waitForTextBoxPromise;
      })
      .then(function () {
        let codeWillBeTypedPromise = curTab.type(".custominput", answer[idx]);
        return codeWillBeTypedPromise;
      })
      .then(function () {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
      })
      .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("a");
        return aKeyPressedPromise;
      })
      .then(function () {
        let xKeyPressedPromise = curTab.keyboard.press("x");
        return xKeyPressedPromise;
      })
      .then(function () {
        let ctrlIsReleasedPromise = curTab.keyboard.up("Control");
        return ctrlIsReleasedPromise;
      })
      .then(function () {
        //select the editor promise
        let cursorOnEditorPromise = curTab.click(
          ".monaco-editor.no-user-select.vs"
        );
        return cursorOnEditorPromise;
      })
      .then(function () {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
      })
      .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("A",{delay:100});
        return aKeyPressedPromise;
      })
      .then(function () {
        let vKeyPressedPromise = curTab.keyboard.press("V",{delay:100});
        return vKeyPressedPromise;
      })
      .then(function () {
        let controlDownPromise = curTab.keyboard.up("Control");
        return controlDownPromise;
      })
      .then(function () {
        let submitButtonClickedPromise = curTab.click(".hr-monaco-submit");
        return submitButtonClickedPromise;
      })
      .then(function () {
        console.log("code submitted successfully");
        resolve();
      })
      .catch(function (err) {
        reject(err);
      });
  });
}