const waitHelper = require('../helpers/waitHelper.js');

class bottomNavBar {
    get overviewBtn() {
        return $('//android.widget.ImageView[@content-desc="Overview"]');
    }

    async clickOverview(){
        await waitHelper.waitAndClick(this.overviewBtn);
    }
    
    get discoverBtn() {
        return $('//android.widget.ImageView[@content-desc="Discover"]');
    }

    async clickDiscover(){
        await waitHelper.waitAndClick(this.discoverBtn);
    }
    
    get learnBtn() {
        return $('//android.widget.ImageView[@content-desc="Learn"]');
    }

    async clickLearn(){
        await waitHelper.waitAndClick(this.learnBtn);
    }
    
    get profileBtn() {
        return $('//android.widget.ImageView[@content-desc="Profile"]');
    }

    async clickProfile(){
        await waitHelper.waitAndClick(this.profileBtn);
    }
    
}

const bottomNavBar = new bottomNavBar()
export default bottomNavBar