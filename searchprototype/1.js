YUI().use('zeView', 'contentSwapper', function(Y) {

    var MyView = Y.Base.create('myView', Y.ZeView, [Y.ContentSwapper], {
        template: '<p border="1">This is the fixed div container, next comes the variable part:</p><div class="variableContent"></div><div class="mainPanels"></div><div class="modalPanels"></div>',
        // initializer: function () {
        //     // this._eventHandles.push(
        //     //     this.on('*:swap', this.swap)
        //     // );
        // },
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
        _refresh: function () {
            this._contentBox.setHTML(this.template);
            return this;
        }
    });

    var myView = new MyView();
    myView.render('#mainContent');
    myView.setSwapContainer(myView._contentBox.one('.variableContent'),1);
    myView.setSwapContainer(myView._contentBox.one('.mainPanels'),2);
    myView.setSwapContainer(myView._contentBox.one('.modalPanels'),3);

    Y.use("newView", function(){
              var nv = new Y.NewView();
              nv.render(myView._contentBox.one('.variableContent'));
              myView.setSwapView(nv,1);       
          });

    Y.all(".tabsa").on("click", function(e) {
        console.log(e);
        e.preventDefault();
        if (e.currentTarget._node.id === 'tab1') {
            Y.use("clearView",function(){
                      var cv = new Y.ClearView();
                      nv.render(myView._contentBox.one('.variableContent'));
                      myView.setSwapView(cv,1);       

                      // myView.setSwapView(new Y.ClearView(),1);       
                      // myView.setSwapView(new Y.ClearView({template:''}),2);       
                      // myView.setSwapView(new Y.ClearView({template:''}),3);       
                  });
        }
        else if (e.currentTarget._node.id === 'tab2') {
            Y.use("anotherNewView",function(){
                      var anv = new Y.AnotherNewView();
                      anv.render(myView._contentBox.one('.variableContent'));
                      myView.setSwapView(anv,1);       

                      // myView.setSwapView(new Y.AnotherNewView(),1);       
                  });
        }
        else if (e.currentTarget._node.id === 'tab3') {
            Y.use("newView",function(){
                      var nv = new Y.NewView();
                      nv.render(myView._contentBox.one('.variableContent'));
                      myView.setSwapView(nv,1);       

                      // myView.setSwapView(new Y.NewView(),1);       
                  });
        }
        else if (e.currentTarget._node.id === 'tab4') {
            Y.use("modalView",function(){
                      var mod = new Y.ModalView({container:'#modalPanels'});
                      mod.render(myView._contentBox.one('.mainPanels'));
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