YUI.add("memsearchView",function(e,t){var n='<fieldset>                  <legend>Member Search</legend>                  <form name="pat_search" id="pat_search">                    <div id="demo" class="yui3-g">                      <div class="yui3-u-1-4 label">                        <label for="ac-input">Name:</label>                      </div>                      <div class="yui3-u-1-4">                        <input id="ac-input" name="memname" type="text" formvalidator:FormField="yes" formvalidator:Type="TextBaseField">                      </div>                      <div class="yui3-u-1-4 label">                        <label for="dob-input">DOB:</label>                      </div>                      <div class="yui3-u-1-4">                        <input id="dob-input" name="dob" class="ze-calendar" type="text">                      </div>                      <div class="yui3-u-1-4 label">                        <label for="member-id">Member Id:</label>                      </div>                      <div class="yui3-u-1-4">                        <input id="member-id" name="memid" type="text">                      </div>                      <div class="yui3-u-1-4 label">                        <label for="member-type">Member Type:</label>                      </div>                      <div class="yui3-u-1-4">                        <select id="member-type" name="memtype">                          <option value="">-- Select -- </option>                          <option value="1">Id</option>                          <option value="2">SSN</option>                        </select>                      </div>                    </div>                    <div style="clear:both"></div>                    <div align="center">                      <input type="submit" name="search" value="Search"/>                    </div>                  </form>                </fieldset><fieldset class="resultsfieldset" style="display:none;"><div align="center" class="results">               </div></fieldset>';e.MemSearchView=e.Base.create("memsearchView",e.ZeView,[e.ContentSwapper],{containerTemplate:'<div id="testmvc"></div>',events:{"[name=search]":{click:"search"},".ze-calendar":{}},template:n,initializer:function(e){this._tables=[]},_render:function(t){t.setHTML(this.template),this.setSwapContainer(t.one(".results"),1),e.one("#ac-input").plug(e.Plugin.AutoComplete,{source:'select * from search.suggest where query="{query}"',yqlEnv:"http://pieisgood.org/yql/tables.env"})},showcal:function(e){var t=e.target.get("region");YUI.Ze.calendar.show(),YUI.Ze.calendar.get("boundingBox").setXY([t.left,t.bottom])},hidecal:function(){YUI.Ze.calendar.hide()},search:function(t){t.halt();var n=e.all("#pat_search input[type=text],#pat_search select"),r={};n.each(function(e){var t=e.get("value");t&&(r[e.get("name")]=t)}),console.log("asd");var i=this;e.use("model-list","modelsyncZope",function(){var t=e.Base.create("MyM",e.ModelList,[e.ModelSync.Zope],{root:"/memresults"}),n=new t;n.load(r,function(t,n){e.use("datatable",function(){var t=new e.DataTable({columns:["MemberId","Name","DOB"],data:e.JSON.parse(n.responseText)});t.on("render",function(t){e.one(".resultsfieldset").setStyle("display","")}),i.setSwapView(t,1),i._tables.push(t)})})})},destroy:function(){e.one("#ac-input").destroy(),e.Array.each(this.tables,function(e){e.destroy()})}})},"@VERSION@",{requires:["zeView","datatable","contentSwapper","autocomplete","autocomplete-highlighters"]});
