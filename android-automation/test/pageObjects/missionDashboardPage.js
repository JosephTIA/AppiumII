const waitHelper = require('../helpers/waitHelper.js');

class missionDashboardPage {
    get backBtn() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[1]');
    }

    async clickBack(){
        await waitHelper.waitAndClick(this.backBtn);
    }

    get firstMissionCard() {
        return $('//android.widget.ScrollView/android.view.View[1]/android.widget.ImageView[1]');
    }

    async clickFirstMissionCard(){
        await waitHelper.waitAndClick(this.firstMissionCard);
    }
}

const missionDashboardPage = new missionDashboardPage()
export default missionDashboardPage