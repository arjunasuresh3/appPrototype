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
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","var CS = function () {},","CONTAINER = 'swapContainer',","VIEW = 'swapView',","CHANGE = 'Change', L = Y.Lang;","","CS.ATTRS = {","     swapContainer: {","         value: null,","         validator: function (value) {","             return value === null || value.constructor.NAME === 'node';","         }","     },","     swapView: {","         value: null,","         validator: function (value) {","             return value === null  || (L.isFunction(value.render) && L.isFunction(value.destroy));","             // return value === null  || value instanceof Y.View;","         }","     }","};","","CS.prototype = {","     initializer: function () {","         this._eventHandles.push(","             this.after(CONTAINER + CHANGE, this._afterSwapContainerChange)","         );","         this._eventHandles.push(","             this.after(VIEW + CHANGE, this._afterViewChange)","         );","         this._eventHandles.push(","             this.after('destroy', this._beforeDestroy)","         );","     },","     _afterSwapContainerChange: function (ev) {","         var view = this.get(VIEW), prev = ev.prevVal, value = ev.newVal, children;","         if (view) {","             if (value) {","                 if (prev) {","                     children = prev.get('children');","                     children.each(function (child) {","                         value.appendChild(child);","                     });","                 } else {","                     view.render(value);","                 }","                 view._set('container', value);","             } else {","                 view.destroy();","             }","         }","     },","     _afterViewChange: function (ev) {","         var prev = ev.prevVal, value = ev.newVal;","         if (prev) {","             prev.removeTarget(this);","             prev.destroy();","         }","         var c = this.get(CONTAINER);","         if (c && value) {","             value.render(c);","             value.addTarget(this);","         }","     },","     _beforeDestroy: function () {","         var view = this.get(VIEW);","         if (view) {","             view.destroy();","         }","     }","","};","Y.ContentSwapper = CS;var each = Y.Array.each,","     CONT = 'container';","","Y.ZeView = Y.Base.create(","    NAME,","    Y.View,","    [Y.ContentSwapper,Y.View.NodeMap],","    {","        _eventHandles: null,","        _destroyOnExit: null,","","        initializer: function (){","            this._eventHandles = [];","            this._destroyOnExit = [];","        },","        destructor: function () {","            each(this._eventHandles,function(h) {","                     h.detach();","                 });","            each(this._destroyOnExit,function(h) {","                     h.destroy();","                 });","            var c = this.get(CONT);","            if (c) {","                c.setHTML('');","            }","        },","        render: function (container) {","            container = Y.one(container);","            if (container) {","                this.set(CONT, container);","            } else {","                container = this.get(CONT);","            }","            if (container) {","                this._render(container);","            }","            return this;","        },","        attachEvents: function() {","            var ev = {};","             each(this._classes, function (c) {","                 if(c.prototype.events) {","                     Y.mix(ev,c.prototype.events);","                 }","             });","            return Y.ZeView.superclass.attachEvents.call(this,ev);","        }","    }",");","","}, '@VERSION@', {","    \"requires\": [","        \"view\",","        \"calendar\",","        \"base-build\",","        \"datatype-date\",","        \"event-outside\",","        \"event-focus\",","        \"node\",","        \"view-node-map\"","    ]","});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"3":0,"8":0,"12":0,"18":0,"24":0,"26":0,"29":0,"32":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"46":0,"48":0,"50":0,"55":0,"56":0,"57":0,"58":0,"60":0,"61":0,"62":0,"63":0,"67":0,"68":0,"69":0,"74":0,"77":0,"86":0,"87":0,"90":0,"91":0,"93":0,"94":0,"96":0,"97":0,"98":0,"102":0,"103":0,"104":0,"106":0,"108":0,"109":0,"111":0,"114":0,"115":0,"116":0,"117":0,"120":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"validator:11":0,"validator:17":0,"initializer:25":0,"(anonymous 2):42":0,"_afterSwapContainerChange:36":0,"_afterViewChange:54":0,"_beforeDestroy:66":0,"initializer:85":0,"(anonymous 3):90":0,"(anonymous 4):93":0,"destructor:89":0,"render:101":0,"(anonymous 5):115":0,"attachEvents:113":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 53;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 15;
_yuitest_coverline("build/zeView/zeView.js", 1);
YUI.add('zeView', function (Y, NAME) {

_yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zeView/zeView.js", 3);
var CS = function () {},
CONTAINER = 'swapContainer',
VIEW = 'swapView',
CHANGE = 'Change', L = Y.Lang;

_yuitest_coverline("build/zeView/zeView.js", 8);
CS.ATTRS = {
     swapContainer: {
         value: null,
         validator: function (value) {
             _yuitest_coverfunc("build/zeView/zeView.js", "validator", 11);
_yuitest_coverline("build/zeView/zeView.js", 12);
return value === null || value.constructor.NAME === 'node';
         }
     },
     swapView: {
         value: null,
         validator: function (value) {
             _yuitest_coverfunc("build/zeView/zeView.js", "validator", 17);
_yuitest_coverline("build/zeView/zeView.js", 18);
return value === null  || (L.isFunction(value.render) && L.isFunction(value.destroy));
             // return value === null  || value instanceof Y.View;
         }
     }
};

_yuitest_coverline("build/zeView/zeView.js", 24);
CS.prototype = {
     initializer: function () {
         _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 25);
_yuitest_coverline("build/zeView/zeView.js", 26);
this._eventHandles.push(
             this.after(CONTAINER + CHANGE, this._afterSwapContainerChange)
         );
         _yuitest_coverline("build/zeView/zeView.js", 29);
this._eventHandles.push(
             this.after(VIEW + CHANGE, this._afterViewChange)
         );
         _yuitest_coverline("build/zeView/zeView.js", 32);
this._eventHandles.push(
             this.after('destroy', this._beforeDestroy)
         );
     },
     _afterSwapContainerChange: function (ev) {
         _yuitest_coverfunc("build/zeView/zeView.js", "_afterSwapContainerChange", 36);
_yuitest_coverline("build/zeView/zeView.js", 37);
var view = this.get(VIEW), prev = ev.prevVal, value = ev.newVal, children;
         _yuitest_coverline("build/zeView/zeView.js", 38);
if (view) {
             _yuitest_coverline("build/zeView/zeView.js", 39);
if (value) {
                 _yuitest_coverline("build/zeView/zeView.js", 40);
if (prev) {
                     _yuitest_coverline("build/zeView/zeView.js", 41);
children = prev.get('children');
                     _yuitest_coverline("build/zeView/zeView.js", 42);
children.each(function (child) {
                         _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 42);
_yuitest_coverline("build/zeView/zeView.js", 43);
value.appendChild(child);
                     });
                 } else {
                     _yuitest_coverline("build/zeView/zeView.js", 46);
view.render(value);
                 }
                 _yuitest_coverline("build/zeView/zeView.js", 48);
view._set('container', value);
             } else {
                 _yuitest_coverline("build/zeView/zeView.js", 50);
view.destroy();
             }
         }
     },
     _afterViewChange: function (ev) {
         _yuitest_coverfunc("build/zeView/zeView.js", "_afterViewChange", 54);
_yuitest_coverline("build/zeView/zeView.js", 55);
var prev = ev.prevVal, value = ev.newVal;
         _yuitest_coverline("build/zeView/zeView.js", 56);
if (prev) {
             _yuitest_coverline("build/zeView/zeView.js", 57);
prev.removeTarget(this);
             _yuitest_coverline("build/zeView/zeView.js", 58);
prev.destroy();
         }
         _yuitest_coverline("build/zeView/zeView.js", 60);
var c = this.get(CONTAINER);
         _yuitest_coverline("build/zeView/zeView.js", 61);
if (c && value) {
             _yuitest_coverline("build/zeView/zeView.js", 62);
value.render(c);
             _yuitest_coverline("build/zeView/zeView.js", 63);
value.addTarget(this);
         }
     },
     _beforeDestroy: function () {
         _yuitest_coverfunc("build/zeView/zeView.js", "_beforeDestroy", 66);
_yuitest_coverline("build/zeView/zeView.js", 67);
var view = this.get(VIEW);
         _yuitest_coverline("build/zeView/zeView.js", 68);
if (view) {
             _yuitest_coverline("build/zeView/zeView.js", 69);
view.destroy();
         }
     }

};
_yuitest_coverline("build/zeView/zeView.js", 74);
Y.ContentSwapper = CS;var each = Y.Array.each,
     CONT = 'container';

_yuitest_coverline("build/zeView/zeView.js", 77);
Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper,Y.View.NodeMap],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 85);
_yuitest_coverline("build/zeView/zeView.js", 86);
this._eventHandles = [];
            _yuitest_coverline("build/zeView/zeView.js", 87);
this._destroyOnExit = [];
        },
        destructor: function () {
            _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 89);
_yuitest_coverline("build/zeView/zeView.js", 90);
each(this._eventHandles,function(h) {
                     _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 90);
_yuitest_coverline("build/zeView/zeView.js", 91);
h.detach();
                 });
            _yuitest_coverline("build/zeView/zeView.js", 93);
each(this._destroyOnExit,function(h) {
                     _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 4)", 93);
_yuitest_coverline("build/zeView/zeView.js", 94);
h.destroy();
                 });
            _yuitest_coverline("build/zeView/zeView.js", 96);
var c = this.get(CONT);
            _yuitest_coverline("build/zeView/zeView.js", 97);
if (c) {
                _yuitest_coverline("build/zeView/zeView.js", 98);
c.setHTML('');
            }
        },
        render: function (container) {
            _yuitest_coverfunc("build/zeView/zeView.js", "render", 101);
_yuitest_coverline("build/zeView/zeView.js", 102);
container = Y.one(container);
            _yuitest_coverline("build/zeView/zeView.js", 103);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 104);
this.set(CONT, container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 106);
container = this.get(CONT);
            }
            _yuitest_coverline("build/zeView/zeView.js", 108);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 109);
this._render(container);
            }
            _yuitest_coverline("build/zeView/zeView.js", 111);
return this;
        },
        attachEvents: function() {
            _yuitest_coverfunc("build/zeView/zeView.js", "attachEvents", 113);
_yuitest_coverline("build/zeView/zeView.js", 114);
var ev = {};
             _yuitest_coverline("build/zeView/zeView.js", 115);
each(this._classes, function (c) {
                 _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 5)", 115);
_yuitest_coverline("build/zeView/zeView.js", 116);
if(c.prototype.events) {
                     _yuitest_coverline("build/zeView/zeView.js", 117);
Y.mix(ev,c.prototype.events);
                 }
             });
            _yuitest_coverline("build/zeView/zeView.js", 120);
return Y.ZeView.superclass.attachEvents.call(this,ev);
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
