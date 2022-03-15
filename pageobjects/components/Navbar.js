import Base from '../Base'

class Navbar extends Base {
    get ourServicesLink() {
        return $('//*[@id="1997267647"]/ul/li[2]/a/span')
    }
    get ourServices() {
        return $('//*[@id="1992728279"]/h2/span')
    }

    get contactLink() {
        return $('//*[@id="1275773277"]/ul/li[3]/a/span')
    }

    get ourTeamLink() {
        return $('//*[@id="1997267647"]/ul/li[4]/a/span')
    }

    get joinOurTeamLink() {
        return $('//*[@id="1997267647"]/ul/li[5]/a/span')
    }

    clickOurServices() {
        this.ourServicesLink.click()
    }

    clickContactLink() {
        this.contactLink.click()
    }

    clickOurTeamLink() {
        this.ourTeamLink.click()
    }

    clickJoinOurTeam() {
        this.joinOurTeamLink.click()
    }

}

export default new Navbar()
