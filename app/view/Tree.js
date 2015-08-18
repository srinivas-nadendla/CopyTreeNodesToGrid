var folders = [],
            folder = {},
            copiedRecords=[];
        for (var i = 0; i < 5; i++) {
            var folder = {
                text: "Tree" + i,
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
        };
        
    

Ext.define('CopyTreeNodesToGrid.view.Tree', {
    extend: 'Ext.tree.Panel',
    alias:'widget.Tree',
    
    title: 'Tree',
    width: '50%',
    height: 500,
    border: false,
    id:'treeId',
    store: Ext.create('Ext.data.TreeStore', {
        fields: ['text', 'leaf'],
        root: {
            expanded: true,
            children: folders
        }
    }),
    multiSelect: true,
    rootVisible: false,
    listeners:{
        afterrender: function () {
            
            var keyMap = new Ext.util.KeyMap({
                target: this.getView().el,
                binding: [{
                        key: 'C',
                        ctrl: true,
                        fn: function () {
                            for(var i=0;i<this.getView().getSelection().length;i++){
                                copiedRecords.push(this.getView().getSelection()[i].data.text);
                            }
                            
                        },
                        scope: this
                    }]
            });
        }
    }

});



