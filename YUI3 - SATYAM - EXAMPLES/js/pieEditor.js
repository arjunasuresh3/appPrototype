YUI.add('pieEditor', function (Y, NAME) {
    Y.PieEditor = Y.Base.create(
        NAME,
        Y.MyView,
        [],
        {

            events: {
                '.eat': {
                    click: 'eatSlice'
                },
                '.save': {
                    click: 'save'
                },
                '.add': {
                    click: 'add'
                }
            },

            template:
            '<form class="pie-editor">' +
                '<div class="yui3-g">' +
                    '<div class="yui3-u-1-2"><div class="th">Pie</div></div>' +
                    '<div class="yui3-u-1-2"><div class="td"><input name="type" value="{type}"/></div></div>' +
                '</div>' +
                '<div class="yui3-g">' +
                    '<div class="yui3-u-1-2"><div class="th">Slices</div></div>' +
                    '<div class="yui3-u-1-2"><div class="td"><input name="slices" value="{slices}"/></div></div>' +
                '</div><button class="save">Save</button> &nbsp; <button class="add">Add</button> &nbsp; <button class="eat">Eat a Slice!</button>' +
            '</form>',
            initializer: function () {
                var model = this.get('model');

                model.after('change', this.render, this);
                model.after('destroy', this.destroy, this);
                this.after('modelChange', this.render , this);
            },

            _render: function (container) {
                return Y.Lang.sub(this.template, this.get('model').toJSON());
            },

            eatSlice: function () {
                this.get('model').eatSlice();
            },
            save: function (ev) {
                ev.halt();
                var container = this.get('container'),
                    model = this.get('model');
                // validate here
                model.setAttrs({
                    type:container.one('input[name=type]').get('value'),
                    slices: parseInt(container.one('input[name=slices]').get('value'),10)
                });
                model.save(function() {
                    alert('saved');
                });

            },
            add: function (ev) {
                ev.halt();
                var container = this.get('container'),
                    model = this.get('model');
                // validate here
                model.lists[0].create({
                    type:container.one('input[name=type]').get('value'),
                    slices: parseInt(container.one('input[name=slices]').get('value'),10)
                },function() {
                    alert('saved');
                });

            }
        }
        );
}, 123, {
    requires: ['myView', 'pieModel']
});