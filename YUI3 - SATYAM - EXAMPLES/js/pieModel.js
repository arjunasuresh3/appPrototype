YUI.add('pieModel', function (Y,NAME) {
    Y.PieModel = Y.Base.create(
        NAME,
        Y.Model,
        [Y.ModelSync.REST],
        {
            idAttribute: 'pieId',
            root: '/pies',
            url : '/pies/{pieId}',

            // Returns true if all the slices of the pie have been eaten.
            allGone: function () {
                return this.get('slices') === 0;
            },

            // Consumes a slice of pie, or fires an `error` event if there are no slices
            // left.
            eatSlice: function () {
                if (this.allGone()) {
                    this.fire('error', {
                        type : 'eat',
                        error: "Oh snap! There isn't any pie left."
                    });
                } else {
                    this.set('slices', this.get('slices') - 1);
                    Y.log('You just ate a slice of delicious ' + this.get('type') + ' pie!');
                }
            }
        }, {
            ATTRS: {
                pieId: {
                    value: null
                },
                slices: {
                    value: 6 // default value
                },

                type: {
                    value: 'apple'
                }
            }
        }
    );
}, 123, {
    requires: ['model','model-sync-rest']
});