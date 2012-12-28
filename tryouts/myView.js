YUI.add('myView', function (Y, NAME) {
    Y.MyView = Y.Base.create(
        NAME,
        Y.View,
        [],
        {

           render: function (container) {
                container = Y.one(container);
                if (container) {
                    this.set('container', container);
                } else {
                    container = this.get('container');
                }

                if (container) {
                    container.setHTML(this._render());
                }

                return this;
            },
            attachEvents: function(events) {
                var cl = this._classes, c, i, ev={};
                for (i=0;i<cl.length;i++) {
                    c = cl[i];
                    if(c.events) {
                        Y.mix(ev,c.events);
                    }
                }
                
                Y.MyView.superclass.attachEvents.call(this,ev);    
            }
        }
    );
}, 123, {
    requires: ['view']
});