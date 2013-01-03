YUI().use('zeView','datatable','contentSwapper', 'autocomplete', 'autocomplete-highlighters', function(Y) {
    var NewView = Y.Base.create('newView',Y.ZeView, [], {
        template: "Click Me NewView<button id='btn1' type='button'>Click Me NewView!</button><div class='innerContainer'></div>",
        events: {
                    button: {
                        click: function () {
                            this.fire('swap', { which: 'AnotherNewView',
                                                view: this});
                        }
                    }
        },
        _render:  function (container) {
            container.setHTML(this.template);
            var table = new Y.DataTable({
                                            columns: ['id', 'name','price','cost'],
                                            data: [
                                                { id: "ga-3475", name: "gadget",   price: "$6.99", cost: "$5.99" },
                                                { id: "sp-9980", name: "sprocket", price: "$3.75", cost: "$3.25" },
                                                { id: "wi-0650", name: "widget",   price: "$4.25", cost: "$3.75" }
                                            ]
                                        });
            this.setSwapContainer(container.one('.innerContainer'),2);
            this.setSwapView(table,2);
            this._destroyOnExit.push(table);
        }
    });

    var AnotherNewView = Y.Base.create('anothernewView',Y.ZeView, [], {
        template: 'Click Me AnotherNewView <button id="btn2" type="button">Click Me AnotherNewView!</button>'
                  + '<div class="acFields">'
                  + '<br>Autocomplete Field 1: <input id="ac-input1" type="text">'
                  + '&nbsp;Autocomplete Field 2: <input id="ac-input2" type="text">'
                  + '<br>Autocomplete Field 3: <input id="ac-input3" type="text">'
                  + '&nbsp;Autocomplete Field 4: <input id="ac-input4" type="text">'
                  + '</div>',
        events: {
            button: {
                click: function () {
                    this.fire('swap', {which: 'NewView',
                                       view: this});
                }
            }
        },
        _clickMe2: function(ev){
            console.log("asd");
        },
        _render:  function (container) {
            container.setHTML(this.template);
            var ac1 = new Y.AutoComplete({
                                             inputNode: '#ac-input1',
                                             render   : true,
                                             resultHighlighter: 'phraseMatch',
                                             source: 'select * from search.suggest where query="{query}"',
                                             yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                         }),
            ac2 = new Y.AutoComplete({
                                         inputNode: '#ac-input2',
                                         render   : true,
                                         resultHighlighter: 'phraseMatch',
                                         source: 'select * from search.suggest where query="{query}"',
                                         yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                     }),
            ac3 = new Y.AutoComplete({
                                         inputNode: '#ac-input3',
                                         render   : true,
                                         resultHighlighter: 'phraseMatch',
                                         source: 'select * from search.suggest where query="{query}"',
                                         yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                     }),
            ac4 = new Y.AutoComplete({
                                         inputNode: '#ac-input4',
                                         render   : true,
                                         resultHighlighter: 'phraseMatch',
                                         source: 'select * from search.suggest where query="{query}"',
                                         yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                     });

            this._destroyOnExit.push(ac1,ac2,ac3,ac4);
        }
    });

    var ClearView = Y.Base.create('clearView',Y.ZeView, [], {
        template: "<p><b>CLEARED ALL THE DOM OBJECTS AND EVENTS :)</p>",
        _render:  function (container) {
            container.setHTML(this.template);
        }
    });

    var MyView = Y.Base.create('myView', Y.ZeView, [Y.ContentSwapper], {
        template: '<p border="1">This is the fixed div container, next comes the variable part:</p><div class="variableContent"></div>',
        initializer: function () {
            this._eventHandles.push(
                this.on('*:swap', this.swap)
            );
        },
        swap: function (ev) {
            switch (ev.which) {
            case 'NewView':
                this.setSwapView(new NewView(),1);
                break;
            case 'AnotherNewView':
                this.setSwapView(new AnotherNewView(),1);
                break;
            }
        },
        _render: function (container) {
            container.setHTML(this.template);
            this.setSwapContainer(container.one('.variableContent'),1);
        }
    });

    var myView = new MyView();
    myView.render(Y.one('#mainContent'));
    myView.setSwapView(new NewView(),1);
    Y.all(".tabsa").on("click", function(e) {
        console.log(e);
        if (e.currentTarget._node.id === 'tab1') {
            myView.setSwapView(new ClearView(),1);
        }
        else if (e.currentTarget._node.id === 'tab2') {
            myView.setSwapView(new AnotherNewView(),1);
        }
        else { 
            myView.setSwapView(new NewView(),1);
        }
        e.preventDefault();
    });
});