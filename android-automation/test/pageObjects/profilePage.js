const waitHelper = require('../helpers/waitHelper.js');

class profilePage {
    get logoutBtn() {
        return $('//android.widget.ImageView[@content-desc="Log Out"]');
    }

    async clickLogout(){
        await waitHelper.waitAndClick(this.logoutBtn);
    }

    get dialogLogoutBtn() {
        return $('//android.widget.Button[@content-desc="Log Out"]');
    }

    async clickDialogLogout(){
        await waitHelper.waitAndClick(this.dialogLogoutBtn);
    }
}

const profilePage = new profilePage()
export default profilePage