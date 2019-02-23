/**
 * This view is an example list of people.
 */
Ext.define('StockTicker.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'StockTicker.store.Personnel'
    ],

    title: 'Technology Stack',
    plugins: 'gridfilters',

    store: {
        type: 'personnel'
    },

    columns: [
        { dataIndex: 'name',flex:0.7 ,
        filter:'string',
        renderer: function(value) {
            return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
        }
    },
        { dataIndex: 'stockval',flex:0.3,
        filter:'number',
        renderer:function(value,metaData){
            if(value<=50){
                metaData.style="color:red";
            } else {
                metaData.style="color:green";
            }
            return Ext.util.Format.usMoney(value);
        },
        // renderer: Ext.util.Format.usMoney
    }
    ],

    listeners: {
        select: function( grid, record, index, eOpts){
            var win = Ext.create('StockTicker.view.stock.StockWindow');
            win.setTitle(record.get('name'));
            win.show()
        }
    }
});
