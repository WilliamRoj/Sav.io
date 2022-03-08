import App from '../pageobjects/App'

describe('Smoke Test - Make sure all pages load', () => {
    App.openHomepage()
    $('#\31 467810594').waitForExist()
})