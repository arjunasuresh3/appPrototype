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
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","var CS = function () {},","     SWAP = 'swapContainer',","     VIEW = 'view',","     CHANGE = 'Change';","","CS.ATTRS = {","     swapContainer: {","         value: null,","         validator: function (value) {","             return value === null || value.constructor.NAME === 'node';","         }","     },","     view: {","         value: null,","         validator: function (value) {","             return value === null  || value instanceof Y.View;","         }","     }","};","","CS.prototype = {","     initializer: function () {","         this._eventHandles.push(","             this.after(SWAP + CHANGE, this._afterSwapContainerChange)","         );","         this._eventHandles.push(","             this.after(VIEW + CHANGE, this._afterViewChange)","         );","     },","     _afterSwapContainerChange: function (ev) {","         var view = this.get(VIEW), prev = ev.prevVal, value = ","ev.newVal, children, i;","         if (view) {","             if (value) {","                 if (prev) {","                     children = prev.get('children');","                     for (i = 0 ; i < children.length; i++) {","                         value.appendChild(children[i]);","                     }","                 } else {","                     view.render(value);","                 }","             } else {","                 view.destroy();","             }","         }","     },","     _afterViewChange: function (ev) {","         if (ev.prevVal) {","             ev.prevVal.destroy();","         }","         var c = this.get(SWAP);","         if (c && ev.newVal) {","             ev.newVal.render(c);","         }","     }","","};","Y.ZE.ContentSwapper = CS;Y.ZeView = Y.Base.create(","    NAME,","    Y.View,","    [],","    {","        _eventHandles: null,","        _destroyOnExit: null,","","        initializer: function (){","            this._eventHandles = [];","            this._destroyOnExit = [];","        },","        destructor: function () {","            Y.Array.each(this._eventHandles,function(h){","                             h.detach();","                         });","            Y.Array.each(this._destroyOnExit,function(h){","                             h.destroy();","                         });","        },","        render: function (container) {","            container = Y.one(container);","            if (container) {","                this.set('container', container);","            } else {","                container = this.get('container');","            }","","            if (container) {","                this._render(container);","            }","","            this.set('swapContainer', container.one('.variableContent'));","            this.set('view', new SwapView1());","","            return this;","        },","        attachEvents: function() {","            var cl = this._classes, c, i, ev={};","            for (i=0;i<cl.length;i++) {","                c = cl[i];","                 if(c.prototype.events) {","                    Y.mix(ev,c.prototype.events);","                }","            }","            ","            Y.ZeView.superclass.attachEvents.call(this,ev);","        }","    }",");","","}, '@VERSION@', {\"requires\": [\"view\", \"calendar\", \"base-build\", \"datatype-date\", \"event-outside\", \"event-focus\"]});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"3":0,"8":0,"12":0,"18":0,"23":0,"25":0,"28":0,"33":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"43":0,"46":0,"51":0,"52":0,"54":0,"55":0,"56":0,"61":0,"70":0,"71":0,"74":0,"75":0,"77":0,"78":0,"82":0,"83":0,"84":0,"86":0,"89":0,"90":0,"93":0,"94":0,"96":0,"99":0,"100":0,"101":0,"102":0,"103":0,"107":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"validator:11":0,"validator:17":0,"initializer:24":0,"_afterSwapContainerChange:32":0,"_afterViewChange:50":0,"initializer:69":0,"(anonymous 2):74":0,"(anonymous 3):77":0,"destructor:73":0,"render:81":0,"attachEvents:98":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 44;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 12;
_yuitest_coverline("build/zeView/zeView.js", 1);
YUI.add('zeView', function (Y, NAME) {

_yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zeView/zeView.js", 3);
var CS = function () {},
     SWAP = 'swapContainer',
     VIEW = 'view',
     CHANGE = 'Change';

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
     view: {
         value: null,
         validator: function (value) {
             _yuitest_coverfunc("build/zeView/zeView.js", "validator", 17);
_yuitest_coverline("build/zeView/zeView.js", 18);
return value === null  || value instanceof Y.View;
         }
     }
};

_yuitest_coverline("build/zeView/zeView.js", 23);
CS.prototype = {
     initializer: function () {
         _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 24);
_yuitest_coverline("build/zeView/zeView.js", 25);
this._eventHandles.push(
             this.after(SWAP + CHANGE, this._afterSwapContainerChange)
         );
         _yuitest_coverline("build/zeView/zeView.js", 28);
this._eventHandles.push(
             this.after(VIEW + CHANGE, this._afterViewChange)
         );
     },
     _afterSwapContainerChange: function (ev) {
         _yuitest_coverfunc("build/zeView/zeView.js", "_afterSwapContainerChange", 32);
_yuitest_coverline("build/zeView/zeView.js", 33);
var view = this.get(VIEW), prev = ev.prevVal, value = 
ev.newVal, children, i;
         _yuitest_coverline("build/zeView/zeView.js", 35);
if (view) {
             _yuitest_coverline("build/zeView/zeView.js", 36);
if (value) {
                 _yuitest_coverline("build/zeView/zeView.js", 37);
if (prev) {
                     _yuitest_coverline("build/zeView/zeView.js", 38);
children = prev.get('children');
                     _yuitest_coverline("build/zeView/zeView.js", 39);
for (i = 0 ; i < children.length; i++) {
                         _yuitest_coverline("build/zeView/zeView.js", 40);
value.appendChild(children[i]);
                     }
                 } else {
                     _yuitest_coverline("build/zeView/zeView.js", 43);
view.render(value);
                 }
             } else {
                 _yuitest_coverline("build/zeView/zeView.js", 46);
view.destroy();
             }
         }
     },
     _afterViewChange: function (ev) {
         _yuitest_coverfunc("build/zeView/zeView.js", "_afterViewChange", 50);
_yuitest_coverline("build/zeView/zeView.js", 51);
if (ev.prevVal) {
             _yuitest_coverline("build/zeView/zeView.js", 52);
ev.prevVal.destroy();
         }
         _yuitest_coverline("build/zeView/zeView.js", 54);
var c = this.get(SWAP);
         _yuitest_coverline("build/zeView/zeView.js", 55);
if (c && ev.newVal) {
             _yuitest_coverline("build/zeView/zeView.js", 56);
ev.newVal.render(c);
         }
     }

};
_yuitest_coverline("build/zeView/zeView.js", 61);
Y.ZE.ContentSwapper = CS;Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 69);
_yuitest_coverline("build/zeView/zeView.js", 70);
this._eventHandles = [];
            _yuitest_coverline("build/zeView/zeView.js", 71);
this._destroyOnExit = [];
        },
        destructor: function () {
            _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 73);
_yuitest_coverline("build/zeView/zeView.js", 74);
Y.Array.each(this._eventHandles,function(h){
                             _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 74);
_yuitest_coverline("build/zeView/zeView.js", 75);
h.detach();
                         });
            _yuitest_coverline("build/zeView/zeView.js", 77);
Y.Array.each(this._destroyOnExit,function(h){
                             _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 77);
_yuitest_coverline("build/zeView/zeView.js", 78);
h.destroy();
                         });
        },
        render: function (container) {
            _yuitest_coverfunc("build/zeView/zeView.js", "render", 81);
_yuitest_coverline("build/zeView/zeView.js", 82);
container = Y.one(container);
            _yuitest_coverline("build/zeView/zeView.js", 83);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 84);
this.set('container', container);
            } else {
                _yuitest_coverline("build/zeView/zeView.js", 86);
container = this.get('container');
            }

            _yuitest_coverline("build/zeView/zeView.js", 89);
if (container) {
                _yuitest_coverline("build/zeView/zeView.js", 90);
this._render(container);
            }

            _yuitest_coverline("build/zeView/zeView.js", 93);
this.set('swapContainer', container.one('.variableContent'));
            _yuitest_coverline("build/zeView/zeView.js", 94);
this.set('view', new SwapView1());

            _yuitest_coverline("build/zeView/zeView.js", 96);
return this;
        },
        attachEvents: function() {
            _yuitest_coverfunc("build/zeView/zeView.js", "attachEvents", 98);
_yuitest_coverline("build/zeView/zeView.js", 99);
var cl = this._classes, c, i, ev={};
            _yuitest_coverline("build/zeView/zeView.js", 100);
for (i=0;i<cl.length;i++) {
                _yuitest_coverline("build/zeView/zeView.js", 101);
c = cl[i];
                 _yuitest_coverline("build/zeView/zeView.js", 102);
if(c.prototype.events) {
                    _yuitest_coverline("build/zeView/zeView.js", 103);
Y.mix(ev,c.prototype.events);
                }
            }
            
            _yuitest_coverline("build/zeView/zeView.js", 107);
Y.ZeView.superclass.attachEvents.call(this,ev);
        }
    }
);

}, '@VERSION@', {"requires": ["view", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]});
