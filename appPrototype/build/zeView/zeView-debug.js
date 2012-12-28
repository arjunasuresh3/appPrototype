YUI.add('zeView', function (Y, NAME) {

var CS = function () {},
     SWAP = 'swapContainer',
     VIEW = 'view',
     CHANGE = 'Change';

CS.ATTRS = {
     swapContainer: {
         value: null,
         validator: function (value) {
             return value === null || value.constructor.NAME === 'node';
         }
     },
     view: {
         value: null,
         validator: function (value) {
             return value === null  || value instanceof Y.View;
         }
     }
};

CS.prototype = {
     initializer: function () {
         this._eventHandles.push(
             this.after(SWAP + CHANGE, this._afterSwapContainerChange)
         );
         this._eventHandles.push(
             this.after(VIEW + CHANGE, this._afterViewChange)
         );
     },
     _afterSwapContainerChange: function (ev) {
         var view = this.get(VIEW), prev = ev.prevVal, value = 
ev.newVal, children, i;
         if (view) {
             if (value) {
                 if (prev) {
                     children = prev.get('children');
                     for (i = 0 ; i < children.length; i++) {
                         value.appendChild(children[i]);
                     }
                 } else {
                     view.render(value);
                 }
             } else {
                 view.destroy();
             }
         }
     },
     _afterViewChange: function (ev) {
         if (ev.prevVal) {
             ev.prevVal.destroy();
         }
         var c = this.get(SWAP);
         if (c && ev.newVal) {
             ev.newVal.render(c);
         }
     }

};
Y.ZE.ContentSwapper = CS;

Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [CS],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            this._eventHandles = [];
            this._destroyOnExit = [];
        },
        destructor: function () {
            Y.Array.each(this._eventHandles,function(h){
                             h.detach();
                         });
            Y.Array.each(this._destroyOnExit,function(h){
                             h.destroy();
                         });
        },
        render: function (container) {
            container = Y.one(container);
            if (container) {
                this.set('container', container);
            } else {
                container = this.get('container');
            }

            if (container) {
                this._render(container);
            }

            this.set('swapContainer', container.one('.variableContent'));
            this.set('view', new SwapView1());

            return this;
        },
        attachEvents: function() {
            var cl = this._classes, c, i, ev={};
            for (i=0;i<cl.length;i++) {
                c = cl[i];
                 if(c.prototype.events) {
                    Y.mix(ev,c.prototype.events);
                }
            }
            
            Y.ZeView.superclass.attachEvents.call(this,ev);
        }
    }
);

}, '@VERSION@', {"requires": ["view", "calendar", "base-build", "datatype-date", "event-outside", "event-focus"]});
