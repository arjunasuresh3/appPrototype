YUI().use('router', 'node-event-delegate', function (Y) {
    var clear = function () {
        Y.all('.yui3-u-1-2').each(function (node) {
            node.setHTML('');
        });
    }
    var router = new Y.Router({
        // root:'/apps',
        routes: [
            {
                path: '/pieView',
                callbacks: function () {
                    clear();
                    Y.use('pieModel', 'pieView',function (){
                        var pie     = new Y.PieModel({
                            pieId: 987,
                            type: 'gateau au chocolat',
                            slices: 5
                        }),
                        pieView = new Y.PieView({
                            model: pie
                        });

                        pieView.render('#pieView');
                    })
                }
            },


            {
                path: '/pieTable',
                callbacks: function () {
                    clear();
                    Y.use('pieList', 'pieDTView', function () {
                        var pieList = new Y.PieList();
                        pieList.load(function () {
                            var pieDTView = new Y.PieDTView({
                                model: pieList
                            });
                            pieDTView.render('#pieDTView');
                        });
                    });
                }
            },
            {
                path: '/all',
                callbacks: function () {
                    clear();
                    Y.use('pieModel', 'pieView', 'pieList', 'pieDTView', 'pieListView', 'pieEditor', function () {
                        var pie     = new Y.PieModel({
                            pieId: 987,
                            type: 'gateau au chocolat',
                            slices: 5
                        }),
                        pieView = new Y.PieView({
                            model: pie
                        });

                        pieView.render('#pieView');
                        var pieList = new Y.PieList();
                        pieList.load(function () {
                            var pieDTView = new Y.PieDTView({
                                model: pieList
                            });
                            pieDTView.render('#pieDTView');
                            pieList.add(pie);
                            var pieListView = new Y.PieListView({
                                model: pieList,
                                container: '#pieListView'
                            }).render();

                            pieListView.on('itemClicked', function (ev) {
                                var pieId = ev.pieId,
                                m = pieList.getById(pieId);
                                pieEditor.set('model', m);
                                pieView.set('model', m);
                            });
                            pieDTView.on('itemClicked', function (ev) {
                                var pieId = ev.pieId,
                                m = pieList.getById(pieId);
                                pieEditor.set('model', m);
                                pieView.set('model', m);
                            });

                            var pieEditor = new Y.PieEditor({
                                model: pie,
                                container: '#pieEditor'
                            }).render();
                        });
                    });

                }
            }
        ]
    });
    router.dispatch();

    Y.one('#nav').delegate('click', function (ev) {
        if (ev.button !== 1 || ev.ctrlKey || ev.metaKey) {
            return;
        }

        var path = router.removeRoot(ev.currentTarget.get('href'));

        if (router.hasRoute(path)) {
            ev.preventDefault();
            router.save(path);
        }
    }, 'a');

});