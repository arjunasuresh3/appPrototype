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
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","var CS = function () {},","    isFn = Y.Lang.isFunction,","    each = Y.Array.each;","","","CS.prototype = {","    _swapContainer: null,","    _swapView: null,","    initializer: function () {","        this._swapContainer = [];","        this._swapView = [];","        this._eventHandles.push(","            this.after('destroy', this._beforeDestroy)","        );","    },","    setSwapContainer: function (container, index) {","        index = index || 0;","        var prev = this._swapContainer[index],","            view = this._swapView[index],","            children;","        this._swapContainer[index] = container;","        if (view) {","            if (container) {","                if (prev) {","                    children = prev.get('children');","                    children.each(function (child) {","                        container.appendChild(child);","                    });","                } else {","                    view.render(container);","                }","                view._set('container', container);","            } else {","                view.destroy();","            }","        }","        return this;","    },","    getSwapContainer: function (index) {","        return this._swapContainer[index || 0];","    },","    setSwapView: function (view, index) {","        index = index || 0;","        var prev = this._swapView[index],","            c = this._swapContainer[index];","        if (view === null || (isFn(view.render) && isFn(view.destroy))) {","            this._swapView[index] = view;","            if (prev) {","                prev.removeTarget(this);","                prev.destroy();","            }","            if (c && view) {","                view.render(c);","                view.addTarget(this);","            }","        }","        return this;","    },","    getSwapView: function (index) {","        return this._swapView[index || 0];","    },","    _beforeDestroy: function () {","        each(this._swapView, function (view) {","            view.destroy();","        });","    }","","};","Y.ContentSwapper = CS; var each = Y.Array.each,","     CONT = 'container';","","Y.ZeView = Y.Base.create(","    NAME,","    Y.View,","    [Y.ContentSwapper,Y.View.NodeMap],","    {","        _eventHandles: null,","        _destroyOnExit: null,","","        initializer: function (){","            this._eventHandles = [];","            this._destroyOnExit = [];","        },","        destructor: function () {","            each(this._eventHandles,function(h) {","                     h.detach();","                 });","            each(this._destroyOnExit,function(h) {","                     h.destroy();","                 });","            var c = this.get(CONT);","            if (c) {","                c.setHTML('');","            }","        },","        render: function (container) {","            container = Y.one(container);","            if (container) {","                this.set(CONT, container);","            } else {","                container = this.get(CONT);","            }","            if (container) {","                this._render(container);","            }","            return this;","        },","        attachEvents: function() {","            var ev = {};","             each(this._classes, function (c) {","                 if(c.prototype.events) {","                     Y.mix(ev,c.prototype.events);","                 }","             });","            return Y.ZeView.superclass.attachEvents.call(this,ev);","        },","        _getContainer: function (value) {","            return value;","        }","    }",");","","}, '@VERSION@', {","    \"requires\": [","        \"view\",","        \"calendar\",","        \"base-build\",","        \"datatype-date\",","        \"event-outside\",","        \"event-focus\",","        \"node\",","        \"view-node-map\"","    ]","});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"3":0,"8":0,"12":0,"13":0,"14":0,"19":0,"20":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"32":0,"34":0,"36":0,"39":0,"42":0,"45":0,"46":0,"48":0,"49":0,"50":0,"51":0,"52":0,"54":0,"55":0,"56":0,"59":0,"62":0,"65":0,"66":0,"71":0,"74":0,"83":0,"84":0,"87":0,"88":0,"90":0,"91":0,"93":0,"94":0,"95":0,"99":0,"100":0,"101":0,"103":0,"105":0,"106":0,"108":0,"111":0,"112":0,"113":0,"114":0,"117":0,"120":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"initializer:11":0,"(anonymous 2):28":0,"setSwapContainer:18":0,"getSwapContainer:41":0,"setSwapView:44":0,"getSwapView:61":0,"(anonymous 3):65":0,"_beforeDestroy:64":0,"initializer:82":0,"(anonymous 4):87":0,"(anonymous 5):90":0,"destructor:86":0,"render:98":0,"(anonymous 6):112":0,"attachEvents:110":0,"_getContainer:119":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 58;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 17;
_yuitest_coverline("build/zeView/zeView.js", 1);
YUI.add('zeView', function (Y, NAME) {

_yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zeView/zeView.js", 3);
var CS = function () {},
    isFn = Y.Lang.isFunction,
    each = Y.Array.each;


_yuitest_coverline("build/zeView/zeView.js", 8);
CS.prototype = {
    _swapContainer: null,
    _swapView: null,
    initializer: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 11);
_yuitest_coverline("build/zeView/zeView.js", 12);
this._swapContainer = [];
        _yuitest_coverline("build/zeView/zeView.js", 13);
this._swapView = [];
        _yuitest_coverline("build/zeView/zeView.js", 14);
this._eventHandles.push(
            this.after('destroy', this._beforeDestroy)
        );
    },
    setSwapContainer: function (container, index) {
        _yuitest_coverfunc("build/zeView/zeView.js", "setSwapContainer", 18);
_yuitest_coverline("build/zeView/zeView.js", 19);
index = index || 0;
        _yuitest_coverline("build/zeView/zeView.js", 20);
var prev = this._swapContainer[index],
            view = this._swapView[index],
            children;
        _yuitest_coverline("build/zeView/zeView.js", 23);
this._swapContainer[index] = container;
        _yuitest_coverline("build/zeView/zeView.js", 24);
if (view) {
            _yuitest_coverline("build/zeView/zeView.js", 25);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 26);
if (prev) {
                    _yuitest_coverline("build/zeView/zeView.js", 27);
children = prev.get('children');
                    _yuitest_coverline("build/zeView/zeView.js", 28);
children.each(function (child) {
                        _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 28);
_yuitest_coverline("build/zeView/zeView.js", 29);
container.appendChild(child);
                    });
                } else {
                    _yuitest_coverline("build/zeView/zeView.js", 32);
view.render(container);
                }
                _yuitest_coverline("build/zeView/zeView.js", 34);
view._set('container', container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 36);
view.destroy();
            }
        }
        _yuitest_coverline("build/zeView/zeView.js", 39);
return this;
    },
    getSwapContainer: function (index) {
        _yuitest_coverfunc("build/zeView/zeView.js", "getSwapContainer", 41);
_yuitest_coverline("build/zeView/zeView.js", 42);
return this._swapContainer[index || 0];
    },
    setSwapView: function (view, index) {
        _yuitest_coverfunc("build/zeView/zeView.js", "setSwapView", 44);
_yuitest_coverline("build/zeView/zeView.js", 45);
index = index || 0;
        _yuitest_coverline("build/zeView/zeView.js", 46);
var prev = this._swapView[index],
            c = this._swapContainer[index];
        _yuitest_coverline("build/zeView/zeView.js", 48);
if (view === null || (isFn(view.render) && isFn(view.destroy))) {
            _yuitest_coverline("build/zeView/zeView.js", 49);
this._swapView[index] = view;
            _yuitest_coverline("build/zeView/zeView.js", 50);
if (prev) {
                _yuitest_coverline("build/zeView/zeView.js", 51);
prev.removeTarget(this);
                _yuitest_coverline("build/zeView/zeView.js", 52);
prev.destroy();
            }
            _yuitest_coverline("build/zeView/zeView.js", 54);
if (c && view) {
                _yuitest_coverline("build/zeView/zeView.js", 55);
view.render(c);
                _yuitest_coverline("build/zeView/zeView.js", 56);
view.addTarget(this);
            }
        }
        _yuitest_coverline("build/zeView/zeView.js", 59);
return this;
    },
    getSwapView: function (index) {
        _yuitest_coverfunc("build/zeView/zeView.js", "getSwapView", 61);
_yuitest_coverline("build/zeView/zeView.js", 62);
return this._swapView[index || 0];
    },
    _beforeDestroy: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "_beforeDestroy", 64);
_yuitest_coverline("build/zeView/zeView.js", 65);
each(this._swapView, function (view) {
            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 65);
_yuitest_coverline("build/zeView/zeView.js", 66);
view.destroy();
        });
    }

};
_yuitest_coverline("build/zeView/zeView.js", 71);
Y.ContentSwapper = CS; var each = Y.Array.each,
     CONT = 'container';

_yuitest_coverline("build/zeView/zeView.js", 74);
Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper,Y.View.NodeMap],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 82);
_yuitest_coverline("build/zeView/zeView.js", 83);
this._eventHandles = [];
            _yuitest_coverline("build/zeView/zeView.js", 84);
this._destroyOnExit = [];
        },
        destructor: function () {
            _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 86);
_yuitest_coverline("build/zeView/zeView.js", 87);
each(this._eventHandles,function(h) {
                     _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 4)", 87);
_yuitest_coverline("build/zeView/zeView.js", 88);
h.detach();
                 });
            _yuitest_coverline("build/zeView/zeView.js", 90);
each(this._destroyOnExit,function(h) {
                     _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 5)", 90);
_yuitest_coverline("build/zeView/zeView.js", 91);
h.destroy();
                 });
            _yuitest_coverline("build/zeView/zeView.js", 93);
var c = this.get(CONT);
            _yuitest_coverline("build/zeView/zeView.js", 94);
if (c) {
                _yuitest_coverline("build/zeView/zeView.js", 95);
c.setHTML('');
            }
        },
        render: function (container) {
            _yuitest_coverfunc("build/zeView/zeView.js", "render", 98);
_yuitest_coverline("build/zeView/zeView.js", 99);
container = Y.one(container);
            _yuitest_coverline("build/zeView/zeView.js", 100);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 101);
this.set(CONT, container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 103);
container = this.get(CONT);
            }
            _yuitest_coverline("build/zeView/zeView.js", 105);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 106);
this._render(container);
            }
            _yuitest_coverline("build/zeView/zeView.js", 108);
return this;
        },
        attachEvents: function() {
            _yuitest_coverfunc("build/zeView/zeView.js", "attachEvents", 110);
_yuitest_coverline("build/zeView/zeView.js", 111);
var ev = {};
             _yuitest_coverline("build/zeView/zeView.js", 112);
each(this._classes, function (c) {
                 _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 6)", 112);
_yuitest_coverline("build/zeView/zeView.js", 113);
if(c.prototype.events) {
                     _yuitest_coverline("build/zeView/zeView.js", 114);
Y.mix(ev,c.prototype.events);
                 }
             });
            _yuitest_coverline("build/zeView/zeView.js", 117);
return Y.ZeView.superclass.attachEvents.call(this,ev);
        },
        _getContainer: function (value) {
            _yuitest_coverfunc("build/zeView/zeView.js", "_getContainer", 119);
_yuitest_coverline("build/zeView/zeView.js", 120);
return value;
        }
    }
);

}, '@VERSION@', {
    "requires": [
        "view",
        "calendar",
        "base-build",
        "datatype-date",
        "event-outside",
        "event-focus",
        "node",
        "view-node-map"
    ]
});
