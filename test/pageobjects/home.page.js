const { $ } = require('@wdio/globals')

class HomePage {
    get pageTitle() { return $('title'); }

    async getTitle() {
        return await this.pageTitle.getTitle();
    }
}

module.exports = new HomePage();
