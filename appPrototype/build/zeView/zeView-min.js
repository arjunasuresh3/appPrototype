YUI.add("zeView",function(e,t){var n=e.Array.each,r="container";e.ZeView=e.Base.create(t,e.View,[e.ContentSwapper],{_eventHandles:null,_destroyOnExit:null,initializer:function(){this._eventHandles=[],this._destroyOnExit=[]},destructor:function(){n(this._eventHandles,function(e){e.detach()}),n(this._destroyOnExit,function(e){e.destroy()});var e=this.get(r);e&&e.setHTML("")},render:function(t){return t=e.one(t),t?this.set(r,t):t=this.get(r),t&&this._render(t),this},attachEvents:function(){var t={};return n(this._classes,function(n){n.prototype.events&&e.mix(t,n.prototype.events)}),e.ZeView.superclass.attachEvents.call(this,t)},_getContainer:function(e){return e}})},"@VERSION@",{requires:["view","contentSwapper","calendar","base-build","datatype-date","event-outside","event-focus"]});
