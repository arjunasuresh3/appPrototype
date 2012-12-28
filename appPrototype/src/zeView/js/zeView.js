Y.ZeView = Y.Base.create(
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
            this.set('swapContainer', container.one('.variableContent'));
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