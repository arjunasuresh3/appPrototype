YUI.add('zecalendar', function (Y, NAME) {
    Y.ZeCalendar = Y.Base.create('calendar', Y.Calendar, [], {
                                     
                                     initializer: function() {
                                         this.events = [
                                             this.on("selectionChange", function (ev) {
                                                         var newDate = ev.newSelection[0];
                                                         this.tr.set('value',dtdate.format(newDate, {format:"%m-%d-%Y"}));
                                                         this.hide();
                                                         // this.tr_click.detach();
                                                     }),
                                             this.get('boundingBox').on(['focusoutside'], function(ev) {
                                                                            this.hide();                          
                                                                        // this.tr_click.detach();
                                                                        },this);
                                         ];
                                     },
                                     destructor: function(){
                                         for (var i=0;i<this.events.length;i++) {
                                             this.events[i].detach();
                                         }
                                     },
                                     
                                     showUnder: function(tr) {
                                         this.tr = tr;
                                         var oReg = tr.get('region'),
                                         dtdate = Y.DataType.Date;
                                         this.show();
                                         // var tr_click = tr.on('click',function(ev){
                                         //                          ev.stopPropagation();
                                         //                      });
                                         this.get('boundingBox').setXY([oReg.left,oReg.bottom]);
                                         // Listen to calendar's selectionChange event.
                                         // this.get('boundingBox').on(['focusoutside','clickoutside'], function(ev) {
                                         //                                this.hide();                          
                                         //                                tr_click.detach();
                                         //                            },this);

                                     }
                                 });
            
}, '1.0.0', {"requires": ["calendar", "base-build", 'datatype-date', 'event-outside', 'event-focus']});