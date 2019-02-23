
Ext.define('StockTicker.view.stock.StockMain',{
    extend: 'Ext.panel.Panel',
    alias:'widget.stockmain',
    requires: [
        'StockTicker.view.stock.StockMainController',
        'StockTicker.view.stock.StockMainModel',
        'StockTicker.store.DataViewStore'
    ],

    // controller: 'stock-stockmain',
    // viewModel: {
    //     type: 'stock-stockmain'
    // },
    // layout: 'fit',
    items:[{
        xtype:'dataview',
        references:'dataviewstore',
        store: {
            type:'DataViewStore'
        },
        scrollable:true,
        tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="goals-dashboard-cls">',
        '<div class="goals-header-cls">',
        '<div class="goals-dash-img-cls">',
        '<img class="goals-dash-user-icon" src="{src}">',
        '</div>',
        '<div class="goals-user-name">',
        '<span>{caption}</span>',
        '</div>',
        '<div class="goals-target-date-cls">',
        '<span><h1>{letter}</h1></span>',
        '</div>',
        '</div>',
        '<div class="goals-title-cls">',
        '<span>{prevclose}</span>',
        '<span>NCM</span>',
        '<span>At Close: 16/2/2019</span>',
        '</div>',
        '<div class="goals-title-cls">',
        '<span>52Wk Range : {range}</span>',
        '</div>',
        '<div class="goal-status-cls">',
        '<span class="goal-status-text">open:{open} Market Cap: {marketcap}</span>',
        '</div>',
        '<div class="goals-progress-cls">',
        '</div>',
        '<div class="goals-karmascore-cls">',
        '<tpl for="karmascore">',
        '<span class="karma-score-icon">{prevclose}</span>',
        '<span class="goals-kamra-score">P/E Ratio</span>',
        '</tpl>',
        '</div>',
        '</div>',
        '</tpl>'
        ),
        itemSelector: 'div.thumb-wrap',
        emptyText: 'No Stocks available',
    }]
});
