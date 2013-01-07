var ModalView = Y.Base.create('modalView',Y.ZeView, [], {
                                  template: '<div class="acFields">'
                                      + '<br>Autocomplete Field 1: <input id="ac-input5" type="text">'
                                      + '&nbsp;Autocomplete Field 2: <input id="ac-input6" type="text">'
                                      + '<br>Autocomplete Field 3: <input id="ac-input7" type="text">'
                                      + '&nbsp;Autocomplete Field 4: <input id="ac-input8" type="text">'
                                      + '</div>',
                                  events: {
                                  },
                                  _render:  function (container) {
                                      container.setHTML(this.template);
                                      var ac5 = new Y.AutoComplete({
                                                                       inputNode: '#ac-input5',
                                                                       render   : true,
                                                                       resultHighlighter: 'phraseMatch',
                                                                       source: 'select * from search.suggest where query="{query}"',
                                                                       yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                   }),
                                      ac6 = new Y.AutoComplete({
                                                                   inputNode: '#ac-input6',
                                                                   render   : true,
                                                                   resultHighlighter: 'phraseMatch',
                                                                   source: 'select * from search.suggest where query="{query}"',
                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                               }),
                                      ac7 = new Y.AutoComplete({
                                                                   inputNode: '#ac-input7',
                                                                   render   : true,
                                                                   resultHighlighter: 'phraseMatch',
                                                                   source: 'select * from search.suggest where query="{query}"',
                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                               }),
                                      ac8 = new Y.AutoComplete({
                                                                   inputNode: '#ac-input8',
                                                                   render   : true,
                                                                   resultHighlighter: 'phraseMatch',
                                                                   source: 'select * from search.suggest where query="{query}"',
                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                               });
                                      var panel = new Y.Panel({
                                                                  // srcNode : '#myPanelContent',
                                                                  width   : 400,
                                                                  centered: true,
                                                                  render  : true,
                                                                  modal  : true
                                                              });
                                      panel.set('headerContent','Modal');
                                      panel.set('bodyContent',container);
                                      this._destroyOnExit.push(ac5,ac6,ac7,ac8);
                                  }
                              });

Y.ModalView = ModalView;