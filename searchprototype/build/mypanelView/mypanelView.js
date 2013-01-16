YUI.add('mypanelView', function (Y, NAME) {

var MyPanelView = Y.Base.create('mypanelView',Y.View, [], {
                                  initializer:  function (container) {
                                      this.regpanels = [];
                                  },
                                  template: '<div class="acFields">'
                                      + '<br>Autocomplete Field 1: <input class="acFieldsPanel" id="ac-input9" type="text">'
                                      + 'Autocomplete Field 2: <input class="acFieldsPanel" id="ac-input10" type="text">'
                                      + '<br>Autocomplete Field 3: <input class="acFieldsPanel" id="ac-input11" type="text">'
                                      + 'Autocomplete Field 4: <input class="acFieldsPanel" id="ac-input12" type="text">'
                                      + '</div>',
                                  events: {
                                  },
                                  render:  function (container) {
                                      container.setHTML(this.template);
                                      var _this = this,
                                      acFields = container.all('input.acFieldsPanel');
                                      acFields.each(function(eachacField) {
                                                        var ac = new Y.AutoComplete({
                                                                                        inputNode: eachacField,
                                                                                        render   : true,
                                                                                        resultHighlighter: 'phraseMatch',
                                                                                        source: 'select * from search.suggest where query="{query}"',
                                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                                    });
                                                        // _this._destroyOnExit.push(ac);
                                                    });

                                      var regpanel = new Y.Panel({
                                                                  srcNode: container,
                                                                  width   : 400,
                                                                  centered: true,
                                                                  render  : true,
                                                                  zIndex : 5
                                                              });

                                      // regpanel.plug(Y.Plugin.Resize);
                                      regpanel.plug(Y.Plugin.Drag);
                                      regpanel.set('headerContent','Panel');
                                      // regpanel.render(container.one('#insidePanelContainer'));
                                      this.regpanels.push(regpanel);
                                  }// ,
                                  // destroy: function() {
                                  //     Y.Array.each(this.regpanels,function(pan) {
                                  //                      pan.destroy(true);
                                  //                      console.log('destroy');
                                  //                  });
                                  //     // Y.one('#insidePanelContainer').setHTML('');
                                  //  }
                              });

Y.MyPanelView = MyPanelView;

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
