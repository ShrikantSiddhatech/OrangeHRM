const { $ } = require('@wdio/globals')
const assert = require('assert'); 
const testData = require('../testData.json');
const {firstName} = testData.employees[0];

class PIM {
    get pimTab () {return $("//span[text()='PIM']");}
    get btnAddEmployee () {return $("//*[text()='Add Employee']");}
    get btnEmployeeList () {return $("//*[text()='Employee List']")}
    get inputFirstName () {return $("//input[contains(@class,'firstname')]");}
    get inputLastName () {return $("//input[contains(@class,'lastname')]");}
    get inputId () {return $("//input[@class='oxd-input oxd-input--active']");}
    get btnSave () {return $("//button[@type='submit']");}
    get inputFullName () {return $("//input[@placeholder='Type for hints...']");}
    get nameTab (){return $(`//div[contains(text(),${firstName})]`);}
    get noRecordsTab () {return $("//span[text()='No Records Found']");}
    
    async Pim () {
        await browser.pause(2000);
        await this.pimTab.click();
        await browser.pause(2000);
        await this.btnAddEmployee.click();
        await browser.pause(5000);
    }
    
    async AddEmployee (firstname, lastname) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await browser.pause(2000);
        await this.btnSave.click();
        await browser.pause(2000);
    }

    async CheckEmployee (fullname) {
        await this.btnEmployeeList.click();
        await browser.pause(2000);
        await this.inputFullName.setValue(fullname);
        await this.btnSave.click();
        await browser.pause(5000); 

        if(await this.nameTab.isExisting()) {
            console.log('Employee added successfully..');
        } else {
            throw new Error('Employee name tab not found, Please add employee again...');
        }
    }
}


module.exports = new PIM();