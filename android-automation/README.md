# IA Mobile App UI Testing
### Introduction
This test project is using the following stack/framework/tool to perform Android mobile test:
1. Appium
2. JavaScript
3. Allure Reporting Tool
4. Nodejs
5. Android Studio SDK
6. Appium Inspector
7. WebdriverIO
8. Mocha

Test project design is using POM structure.

### Test Environment and Setup
This project is meant to run on local machine. It was design/develop on Windows.

<table>
  <tr>
    <th>SUT</th>
    <td>IA App</td>
  </tr>
  <tr>
    <th>Mobile Platform</th>
    <td>Android</td>
  </tr>
  <tr>
    <th>Version</th>
    <td> </td>
  </tr>
  <tr>
    <th>Device</th>
    <td>Mobile</td>
  </tr>
</table>

### Prerequisite
1. Install the following:
   1. [Nodejs](https://nodejs.org/en/download/current)
   2. [Android Studio SDK](https://developer.android.com/studio)
      1. SDK Platform - Android API 34 (default)
      2. Android SDK Command-line Tool
      3. Android Emulator
      4. Android SDK Platform-tools
      5. HAXM installer (better performance, only on Intel, AMD processor can ignore)
   3. [OpenJDK 20 (or above)](https://jdk.java.net/archive/)
   4. Appium (using npm) `npm install -g appium`
   5. [Appium Inspector](https://github.com/appium/appium-inspector)
   6. UIAutomator2 `appium driver install uiautomator2`
2. Configure Environment Variables
   1. `ANDROID_HOME` (eg. C:\Users\<youruser>\AppData\Local\Android\Sdk)
   2. `ANDROID_SDK_ROOT` (%ANDROID_HOME%)
   3. `JAVA_HOME` (eg. C:\Program Files\OpenJDK\jdk-20.0.2)
   4. `PATH` (may vary depending on your machine setup)
      1. C:\Program Files\OpenJDK\jdk-20.0.2\bin
      2. %ANDROID_HOME%\emulator
      3. %ANDROID_HOME%\tools
3. You may install Appium Doctor to quickly verify your environment setup: `npm install @appium/doctor -g`
4. Create Android device using Android Studio.
5. Install the app into test device.

### Run Test
1. Clone this repo to your local machine.
2. Open as a project using IDE.
3. Open Android Studio SDK.
4. If you haven't create a virtual device, use Device Manager to create one, make sure the specs same as the capabilities defined.
5. Start your virtual Android device.
6. Open a terminal from your local directory.
7. Run `npx wdio wdio.conf.js`

### TODO
1. Improve the flakiness of the current A/B test steps.
2. Failover to ensure the next test can be continued after the current test encounters error.
3. Integrate a more concise and human-readable test report framework:
   1. Allure
4. Implement test data cleanup logic.
5. Cleanup the entire repository.
6. Support parallel test, possibility:
   1. Selenium Grid

### References
1. https://medium.com/@wahyunitas/android-automation-testing-with-appium-adb8d9f6193f
2. https://github.com/sariwahyunita/android-appium-instagram-apps/tree/main
3. https://webdriver.io/docs/gettingstarted
4. https://appium.io/docs/en/2.2/guides/caps/
5. https://csv.js.org/parse/
