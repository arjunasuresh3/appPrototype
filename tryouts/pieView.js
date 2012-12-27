YUI.add('pieView', function (Y, NAME) {
    Y.PieView = Y.Base.create(
        NAME,
        Y.MyView,
        [],
        {

            events: {
                '.eat': {
                    click: 'eatSlice'
                }
            },

            template: '<div class="pieSlice" pieId="{pieId}">{slices} slice(s) of {type} pie remaining. ' +
            '<button class="eat">Eat a Slice!</button></div>',

            initializer: function () {
                var model = this.get('model');

                model.after('change', this.render, this);
                model.after('destroy', this.destroy, this);
                this.after('modelChange', this.render, this);
            },

            _render: function () {

                return Y.Lang.sub(this.template, this.get('model').toJSON());
            },

            eatSlice: function () {
                this.get('model').eatSlice();
            }
        }
    );
}, 123, {
    requires: ['myView', 'pieModel']
});