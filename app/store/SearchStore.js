Ext.define('StockTicker.store.SearchStore', {
    extend: 'Ext.data.Store',

    alias: 'store.SearchStore',

    fields:['name','value'],

    data: { items: [
        { name: 'Honey Well', value:'honeywell' },
        { name: 'Infosys Pvt Ltd',  value:'infosys' },
        { name: 'FaceBook Inc',   value:'facebook' },
        { name: 'Microsoft Corporation', value:'microsoft' },
        { name: 'Fulcrum', value:'fulcrum' },
        { name: 'Deliote',  value:'deliote' },
        { name: 'Dell',   value:'dell' },
        { name: 'Qulcumm', value:'qulcumm' },
        { name: 'Accolite',   value:'accolite' },
        { name: 'Walking Tree Technologies', value:'wtc' }

    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        autoLoad:true
    }
});
