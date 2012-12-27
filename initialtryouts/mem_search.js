var tmplpage = '<fieldset>\
                  <legend>Member Search</legend>\
                  <form name="pat_search" id="pat_search">\
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
                    </div>\
                    <div style="clear:both"></div>\
                    <div align="center">\
                      <input type="submit" name="search" value="Search"/>\
                    </div>\
                  </form>\
                </fieldset>';
                
YUI.add('MEMSRC', function (Y, NAME) {
  Y.TestView = Y.Base.create(NAME, Y.View, [], {
    containerTemplate: '<div id="testmvc"></div>',
    events: {
      '[name=search]': {click: 'search'},
      '.ze-calendar': {
        'focus': 'showcal'
        //,'blur': 'hidecal'
      }
    },
    template: tmplpage,
    initializer: function (cfg) {
      // initializing of views
    },
    render: function () {
      var container = this.get('container'),
          tmpl = this.template;
      container.setHTML(tmpl);
      if (!container.inDoc()) {
        Y.Node('body').appendChild(container);
      }
      Y.one('#ac-input').plug(Y.Plugin.AutoComplete, {
        source: 'select * from search.suggest where query="{query}"',
        yqlEnv: 'http://pieisgood.org/yql/tables.env'
      });
      /*var form = new Y.Validator(
        {
          form:'pat_search',
          defaultIncorrectIndicatorCss:'validator',
          defaultCorrectIndicatorCss:'indicator',
          createCorrectIndicator:true,
          createIncorrectIndicator:true
        }
      ); */
    },
    showcal: function (ev) {
      var oReg = ev.target.get('region');
      YUI.Ze.calendar.show();
      YUI.Ze.calendar.get('boundingBox').setXY([oReg.left,oReg.bottom]);
    },
    hidecal: function () {
      YUI.Ze.calendar.hide();
    },
    search: function (ev) {
      ev.halt();
      var fs = Y.all('#pat_search input,#pat_search select'), qs={};
      fs.each(function (f) {
        var val = f.get('value');
        if (val) {
          qs[f.get('name')] = val;
        }
      });
      Y.use('model-list','model-sync-zope', function () {
        //Y.augment(Y.ModelList, Y.ModelSync.Zope);
        var MyM = Y.Base.create('MyM', Y.ModelList, [Y.ModelSync.Zope]);
        var ml = new MyM({root: 'memresults'});
        ml.load(qs, function (error, resp) {});
      });
    },
    destroy: function () {
      Y.one('#ac-input').destroy();
    }
  });
}, '1.0.0', {requires: ['view', 'autocomplete']});