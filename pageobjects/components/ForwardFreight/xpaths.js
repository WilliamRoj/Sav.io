import Base from '../../Base'

class Xpaths extends Base {
    get homePageTitle() {
        return $('//*[@id="1467810594"]')
    }

    get ourServicesTitle() {
        return $('//*[@id="1992728279"]/h2/span')
    }

    get contactPageTitle() {
        return $('//*[@id="1612069173"]/div/font/span')
    }

    get ourTeamPageTitle() {
        return $('//*[@id="1497197913"]/h2/span')
    }

    get joinOurTeamTitle() {
        return $('//*[@id="1100811375"]/h1/font')
    }
}

export default new Xpaths