YUI.add('pieDTView', function (Y, NAME) {
    Y.PieDTView = Y.Base.create(
        'datatable',
        Y.DataTable,
        [],
        {
            initializer: function () {
                this.on('click', this._afterClick, this);
            },
            _afterClick: function (ev) {
                var target = ev.domEvent.target,
                    pieId;
                if (target.hasClass('del')) {
                    pieId = parseInt(target.getAttribute('pieId'),10);
                    this.get('data').getById(pieId).destroy({remove: true},function () {
                        alert('deleted');
                    });
                }else {
                    pieId  = parseInt(target.get('parentNode').one('.del').getAttribute('pieId'),10);
                    this.fire('itemClicked' , {pieId:pieId});
                }
            }
        },
        {
            ATTRS: {
                columns: {
                    value: [
                        "type",
                        "slices" ,
                        {
                            key: 'pieId',
                            formatter: '<button class="del" pieId={value}>del</button>',
                            allowHTML: true
                        }
                    ]
                },
                model: {
                    setter: function (value) {
                        this.set('data', value);
                    },
                    getter: function () {
                        return this.get('data');
                    }
                }
            }
        }
        );
}, 123, {
    requires: ['datatable', 'pieModel']
});