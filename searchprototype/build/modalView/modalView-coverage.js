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
_yuitest_coverage["build/modalView/modalView.js"].code=["YUI.add('modalView', function (Y, NAME) {","","var ModalView = Y.Base.create('modalView',Y.ZeView, [], {","                                  initializer:  function (container) {","                                      this.regmodals = [];","                                  },","                                  template: '<div class=\"acFields\">'","                                      + '<br>Autocomplete Field 1: <input class=\"acFieldsPanel\" id=\"ac-input5\" type=\"text\">'","                                      + 'Autocomplete Field 2: <input class=\"acFieldsPanel\" id=\"ac-input6\" type=\"text\">'","                                      + '<br>Autocomplete Field 3: <input class=\"acFieldsPanel\" id=\"ac-input7\" type=\"text\">'","                                      + 'Autocomplete Field 4: <input class=\"acFieldsPanel\" id=\"ac-input8\" type=\"text\">'","                                      + '</div>',","                                  events: {","                                  },","                                  _render:  function (container) {","                                      container.setHTML(this.template);","                                      var _this = this,","                                      acFields = container.all('input.acFieldsPanel');","                                      acFields.each(function(eachacField) {","                                                        var ac = new Y.AutoComplete({","                                                                                        inputNode: eachacField,","                                                                                        render   : true,","                                                                                        resultHighlighter: 'phraseMatch',","                                                                                        source: 'select * from search.suggest where query=\"{query}\"',","                                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                                    });","                                                        // _this._destroyOnExit.push(ac);","                                                    });","                                      var panel = new Y.Panel({","                                                                  srcNode: container,","                                                                  width   : 400,","                                                                  centered: true,","                                                                  render  : true,","                                                                  modal  : true,","                                                                  zIndex  : 5","                                                              });","                                      panel.set('headerContent','Modal');","","                                      this.regmodals.push(panel);","                                  }","                              });","","Y.ModalView = ModalView;","","}, '@VERSION@', {","    \"requires\": [","        \"zeView\",","        \"datatable\",","        \"contentSwapper\",","        \"autocomplete\",","        \"autocomplete-highlighters\",","        \"panel\",","        \"resize-plugin\",","        \"dd-plugin\"","    ]","});"];
_yuitest_coverage["build/modalView/modalView.js"].lines = {"1":0,"3":0,"5":0,"16":0,"17":0,"19":0,"20":0,"29":0,"37":0,"39":0,"43":0};
_yuitest_coverage["build/modalView/modalView.js"].functions = {"initializer:4":0,"(anonymous 2):19":0,"_render:15":0,"(anonymous 1):1":0};
_yuitest_coverage["build/modalView/modalView.js"].coveredLines = 11;
_yuitest_coverage["build/modalView/modalView.js"].coveredFunctions = 4;
_yuitest_coverline("build/modalView/modalView.js", 1);
YUI.add('modalView', function (Y, NAME) {

_yuitest_coverfunc("build/modalView/modalView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/modalView/modalView.js", 3);
var ModalView = Y.Base.create('modalView',Y.ZeView, [], {
                                  initializer:  function (container) {
                                      _yuitest_coverfunc("build/modalView/modalView.js", "initializer", 4);
_yuitest_coverline("build/modalView/modalView.js", 5);
this.regmodals = [];
                                  },
                                  template: '<div class="acFields">'
                                      + '<br>Autocomplete Field 1: <input class="acFieldsPanel" id="ac-input5" type="text">'
                                      + 'Autocomplete Field 2: <input class="acFieldsPanel" id="ac-input6" type="text">'
                                      + '<br>Autocomplete Field 3: <input class="acFieldsPanel" id="ac-input7" type="text">'
                                      + 'Autocomplete Field 4: <input class="acFieldsPanel" id="ac-input8" type="text">'
                                      + '</div>',
                                  events: {
                                  },
                                  _render:  function (container) {
                                      _yuitest_coverfunc("build/modalView/modalView.js", "_render", 15);
_yuitest_coverline("build/modalView/modalView.js", 16);
container.setHTML(this.template);
                                      _yuitest_coverline("build/modalView/modalView.js", 17);
var _this = this,
                                      acFields = container.all('input.acFieldsPanel');
                                      _yuitest_coverline("build/modalView/modalView.js", 19);
acFields.each(function(eachacField) {
                                                        _yuitest_coverfunc("build/modalView/modalView.js", "(anonymous 2)", 19);
_yuitest_coverline("build/modalView/modalView.js", 20);
var ac = new Y.AutoComplete({
                                                                                        inputNode: eachacField,
                                                                                        render   : true,
                                                                                        resultHighlighter: 'phraseMatch',
                                                                                        source: 'select * from search.suggest where query="{query}"',
                                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                                    });
                                                        // _this._destroyOnExit.push(ac);
                                                    });
                                      _yuitest_coverline("build/modalView/modalView.js", 29);
var panel = new Y.Panel({
                                                                  srcNode: container,
                                                                  width   : 400,
                                                                  centered: true,
                                                                  render  : true,
                                                                  modal  : true,
                                                                  zIndex  : 5
                                                              });
                                      _yuitest_coverline("build/modalView/modalView.js", 37);
panel.set('headerContent','Modal');

                                      _yuitest_coverline("build/modalView/modalView.js", 39);
this.regmodals.push(panel);
                                  }
                              });

_yuitest_coverline("build/modalView/modalView.js", 43);
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
