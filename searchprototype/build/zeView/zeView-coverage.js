if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/zeView/zeView.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/zeView/zeView.js",
    code: []
};
_yuitest_coverage["build/zeView/zeView.js"].code=["YUI.add('zeView', function (Y, NAME) {","","/**","Represents a logical piece of an application's user interface, and provides a","lightweight, overridable API for rendering content and handling delegated DOM","events on a contentBox element.","","@module app","@submodule zeView","@since 3.4.0","**/","var arrEach = Y.Array.each,","    objEach = Y.Object.each;","/**","Represents a logical piece of an application's user interface, and provides a","lightweight, overridable API for rendering content and handling delegated DOM","events on a contentBox element.","","The ZeView class imposes little structure and provides only minimal functionality","of its own: it's basically just an overridable API interface that helps you","implement custom views.","","@class ZeView","@constructor","@extends Base","@since 3.8.0","**/","","function ZeView() {","    ZeView.superclass.constructor.apply(this, arguments);","}","","Y.ZeView = Y.extend(ZeView, Y.Base, {","    // -- Public Properties ----------------------------------------------------","","    /**","    Template for this view's contentBox.","    It is a `<div>` by default, other options are `<form>`, `<fieldset>`,","    `<p>`, `<ul>` or any other such element","","    @property contentBoxTemplate","    @type String","    @default \"<div/>\"","    @since 3.5.0","    **/","    contentBoxTemplate: '<div/>',","","    /**","    Hash of CSS selectors mapped to events to delegate to elements matching","    those selectors.","","    CSS selectors are relative to the `contentBox` element. Events are attached","    to the contentBox, and delegation is used so that subscribers are only","    notified of events that occur on elements inside the contentBox that match","    the specified selectors. This allows the contentBox's contents to be re-","    rendered as needed without losing event subscriptions.","","    Event handlers can be specified either as functions or as strings that map","    to function names on this view instance or its prototype.","","    The `this` object in event handlers will refer to this view instance. If","    you'd prefer `this` to be something else, use `Y.bind()` to bind a custom","    `this` object.","","    @example","","        var view = new Y.ZeView({","            events: {","                // Call `this.toggle()` whenever the element with the id","                // \"toggle-button\" is clicked.","                '#toggle-button': {click: 'toggle'},","","                // Call `this.hoverOn()` when the mouse moves over any element","                // with the \"hoverable\" class, and `this.hoverOff()` when the","                // mouse moves out of any element with the \"hoverable\" class.","                '.hoverable': {","                    mouseover: 'hoverOn',","                    mouseout : 'hoverOff'","                }","            }","        });","","    @property events","    @type Object","    @default {}","    **/","    events: {},","","    /**","    Template for this view's contents.","","    How this template gets used is entirely up to you and your custom","    `_refresh()` method.","","    @property template","    @type mixed","    @default ''","    **/","    template: '',","","    /**","    Prefix to assign to the contentBox CSS className followed by the `NAME` of the class.","","    @property cssPrefix","    @type String","    @default 'ze-view-'","    @protected","    */","    cssPrefix: 'ze-view-',","","    /**","    Array of event handles used by this view, available to be detached wholesale.","    Push into this array any event handle that needs to be detached when the","    view is destroyed.","","    @property _eventHandles","    @type Array","    @default []","    @protected","    */","    _eventHandles: null,","","    /**","    Array of event handles used by this view, attached to the model.","    They are different from `_eventHandles` in that those remain active through","    the lifetime of the view while these might need detaching when the model is changed.","    Push into this array any event handle from a model event","    that needs to be detached when the model is changed.","","    @property _modelEventHandles","    @type Array","    @default []","    @protected","    */","    _modelEventHandles: null,","","    /**","    Array of objects to be destroyed on exit.","    Push into this array any object that needs to be destroyed when the","    view is destroyed.","","    @property _destroyOnExit","    @type Array","    @default []","    @protected","    */","    _destroyOnExit: null,","","    /**","    Internal reference to the `contentBox` for optimization purposes.","","    It should normally be accessed via the `contentBox` attribute.","","","    @property _contentBox","    @type Node","    @default null","    @private","    */","    _contentBox: null,","","    // -- Lifecycle Methods ----------------------------------------------------","    initializer: function (config) {","        config || (config = {});","","        // Set instance properties specified in the config.","        config.contentBoxTemplate &&","            (this.contentBoxTemplate = config.contentBoxTemplate);","","        config.template && (this.template = config.template);","","        // Merge events from the config into events in `this.events`.","        this.events = config.events ? Y.merge(this.events, config.events) :","            this.events;","","        // Checks if a model is initially configured or if it is changed at any time","        // to call `_modelChange` for it","        if ('model' in config) {","            this._modelChange(config.model);","        }","        this.after('modelChange', function (ev) {","            this._modelChange(ev.newVal, ev.prevVal);","        }, this);","        this._eventHandles = [];","        this._destroyOnExit = [];","    },","","    destructor: function () {","        this._detachEvents();","        arrEach(this._destroyOnExit,function(h){","            if (h && h.destroy) {","                 h.destroy();","            }","        });","        this._modelChange();","        var contentBox = this._contentBox;","        if (contentBox) {","            contentBox.setHTML('');","        }","        delete this._contentBox;","    },","","    // -- Public Methods -------------------------------------------------------","","","    /**","    Removes this view's contentBox element from the DOM (if it's in the DOM),","    but doesn't destroy it or any event listeners attached to it.","","    @method remove","    @chainable","    **/","    remove: function () {","        var contentBox = this.get('contentBox');","        contentBox && contentBox.remove();","        return this;","    },","","    /**","    Renders this view.","","    It creates the contentBox and fills it with the rendered content.","    If a `container` is passed, the contentBox will be set into it.","","    @method render","    @param container {Node | String} Node reference or CSS selector for an","            element that is to receive the rendered view.","    @chainable","    **/","    render: function (container) {","        var contentBox = this._contentBoxGetter();","        this._refresh();","        if (container) {","            Y.one(container).setHTML(contentBox);","        }","        return this;","    },","    // -- Protected Methods ----------------------------------------------------","","    /**","    Renders the content of the `contentBox`.","","    The default implementation substitutes the values from the model into","    the `template` of this object.","","    Classes inheriting from ZeView may override this method to insert into the","    contentBox the elements they need.","","    @method _refresh","    @protected","    @chainable","    */","","    _refresh: function () {","        var m = this.get('model');","        this._contentBox.setHTML(m?Y.Lang.sub(this.template, m.toJSON()):this.template);","        return this;","    },","","    /**","    Attaches delegated event handlers to this view's contentBox element. This","    method is called internally to subscribe to events configured in the","    `events` attribute when the view is initialized.","","    @method _attachEvents","    @chainable","    @protected","    @see _detachEvents","    **/","    _attachEvents: function () {","        var contentBox = this.get('contentBox'),","            self = this,","            events = {};","","        arrEach(this._classes, function (c) {","            if(c.prototype.events) {","                Y.mix(events,c.prototype.events);","            }","","        });","","        objEach(events, function (handlers, selector) {","","            objEach(handlers, function (handler, name) {","","                // TODO: Make this more robust by using lazy-binding:","                // `handler = Y.bind(handler, this);`","                if (typeof handler === 'string') {","                    handler = self[handler];","                }","","                if (!handler) {","                    return;","                }","","                self._eventHandles.push(","                    contentBox.delegate(name, handler, selector, self));","            });","        });","","        return self;","    },","","    /**","    Detaches DOM events that have previously been attached to the contentBox by","    `_attachEvents()`.","","    @method _detachEvents","    @chainable","    @protected","    @see _attachEvents","    **/","    _detachEvents: function () {","        arrEach(this._eventHandles, function (handle) {","            if (handle && handle.detach) {","                handle.detach();","            }","        });","","        this._eventHandles = [];","        return this;","    },","    /**","    Getter for the `contentBox` attribute.","","    @method _contentBoxGetter","    @return {Node} ContentBox node.","    @private","    **/","    _contentBoxGetter: function () {","        var contentBox = this._contentBox;","","        if (!contentBox) {","            contentBox = this._contentBox = Y.Node.create(this.contentBoxTemplate);","            contentBox.addClass(this.cssPrefix + this.name);","            this._attachEvents();","        }","        return contentBox;","    },","","    /**","    Method called whenever the Model attribute is initially set or changed.","","    The provided implementation detaches any events set on the previous model, if any,","    and attaches a new set of events on the new model.","","    If the `model` attribute is set to an instance of `Model` it will","    attach the `_refresh` method to the `change` event.","","    If the `model` attribute is set to an instance of `ModelList` it will","    attach the `_refresh` method to the `add`, `create`, `remove` and `reset`","    events as well as the the `change` event propagating from the models contained in it.","","    In both cases  it will attach the `destroy` method to the `destroy` event.","","    If the `contentBox` is set, it will call `_refresh` to update it.","","    @method _modelChange","    @param newModel {ModelList | Model | null} The new model being set.","    @param prevMode {ModelList | Model | null} The model currently set.","    @protected","    */","    _modelChange: function (newModel, prevModel) {","        arrEach(this._modelEventHandles, function (h) {","            h.detach();","        });","        if (newModel) {","            if (newModel._isYUIModelList) {","                this._modelEventHandles = [","                    newModel.after(['*:change','add', 'create', 'remove', 'reset'], this._refresh, this)","                ]","            } else if (newModel._isYUIModel) {","                this._modelEventHandles = [","                    newModel.after('change', this._refresh, this),","                ]","            }","            this._modelEventHandles.push(newModel.after('destroy', this.destroy, this));","            if (this._contentBox){","                this._refresh();","            }","        }","    }","","}, {","    NAME: NAME,","","    ATTRS: {","        /**","        Node into which this view's content will be rendered.","","        The contentBox node serves as the host for all DOM events attached by the","        view. Delegation is used to handle events on children of the contentBox,","        allowing the contentBox's contents to be re-rendered at any time without","        losing event subscriptions.","","        The default contentBox is a `<div>` Node, but you can override this in","        a subclass, by setting the `contentBoxTemplate` to any markup such as","        `<form>`, `<fieldset>` or any other container.","","        A CSS className made of the `cssPrefix` followed by the `NAME` will be","        assigned to it.","","        The contentBox is not added to the page automatically. This allows you to","        have full control over how and when your view is actually rendered to","        the page.","","        @attribute contentBox","        @type Node","        @default Y.Node.create(this.contentBoxTemplate)","        @readOnly","        **/","        contentBox: {","            getter   : '_contentBoxGetter',","            readOnly: true","        },","","        /**","        Model that this view is meant to render.","","        @attribute model","        @type Model | ModelList","        @default null","         */","        model: {","            value: null","        }","    }","});","","}, '@VERSION@', {","    \"requires\": [","        \"view\",","        \"contentSwapper\",","        \"calendar\",","        \"base-build\",","        \"datatype-date\",","        \"event-outside\",","        \"event-focus\"","    ]","});"];
_yuitest_coverage["build/zeView/zeView.js"].lines = {"1":0,"12":0,"29":0,"30":0,"33":0,"164":0,"167":0,"170":0,"173":0,"178":0,"179":0,"181":0,"182":0,"184":0,"185":0,"189":0,"190":0,"191":0,"192":0,"195":0,"196":0,"197":0,"198":0,"200":0,"214":0,"215":0,"216":0,"231":0,"232":0,"233":0,"234":0,"236":0,"255":0,"256":0,"257":0,"271":0,"275":0,"276":0,"277":0,"282":0,"284":0,"288":0,"289":0,"292":0,"293":0,"296":0,"301":0,"314":0,"315":0,"316":0,"320":0,"321":0,"331":0,"333":0,"334":0,"335":0,"336":0,"338":0,"364":0,"365":0,"367":0,"368":0,"369":0,"372":0,"373":0,"377":0,"378":0,"379":0};
_yuitest_coverage["build/zeView/zeView.js"].functions = {"ZeView:29":0,"(anonymous 2):181":0,"initializer:163":0,"(anonymous 3):190":0,"destructor:188":0,"remove:213":0,"render:230":0,"_refresh:254":0,"(anonymous 4):275":0,"(anonymous 6):284":0,"(anonymous 5):282":0,"_attachEvents:270":0,"(anonymous 7):314":0,"_detachEvents:313":0,"_contentBoxGetter:330":0,"(anonymous 8):364":0,"_modelChange:363":0,"(anonymous 1):1":0};
_yuitest_coverage["build/zeView/zeView.js"].coveredLines = 68;
_yuitest_coverage["build/zeView/zeView.js"].coveredFunctions = 18;
_yuitest_coverline("build/zeView/zeView.js", 1);
YUI.add('zeView', function (Y, NAME) {

/**
Represents a logical piece of an application's user interface, and provides a
lightweight, overridable API for rendering content and handling delegated DOM
events on a contentBox element.

@module app
@submodule zeView
@since 3.4.0
**/
_yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 1)", 1);
_yuitest_coverline("build/zeView/zeView.js", 12);
var arrEach = Y.Array.each,
    objEach = Y.Object.each;
/**
Represents a logical piece of an application's user interface, and provides a
lightweight, overridable API for rendering content and handling delegated DOM
events on a contentBox element.

The ZeView class imposes little structure and provides only minimal functionality
of its own: it's basically just an overridable API interface that helps you
implement custom views.

@class ZeView
@constructor
@extends Base
@since 3.8.0
**/

_yuitest_coverline("build/zeView/zeView.js", 29);
function ZeView() {
    _yuitest_coverfunc("build/zeView/zeView.js", "ZeView", 29);
_yuitest_coverline("build/zeView/zeView.js", 30);
ZeView.superclass.constructor.apply(this, arguments);
}

_yuitest_coverline("build/zeView/zeView.js", 33);
Y.ZeView = Y.extend(ZeView, Y.Base, {
    // -- Public Properties ----------------------------------------------------

    /**
    Template for this view's contentBox.
    It is a `<div>` by default, other options are `<form>`, `<fieldset>`,
    `<p>`, `<ul>` or any other such element

    @property contentBoxTemplate
    @type String
    @default "<div/>"
    @since 3.5.0
    **/
    contentBoxTemplate: '<div/>',

    /**
    Hash of CSS selectors mapped to events to delegate to elements matching
    those selectors.

    CSS selectors are relative to the `contentBox` element. Events are attached
    to the contentBox, and delegation is used so that subscribers are only
    notified of events that occur on elements inside the contentBox that match
    the specified selectors. This allows the contentBox's contents to be re-
    rendered as needed without losing event subscriptions.

    Event handlers can be specified either as functions or as strings that map
    to function names on this view instance or its prototype.

    The `this` object in event handlers will refer to this view instance. If
    you'd prefer `this` to be something else, use `Y.bind()` to bind a custom
    `this` object.

    @example

        var view = new Y.ZeView({
            events: {
                // Call `this.toggle()` whenever the element with the id
                // "toggle-button" is clicked.
                '#toggle-button': {click: 'toggle'},

                // Call `this.hoverOn()` when the mouse moves over any element
                // with the "hoverable" class, and `this.hoverOff()` when the
                // mouse moves out of any element with the "hoverable" class.
                '.hoverable': {
                    mouseover: 'hoverOn',
                    mouseout : 'hoverOff'
                }
            }
        });

    @property events
    @type Object
    @default {}
    **/
    events: {},

    /**
    Template for this view's contents.

    How this template gets used is entirely up to you and your custom
    `_refresh()` method.

    @property template
    @type mixed
    @default ''
    **/
    template: '',

    /**
    Prefix to assign to the contentBox CSS className followed by the `NAME` of the class.

    @property cssPrefix
    @type String
    @default 'ze-view-'
    @protected
    */
    cssPrefix: 'ze-view-',

    /**
    Array of event handles used by this view, available to be detached wholesale.
    Push into this array any event handle that needs to be detached when the
    view is destroyed.

    @property _eventHandles
    @type Array
    @default []
    @protected
    */
    _eventHandles: null,

    /**
    Array of event handles used by this view, attached to the model.
    They are different from `_eventHandles` in that those remain active through
    the lifetime of the view while these might need detaching when the model is changed.
    Push into this array any event handle from a model event
    that needs to be detached when the model is changed.

    @property _modelEventHandles
    @type Array
    @default []
    @protected
    */
    _modelEventHandles: null,

    /**
    Array of objects to be destroyed on exit.
    Push into this array any object that needs to be destroyed when the
    view is destroyed.

    @property _destroyOnExit
    @type Array
    @default []
    @protected
    */
    _destroyOnExit: null,

    /**
    Internal reference to the `contentBox` for optimization purposes.

    It should normally be accessed via the `contentBox` attribute.


    @property _contentBox
    @type Node
    @default null
    @private
    */
    _contentBox: null,

    // -- Lifecycle Methods ----------------------------------------------------
    initializer: function (config) {
        _yuitest_coverfunc("build/zeView/zeView.js", "initializer", 163);
_yuitest_coverline("build/zeView/zeView.js", 164);
config || (config = {});

        // Set instance properties specified in the config.
        _yuitest_coverline("build/zeView/zeView.js", 167);
config.contentBoxTemplate &&
            (this.contentBoxTemplate = config.contentBoxTemplate);

        _yuitest_coverline("build/zeView/zeView.js", 170);
config.template && (this.template = config.template);

        // Merge events from the config into events in `this.events`.
        _yuitest_coverline("build/zeView/zeView.js", 173);
this.events = config.events ? Y.merge(this.events, config.events) :
            this.events;

        // Checks if a model is initially configured or if it is changed at any time
        // to call `_modelChange` for it
        _yuitest_coverline("build/zeView/zeView.js", 178);
if ('model' in config) {
            _yuitest_coverline("build/zeView/zeView.js", 179);
this._modelChange(config.model);
        }
        _yuitest_coverline("build/zeView/zeView.js", 181);
this.after('modelChange', function (ev) {
            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 2)", 181);
_yuitest_coverline("build/zeView/zeView.js", 182);
this._modelChange(ev.newVal, ev.prevVal);
        }, this);
        _yuitest_coverline("build/zeView/zeView.js", 184);
this._eventHandles = [];
        _yuitest_coverline("build/zeView/zeView.js", 185);
this._destroyOnExit = [];
    },

    destructor: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "destructor", 188);
_yuitest_coverline("build/zeView/zeView.js", 189);
this._detachEvents();
        _yuitest_coverline("build/zeView/zeView.js", 190);
arrEach(this._destroyOnExit,function(h){
            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 3)", 190);
_yuitest_coverline("build/zeView/zeView.js", 191);
if (h && h.destroy) {
                 _yuitest_coverline("build/zeView/zeView.js", 192);
h.destroy();
            }
        });
        _yuitest_coverline("build/zeView/zeView.js", 195);
this._modelChange();
        _yuitest_coverline("build/zeView/zeView.js", 196);
var contentBox = this._contentBox;
        _yuitest_coverline("build/zeView/zeView.js", 197);
if (contentBox) {
            _yuitest_coverline("build/zeView/zeView.js", 198);
contentBox.setHTML('');
        }
        _yuitest_coverline("build/zeView/zeView.js", 200);
delete this._contentBox;
    },

    // -- Public Methods -------------------------------------------------------


    /**
    Removes this view's contentBox element from the DOM (if it's in the DOM),
    but doesn't destroy it or any event listeners attached to it.

    @method remove
    @chainable
    **/
    remove: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "remove", 213);
_yuitest_coverline("build/zeView/zeView.js", 214);
var contentBox = this.get('contentBox');
        _yuitest_coverline("build/zeView/zeView.js", 215);
contentBox && contentBox.remove();
        _yuitest_coverline("build/zeView/zeView.js", 216);
return this;
    },

    /**
    Renders this view.

    It creates the contentBox and fills it with the rendered content.
    If a `container` is passed, the contentBox will be set into it.

    @method render
    @param container {Node | String} Node reference or CSS selector for an
            element that is to receive the rendered view.
    @chainable
    **/
    render: function (container) {
        _yuitest_coverfunc("build/zeView/zeView.js", "render", 230);
_yuitest_coverline("build/zeView/zeView.js", 231);
var contentBox = this._contentBoxGetter();
        _yuitest_coverline("build/zeView/zeView.js", 232);
this._refresh();
        _yuitest_coverline("build/zeView/zeView.js", 233);
if (container) {
            _yuitest_coverline("build/zeView/zeView.js", 234);
Y.one(container).setHTML(contentBox);
        }
        _yuitest_coverline("build/zeView/zeView.js", 236);
return this;
    },
    // -- Protected Methods ----------------------------------------------------

    /**
    Renders the content of the `contentBox`.

    The default implementation substitutes the values from the model into
    the `template` of this object.

    Classes inheriting from ZeView may override this method to insert into the
    contentBox the elements they need.

    @method _refresh
    @protected
    @chainable
    */

    _refresh: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "_refresh", 254);
_yuitest_coverline("build/zeView/zeView.js", 255);
var m = this.get('model');
        _yuitest_coverline("build/zeView/zeView.js", 256);
this._contentBox.setHTML(m?Y.Lang.sub(this.template, m.toJSON()):this.template);
        _yuitest_coverline("build/zeView/zeView.js", 257);
return this;
    },

    /**
    Attaches delegated event handlers to this view's contentBox element. This
    method is called internally to subscribe to events configured in the
    `events` attribute when the view is initialized.

    @method _attachEvents
    @chainable
    @protected
    @see _detachEvents
    **/
    _attachEvents: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "_attachEvents", 270);
_yuitest_coverline("build/zeView/zeView.js", 271);
var contentBox = this.get('contentBox'),
            self = this,
            events = {};

        _yuitest_coverline("build/zeView/zeView.js", 275);
arrEach(this._classes, function (c) {
            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 4)", 275);
_yuitest_coverline("build/zeView/zeView.js", 276);
if(c.prototype.events) {
                _yuitest_coverline("build/zeView/zeView.js", 277);
Y.mix(events,c.prototype.events);
            }

        });

        _yuitest_coverline("build/zeView/zeView.js", 282);
objEach(events, function (handlers, selector) {

            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 5)", 282);
_yuitest_coverline("build/zeView/zeView.js", 284);
objEach(handlers, function (handler, name) {

                // TODO: Make this more robust by using lazy-binding:
                // `handler = Y.bind(handler, this);`
                _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 6)", 284);
_yuitest_coverline("build/zeView/zeView.js", 288);
if (typeof handler === 'string') {
                    _yuitest_coverline("build/zeView/zeView.js", 289);
handler = self[handler];
                }

                _yuitest_coverline("build/zeView/zeView.js", 292);
if (!handler) {
                    _yuitest_coverline("build/zeView/zeView.js", 293);
return;
                }

                _yuitest_coverline("build/zeView/zeView.js", 296);
self._eventHandles.push(
                    contentBox.delegate(name, handler, selector, self));
            });
        });

        _yuitest_coverline("build/zeView/zeView.js", 301);
return self;
    },

    /**
    Detaches DOM events that have previously been attached to the contentBox by
    `_attachEvents()`.

    @method _detachEvents
    @chainable
    @protected
    @see _attachEvents
    **/
    _detachEvents: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "_detachEvents", 313);
_yuitest_coverline("build/zeView/zeView.js", 314);
arrEach(this._eventHandles, function (handle) {
            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 7)", 314);
_yuitest_coverline("build/zeView/zeView.js", 315);
if (handle && handle.detach) {
                _yuitest_coverline("build/zeView/zeView.js", 316);
handle.detach();
            }
        });

        _yuitest_coverline("build/zeView/zeView.js", 320);
this._eventHandles = [];
        _yuitest_coverline("build/zeView/zeView.js", 321);
return this;
    },
    /**
    Getter for the `contentBox` attribute.

    @method _contentBoxGetter
    @return {Node} ContentBox node.
    @private
    **/
    _contentBoxGetter: function () {
        _yuitest_coverfunc("build/zeView/zeView.js", "_contentBoxGetter", 330);
_yuitest_coverline("build/zeView/zeView.js", 331);
var contentBox = this._contentBox;

        _yuitest_coverline("build/zeView/zeView.js", 333);
if (!contentBox) {
            _yuitest_coverline("build/zeView/zeView.js", 334);
contentBox = this._contentBox = Y.Node.create(this.contentBoxTemplate);
            _yuitest_coverline("build/zeView/zeView.js", 335);
contentBox.addClass(this.cssPrefix + this.name);
            _yuitest_coverline("build/zeView/zeView.js", 336);
this._attachEvents();
        }
        _yuitest_coverline("build/zeView/zeView.js", 338);
return contentBox;
    },

    /**
    Method called whenever the Model attribute is initially set or changed.

    The provided implementation detaches any events set on the previous model, if any,
    and attaches a new set of events on the new model.

    If the `model` attribute is set to an instance of `Model` it will
    attach the `_refresh` method to the `change` event.

    If the `model` attribute is set to an instance of `ModelList` it will
    attach the `_refresh` method to the `add`, `create`, `remove` and `reset`
    events as well as the the `change` event propagating from the models contained in it.

    In both cases  it will attach the `destroy` method to the `destroy` event.

    If the `contentBox` is set, it will call `_refresh` to update it.

    @method _modelChange
    @param newModel {ModelList | Model | null} The new model being set.
    @param prevMode {ModelList | Model | null} The model currently set.
    @protected
    */
    _modelChange: function (newModel, prevModel) {
        _yuitest_coverfunc("build/zeView/zeView.js", "_modelChange", 363);
_yuitest_coverline("build/zeView/zeView.js", 364);
arrEach(this._modelEventHandles, function (h) {
            _yuitest_coverfunc("build/zeView/zeView.js", "(anonymous 8)", 364);
_yuitest_coverline("build/zeView/zeView.js", 365);
h.detach();
        });
        _yuitest_coverline("build/zeView/zeView.js", 367);
if (newModel) {
            _yuitest_coverline("build/zeView/zeView.js", 368);
if (newModel._isYUIModelList) {
                _yuitest_coverline("build/zeView/zeView.js", 369);
this._modelEventHandles = [
                    newModel.after(['*:change','add', 'create', 'remove', 'reset'], this._refresh, this)
                ]
            } else {_yuitest_coverline("build/zeView/zeView.js", 372);
if (newModel._isYUIModel) {
                _yuitest_coverline("build/zeView/zeView.js", 373);
this._modelEventHandles = [
                    newModel.after('change', this._refresh, this),
                ]
            }}
            _yuitest_coverline("build/zeView/zeView.js", 377);
this._modelEventHandles.push(newModel.after('destroy', this.destroy, this));
            _yuitest_coverline("build/zeView/zeView.js", 378);
if (this._contentBox){
                _yuitest_coverline("build/zeView/zeView.js", 379);
this._refresh();
            }
        }
    }

}, {
    NAME: NAME,

    ATTRS: {
        /**
        Node into which this view's content will be rendered.

        The contentBox node serves as the host for all DOM events attached by the
        view. Delegation is used to handle events on children of the contentBox,
        allowing the contentBox's contents to be re-rendered at any time without
        losing event subscriptions.

        The default contentBox is a `<div>` Node, but you can override this in
        a subclass, by setting the `contentBoxTemplate` to any markup such as
        `<form>`, `<fieldset>` or any other container.

        A CSS className made of the `cssPrefix` followed by the `NAME` will be
        assigned to it.

        The contentBox is not added to the page automatically. This allows you to
        have full control over how and when your view is actually rendered to
        the page.

        @attribute contentBox
        @type Node
        @default Y.Node.create(this.contentBoxTemplate)
        @readOnly
        **/
        contentBox: {
            getter   : '_contentBoxGetter',
            readOnly: true
        },

        /**
        Model that this view is meant to render.

        @attribute model
        @type Model | ModelList
        @default null
         */
        model: {
            value: null
        }
    }
});

}, '@VERSION@', {
    "requires": [
        "view",
        "contentSwapper",
        "calendar",
        "base-build",
        "datatype-date",
        "event-outside",
        "event-focus"
    ]
});
