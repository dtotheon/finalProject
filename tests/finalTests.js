var pageObject = {}

var finalAssets = require('../testAssets/finalAssets')

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.finalPO()
        pageObject.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Creating A Character': browser => {
        pageObject
            .api.resizeWindow(1920, 1080)
        pageObject
            .login()
        pageObject
            .makeCharacter(finalAssets)
    }
}