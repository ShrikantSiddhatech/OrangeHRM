const { browser } = require('@wdio/globals')

module.exports = class Page {
    open () {
        return browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
}
