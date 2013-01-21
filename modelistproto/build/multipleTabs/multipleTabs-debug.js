YUI.add('multipleTabs', function (Y, NAME) {

var tmplpage = '<fieldset>\
                  <legend>Multiple Tabs</legend>\
                  <input type="submit" name="createTab" value="createTab"/>\
                </fieldset>'
               + '<fieldset class="resultsfieldset" style="display:none;"><div align="center" class="results">\
               </div></fieldset>';
                
  Y.MultipleTabs = Y.Base.create('multipleTabs', Y.ZeView, [Y.ContentSwapper], {
    containerTemplate: '<div id="testmvc"></div>',
    events: {
      '[name=createTab]': {click: 'createTab'}
    },
    template: tmplpage,
    initializer: function (cfg) {
      // initializing of views
        // this._tables = [];
    },
    _render: function(container) {
      container.setHTML(this.template);
      this.setSwapContainer(container.one('.results'),0);
    },
    createTab: function (ev) {
        ev.halt();
        console.log(ev);
        var regpanel = new Y.Panel({
                                       // srcNode: ev.target,
                                       width   : 400,
                                       centered: true,
                                       render  : true,
                                       zIndex : 5,
                                       headerContent : 'Panel',
                                       bodyContent: 'Body Content'
                                   }).plug(Y.Plugin.Drag).plug(Y.Plugin.Resize);
    }// ,
    // destroy: function () {
    // }
  });

}, '@VERSION@', {
    "requires": [
        "zeView",
        "datatable",
        "contentSwapper",
        "autocomplete",
        "autocomplete-highlighters",
        "panel",
        "resize-plugin",
        "dd-plugin",
        "overlay"
    ]
});
