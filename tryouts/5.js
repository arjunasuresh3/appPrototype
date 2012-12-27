// Create a new YUI instance and populate it with the required modules.
YUI().use('node', 'datasource', 'model', 'model-list', 'view', 'handlebars', 'datatable', 'datasource-get', 'datasource-jsonschema', "datasource-io", function (Y) {

              var myDataSource = new Y.DataSource.IO({
                                                          source: "all"
                                                      });
              
              myDataSource.plug({fn: Y.Plugin.DataSourceJSONSchema,  cfg: {
                                    schema: {
                                        resultListLocator: "resultset",
                                        resultFields: ["pieId","type","slices"]
                                    }
                                }});
              var myCallback = {
                  success: function(e){
                      console.log(e.response);
                      var table = new Y.DataTable({
                                                      columns: ['pieId', 'type','slices'],
                                                      data: e.response.results
                                                  });
                      table.render('#pies');
                  },
                  failure: function(e){
                      console.log(e.response);
                  }
              };

              Y.MyView = Y.Base.create(
                  'myView',
                  Y.View,
                  [],
                  {

                      render: function (container) {
                          container = Y.one(container);
                          if (container) {
                              this.set('container', container);
                          } else {
                              container = this.get('container');
                          }

                          if (container) {
                              container.setHTML(this._render());
                          }

                          return this;
                      }
                  }
              );

              Y.PieView = Y.Base.create(
                  'PieView',
                  Y.MyView,
                  [],
                  {

                      events: {
                          '.getdata': {
                              click: 'getData'
                          }
                      },

                      template: '<button class="getdata" >Get Data!</button>',

                      // initializer: function () {
                      //     var model = this.get('model');

                      //     model.after('change', this.render, this);
                      //     model.after('destroy', this.destroy, this);
                      //     this.after('modelChange', this.render, this);
                      // },

                      _render: function () {
                          return this.template;
                          // return Y.Lang.sub(this.template, this.get('model').toJSON());
                      },

                      getData: function () {
                          myDataSource.sendRequest({
                                                       request: "?q=all",
                                                       callback: myCallback
                                                   });         
                      }
                  }
              );
              var myPieView = new Y.PieView({container:'#pies'});
              myPieView.render();
          });