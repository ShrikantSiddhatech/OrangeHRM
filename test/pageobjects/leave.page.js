const { $ } = require('@wdio/globals')
const assert = require('assert');

class LeavePage {
    get leaveTab () {return $("//span[text()='Leave']");}
    get applyTab () {return $("//a[text()='Apply']");}
    get leaveType () {return $("//input[contains(@class,'firstname')]");}
    get downArrow () {return $("//*[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']");}
    //get selectOption () {return $("//span[text()='CAN - FMLA']");}
    get selectOption () {return $("//div[@class='oxd-select-dropdown --positon-bottom']");}
    get inputDate () {return $("//input[@placeholder='yyyy-dd-mm']");}
    get inputComment () {return $("//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical']");}
    get btnSave () {return $("//button[@type='submit']");}
    get leaveTypeTab () {return $("//div[text()='CAN - FMLA']");}
    
    
    async navigateToLeaveModule () {
        await this.leaveTab.click();
        await this.applyTab.click();
        await browser.pause(2000);
    }

    async applyForLeave (leaveType, fromDate, toDate) {
        await this.downArrow.click();
        await browser.pause(2000);

        for (const option of await this.selectOption) {
            const text = await option.getText();
            if (text === leaveType) {
                await option.click();
                return;
            }
        }

        //await this.selectOption.click();

        await this.inputDate[0].setValue(fromDate);
        await this.inputDate[1].setValue(toDate);
        await this.inputComment.setValue('Leave Application');
        await browser.pause(2000);
        await this.btnSave.click();
        await browser.pause(2000);
         
    }

    async verifyLeaveRequest (leaveType, fromDate, toDate) {
        await browser.pause(5000);
        if (await this.leaveTypeTab.isExisting()) {
            console.log('****************** Leave Status Found ************************');
        } else {
            throw new Error('****************** Leave Status Not Found ************************');
        }  
    }
}

module.exports = new LeavePage();