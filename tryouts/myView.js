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
            }
        }
    );
}, 123, {
    requires: ['view']
});