var tmplpage = '<fieldset>\
                  <legend>Member Search</legend>\
                  <form name="pat_search" id="pat_search" enctype="multipart/form-data">\
                    <div id="demo" class="yui3-g">\
                      <div class="yui3-u-1-4 label">\
                        <label for="ac-input">Name:</label>\
                      </div>\
                      <div class="yui3-u-1-4">\
                        <input id="ac-input" name="memname" type="text" formvalidator:FormField="yes" formvalidator:Type="TextBaseField">\
                      </div>\
                      <div class="yui3-u-1-4 label">\
                        <label for="dob-input">DOB:</label>\
                      </div>\
                      <div class="yui3-u-1-4">\
                        <input id="dob-input" name="dob" class="ze-calendar" type="text">\
                      </div>\
                      <div class="yui3-u-1-4 label">\
                        <label for="member-id">Member Id:</label>\
                      </div>\
                      <div class="yui3-u-1-4">\
                        <input id="member-id" name="memid" type="text">\
                      </div>\
                      <div class="yui3-u-1-4 label">\
                        <label for="member-type">Member Type:</label>\
                      </div>\
                      <div class="yui3-u-1-4">\
                        <select id="member-type" name="memtype">\
                          <option value="">-- Select -- </option>\
                          <option value="1">Id</option>\
                          <option value="2">SSN</option>\
                        </select>\
                      </div>\
                      <div class="yui3-u-1-4">\
                        <input id="fl-input" name="filename" type="file">\
                      </div>\
                    </div>\
                    <div style="clear:both"></div>\
                    <div align="center">\
                      <input type="submit" name="search" value="Search"/>\
                    </div>\
                  </form>\
                </fieldset>'
               + '<fieldset class="resultsfieldset" style="display:none;"><div align="center" class="results">\
               </div></fieldset>';
                
  Y.MemSearchView = Y.Base.create('memsearchView', Y.ZeView, [Y.ContentSwapper], {
    containerTemplate: '<div id="testmvc"></div>',
    events: {
      '[name=search]': {click: 'search'},
      '*.ze-calendar': {
        'focus': 'showcal'
        ,'blur': 'hidecal'
      }
    },
    template: tmplpage,
    initializer: function (cfg) {
      // initializing of views
        this._tables = [];
    },
    _render: function(container) {
      container.setHTML(this.template);
      this.setSwapContainer(container.one('.results'),0);

      Y.one('#ac-input').plug(Y.Plugin.AutoComplete, {
        source: 'select * from search.suggest where query="{query}"',
        yqlEnv: 'http://pieisgood.org/yql/tables.env'
      });
    },
    showcal: function (ev) {
        YUI.Ze.calendar.showUnder(ev.target);
    },
    hidecal: function () {
      YUI.Ze.calendar.hide();
    },
    search: function (ev) {
      ev.halt();
      var fs = Y.all('#pat_search input[type=text],#pat_search select,#pat_search input[type=file]'), qs={};
      fs.each(function (f) {
        var val = f.get('value');
        if (val) {
          qs[f.get('name')] = val;
        }
      });
        console.log("asd");
      var _this = this;
      Y.use('model-list-zope','modelsyncZope', function () {
        var MyM = Y.Base.create('MyM', Y.ModelListZope, [Y.ModelSync.Zope], {
                                    root: '/memresults'
                                }),
        ml = new MyM();
        ml.save(qs,function (error, resp) {
                    Y.use('datatable',function() {
                              var table = new Y.DataTable({
                                                              columns: ['MemberId', 'Name', 'DOB'],
                                                              data: Y.JSON.parse(resp.responseText)
                                                          });
                              table.on('render',function (ev) {
                                           Y.one('.resultsfieldset').setStyle('display','');
                                       });
                              _this.setSwapView(table,0);
                              _this._tables.push(table);
                          });
                });
      });
    },
    destroy: function () {
      Y.one('#ac-input').destroy();
      Y.Array.each(this.tables,function(tab) {
                       tab.destroy();
                   });
    }
  });