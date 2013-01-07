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
_yuitest_coverage["build/modalView/modalView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/modalView/modalView.js",
    code: []
};
_yuitest_coverage["build/modalView/modalView.js"].code=["YUI.add('modalView', function (Y, NAME) {","","var ModalView = Y.Base.create('modalView',Y.ZeView, [], {","                                  template: '<div class=\"acFields\">'","                                      + '<br>Autocomplete Field 1: <input id=\"ac-input5\" type=\"text\">'","                                      + '&nbsp;Autocomplete Field 2: <input id=\"ac-input6\" type=\"text\">'","                                      + '<br>Autocomplete Field 3: <input id=\"ac-input7\" type=\"text\">'","                                      + '&nbsp;Autocomplete Field 4: <input id=\"ac-input8\" type=\"text\">'","                                      + '</div>',","                                  events: {","                                  },","                                  _render:  function (container) {","                                      container.setHTML(this.template);","                                      var ac5 = new Y.AutoComplete({","                                                                       inputNode: '#ac-input5',","                                                                       render   : true,","                                                                       resultHighlighter: 'phraseMatch',","                                                                       source: 'select * from search.suggest where query=\"{query}\"',","                                                                       yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                   }),","                                      ac6 = new Y.AutoComplete({","                                                                   inputNode: '#ac-input6',","                                                                   render   : true,","                                                                   resultHighlighter: 'phraseMatch',","                                                                   source: 'select * from search.suggest where query=\"{query}\"',","                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                               }),","                                      ac7 = new Y.AutoComplete({","                                                                   inputNode: '#ac-input7',","                                                                   render   : true,","                                                                   resultHighlighter: 'phraseMatch',","                                                                   source: 'select * from search.suggest where query=\"{query}\"',","                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                               }),","                                      ac8 = new Y.AutoComplete({","                                                                   inputNode: '#ac-input8',","                                                                   render   : true,","                                                                   resultHighlighter: 'phraseMatch',","                                                                   source: 'select * from search.suggest where query=\"{query}\"',","                                                                   yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                               });","                                      var panel = new Y.Panel({","                                                                  // srcNode : '#myPanelContent',","                                                                  width   : 400,","                                                                  centered: true,","                                                                  render  : true,","                                                                  modal  : true,","                                                                  zIndex  : 5","                                                              });","                                      panel.set('headerContent','Modal');","                                      panel.set('bodyContent',container.getHTML());","                                      // this._destroyOnExit.push(ac5,ac6,ac7,ac8);","                                  }","                              });","","Y.ModalView = ModalView;","","}, '@VERSION@', {","    \"requires\": [","        \"zeView\",","        \"datatable\",","        \"contentSwapper\",","        \"autocomplete\",","        \"autocomplete-highlighters\",","        \"panel\",","        \"resize-plugin\",","        \"dd-plugin\"","    ]","});"];
_yuitest_coverage["build/modalView/modalView.js"].lines = {"1":0,"3":0,"13":0,"14":0,"42":0,"50":0,"51":0,"56":0};
_yuitest_coverage["build/modalView/modalView.js"].functions = {"_render:12":0,"(anonymous 1):1":0};
_yuitest_coverage["build/modalView/modalView.js"].coveredLines = 8;
_yuitest_coverage["build/modalView/modalView.js"].coveredFunctions = 2;
_yuitest_coverline("build/modalView/modalView.js", 1);
YUI.add('modalView', function (Y, NAME) {

_yuitest_coverfunc("build/modalView/modalView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/modalView/modalView.js", 3);
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
                                      _yuitest_coverfunc("build/modalView/modalView.js", "_render", 12);
_yuitest_coverline("build/modalView/modalView.js", 13);
container.setHTML(this.template);
                                      _yuitest_coverline("build/modalView/modalView.js", 14);
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
                                      _yuitest_coverline("build/modalView/modalView.js", 42);
var panel = new Y.Panel({
                                                                  // srcNode : '#myPanelContent',
                                                                  width   : 400,
                                                                  centered: true,
                                                                  render  : true,
                                                                  modal  : true,
                                                                  zIndex  : 5
                                                              });
                                      _yuitest_coverline("build/modalView/modalView.js", 50);
panel.set('headerContent','Modal');
                                      _yuitest_coverline("build/modalView/modalView.js", 51);
panel.set('bodyContent',container.getHTML());
                                      // this._destroyOnExit.push(ac5,ac6,ac7,ac8);
                                  }
                              });

_yuitest_coverline("build/modalView/modalView.js", 56);
Y.ModalView = ModalView;

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
