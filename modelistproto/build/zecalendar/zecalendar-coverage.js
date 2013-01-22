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
_yuitest_coverage["build/zecalendar/zecalendar.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/zecalendar/zecalendar.js",
    code: []
};
_yuitest_coverage["build/zecalendar/zecalendar.js"].code=["YUI.add('zecalendar', function (Y, NAME) {","","Y.ZeCalendar = Y.Base.create('zecalendar', Y.Calendar, [], {","                                     initializer: function() {","                                         this.events = [","                                             this.on(\"selectionChange\", function (ev) {","                                                         console.log(\"selectionChange\");","                                                         var newDate = ev.newSelection[0];","                                                         this.tr.set('value',this.dtdate.format(newDate, {format:\"%m-%d-%Y\"}));","                                                         this.hide();","                                                         this.get('boundingBox').setStyle(\"display\", \"none\");","                                                         this.tr_click.detach();","                                                     }),","                                             this.get('boundingBox').on(['focusoutside','clickoutside'], function(ev) {","                                                                            console.log(\"focusoutside\");","                                                                            this.hide();                          ","                                                                            this.get('boundingBox').setStyle(\"display\", \"none\");","                                                                            // this.tr_click.detach();","                                                                        },this)","                                         ];","                                     },","                                     destructor: function() {","                                         for (var i=0;i<this.events.length;i++) {","                                             this.events[i].detach();","                                         }","                                     },","                                     ","                                     showUnder: function(tr) {","                                         this.tr = tr;","                                         var oReg = tr.get('region');","                                         this.dtdate = Y.DataType.Date;","                                         this.show();","                                         this.get('boundingBox').setStyle(\"display\", \"\");","                                         this.tr_click = tr.on('click',function(ev){","                                                                  ev.stopPropagation();","                                                              });","                                         this.get('boundingBox').setXY([oReg.left,oReg.bottom]);","                                     }","                                 });","","}, '@VERSION@', {\"requires\": [\"calendar\", \"base-build\", \"datatype-date\", \"event-outside\", \"event-focus\"]});"];
_yuitest_coverage["build/zecalendar/zecalendar.js"].lines = {"1":0,"3":0,"5":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"15":0,"16":0,"17":0,"23":0,"24":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"37":0};
_yuitest_coverage["build/zecalendar/zecalendar.js"].functions = {"(anonymous 2):6":0,"(anonymous 3):14":0,"initializer:4":0,"destructor:22":0,"(anonymous 4):34":0,"showUnder:28":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zecalendar/zecalendar.js"].coveredLines = 22;
_yuitest_coverage["build/zecalendar/zecalendar.js"].coveredFunctions = 7;
_yuitest_coverline("build/zecalendar/zecalendar.js", 1);
YUI.add('zecalendar', function (Y, NAME) {

_yuitest_coverfunc("build/zecalendar/zecalendar.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zecalendar/zecalendar.js", 3);
Y.ZeCalendar = Y.Base.create('zecalendar', Y.Calendar, [], {
                                     initializer: function() {
                                         _yuitest_coverfunc("build/zecalendar/zecalendar.js", "initializer", 4);
_yuitest_coverline("build/zecalendar/zecalendar.js", 5);
this.events = [
                                             this.on("selectionChange", function (ev) {
                                                         _yuitest_coverfunc("build/zecalendar/zecalendar.js", "(anonymous 2)", 6);
_yuitest_coverline("build/zecalendar/zecalendar.js", 7);
console.log("selectionChange");
                                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 8);
var newDate = ev.newSelection[0];
                                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 9);
this.tr.set('value',this.dtdate.format(newDate, {format:"%m-%d-%Y"}));
                                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 10);
this.hide();
                                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 11);
this.get('boundingBox').setStyle("display", "none");
                                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 12);
this.tr_click.detach();
                                                     }),
                                             this.get('boundingBox').on(['focusoutside','clickoutside'], function(ev) {
                                                                            _yuitest_coverfunc("build/zecalendar/zecalendar.js", "(anonymous 3)", 14);
_yuitest_coverline("build/zecalendar/zecalendar.js", 15);
console.log("focusoutside");
                                                                            _yuitest_coverline("build/zecalendar/zecalendar.js", 16);
this.hide();                          
                                                                            _yuitest_coverline("build/zecalendar/zecalendar.js", 17);
this.get('boundingBox').setStyle("display", "none");
                                                                            // this.tr_click.detach();
                                                                        },this)
                                         ];
                                     },
                                     destructor: function() {
                                         _yuitest_coverfunc("build/zecalendar/zecalendar.js", "destructor", 22);
_yuitest_coverline("build/zecalendar/zecalendar.js", 23);
for (var i=0;i<this.events.length;i++) {
                                             _yuitest_coverline("build/zecalendar/zecalendar.js", 24);
this.events[i].detach();
                                         }
                                     },
                                     
                                     showUnder: function(tr) {
                                         _yuitest_coverfunc("build/zecalendar/zecalendar.js", "showUnder", 28);
_yuitest_coverline("build/zecalendar/zecalendar.js", 29);
this.tr = tr;
                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 30);
var oReg = tr.get('region');
                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 31);
this.dtdate = Y.DataType.Date;
                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 32);
this.show();
                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 33);
this.get('boundingBox').setStyle("display", "");
                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 34);
this.tr_click = tr.on('click',function(ev){
                                                                  _yuitest_coverfunc("build/zecalendar/zecalendar.js", "(anonymous 4)", 34);
_yuitest_coverline("build/zecalendar/zecalendar.js", 35);
ev.stopPropagation();
                                                              });
                                         _yuitest_coverline("build/zecalendar/zecalendar.js", 37);
this.get('boundingBox').setXY([oReg.left,oReg.bottom]);
                                     }
                                 });

}, '@VERSION@', {"requires": ["calendar", "base-build", "datatype-date", "event-outside", "event-focus"]});
