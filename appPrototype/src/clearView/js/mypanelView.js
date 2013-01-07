var MyPanelView = Y.Base.create('mypanelView',Y.ZeView, [], {
                                  template: '<div class="acFields">'
                                      + '<br>Autocomplete Field 1: <input id="ac-input9" type="text">'
                                      + '&nbsp;Autocomplete Field 2: <input id="ac-input10" type="text">'
                                      + '<br>Autocomplete Field 3: <input id="ac-input11" type="text">'
                                      + '&nbsp;Autocomplete Field 4: <input id="ac-input12" type="text">'
                                      + '</div>',
                                  events: {
                                  },
                                  _render:  function (container) {
                                      container.setHTML(this.template);
                                      var ac9 = new Y.AutoComplete({
                                                                       inputNode: '#ac-input9',
                                                                       render   : true,
                                                                       resultHighlighter: 'phraseMatch',
                                                                       source: 'select * from search.suggest where query="{query}"',
                                                                       yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                   }),
                                      ac10 = new Y.AutoComplete({
                                                                   inputNode: '#ac-input10',
                                                                   render   : true,
                                                                   resultHighlighter: 'phraseMatch',
                                                                   source: 'select * from search.suggest where query="{query}"',
                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                               }),
                                      ac11 = new Y.AutoComplete({
                                                                   inputNode: '#ac-input11',
                                                                   render   : true,
                                                                   resultHighlighter: 'phraseMatch',
                                                                   source: 'select * from search.suggest where query="{query}"',
                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                               }),
                                      ac12 = new Y.AutoComplete({
                                                                   inputNode: '#ac-input12',
                                                                   render   : true,
                                                                   resultHighlighter: 'phraseMatch',
                                                                   source: 'select * from search.suggest where query="{query}"',
                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                               });
                                      var regpanel = new Y.Panel({
                                                                  // srcNode : '#myPanelContent',
                                                                  width   : 400,
                                                                  centered: true,
                                                                  render  : true
                                                                  //modal  : true
                                                              });
                                      regpanel.plug(Y.Plugin.Resize);
                                      regpanel.plug(Y.Plugin.Drag);
                                      regpanel.set('headerContent','Panel');
                                      regpanel.set('bodyContent',container);
                                      this._destroyOnExit.push(ac9,ac10,ac11,ac12);
                                  }
                              });


Y.MyPanelView = MyPanelView;