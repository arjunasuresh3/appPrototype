YUI.add('pieListView', function (Y, NAME) {
    Y.PieListView = Y.Base.create(
        NAME,
        Y.MyView,
        [],
        {
            events:{
                ".pieDiv": {
                    click: "itemClicked"
                }
            },

            template:
            '<div class="pie-listing"><div class="yui3-g">' +
                '<div class="yui3-u-1-2"><div class="th">Pie</div></div>' +
                '<div class="yui3-u-1-2"><div class="th">Slices</div></div>' +
            '</div>{list}</div>',

            templateItem:
            '<div pieId="{pieId}" class="yui3-g pieDiv">' +
                '<div class="yui3-u-1-2"><div class="td">{type}</div></div>' +
                '<div class="yui3-u-1-2"><div class="td">{slices}</div></div>' +
            '</div>',

            initializer: function () {
                var model = this.get('model');

                model.after('change', this.render, this);
                model.after('destroy', this.destroy, this);
            },

            _render: function (container) {

                var s = this.get('model').map(function(m) {
                    return Y.Lang.sub(this.templateItem, m.toJSON());
                }, this);
                return Y.Lang.sub(this.template, {
                    list: s.join('\n')
                });
            },
            itemClicked: function (ev) {
                this.fire('itemClicked' , {pieId:parseInt(ev.currentTarget.getAttribute('pieId'),10)});

            }
        }
        );
}, 123, {
    requires: ['myView', 'pieList']
});