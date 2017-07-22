!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("6",tinymce.util.Tools.resolve),g("1",["6"],function(a){return a("tinymce.Env")}),g("2",["6"],function(a){return a("tinymce.PluginManager")}),g("3",["6"],function(a){return a("tinymce.util.JSON")}),g("4",["6"],function(a){return a("tinymce.util.Tools")}),g("5",["6"],function(a){return a("tinymce.util.XHR")}),g("0",["1","2","3","4","5"],function(a,b,c,d,e){return b.add("image",function(b){function f(a,b){function c(a,c){d.parentNode&&d.parentNode.removeChild(d),b({width:a,height:c})}var d=document.createElement("img");d.onload=function(){c(Math.max(d.width,d.clientWidth),Math.max(d.height,d.clientHeight))},d.onerror=function(){c()};var e=d.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left=0,e.width=e.height="auto",document.body.appendChild(d),d.src=a}function g(a,b,c){function e(a,c){return c=c||[],d.each(a,function(a){var d={text:a.text||a.title};a.menu?d.menu=e(a.menu):(d.value=a.value,b(d)),c.push(d)}),c}return e(a,c||[])}function h(a){return function(){var d=b.settings.image_list;"string"==typeof d?e.send({url:d,success:function(b){a(c.parse(b))}}):"function"==typeof d?d(a):a(d)}}function i(c){function e(){var a,b,c,d;a=o.find("#width")[0],b=o.find("#height")[0],a&&b&&(c=a.value(),d=b.value(),o.find("#constrain")[0].checked()&&r&&s&&c&&d&&(r!=c?(d=Math.round(c/r*d),isNaN(d)||b.value(d)):(c=Math.round(d/s*c),isNaN(c)||a.value(c))),r=c,s=d)}function h(){function a(a){function c(){a.onload=a.onerror=null,b.selection&&(b.selection.select(a),b.nodeChanged())}a.onload=function(){v.width||v.height||!x||w.setAttribs(a,{width:a.clientWidth,height:a.clientHeight}),c()},a.onerror=c}var c,f;m(),e(),v=d.extend(v,o.toJSON()),v.alt||(v.alt=""),v.title||(v.title=""),""===v.width&&(v.width=null),""===v.height&&(v.height=null),v.style||(v.style=null),v={src:v.src,alt:v.alt,title:v.title,width:v.width,height:v.height,style:v.style,caption:v.caption,"class":v["class"]},b.undoManager.transact(function(){function d(a){return b.schema.getTextBlockElements()[a.nodeName]}if(!v.src)return void(p&&(w.remove(p),b.focus(),b.nodeChanged()));if(""===v.title&&(v.title=null),p?w.setAttribs(p,v):(v.id="__mcenew",b.focus(),b.selection.setContent(w.createHTML("img",v)),p=w.get("__mcenew"),w.setAttrib(p,"id",null)),b.editorUpload.uploadImagesAuto(),v.caption===!1&&w.is(p.parentNode,"figure.image")&&(c=p.parentNode,w.insertAfter(p,c),w.remove(c)),v.caption!==!0)a(p);else if(!w.is(p.parentNode,"figure.image")){f=p,p=p.cloneNode(!0),c=w.create("figure",{"class":"image"}),c.appendChild(p),c.appendChild(w.create("figcaption",{contentEditable:!0},"Caption")),c.contentEditable=!1;var e=w.getParent(f,d);e?w.split(e,f,c):w.replace(c,f),b.selection.select(c)}})}function i(a){return a&&(a=a.replace(/px$/,"")),a}function j(a){var c,e,g,h=a.meta||{};t&&t.value(b.convertURL(this.value(),"src")),d.each(h,function(a,b){o.find("#"+b).value(a)}),h.width||h.height||(c=b.convertURL(this.value(),"src"),e=b.settings.image_prepend_url,g=new RegExp("^(?:[a-z]+:)?//","i"),e&&!g.test(c)&&c.substring(0,e.length)!==e&&(c=e+c),this.value(c),f(b.documentBaseURI.toAbsolute(this.value()),function(a){a.width&&a.height&&x&&(r=a.width,s=a.height,o.find("#width").value(r),o.find("#height").value(s))}))}function k(a){a.meta=o.toJSON()}function l(a){if(a.margin){var b=a.margin.split(" ");switch(b.length){case 1:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[0],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[0];break;case 2:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[1];break;case 3:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[1];break;case 4:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[3]}delete a.margin}return a}function m(){function a(a){return a.length>0&&/^[0-9]+$/.test(a)&&(a+="px"),a}if(b.settings.image_advtab){var c=o.toJSON(),d=w.parseStyle(c.style);d=l(d),c.vspace&&(d["margin-top"]=d["margin-bottom"]=a(c.vspace)),c.hspace&&(d["margin-left"]=d["margin-right"]=a(c.hspace)),c.border&&(d["border-width"]=a(c.border)),o.find("#style").value(w.serializeStyle(w.parseStyle(w.serializeStyle(d))))}}function n(){if(b.settings.image_advtab){var a=o.toJSON(),c=w.parseStyle(a.style);o.find("#vspace").value(""),o.find("#hspace").value(""),c=l(c),(c["margin-top"]&&c["margin-bottom"]||c["margin-right"]&&c["margin-left"])&&(c["margin-top"]===c["margin-bottom"]?o.find("#vspace").value(i(c["margin-top"])):o.find("#vspace").value(""),c["margin-right"]===c["margin-left"]?o.find("#hspace").value(i(c["margin-right"])):o.find("#hspace").value("")),c["border-width"]&&o.find("#border").value(i(c["border-width"])),o.find("#style").value(w.serializeStyle(w.parseStyle(w.serializeStyle(c))))}}var o,p,q,r,s,t,u,v={},w=b.dom,x=b.settings.image_dimensions!==!1;p=b.selection.getNode(),q=w.getParent(p,"figure.image"),q&&(p=w.select("img",q)[0]),p&&("IMG"!=p.nodeName||p.getAttribute("data-mce-object")||p.getAttribute("data-mce-placeholder"))&&(p=null),p&&(r=w.getAttrib(p,"width"),s=w.getAttrib(p,"height"),v={src:w.getAttrib(p,"src"),alt:w.getAttrib(p,"alt"),title:w.getAttrib(p,"title"),"class":w.getAttrib(p,"class"),width:r,height:s,caption:!!q}),c&&(t={type:"listbox",label:"Image list",values:g(c,function(a){a.value=b.convertURL(a.value||a.url,"src")},[{text:"None",value:""}]),value:v.src&&b.convertURL(v.src,"src"),onselect:function(a){var b=o.find("#alt");(!b.value()||a.lastControl&&b.value()==a.lastControl.text())&&b.value(a.control.text()),o.find("#src").value(a.control.value()).fire("change")},onPostRender:function(){t=this}}),b.settings.image_class_list&&(u={name:"class",type:"listbox",label:"Class",values:g(b.settings.image_class_list,function(a){a.value&&(a.textStyle=function(){return b.formatter.getCssText({inline:"img",classes:[a.value]})})})});var y=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:j,onbeforecall:k},t];b.settings.image_description!==!1&&y.push({name:"alt",type:"textbox",label:"Image description"}),b.settings.image_title&&y.push({name:"title",type:"textbox",label:"Image Title"}),x&&y.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:e,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:e,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),y.push(u),b.settings.image_caption&&a.ceFalse&&y.push({name:"caption",type:"checkbox",label:"Caption"}),b.settings.image_advtab?(p&&(p.style.marginLeft&&p.style.marginRight&&p.style.marginLeft===p.style.marginRight&&(v.hspace=i(p.style.marginLeft)),p.style.marginTop&&p.style.marginBottom&&p.style.marginTop===p.style.marginBottom&&(v.vspace=i(p.style.marginTop)),p.style.borderWidth&&(v.border=i(p.style.borderWidth)),v.style=b.dom.serializeStyle(b.dom.parseStyle(b.dom.getAttrib(p,"style")))),o=b.windowManager.open({title:"Insert/edit image",data:v,bodyType:"tabpanel",body:[{title:"General",type:"form",items:y},{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:n},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:m},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]}],onSubmit:h})):o=b.windowManager.open({title:"Insert/edit image",data:v,body:y,onSubmit:h})}b.on("preInit",function(){function a(a){var b=a.attr("class");return b&&/\bimage\b/.test(b)}function c(b){return function(c){function e(a){a.attr("contenteditable",b?"true":null)}for(var f,g=c.length;g--;)f=c[g],a(f)&&(f.attr("contenteditable",b?"false":null),d.each(f.getAll("figcaption"),e))}}b.parser.addNodeFilter("figure",c(!0)),b.serializer.addNodeFilter("figure",c(!1))}),b.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:h(i),stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),b.addMenuItem("image",{icon:"image",text:"Image",onclick:h(i),context:"insert",prependToContext:!0}),b.addCommand("mceImage",h(i))}),function(){}}),d("0")()}();
