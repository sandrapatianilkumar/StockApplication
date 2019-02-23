Ext.define('StockTicker.store.DataViewStore', {
    extend: 'Ext.data.Store',

    alias: 'store.DataViewStore',

    fields:['src','caption','company'],
    storeId:'DataViewStore',
    data: { items: [
        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Honey Well',company:'honeywell',range:'1.650-8.320',open:'6.30',prevclose:'6.290',marketcap:'5.058',letter:'H' },
        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Infosys Pvt Ltd',company:'infosys',range:'2.450-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'I' },
        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'FaceBook Inc',company:'facebook',range:'3.450-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'F' },
        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Microsoft Corporation',company:'microsoft',range:'4.450-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'M' },
        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Fulcrum',company:'fulcrum',range:'5.450-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'F' },
        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Deliote',company:'deliote',range:'6.460-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'D' },
        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Dell',company:'dell',range:'6.470-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'D' },
        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Qulcumm',company:'qulcumm',range:'5.530-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'Q' },
        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Accolite',company:'accolite',range:'9.450-11.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'A' },
        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Walking Tree Technologies',company:'wtc',range:'2.450-9.320',open:'5.10',prevclose:'5.290',marketcap:'4.058',letter:'W' },
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
