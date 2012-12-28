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