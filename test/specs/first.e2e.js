// test/specs/example.e2e.js
describe('My WebdriverIO Test', () => {
    it('should open a website and verify the title', async () => {
        //await browser.url('https://bookonwardticket.com/dummy-ticket');
        await browser.url('https://toponwardticket.com/dummy-ticket');
        await browser.maximizeWindow();
        const title = await browser.getTitle();
        //expect(title).toBe('Dummy Ticket – Book Onward Ticket');
        expect(title).toContain('Top Onward Ticket');
    });

    it('Personal Details', async () => {
        //const button = await browser.$("//span[@class='menu-text' and text()='Hotels']");
        const selectAlias = await browser.$("//select[@name='dummy-ticket-menu-title-1']");
        const inputFirstName = await browser.$("//input[@name='dummy-ticket-text-first-name-1']");
        const inputLastName = await browser.$("//input[@name='dummy-ticket-text-last-name-1']");
        const selectPassenger = await browser.$("//select[@name='dummy-ticket-menu-passenger']");
        const inputEmail = await browser.$("//input[@name='dummy-ticket-customer-email']");
        const radioFlight = await browser.$("//span[(text()='One Way')]");
        const sourceSelect = await browser.$("//span[contains(@id,'from')]");
        const searchInput = await browser.$("//input[@class='select2-search__field']");
        const sourceOption = await browser.$("//li[contains(@id,'Pune')]");
        const destinationSelect = await browser.$("//span[contains(@id,'to')]");
        const destinationOption = await browser.$("//li[contains(@id,'Mumbai')]");
        const dateInput = await browser.$("//input[@name='dummy-ticket-date-departure']");
        const radioPaymentMethod = await browser.$("//span[(text()='PayPal')]");
        const submitButton = await browser.$("//button[@id='submit']");

        //Personal Details
        await selectAlias.selectByAttribute('value','Mr');
        await inputFirstName.setValue('Shrikant');
        await inputLastName.setValue('Dabhe');
        await selectPassenger.selectByAttribute('value','1');  
        await inputEmail.setValue('abc@gmail.com');
        await radioFlight.click();
        
        //Select Source
        await sourceSelect.click();
        await searchInput.setValue('Pune');
        await sourceOption.click();

        //Select Destination
        await destinationSelect.click();
        await searchInput.setValue('Mumbai');
        await destinationOption.click();

        //Travelling date
        await dateInput.setValue('22/11/2024');

        //Payment Method
        await radioPaymentMethod.click();

        //Book Flight 
        await submitButton.click();
    });

    it('Payment Page', async () => {

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('paypal.com'),{
              timeout: 10000,
              timeoutMsg: 'Expected page title to change after 10s'
            }
        );

        
        const selectCountry = await browser.$("//option[(text()='India')]");
        const inputEmail = await browser.$("//input[@id='email']");
        const inputPhone = await browser.$("//input[@data-testid='phone']");

        //Payment Details
        await selectCountry.click();
        await inputEmail.setValue('abc@gmail.com');
        await inputPhone.setValue('8877665533');
    });  
});