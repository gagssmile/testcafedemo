import { ClientFunction } from "testcafe"
import LoginPage from "../pages/Loginpage"
import Productpage from "../pages/Productpage"

const loginurl = 'https://www.saucedemo.com/'
const productUrl='https://www.saucedemo.com/inventory.html'

const getUrl = ClientFunction(() => window.location.href);

fixture('Product Page')
.page(loginurl)
.beforeEach(async t=>{

    LoginPage.setUserName('standard_user');
    LoginPage.setPassword('secret_sauce');
    LoginPage.clickLoginButton();

    await t.wait(5000);

});

test('Loading Product page', async t =>{

    await t
    .expect(getUrl()).contains(productUrl)
    .expect(Productpage.expectedElePostLogin.innerText).contains(Productpage.expectedEletext);

});