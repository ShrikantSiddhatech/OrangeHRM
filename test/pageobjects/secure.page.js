const { $ } = require('@wdio/globals')
const Page = require('./page');

class SecurePage extends Page {
   
    get flashAlert () {
        return $('#flash');
    }

    async waitForFlashAlert() {
        await this.flashAlert.waitForExist({ timeout: 5000 });
        await this.flashAlert.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = new SecurePage();
