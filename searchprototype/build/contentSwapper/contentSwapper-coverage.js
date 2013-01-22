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
_yuitest_coverage["build/contentSwapper/contentSwapper.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/contentSwapper/contentSwapper.js",
    code: []
};
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].code=["YUI.add('contentSwapper', function (Y, NAME) {","","var CS = function () {},","    isFn = Y.Lang.isFunction,","    each = Y.Array.each;","","","CS.prototype = {","    _swapContainer: null,","    _swapView: null,","    initializer: function () {","        this._swapContainer = [];","        this._swapView = [];","        this._eventHandles.push(","            this.after('destroy', this._beforeDestroy)","        );","    },","    setSwapContainer: function (container, index) {","        index = index || 0;","        var prev = this._swapContainer[index],","            view = this._swapView[index];","        this._swapContainer[index] = container;","        if (view) {","            if (container) {","                container.setHTML(view.get('contentBox'));","            } else {","                prev.setHTML('');","            }","        }","        return this;","    },","    getSwapContainer: function (index) {","        return this._swapContainer[index || 0];","    },","    setSwapView: function (view, index) {","        index = index || 0;","        var container = this._swapContainer[index];","        if (view === null || (isFn(view.render) && isFn(view.destroy))) {","            this._swapView[index] = view;","            if (view) {","                container.setHTML(view.get('contentBox'));","                view.addTarget(this);","            } else {","                container.setHTML('');","            }","        }","        return this;","    },","    getSwapView: function (index) {","        return this._swapView[index || 0];","    },","    _beforeDestroy: function () {","        each(this._swapView, function (view) {","            view.destroy();","        });","    }","","};","Y.ContentSwapper = CS;","","}, '@VERSION@', {\"requires\": [\"view\", \"calendar\", \"base-build\", \"datatype-date\", \"event-outside\", \"event-focus\"]});"];
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].lines = {"1":0,"3":0,"8":0,"12":0,"13":0,"14":0,"19":0,"20":0,"22":0,"23":0,"24":0,"25":0,"27":0,"30":0,"33":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"44":0,"47":0,"50":0,"53":0,"54":0,"59":0};
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].functions = {"initializer:11":0,"setSwapContainer:18":0,"getSwapContainer:32":0,"setSwapView:35":0,"getSwapView:49":0,"(anonymous 2):53":0,"_beforeDestroy:52":0,"(anonymous 1):1":0};
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].coveredLines = 28;
_yuitest_coverage["build/contentSwapper/contentSwapper.js"].coveredFunctions = 8;
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 1);
YUI.add('contentSwapper', function (Y, NAME) {

_yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "(anonymous 1)", 1);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 3);
var CS = function () {},
    isFn = Y.Lang.isFunction,
    each = Y.Array.each;


_yuitest_coverline("build/contentSwapper/contentSwapper.js", 8);
CS.prototype = {
    _swapContainer: null,
    _swapView: null,
    initializer: function () {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "initializer", 11);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 12);
this._swapContainer = [];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 13);
this._swapView = [];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 14);
this._eventHandles.push(
            this.after('destroy', this._beforeDestroy)
        );
    },
    setSwapContainer: function (container, index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "setSwapContainer", 18);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 19);
index = index || 0;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 20);
var prev = this._swapContainer[index],
            view = this._swapView[index];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 22);
this._swapContainer[index] = container;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 23);
if (view) {
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 24);
if (container) {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 25);
container.setHTML(view.get('contentBox'));
            } else {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 27);
prev.setHTML('');
            }
        }
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 30);
return this;
    },
    getSwapContainer: function (index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "getSwapContainer", 32);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 33);
return this._swapContainer[index || 0];
    },
    setSwapView: function (view, index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "setSwapView", 35);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 36);
index = index || 0;
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 37);
var container = this._swapContainer[index];
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 38);
if (view === null || (isFn(view.render) && isFn(view.destroy))) {
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 39);
this._swapView[index] = view;
            _yuitest_coverline("build/contentSwapper/contentSwapper.js", 40);
if (view) {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 41);
container.setHTML(view.get('contentBox'));
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 42);
view.addTarget(this);
            } else {
                _yuitest_coverline("build/contentSwapper/contentSwapper.js", 44);
container.setHTML('');
            }
        }
        _yuitest_coverline("build/contentSwapper/contentSwapper.js", 47);
return this;
    },
    getSwapView: function (index) {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "getSwapView", 49);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 50);
return this._swapView[index || 0];
    },
    _beforeDestroy: function () {
        _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "_beforeDestroy", 52);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 53);
each(this._swapView, function (view) {
            _yuitest_coverfunc("build/contentSwapper/contentSwapper.js", "(anonymous 2)", 53);
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 54);
view.destroy();
        });
    }

};
_yuitest_coverline("build/contentSwapper/contentSwapper.js", 59);
Y.ContentSwapper = CS;

}, '@VERSION@', {"requires": ["view", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]});
