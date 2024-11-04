const LoginPage = require('../pageobjects/login.page')
const LeavePage = require('../pageobjects/leave.page')
const testData = require("../testData.json"); 
const { expect } = require('assert');

describe('Leave Management Tests', () => {
    it('Login', async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
    });

    testData.leaveRequests.forEach((leave) => {
        it(`should apply leave of type: ${leave.leaveType} from ${leave.fromDate} to ${leave.toDate}`, async () => {
            await LeavePage.navigateToLeaveModule();
            await LeavePage.applyForLeave(leave.leaveType, leave.fromDate, leave.toDate);

            const leaveRequest = await LeavePage.verifyLeaveRequest(leave.leaveType, leave.fromDate, leave.toDate);
            expect(leaveRequest).to.be.true;       
        });
    });
});
