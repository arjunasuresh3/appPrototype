YUI.add('zeView', function (Y, NAME) {

var CS = function () {},
    isFn = Y.Lang.isFunction,
    each = Y.Array.each;


CS.prototype = {
    _swapContainer: null,
    _swapView: null,
    initializer: function () {
        this._swapContainer = [];
        this._swapView = [];
        this._eventHandles.push(
            this.after('destroy', this._beforeDestroy)
        );
    },
    setSwapContainer: function (container, index) {
        index = index || 0;
        var prev = this._swapContainer[index],
            view = this._swapView[index],
            children;
        this._swapContainer[index] = container;
        if (view) {
            if (container) {
                if (prev) {
                    children = prev.get('children');
                    children.each(function (child) {
                        container.appendChild(child);
                    });
                } else {
                    view.render(container);
                }
                view._set('container', container);
            } else {
                view.destroy();
            }
        }
        return this;
    },
    getSwapContainer: function (index) {
        return this._swapContainer[index || 0];
    },
    setSwapView: function (view, index) {
        index = index || 0;
        var prev = this._swapView[index],
            c = this._swapContainer[index];
        if (view === null || (isFn(view.render) && isFn(view.destroy))) {
            this._swapView[index] = view;
            if (prev) {
                prev.removeTarget(this);
                prev.destroy();
            }
            if (c && view) {
                view.render(c);
                view.addTarget(this);
            }
        }
        return this;
    },
    getSwapView: function (index) {
        return this._swapView[index || 0];
    },
    _beforeDestroy: function () {
        each(this._swapView, function (view) {
            view.destroy();
        });
    }

};
Y.ContentSwapper = CS; var each = Y.Array.each,
     CONT = 'container';

Y.ZeView = Y.Base.create(
    NAME,
    Y.View,
    [Y.ContentSwapper,Y.View.NodeMap],
    {
        _eventHandles: null,
        _destroyOnExit: null,

        initializer: function (){
            this._eventHandles = [];
            this._destroyOnExit = [];
        },
        destructor: function () {
            each(this._eventHandles,function(h) {
                     h.detach();
                 });
            each(this._destroyOnExit,function(h) {
                     h.destroy();
                 });
            var c = this.get(CONT);
            if (c) {
                c.setHTML('');
            }
        },
        render: function (container) {
            container = Y.one(container);
            if (container) {
                this.set(CONT, container);
            } else {
                container = this.get(CONT);
            }
            if (container) {
                this._render(container);
            }
            return this;
        },
        attachEvents: function() {
            var ev = {};
             each(this._classes, function (c) {
                 if(c.prototype.events) {
                     Y.mix(ev,c.prototype.events);
                 }
             });
            return Y.ZeView.superclass.attachEvents.call(this,ev);
        },
        _getContainer: function (value) {
            return value;
        }
    }
);

}, '@VERSION@', {
    "requires": [
        "view",
        "calendar",
        "base-build",
        "datatype-date",
        "event-outside",
        "event-focus",
        "node",
        "view-node-map"
    ]
});
