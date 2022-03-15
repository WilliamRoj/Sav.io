import App from '../../../pageobjects/App'
import Navbar from '../../../pageobjects/components/Navbar'

describe('Smoke Test - Make sure all pages load', () => {
    it('Should load home page form', () => {
        App.openHomepage()
        $('//*[@id="1467810594"]').waitForExist()
    })

    it('Should click on hamburger icon then click on Our Services link', () => {
        Navbar.clickOurServices()
        Navbar.ourServices.waitForExist()
    })

    
})
