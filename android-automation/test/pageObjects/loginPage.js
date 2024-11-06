const waitHelper = require('../helpers/waitHelper.js');

class loginPage {
    get loginBtn() {
        return $('xpath://android.widget.Button[@content-desc="Log In"]');
    }

    async clickLogin(){
        await waitHelper.waitAndClick(this.loginBtn);
    }
    
    get emailField() {
        return $('xpath://android.widget.EditText[1]');
    }

    async clickEmail(){
        await waitHelper.waitAndClick(this.emailField);
    }

    get passwordField() {
        return $('xpath://android.widget.EditText[2]');
    }
    
    async clickPassword(){
        await waitHelper.waitAndClick(this.passwordField);
    }
}

const loginPage = new bottomNavBar()
export default loginPage