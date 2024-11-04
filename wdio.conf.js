exports.config = {
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
