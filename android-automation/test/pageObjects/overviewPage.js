const waitHelper = require('../helpers/waitHelper.js');

class overviewPage {
    get missionOverviewPanel() {
        return $('//android.widget.ImageView[@content-desc="Complete Missions, Earn Rewards"]');
    }

    async clickMissionOverviewPanel(){
        await waitHelper.waitAndClickLocation(this.missionOverviewPanel, -230);
    }
    
    async visibleMissionOverviewPanel() {
        await waitHelper.waitUntilElementExist(this.missionOverviewPanel);
    }

    get enableNotificationBtn() {
        return $('//android.widget.Button[@content-desc="Enable Notification"]');
    }

    async clickEnableNotification(){
        await waitHelper.waitAndClick(this.enableNotificationBtn);
    }
    
    get scrimPanel() {
        return $('//android.view.View[@content-desc="Scrim"]');
    }

    async clickScrimPanel(){
        await waitHelper.waitAndClick(this.scrimPanel);
    }
    
    async visibleScrimPanel() {
        await waitHelper.waitUntilElementExist(this.scrimPanel);
    }

    get termsConditions(){
        return $('//android.view.View[@content-desc="Updated Terms & Conditions"]');
    }

    async checkTC(){
        await waitHelper.waitAndClick(this.checkTcBtn);
    }

    get checkTcBtn(){
        return $('//android.widget.CheckBox');
    }

    async continueTnC(){
        await waitHelper.waitAndClick(this.continueTnCBtn);
    }

    get continueTnCBtn(){
        return $('//android.widget.Button[@content-desc="Continue"]');
    }

}

const overviewPage = new overviewPage()
export default overviewPage