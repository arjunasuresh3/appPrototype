YUI.add("mypanelView",function(e,t){var n=e.Base.create("mypanelView",e.ZeView,[],{initializer:function(){this.regpanel=new e.Panel({width:400,centered:!0,render:!0,zIndex:5}),this.regpanel.plug(e.Plugin.Resize),this.regpanel.plug(e.Plugin.Drag),this.regpanel.set("headerContent","Panel")},template:'<div class="acFields"><br>Autocomplete Field 1: <input id="ac-input9" type="text">&nbsp;Autocomplete Field 2: <input id="ac-input10" type="text"><br>Autocomplete Field 3: <input id="ac-input11" type="text">&nbsp;Autocomplete Field 4: <input id="ac-input12" type="text"></div>',events:{},_render:function(t){t.setHTML(this.template);var n=new e.AutoComplete({inputNode:"#ac-input9",render:!0,resultHighlighter:"phraseMatch",source:'select * from search.suggest where query="{query}"',yqlEnv:"http://pieisgood.org/yql/tables.env"}),r=new e.AutoComplete({inputNode:"#ac-input10",render:!0,resultHighlighter:"phraseMatch",source:'select * from search.suggest where query="{query}"',yqlEnv:"http://pieisgood.org/yql/tables.env"}),i=new e.AutoComplete({inputNode:"#ac-input11",render:!0,resultHighlighter:"phraseMatch",source:'select * from search.suggest where query="{query}"',yqlEnv:"http://pieisgood.org/yql/tables.env"}),s=new e.AutoComplete({inputNode:"#ac-input12",render:!0,resultHighlighter:"phraseMatch",source:'select * from search.suggest where query="{query}"',yqlEnv:"http://pieisgood.org/yql/tables.env"});this.regpanel.set("bodyContent",t.getHTML())}});e.MyPanelView=n},"@VERSION@",{requires:["zeView","datatable","contentSwapper","autocomplete","autocomplete-highlighters","panel","resize-plugin","dd-plugin"]});
