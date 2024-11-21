const waitHelper = require('../helpers/waitHelper.js');

class missionDetailsPage {
    get backBtn() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button');
    }

    async clickBack(){
        await waitHelper.waitAndClick(this.backBtn);
    }

    get missionTitleText() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]');
    }

}

const missionDetailsPage = new missionDetailsPage()
export default missionDetailsPage