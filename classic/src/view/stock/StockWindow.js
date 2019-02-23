
   Ext.define('StockTicker.view.stock.StockWindow', {
    extend: 'Ext.window.Window',
    xtype: 'stackwindow',
    width:'60%',
    title: 'Window',
    titleAlign :'center',
    scrollable: true,
    bodyPadding: 10,
    style:'border:none;',
    // constrain: true,
    model:true,
    requires:['StockTicker.store.ChartStore',
        'Ext.Charts.*'
        ],
    items: {
        xtype: 'cartesian',
        layout:'fit',
        reference: 'chart',
        width: '100%',
        height: 500,
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        animation: {
            duration: 200
        },
        store: {
            type: 'ChartStore'
        },
        innerPadding: {
            left: 40,
            right: 40
        },
        captions: {
            title: 'Line Charts',
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            minimum: 0,
            maximum: 24,
            // renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'line',
            xField: 'month',
            yField: 'data1',
            style: {
                lineWidth: 2
            },
            marker: {
                radius: 4,
                lineWidth: 2
            },
            label: {
                field: 'data1',
                display: 'over'
            },
            highlight: {
                fillStyle: '#000',
                radius: 5,
                lineWidth: 2,
                strokeStyle: '#fff'
            },
            tooltip: {
                trackMouse: true,
                showDelay: 0,
                dismissDelay: 0,
                hideDelay: 0,
                // renderer: 'onSeriesTooltipRender'
            }
        }]
}
});