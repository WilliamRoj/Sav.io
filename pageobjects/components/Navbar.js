import Base from '../Base'

class Navbar extends Base {
    get ourServicesLink() {
        return $('//*[@id="1997267647"]/ul/li[2]/a/span')
    }
    get ourServices() {
        return $('//*[@id="1992728279"]/h2/span')
    }

    clickOurServices() {
        this.ourServicesLink.click()
    }
}

export default new Navbar()
