YUI().use('zeView', 'datatable', 'contentSwapper', 'autocomplete', 'autocomplete-highlighters', 'panel', 'resize-plugin' ,'dd-plugin', function(Y) {

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

// Y.AnotherNewView = AnotherNewView;

    var MyView = Y.Base.create('myView', Y.ZeView, [Y.ContentSwapper], {
        template: '<p border="1">This is the fixed div container, next comes the variable part:</p><div class="variableContent"></div><div class="mainPanels"></div>',
        initializer: function () {
            this._eventHandles.push(
                this.on('*:swap', this.swap)
            );
        },
        swap: function (ev) {
            switch (ev.which) {
            case 'NewView':
                Y.use("newView",function(){
                          myView.setSwapView(new Y.NewView(),1);       
                      });
                break;
            case 'AnotherNewView':
                Y.use("anotherNewView",function(){
                          myView.setSwapView(new Y.AnotherNewView(),1);       
                      });
                break;
            }
        },
        _render: function (container) {
            container.setHTML(this.template);
            this.setSwapContainer(container.one('.variableContent'),1);
            this.setSwapContainer(Y.one('.mainPanels'),2);
        }
    });

    var myView = new MyView();
    myView.render(Y.one('#mainContent'));
    Y.use("newView",function(){
              myView.setSwapView(new Y.NewView(),1);       
          });

    Y.all(".tabsa").on("click", function(e) {
        console.log(e);
        e.preventDefault();
        if (e.currentTarget._node.id === 'tab1') {
            Y.use("clearView",function(){
                      myView.setSwapView(new Y.ClearView(),1);       
                  });
           }
        else if (e.currentTarget._node.id === 'tab2') {
            Y.use("anotherNewView",function(){
                      myView.setSwapView(new Y.AnotherNewView(),1);       
                  });
        }
        else if (e.currentTarget._node.id === 'tab3') {
            Y.use("newView",function(){
                      myView.setSwapView(new Y.NewView(),1);       
                  });
        }
        else if (e.currentTarget._node.id === 'tab4') {
            // Y.use("anotherNewView",function(){
                      myView.setSwapView(new ModalView(),2);       
               //   });
        }
        else { 
            Y.use("newView",function(){
                      myView.setSwapView(new MyPanelView(),2);       
                  });
        }
    });
});