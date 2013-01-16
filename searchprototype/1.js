YUI().use('zeView', 'contentSwapper', function(Y) {

    var MyView = Y.Base.create('myView', Y.ZeView, [Y.ContentSwapper], {
        template: '<p border="1">This is the fixed div container, next comes the variable part:</p><div class="variableContent"></div><div class="mainPanels"></div><div class="modalPanels"></div>',
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
            this.setSwapContainer(container.one('.mainPanels'),2);
            this.setSwapContainer(container.one('.modalPanels'),3);
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
                      // myView.setSwapView(new Y.ClearView({template:''}),2);       
                      // myView.setSwapView(new Y.ClearView({template:''}),3);       
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
            Y.use("modalView",function(){
                      var mod = new Y.ModalView({container:'#modalPanels'});
                      myView.setSwapView(mod,3);
                      // mod.showPanel();
                  });
        }
        else if (e.currentTarget._node.id === 'tab5') {
            Y.use("mypanelView", function() {
                      var pan = new Y.MyPanelView({container:'#mainPanelContainer'});
                      myView.setSwapView(pan,2);
                      pan.regpanels[0].focus();
                  });
        }
        else { 
            Y.use("memsearchView" ,function() {
                      myView.setSwapView(new Y.MemSearchView(),1);
                  });
        }
    });
});