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
Y.ContentSwapper = CS;