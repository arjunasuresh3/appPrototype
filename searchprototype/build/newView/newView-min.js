YUI.add("newView",function(e,t){var n=e.Base.create("newView",e.ZeView,[],{template:"Click Me NewView<button id='btn1' type='button'>Click Me NewView!</button><div class='innerContainer'></div>",events:{button:{click:function(){this.fire("swap",{which:"AnotherNewView",view:this})}}},_render:function(t){t.setHTML(this.template);var n=new e.DataTable({columns:["id","name","price","cost"],data:[{id:"ga-3475",name:"gadget",price:"$6.99",cost:"$5.99"},{id:"sp-9980",name:"sprocket",price:"$3.75",cost:"$3.25"},{id:"wi-0650",name:"widget",price:"$4.25",cost:"$3.75"}]});this.setSwapContainer(t.one(".innerContainer"),2),this.setSwapView(n,2),this._destroyOnExit.push(n)}});e.NewView=n},"@VERSION@",{requires:["zeView","datatable","contentSwapper","autocomplete","autocomplete-highlighters"]});
