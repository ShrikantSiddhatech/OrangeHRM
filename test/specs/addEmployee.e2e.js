const LoginPage = require('../pageobjects/login.page')
const PIM = require('../pageobjects/pim.page')
const testData = require("../testData.json");

describe('My Login application', () => {
    testData.credentials.forEach((login) => {
        it('Login', async () => {
            await LoginPage.open();
            await LoginPage.login(login.username, login.password);
        });
    });
    
    testData.employees.forEach((pim) => {
        it(`Should add new employee: ${pim.firstName} ${pim.lastName}`, async () => {
            await PIM.Pim();
            await PIM.AddEmployee(pim.firstName, pim.lastName, pim.id);
            await PIM.CheckEmployee(pim.firstName, pim.fullName);
        });
    });
});

