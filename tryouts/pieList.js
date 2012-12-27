YUI.add('pieList', function (Y, NAME) {
    Y.PieList = Y.Base.create(
        NAME,
        Y.ModelList,
        [Y.ModelSync.REST],
        {
            root: '/jiva/all',
            // Add prototype properties and methods for your List here if desired. These
            // will be available to all instances of your List.

            // Specifies that this list is meant to contain instances of Y.PieModel.
            model: Y.PieModel,

            // Returns an array of PieModel instances that have been eaten.
            eaten: function () {
                return Y.Array.filter(this.toArray(), function (model) {
                    return model.get('slices') === 0;
                });
            },

            // Returns the total number of pie slices remaining among all the pies in
            // the list.
            totalSlices: function () {
                var slices = 0;

                this.each(function (model) {
                    slices += model.get('slices');
                });

                return slices;
            }
        }
   );
}, 123, {
    requires: ['model-list', 'pieModel','model-sync-rest']
});
