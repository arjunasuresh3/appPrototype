YUI.add('zeView', function (Y, NAME) {

var CS = function () {},
CONTAINER = 'swapContainer',
VIEW = 'swapView',
CHANGE = 'Change', L = Y.Lang;

CS.ATTRS = {
     swapContainer: {
         value: null,
         validator: function (value) {
             return value === null || value.constructor.NAME === 'node';
         }
     },
     swapView: {
         value: null,
         validator: function (value) {
             return value === null  || (L.isFunction(value.render) && L.isFunction(value.destroy));
             // return value === null  || value instanceof Y.View;
         }
     }
};

CS.prototype = {
     initializer: function () {
         this._eventHandles.push(
             this.after(CONTAINER + CHANGE, this._afterSwapContainerChange)
         );
         this._eventHandles.push(
             this.after(VIEW + CHANGE, this._afterViewChange)
         );
         this._eventHandles.push(
             this.after('destroy', this._beforeDestroy)
         );
     },
     _afterSwapContainerChange: function (ev) {
         var view = this.get(VIEW), prev = ev.prevVal, value = 
ev.newVal, children;
         if (view) {
             if (value) {
                 if (prev) {
                     children = prev.get('children');
                     children.each(function (child) {
                         value.appendChild(child);
                     });
                 } else {
                     view.render(value);
                 }
                 view._set('container', value);
             } else {
                 view.destroy();
             }
         }
     },
     _afterViewChange: function (ev) {
         var prev = ev.prevVal, value = ev.newVal;
         if (prev) {
             prev.removeTarget(this);
             prev.destroy();
         }
         var c = this.get(CONTAINER);
         if (c && value) {
             value.render(c);
             value.addTarget(this);
         }
     },
     _beforeDestroy: function () {
         var view = this.get(VIEW);
         if (view) {
             view.destroy();
         }
     }

};
Y.ContentSwapper = CS;Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper],
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
