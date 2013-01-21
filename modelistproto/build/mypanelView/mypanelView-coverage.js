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
_yuitest_coverage["build/mypanelView/mypanelView.js"].code=["YUI.add('mypanelView', function (Y, NAME) {","","var MyPanelView = Y.Base.create('mypanelView',Y.ZeView, [], {","                                  initializer:  function (container) {","                                      this.regpanels = [];","                                  },","                                  template: '<div class=\"acFields\">'","                                      + '<br>Autocomplete Field 1: <input class=\"acFieldsPanel\" id=\"ac-input9\" type=\"text\">'","                                      + 'Autocomplete Field 2: <input class=\"acFieldsPanel\" id=\"ac-input10\" type=\"text\">'","                                      + '<br>Autocomplete Field 3: <input class=\"acFieldsPanel\" id=\"ac-input11\" type=\"text\">'","                                      + 'Autocomplete Field 4: <input class=\"acFieldsPanel\" id=\"ac-input12\" type=\"text\">'","                                      + '</div>',","                                  events: {","                                  },","                                  _render: function (container) {","                                      container.setHTML(this.template);","                                      var _this = this,","                                      acFields = container.all('input.acFieldsPanel');","                                      acFields.each(function(eachacField) {","                                                        var ac = new Y.AutoComplete({","                                                                                        inputNode: eachacField,","                                                                                        render   : true,","                                                                                        resultHighlighter: 'phraseMatch',","                                                                                        source: 'select * from search.suggest where query=\"{query}\"',","                                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'","                                                                                    });","                                                        // _this._destroyOnExit.push(ac);","                                                    });","","                                      var regpanel = new Y.Panel({","                                                                     srcNode: container,","                                                                     width   : 400,","                                                                     centered: true,","                                                                     render  : true,","                                                                     zIndex : 5,","                                                                     headerContent : 'Panel'","                                                              }).plug(Y.Plugin.Drag).plug(Y.Plugin.Resize);","                                      // regpanel.plug(Y.Plugin.Drag);","                                      // regpanel.setStdModContent(Y.WidgetStdMod.BODY,container);","                                      // regpanel.set('bodyContent', container.getHTML());","                                      this.regpanels.push(regpanel);","                                  }","                              });","","Y.MyPanelView = MyPanelView;","","}, '@VERSION@', {","    \"requires\": [","        \"zeView\",","        \"datatable\",","        \"contentSwapper\",","        \"autocomplete\",","        \"autocomplete-highlighters\",","        \"panel\",","        \"resize-plugin\",","        \"dd-plugin\",","        \"overlay\"","    ]","});"];
_yuitest_coverage["build/mypanelView/mypanelView.js"].lines = {"1":0,"3":0,"5":0,"16":0,"17":0,"19":0,"20":0,"30":0,"41":0,"45":0};
_yuitest_coverage["build/mypanelView/mypanelView.js"].functions = {"initializer:4":0,"(anonymous 2):19":0,"_render:15":0,"(anonymous 1):1":0};
_yuitest_coverage["build/mypanelView/mypanelView.js"].coveredLines = 10;
_yuitest_coverage["build/mypanelView/mypanelView.js"].coveredFunctions = 4;
_yuitest_coverline("build/mypanelView/mypanelView.js", 1);
YUI.add('mypanelView', function (Y, NAME) {

_yuitest_coverfunc("build/mypanelView/mypanelView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/mypanelView/mypanelView.js", 3);
var MyPanelView = Y.Base.create('mypanelView',Y.ZeView, [], {
                                  initializer:  function (container) {
                                      _yuitest_coverfunc("build/mypanelView/mypanelView.js", "initializer", 4);
_yuitest_coverline("build/mypanelView/mypanelView.js", 5);
this.regpanels = [];
                                  },
                                  template: '<div class="acFields">'
                                      + '<br>Autocomplete Field 1: <input class="acFieldsPanel" id="ac-input9" type="text">'
                                      + 'Autocomplete Field 2: <input class="acFieldsPanel" id="ac-input10" type="text">'
                                      + '<br>Autocomplete Field 3: <input class="acFieldsPanel" id="ac-input11" type="text">'
                                      + 'Autocomplete Field 4: <input class="acFieldsPanel" id="ac-input12" type="text">'
                                      + '</div>',
                                  events: {
                                  },
                                  _render: function (container) {
                                      _yuitest_coverfunc("build/mypanelView/mypanelView.js", "_render", 15);
_yuitest_coverline("build/mypanelView/mypanelView.js", 16);
container.setHTML(this.template);
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 17);
var _this = this,
                                      acFields = container.all('input.acFieldsPanel');
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 19);
acFields.each(function(eachacField) {
                                                        _yuitest_coverfunc("build/mypanelView/mypanelView.js", "(anonymous 2)", 19);
_yuitest_coverline("build/mypanelView/mypanelView.js", 20);
var ac = new Y.AutoComplete({
                                                                                        inputNode: eachacField,
                                                                                        render   : true,
                                                                                        resultHighlighter: 'phraseMatch',
                                                                                        source: 'select * from search.suggest where query="{query}"',
                                                                                        yqlEnv: 'http://pieisgood.org/yql/tables.env'
                                                                                    });
                                                        // _this._destroyOnExit.push(ac);
                                                    });

                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 30);
var regpanel = new Y.Panel({
                                                                     srcNode: container,
                                                                     width   : 400,
                                                                     centered: true,
                                                                     render  : true,
                                                                     zIndex : 5,
                                                                     headerContent : 'Panel'
                                                              }).plug(Y.Plugin.Drag).plug(Y.Plugin.Resize);
                                      // regpanel.plug(Y.Plugin.Drag);
                                      // regpanel.setStdModContent(Y.WidgetStdMod.BODY,container);
                                      // regpanel.set('bodyContent', container.getHTML());
                                      _yuitest_coverline("build/mypanelView/mypanelView.js", 41);
this.regpanels.push(regpanel);
                                  }
                              });

_yuitest_coverline("build/mypanelView/mypanelView.js", 45);
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
        "dd-plugin",
        "overlay"
    ]
});
