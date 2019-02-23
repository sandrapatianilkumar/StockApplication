/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('StockTicker.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'StockTicker.view.main.MainController',
        'StockTicker.view.main.MainModel',
        'StockTicker.view.main.List',
        'StockTicker.store.SearchStore',
        'StockTicker.view.stock.StockMain',
        'StockTicker.view.main.List',
        'StockTicker.view.stock.StockWindow'
    ],

    controller: 'main',
    viewModel: 'main',

    // ui: 'navigation',

    width:'100%',
    height:1000,
    layout:'border',
     items: [{
        region: 'north',     // position for region
        xtype: 'panel',
        height: 100,
        split: true,         // enable resizing
        margin: '0 5 5 5',
        layout:{
            type:'hbox',
            pack:'center',
            align:'middle'
        },
    defaults:{
        margin:'0 15 0 0 '
    },
    items: [{
        // fieldLabel: 'Last Name',
        xtype:'combo',
        reference:'searchcombo',
        typeAhead:true,
        emptyText:'Search for Stack...',
        hideLabel:true,
        name:'searchcombo',
        hideTrigger:true,
        store: {
            type:'SearchStore'
        },
        queryMode: 'local',
        width:'50%',
        displayField: 'name',
        valueField: 'value',
    }, {
        text: 'Go!',
        xtype:'button',
        formBind: true, //only enabled once the form is valid
        handler: function(btn) {
            var ref = this.up('app-main').getReferences(),
                    val = ref.searchcombo.getValue(),
                dataViewStore = Ext.getStore('DataViewStore');
                dataViewStore.clearFilter();
                    if(!Ext.isEmpty(val)){
                         dataViewStore.filterBy(function(r){
                        if(r.get('company')==val) {
                                return true;
                        }
                    });
                    }
           
        }
    }]
    },{
        region:'east',
        xtype: 'mainlist',
        margin: '5 0 0 5',
        width: 250,
        collapsible: true,   // make collapsible
        layout: 'fit'
    },{
        title: 'List of Stack Companies',
        region: 'center',     // center region is required, no width/height specified
        xtype: 'stockmain',
        layout: 'fit',
        margin: '5 5 0 0'
    }],

    
});
