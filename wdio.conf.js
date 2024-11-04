exports.config = {

    // before: async function () {
    //     browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     browser.addCommand('login', async function(username, password) {
    //         await browser.maximizeWindow();
    //         const usernameField = await $("//input[@name='username']");
    //         const passwordField = await $("//input[@name='password']");
    //         const loginButton = await $("//button[@type='submit']");
    
    //         await usernameField.setValue(username);
    //         await passwordField.setValue(password);
    //         await loginButton.click();
    //     });
    // },

    runner: 'local',
  
    specs: [
        './test/specs/**/*.js'
    ],
    
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,

    capabilities: [
        {maxInstances: 1,browserName: 'chrome'}
        //,{maxInstances: 1,browserName: 'MicrosoftEdge'}, 
        //{maxInstances: 1, browserName: 'safari',}
    ],

    
    logLevel: 'info',
    
    bail: 0,
   
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['visual'],
    
    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }, 

    
}
