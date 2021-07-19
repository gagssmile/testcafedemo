import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.usernameInput = Selector('input[name=user-name][type=text]');
        this.passwordInput = Selector('input[name=password][type=password]');
        this.loginButton = Selector('input[name=login-button][type=submit]');
        this.invalidLoginError = Selector('h3[data-test=error]')
    }

    async setUserName(userName){
     await t
     .typeText(this.usernameInput, userName)
    }
    
    async setPassword(password){
        await t
        .typeText(this.passwordInput, password)
       }

    async clickLoginButton(){
       await t
       .click(this.loginButton);
    }
}
export default new LoginPage();