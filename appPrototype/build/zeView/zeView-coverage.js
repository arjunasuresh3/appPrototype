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
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","var CS = function () {},","CONTAINER = 'swapContainer',","VIEW = 'swapView',","CHANGE = 'Change', L = Y.Lang;","","CS.ATTRS = {","     swapContainer: {","         value: null,","         validator: function (value) {","             return value === null || value.constructor.NAME === 'node';","         }","     },","     swapView: {","         value: null,","         validator: function (value) {","             return value === null  || (L.isFunction(value.render) && L.isFunction(value.destroy));","             // return value === null  || value instanceof Y.View;","         }","     }","};","","CS.prototype = {","     initializer: function () {","         this._eventHandles.push(","             this.after(CONTAINER + CHANGE, this._afterSwapContainerChange)","         );","         this._eventHandles.push(","             this.after(VIEW + CHANGE, this._afterViewChange)","         );","         this._eventHandles.push(","             this.after('destroy', this._beforeDestroy)","         );","     },","     _afterSwapContainerChange: function (ev) {","         var view = this.get(VIEW), prev = ev.prevVal, value = ","ev.newVal, children;","         if (view) {","             if (value) {","                 if (prev) {","                     children = prev.get('children');","                     children.each(function (child) {","                         value.appendChild(child);","                     });","                 } else {","                     view.render(value);","                 }","                 view._set('container', value);","             } else {","                 view.destroy();","             }","         }","     },","     _afterViewChange: function (ev) {","         var prev = ev.prevVal, value = ev.newVal;","         if (prev) {","             prev.removeTarget(this);","             prev.destroy();","         }","         var c = this.get(CONTAINER);","         if (c && value) {","             value.render(c);","             value.addTarget(this);","         }","     },","     _beforeDestroy: function () {","         var view = this.get(VIEW);","         if (view) {","             view.destroy();","         }","     }","","};","Y.ContentSwapper = CS;Y.ZeView = Y.Base.create(","    NAME,","    Y.View,","    [Y.ContentSwapper],","    {","        _eventHandles: null,","        _destroyOnExit: null,","","        initializer: function (){","            this._eventHandles = [];","            this._destroyOnExit = [];","        },","        destructor: function () {","            Y.Array.each(this._eventHandles,function(h){","                             h.detach();","                         });","            Y.Array.each(this._destroyOnExit,function(h){","                             h.destroy();","                         });","        },","        render: function (container) {","            container = Y.one(container);","            if (container) {","                this.set('container', container);","            } else {","                container = this.get('container');","            }","","            if (container) {","                this._render(container);","            }","            return this;","        },","        attachEvents: function() {","            var cl = this._classes, c, i, ev={};","            for (i=0;i<cl.length;i++) {","                c = cl[i];","                 if(c.prototype.events) {","                    Y.mix(ev,c.prototype.events);","                }","            }","            ","            Y.ZeView.superclass.attachEvents.call(this,ev);","        }","    }",");","","}, '@VERSION@', {\"requires\": [\"view\", \"calendar\", \"base-build\", \"datatype-date\", \"event-outside\", \"event-focus\"]});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"3":0,"8":0,"12":0,"18":0,"24":0,"26":0,"29":0,"32":0,"37":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"47":0,"49":0,"51":0,"56":0,"57":0,"58":0,"59":0,"61":0,"62":0,"63":0,"64":0,"68":0,"69":0,"70":0,"75":0,"84":0,"85":0,"88":0,"89":0,"91":0,"92":0,"96":0,"97":0,"98":0,"100":0,"103":0,"104":0,"106":0,"109":0,"110":0,"111":0,"112":0,"113":0,"117":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"validator:11":0,"validator:17":0,"initializer:25":0,"(anonymous 2):43":0,"_afterSwapContainerChange:36":0,"_afterViewChange:55":0,"_beforeDestroy:67":0,"initializer:83":0,"(anonymous 3):88":0,"(anonymous 4):91":0,"destructor:87":0,"render:95":0,"attachEvents:108":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 50;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 14;
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
var view = this.get(VIEW), prev = ev.prevVal, value = 
ev.newVal, children;
         _yuitest_coverline("build/zeView/zeView.js", 39);
if (view) {
             _yuitest_coverline("build/zeView/zeView.js", 40);
if (value) {
                 _yuitest_coverline("build/zeView/zeView.js", 41);
if (prev) {
                     _yuitest_coverline("build/zeView/zeView.js", 42);
children = prev.get('children');
                     _yuitest_coverline("build/zeView/zeView.js", 43);
children.each(function (child) {
                         _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 43);
_yuitest_coverline("build/zeView/zeView.js", 44);
value.appendChild(child);
                     });
                 } else {
                     _yuitest_coverline("build/zeView/zeView.js", 47);
view.render(value);
                 }
                 _yuitest_coverline("build/zeView/zeView.js", 49);
view._set('container', value);
             } else {
                 _yuitest_coverline("build/zeView/zeView.js", 51);
view.destroy();
             }
         }
     },
     _afterViewChange: function (ev) {
         _yuitest_coverfunc("build/zeView/zeView.js", "_afterViewChange", 55);
_yuitest_coverline("build/zeView/zeView.js", 56);
var prev = ev.prevVal, value = ev.newVal;
         _yuitest_coverline("build/zeView/zeView.js", 57);
if (prev) {
             _yuitest_coverline("build/zeView/zeView.js", 58);
prev.removeTarget(this);
             _yuitest_coverline("build/zeView/zeView.js", 59);
prev.destroy();
         }
         _yuitest_coverline("build/zeView/zeView.js", 61);
var c = this.get(CONTAINER);
         _yuitest_coverline("build/zeView/zeView.js", 62);
if (c && value) {
             _yuitest_coverline("build/zeView/zeView.js", 63);
value.render(c);
             _yuitest_coverline("build/zeView/zeView.js", 64);
value.addTarget(this);
         }
     },
     _beforeDestroy: function () {
         _yuitest_coverfunc("build/zeView/zeView.js", "_beforeDestroy", 67);
_yuitest_coverline("build/zeView/zeView.js", 68);
var view = this.get(VIEW);
         _yuitest_coverline("build/zeView/zeView.js", 69);
if (view) {
             _yuitest_coverline("build/zeView/zeView.js", 70);
view.destroy();
         }
     }

};
_yuitest_coverline("build/zeView/zeView.js", 75);
Y.ContentSwapper = CS;Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 83);
_yuitest_coverline("build/zeView/zeView.js", 84);
this._eventHandles = [];
            _yuitest_coverline("build/zeView/zeView.js", 85);
this._destroyOnExit = [];
        },
        destructor: function () {
            _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 87);
_yuitest_coverline("build/zeView/zeView.js", 88);
Y.Array.each(this._eventHandles,function(h){
                             _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 88);
_yuitest_coverline("build/zeView/zeView.js", 89);
h.detach();
                         });
            _yuitest_coverline("build/zeView/zeView.js", 91);
Y.Array.each(this._destroyOnExit,function(h){
                             _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 4)", 91);
_yuitest_coverline("build/zeView/zeView.js", 92);
h.destroy();
                         });
        },
        render: function (container) {
            _yuitest_coverfunc("build/zeView/zeView.js", "render", 95);
_yuitest_coverline("build/zeView/zeView.js", 96);
container = Y.one(container);
            _yuitest_coverline("build/zeView/zeView.js", 97);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 98);
this.set('container', container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 100);
container = this.get('container');
            }

            _yuitest_coverline("build/zeView/zeView.js", 103);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 104);
this._render(container);
            }
            _yuitest_coverline("build/zeView/zeView.js", 106);
return this;
        },
        attachEvents: function() {
            _yuitest_coverfunc("build/zeView/zeView.js", "attachEvents", 108);
_yuitest_coverline("build/zeView/zeView.js", 109);
var cl = this._classes, c, i, ev={};
            _yuitest_coverline("build/zeView/zeView.js", 110);
for (i=0;i<cl.length;i++) {
                _yuitest_coverline("build/zeView/zeView.js", 111);
c = cl[i];
                 _yuitest_coverline("build/zeView/zeView.js", 112);
if(c.prototype.events) {
                    _yuitest_coverline("build/zeView/zeView.js", 113);
Y.mix(ev,c.prototype.events);
                }
            }
            
            _yuitest_coverline("build/zeView/zeView.js", 117);
Y.ZeView.superclass.attachEvents.call(this,ev);
        }
    }
);

}, '@VERSION@', {"requires": ["view", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]});
