Ext.define('StockTicker.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'StockTicker.model.Personnel',

    data: { items: [
        { name: 'Honey Well', stockval:'109.25'},
        { name: 'Infosys Pvt Ltd',  stockval:'56.21' },
        { name: 'FaceBook Inc',   stockval:'60.52' },
        { name: 'Microsoft Corporation', stockval:'5.90' },
        { name: 'Fulcrum', stockval:'35.44' },
        { name: 'Deliote',  stockval:'66.67' },
        { name: 'Dell',   stockval:'42.92' },
        { name: 'Qulcumm', stockval:'85.69' },
        { name: 'Accolite',   stockval:'75.21' },
        { name: 'Walking Tree Technologies', stockval:'15.36' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
