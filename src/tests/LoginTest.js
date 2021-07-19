import { ClientFunction } from "testcafe"
import LoginPage from "../pages/Loginpage"
import Productpage from "../pages/Productpage"

const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page')
.page(url)

test('Loading login page', async t =>{

    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPage.loginButton.exists).ok();

});

test('Sucessful Login', async t =>{

    LoginPage.setUserName('standard_user');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickLoginButton();
    await t.wait(5000);
    await t.expect(Productpage.expectedElePostLogin.innerText).contains(Productpage.expectedEletext);

});

test('Invalid UserName', async t =>{

    LoginPage.setUserName('standard_user1');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickLoginButton();
    await t.wait(5000);
    await t.expect(LoginPage.invalidLoginError.innerText).contains('Epic sadface: Username and password do not match any user in this service')

});

test('Invalid Password', async t =>{

    LoginPage.setUserName('standard_user');
    LoginPage.setPassword('secret_sauce1');
    LoginPage.clickLoginButton();
    await t.wait(5000);
    await t.expect(LoginPage.invalidLoginError.innerText).contains('Epic sadface: Username and password do not match any user in this service')

});