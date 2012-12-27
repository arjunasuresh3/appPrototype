var tmplpage = '<fieldset><legend>Member Search Results</legend><div id="resultsDT"> </div><div align="center"><input type="button" value="add new member"/> </div></fieldset>';

YUI().add('mem_search_results', function(Y,NAME) {
              Y.MemSearchResults = Y.Base.create(NAME,Y.View,[], {
                                                     template: tmplpage,

                                                     render: function () {
                                                         var container = this.get('container'),
                                                         tmpl = this.template;
                                                         container.setHTML(tmpl);
                                                         if (!container.inDoc()) {
                                                             Y.Node('body').appendChild(container);
                                                         }
                                                         this.table = new Y.DataTable({
                                                                                         columns: ['pieId', 'type','slices'],
                                                                                         data: this.get('results')
                                                                                     });
                                                         this.table.render(Y.one('#resultsDT'));
                                                     },
                                                     destroy: function () {
                                                         this.table.destroy();
                                                     }
                            });
              

}, '1.0.0', {requires: ['view', 'datatable']});