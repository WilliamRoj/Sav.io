import App from '../../../pageobjects/App'
import Navbar from '../../../pageobjects/components/ForwardFreight/Navbar'
import Xpaths from '../../../pageobjects/components/ForwardFreight/xpaths'

describe('Smoke Test - Make sure all pages load', () => {
    it('Should load home page form', () => {
        App.openHomepage()
        Xpaths.homePageTitle.waitForExist()
    })

    it('Should click and load Our Services link', () => {
        Navbar.clickOurServices()
        Xpaths.ourServicesTitle.waitForExist()
    })

    it('Should click and load Contact link', () => {
        Navbar.clickContactLink()
        Xpaths.contactPageTitle.waitForExist()
    })

    it('Should click and load Our Team link', () => {
        Navbar.clickOurTeamLink()
        Xpaths.ourTeamPageTitle.waitForExist()
    })

    it('Should click and load Join Our Team link', () => {
        Navbar.clickJoinOurTeam()
        Xpaths.joinOurTeamTitle.waitForExist()
    })
})
