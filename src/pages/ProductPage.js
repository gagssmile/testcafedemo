import { Selector, t } from 'testcafe';

class ProductPage{
    constructor(){
      
        this.expectedElePostLogin = Selector('title'); 
        this.expectedEletext = 'Swag Labs';
    }

    
}
export default new ProductPage();