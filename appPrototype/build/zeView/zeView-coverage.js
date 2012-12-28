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
_yuitest_coverage["build/zeView/zeView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/zeView/zeView.js",
    code: []
};
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","Y.ZeView = Y.Base.create(","    NAME,","    Y.View,","    [],","    {","        _eventHandles: null,","        _destroyOnExit: null,","","        initializer: function (){","            this._eventHandles = [];","            this._destroyOnExit = [];","        },","        destructor: function () {","            Y.Array.each(this._eventHandles,function(h){","                             h.detach();","                         });","            Y.Array.each(this._destroyOnExit,function(h){","                             h.destroy();","                         });","        },","        render: function (container) {","            container = Y.one(container);","            if (container) {","                this.set('container', container);","            } else {","                container = this.get('container');","            }","","            if (container) {","                this._render(container);","            }","","            return this;","        },","        attachEvents: function() {","            var cl = this._classes, c, i, ev={};","            for (i=0;i<cl.length;i++) {","                c = cl[i];","                 if(c.prototype.events) {","                    Y.mix(ev,c.prototype.events);","                }","            }","            ","            Y.ZeView.superclass.attachEvents.call(this,ev);","        }","    }",");","","}, '@VERSION@', {\"requires\": [\"view\"]});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"3":0,"12":0,"13":0,"16":0,"17":0,"19":0,"20":0,"24":0,"25":0,"26":0,"28":0,"31":0,"32":0,"35":0,"38":0,"39":0,"40":0,"41":0,"42":0,"46":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"initializer:11":0,"(anonymous 2):16":0,"(anonymous 3):19":0,"destructor:15":0,"render:23":0,"attachEvents:37":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 21;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 7;
_yuitest_coverline("build/zeView/zeView.js", 1);
YUI.add('zeView', function (Y, NAME) {

_yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zeView/zeView.js", 3);
Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 11);
_yuitest_coverline("build/zeView/zeView.js", 12);
this._eventHandles = [];
            _yuitest_coverline("build/zeView/zeView.js", 13);
this._destroyOnExit = [];
        },
        destructor: function () {
            _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 15);
_yuitest_coverline("build/zeView/zeView.js", 16);
Y.Array.each(this._eventHandles,function(h){
                             _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 16);
_yuitest_coverline("build/zeView/zeView.js", 17);
h.detach();
                         });
            _yuitest_coverline("build/zeView/zeView.js", 19);
Y.Array.each(this._destroyOnExit,function(h){
                             _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 19);
_yuitest_coverline("build/zeView/zeView.js", 20);
h.destroy();
                         });
        },
        render: function (container) {
            _yuitest_coverfunc("build/zeView/zeView.js", "render", 23);
_yuitest_coverline("build/zeView/zeView.js", 24);
container = Y.one(container);
            _yuitest_coverline("build/zeView/zeView.js", 25);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 26);
this.set('container', container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 28);
container = this.get('container');
            }

            _yuitest_coverline("build/zeView/zeView.js", 31);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 32);
this._render(container);
            }

            _yuitest_coverline("build/zeView/zeView.js", 35);
return this;
        },
        attachEvents: function() {
            _yuitest_coverfunc("build/zeView/zeView.js", "attachEvents", 37);
_yuitest_coverline("build/zeView/zeView.js", 38);
var cl = this._classes, c, i, ev={};
            _yuitest_coverline("build/zeView/zeView.js", 39);
for (i=0;i<cl.length;i++) {
                _yuitest_coverline("build/zeView/zeView.js", 40);
c = cl[i];
                 _yuitest_coverline("build/zeView/zeView.js", 41);
if(c.prototype.events) {
                    _yuitest_coverline("build/zeView/zeView.js", 42);
Y.mix(ev,c.prototype.events);
                }
            }
            
            _yuitest_coverline("build/zeView/zeView.js", 46);
Y.ZeView.superclass.attachEvents.call(this,ev);
        }
    }
);

}, '@VERSION@', {"requires": ["view"]});
