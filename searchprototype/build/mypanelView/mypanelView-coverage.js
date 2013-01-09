if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/mypanelView/mypanelView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/mypanelView/mypanelView.js",
    code: []
};
_yuitest_coverage["build/mypanelView/mypanelView.js"].code=["YUI.add('mypanelView', function (Y, NAME) {","","var MyPanelView = Y.Base.create('mypanelView',Y.ZeView, [], {","                                  initializer:  function () {","                                      this.regpanel = new Y.Panel({","                                                                  width   : 400,","                                                                  centered: true,","                                                                  render  : true,","                                                                  zIndex : 5","                                                              });","                                      this.regpanel.plug(Y.Plugin.Resize);","                                      this.regpanel.plug(Y.Plugin.Drag);","                                      this.regpanel.set('headerContent','Panel');","                                      // this._destroyOnExit.push(ac9,ac10,ac11,ac12);","                                  },","                                  template: '<div class=\"acFields\">'","                                      + '<br>Autocomplete Field 1: <input id=\"ac-input9\" type=\"text\">'","                                      + '&nbsp;Autocomplete Field 2: <input id=\"ac-input10\" type=\"text\">'","                                      + '<br>Autocomplete Field 3: <input id=\"ac-input11\" type=\"text\">'","                                      + '&nbsp;Autocomplete Field 4: <input id=\"ac-input12\" type=\"text\">'","                                      + '</div>',","                                  events: {","                                  },","                                  _render:  function (container) {","                                      container.setHTML(this.template);","","                                      var ac9 = new Y.AutoComplete({","                                                                       inputNode: '#ac-input9',","                                                                       render   : true,","                                                                       resultHighlighter: 'phraseMatch',","                                                                       source: 'select * from search.suggest where query=\"{query}\"',","                                                                       yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                   }),","                                      ac10 = new Y.AutoComplete({","                                                                   inputNode: '#ac-input10',","                                                                   render   : true,","                                                                   resultHighlighter: 'phraseMatch',","                                                                   source: 'select * from search.suggest where query=\"{query}\"',","                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                               }),","                                      ac11 = new Y.AutoComplete({","                                                                   inputNode: '#ac-input11',","                                                                   render   : true,","                                                                   resultHighlighter: 'phraseMatch',","                                                                   source: 'select * from search.suggest where query=\"{query}\"',","                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                               }),","                                      ac12 = new Y.AutoComplete({","                                                                   inputNode: '#ac-input12',","                                                                   render   : true,","                                                                   resultHighlighter: 'phraseMatch',","                                                                   source: 'select * from search.suggest where query=\"{query}\"',","                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                               });","                                      this.regpanel.set('bodyContent',container.getHTML());","                                      // this._destroyOnExit.push(ac9,ac10,ac11,ac12);","                                  }","                              });","","Y.MyPanelView = MyPanelView;","","}, '@VERSION@', {","    \"requires\": [","        \"zeView\",","        \"datatable\",","        \"contentSwapper\",","        \"autocomplete\",","        \"autocomplete-highlighters\",","        \"panel\",","        \"resize-plugin\",","        \"dd-plugin\"","    ]","});"];
_yuitest_coverage["build/mypanelView/mypanelView.js"].lines = {"1":0,"3":0,"5":0,"11":0,"12":0,"13":0,"25":0,"27":0,"55":0,"60":0};
_yuitest_coverage["build/mypanelView/mypanelView.js"].functions = {"initializer:4":0,"_render:24":0,"(anonymous 1):1":0};
_yuitest_coverage["build/mypanelView/mypanelView.js"].coveredLines = 10;
_yuitest_coverage["build/mypanelView/mypanelView.js"].coveredFunctions = 3;
_yuitest_coverline("build/mypanelView/mypanelView.js", 1);
YUI.add('mypanelView', function (Y, NAME) {

_yuitest_coverfunc("build/mypanelView/mypanelView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/mypanelView/mypanelView.js", 3);
var MyPanelView = Y.Base.create('mypanelView',Y.ZeView, [], {
                                  initializer:  function () {
                                      _yuitest_coverfunc("build/mypanelView/mypanelView.js", "initializer", 4);
_yuitest_coverline("build/mypanelView/mypanelView.js", 5);
this.regpanel = new Y.Panel({
                                                                  width   : 400,
                                                                  centered: true,
                                                                  render  : true,
                                                                  zIndex : 5
                                                              });
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 11);
this.regpanel.plug(Y.Plugin.Resize);
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 12);
this.regpanel.plug(Y.Plugin.Drag);
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 13);
this.regpanel.set('headerContent','Panel');
                                      // this._destroyOnExit.push(ac9,ac10,ac11,ac12);
                                  },
                                  template: '<div class="acFields">'
                                      + '<br>Autocomplete Field 1: <input id="ac-input9" type="text">'
                                      + '&nbsp;Autocomplete Field 2: <input id="ac-input10" type="text">'
                                      + '<br>Autocomplete Field 3: <input id="ac-input11" type="text">'
                                      + '&nbsp;Autocomplete Field 4: <input id="ac-input12" type="text">'
                                      + '</div>',
                                  events: {
                                  },
                                  _render:  function (container) {
                                      _yuitest_coverfunc("build/mypanelView/mypanelView.js", "_render", 24);
_yuitest_coverline("build/mypanelView/mypanelView.js", 25);
container.setHTML(this.template);

                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 27);
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
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 55);
this.regpanel.set('bodyContent',container.getHTML());
                                      // this._destroyOnExit.push(ac9,ac10,ac11,ac12);
                                  }
                              });

_yuitest_coverline("build/mypanelView/mypanelView.js", 60);
Y.MyPanelView = MyPanelView;

}, '@VERSION@', {
    "requires": [
        "zeView",
        "datatable",
        "contentSwapper",
        "autocomplete",
        "autocomplete-highlighters",
        "panel",
        "resize-plugin",
        "dd-plugin"
    ]
});
