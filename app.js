/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'StockTicker.Application',

    name: 'StockTicker',

    requires: [
        // This will automatically load all classes in the StockTicker namespace
        // so that application classes do not need to require each other.
        'StockTicker.*'
    ],

    // The name of the initial view to create.
    mainView: 'StockTicker.view.main.Main'
});
