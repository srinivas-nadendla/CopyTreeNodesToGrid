/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'CopyTreeNodesToGrid',

    extend: 'CopyTreeNodesToGrid.Application',
    
    autoCreateViewport: 'CopyTreeNodesToGrid.view.main.Main',
    requires:[
        'CopyTreeNodesToGrid.view.Tree'
    ],
    
    launch: function() {
        
        var tree = Ext.create('widget.Tree', {});

        var grid = Ext.create('Ext.grid.Panel', {
            title: 'Grid',
            width: '50%',
            minHeight: 200,
            store: Ext.create('Ext.data.Store', {
                fields: ['text'],
                data: []
            }),
            multiSelect: true,
            rootVisible: false,
            
            columns: [{
                text: "text",
                dataIndex: "text",
                flex: 1
            }],
        listeners:{
            afterrender:function(){
                var keyMap = new Ext.util.KeyMap({
                target: this.getView().el,
                binding: [{
                        key: 'V',
                        ctrl: true,
                        fn: function () {
                            console.log(copiedRecords);
                            for(var i=0;i<copiedRecords.length;i++){
                                this.getStore().add({text : copiedRecords[i]});
                            }
                            
                        },
                        scope: this
                    }]
            });
            }
        }
        });

        Ext.create('Ext.panel.Panel', {
            items: [tree, grid],
            layout: 'hbox',
            renderTo: Ext.getBody()
        });
    }
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to CopyTreeNodesToGrid.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
