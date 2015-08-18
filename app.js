/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'CopyTreeNodesToGrid',

    extend: 'CopyTreeNodesToGrid.Application',
    
    autoCreateViewport: 'CopyTreeNodesToGrid.view.main.Main',
    
    launch: function() {
        var folders = [],
            folder = {};
        for (var i = 0; i < 5; i++) {
            var folder = {
                text: "Folder" + i,
                expanded: true,
                children: []
            };
            for (var j = 0; j < 2; j++) {
                folder.children.push({
                    text: "Child-" + i + '_' + j,
                    leaf: false,
                    expanded: true,
                    children: [{
                        text: "SubChildOne-" + i + '_' + j,
                        leaf: true
                    }, {
                        text: "SubChildTwo-" + i + '_' + j,
                        leaf: true
                    }]
                });
            }
            folders.push(folder);
        }


        var tree = Ext.create('Ext.tree.Panel', {
            title: 'Tree',
            width: '50%',
            height: 500,
            border: false,
            store: Ext.create('Ext.data.TreeStore', {
                fields: ['text', 'leaf'],
                root: {
                    expanded: true,
                    children: folders
                }
            }),
            multiSelect: true,
            rootVisible: false
           
        });

        var grid = Ext.create('Ext.grid.Panel', {
            title: 'Grid',
            width: '50%',
            minHeight: 200,
            store: Ext.create('Ext.data.Store', {
                fields: ['text', 'leaf'],
                data: []
            }),
            multiSelect: true,
            rootVisible: false,
            
            columns: [{
                text: "text",
                dataIndex: "text",
                flex: 1
            }]
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
