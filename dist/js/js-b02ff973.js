!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},s={},i={},r={}.hasOwnProperty,n=/^\.\.?(\/|$)/,o=function(t,e){for(var s,i=[],r=(n.test(e)?t+"/"+e:e).split("/"),o=0,u=r.length;o<u;o++)s=r[o],".."===s?i.pop():"."!==s&&""!==s&&i.push(s);return i.join("/")},u=function(t){return t.split("/").slice(0,-1).join("/")},a=function(e){return function(s){var i=o(u(e),s);return t.require(i,e)}},c=function(t,e){var i=null;i=g&&g.createHot(t);var r={id:t,exports:{},hot:i};return s[t]=r,e(r.exports,a(t),r),r.exports},l=function(t){return i[t]?l(i[t]):t},d=function(t,e){return l(o(u(t),e))},f=function(t,i){null==i&&(i="/");var n=l(t);if(r.call(s,n))return s[n].exports;if(r.call(e,n))return c(n,e[n]);throw new Error("Cannot find module '"+t+"' from '"+i+"'")};f.alias=function(t,e){i[e]=t};var m=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,v=function(t){if(m.test(t)){var e=t.replace(m,"");r.call(i,e)&&i[e].replace(m,"")!==e+"/index"||(i[e]=t)}if(h.test(t)){var s=t.replace(h,"");r.call(i,s)||(i[s]=t)}};f.register=f.define=function(t,i){if("object"==typeof t)for(var n in t)r.call(t,n)&&f.register(n,t[n]);else e[t]=i,delete s[t],v(t)},f.list=function(){var t=[];for(var s in e)r.call(e,s)&&t.push(s);return t};var g=t._hmr&&new t._hmr(d,f,e,s);f._cache=s,f.hmr=g&&g.wrap,f.brunch=!0,t.require=f}}(),function(){window;require.register("js/common.js",function(t,e,s){var i={init:function(){$.fn.serializeObject=function(){var t={},e=this.serializeArray();return $.each(e,function(){void 0!==t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t}},buildForm:function(t,e,s,i){var r="";e.forEach(function(e,s){if(void 0!==e.h)r+='<div class="uk-grid uk-grid-small uk-margin-top"><h3>'+e.h+"</h3></div>";else{e.r&&s>0&&(r+="</div>"),e.r&&(r+='<div class="uk-grid uk-grid-small">'),r+='<div class="'+e.c+'">',"required"===e.j._flags.presence&&(e.l="<strong>"+e.l+"*</strong>"),r+='<label for="" class="uk-form-label">'+e.l+"</label>";var i=t[e.n];void 0===i&&(i=""),"string"===e.t&&(r+='<input type="text" id="'+e.n+'" class="uk-width-1-1" name="'+e.n+'" value="'+i+'"><div data-hint="'+e.n+'" class="uk-text-danger"></div>'),"date"===e.t&&(r+='<div class="uk-form-icon uk-width-1-1"><i class="uk-icon-calendar"></i><input type="text" id="'+e.n+'" class="uk-width-1-1" name="'+e.n+'" data-uk-datepicker="{format:\'DD-MM-YYYY\'}" value="'+i+'"></div><div data-hint="'+e.n+'" class="uk-text-danger"></div>'),"text"===e.t&&(r+='<textarea id="'+e.n+'" class="uk-width-1-1" name="'+e.n+'">'+i+'</textarea><div data-hint="'+e.n+'" class="uk-text-danger"></div>'),"list"===e.t&&(r+='<select name="'+e.n+'" class="uk-width-1-1" id="'+e.n+'">',_.each(e.d,function(s){i="",t[e.n]===s[0]&&(i="selected='selected'"),r+='<option value="'+s[0]+'" '+i+">"+s[1]+"</option>"}),r+="</select>"),r+="</div>"}}),r+="</div>",r+='<hr><div class="uk-grid uk-grid-small uk-text-right"><div class="uk-width-1-1">',void 0!=i&&(r+='<a href="/#'+i+'" class="uk-button">Retour</a> '),r+='<button class="uk-button uk-button-success">Enregistrer</button></div></div><hr>',$(s).html(r),riot.update()},checkLogin:function(){$.get(url+"users/whoami",function(t){null===t.username&&riot.route("/login")})},checkUser:function(){$.get(url+"users/whoami",function(t){null===t.username&&riot.route("/login")})},saveForm:function(t,e,s){s=s||"",console.log(t);var i=JSON.stringify($("#"+t).serializeObject());$("div[data-hint]").html(""),$.get(url+e+"/check_form?data="+i,function(r){$("#"+t+" input, #"+t+" select").removeClass("uk-form-danger"),$("#"+t+" input, #"+t+" select").removeClass("uk-form-success"),$("#"+t+" input, #"+t+" select").addClass("uk-form-success"),r.errors.length>0?_.each(r.errors,function(t){$("#"+t.path).removeClass("uk-form-success"),$("#"+t.path).addClass("uk-form-danger"),$("div[data-hint="+t.path+"]").html("<div>"+t.message+"</div>")}):$.post(url+e+"/"+s,i,function(t){riot.route("/#"+e+"/"+t.key._key)}),setTimeout(function(){$("#"+t+" input, #"+t+" select").removeClass("uk-form-success")},300)})}};s.exports=i}),require.register("js/js.js",function(t,e,s){$(function(){riot.route("/login",function(t){riot.mount("div#app","login")}),riot.route("/logout",function(t){$.post(url+"users/logout",function(t){riot.route("/")})}),riot.route("/users",function(t){riot.mount("div#app","users")}),riot.route("/",function(t){riot.mount("div#app","loading")}),riot.route(function(t,e,s){void 0!=s&&"user"==t&&"edit"==s&&riot.mount("div#app","user_edit",{user_id:e})}),riot.route(function(t,e){void 0!=e&&"user"==t&&"new"==e&&riot.mount("div#app","user_new")}),console.log("Starting riot router"),riot.route.start(!0)})}),require.register("widgets/login.html.tag",function(t,e,s){riot.tag2("loading",'<div class="uk-text-center"> Chargement de l\'application ... <i class="uk-icon-spinner uk-icon-spin"></i> </div>',"","",function(t){$.get(url+"users/whoami",function(t){null===t.username?riot.route("/login"):riot.route("/salaries")})}),riot.tag2("login",'<div class="uk-container uk-container-center"> <div class="uk-grid"> <div class="uk-width-3-10"></div> <div class="uk-width-4-10"> <div class="uk-margin-top uk-text-center"> <h2>CRM - DSN</h2> <h3>Authentification</h3> </div> <form class="uk-form uk-margin-top" onsubmit="{save_form}"> <label for="" class="uk-form-label">Email</label> <div class="uk-form-controls"> <input type="text" placeholder="john@doe.com" class="uk-width-1-1" id="username" name="username" value=""> </div> <label for="" class="uk-form-label">Mot de passe</label> <div class="uk-form-controls"> <input type="password" placeholder="********" class="uk-width-1-1" id="password" name="password" value=""> </div> <div class="uk-form-controls uk-margin-top"> <button type="submit" class="uk-width-1-1 uk-button">Connexion</button> </div> </form> </div> <div class="uk-width-3-10"></div> </div> </div>',"","",function(t){this.save_form=function(t){$.post(url+"users/login",JSON.stringify({username:$("#username").val(),password:$("#password").val()}),function(t){t.success&&riot.route("/salaries")})}.bind(this)})}),require.register("widgets/settings.html.tag",function(t,e,s){riot.tag2("settings",'<h3>Paramètres</h3> <form onsubmit="{save_form}" class="uk-form" id="form_settings"> </form> <emetteur>',"","",function(t){this.save_form=function(t){common.checkLogin(),common.saveForm("form_settings","settings",e.obj._key)}.bind(this);var e=this;$.get(url+"settings/",function(t){e.obj=t.data,common.buildForm(e.obj,t.fields,"#form_settings")})})}),require.register("widgets/users.html.tag",function(t,e,s){riot.tag2("users_edit",'<h3>Modification d\'un contrat</h3> <form onsubmit="{save_form}" class="uk-form" id="form_users"> </form>',"","",function(t){this.save_form=function(e){common.checkLogin(),common.saveForm("form_users","userss",t.users_id)}.bind(this);var e=this;$.get(url+"userss/"+t.users_id,function(t){e.users=t.data,common.buildForm(e.users,t.fields,"#form_users","userss")})}),riot.tag2("users_new",'<h3>Création d\'un contrat</h3> <form onsubmit="{save_form}" class="uk-form" id="form_new_users"> </form>',"","",function(t){this.save_form=function(t){common.checkLogin(),common.saveForm("form_new_users","userss")}.bind(this),$.get(url+"userss/fields",function(t){common.buildForm({},t.fields,"#form_new_users","userss")})}),riot.tag2("userss",'<h3>Gestion des contrats</h3> <a href="/#userss/new" class="uk-button uk-button-mini"><i class="uk-icon-plus"></i> Nouveau contrat</a> <table class="uk-table "> <thead> <tr> <th>key</th> <th>date</th> <th width="70"></th> </tr> </thead> <tbody> <tr each="{userss}"> <td>{_key}</td> <td>{S21_G00_40_001}</td> <td class="uk-text-center"> <a href="/#userss/{_key}/edit" class="uk-button uk-button-primary uk-button-mini"><i class="uk-icon-edit"></i></a> <a onclick="{destroy_object}" class="uk-button uk-button-danger uk-button-mini"><i class="uk-icon-trash"></i></a> </td> </tr> </tbody> </table>',"","",function(t){var e=this;this.destroy_object=function(t){UIkit.modal.confirm("Are you sure?",function(){$.ajax({url:url+"userss/"+t.item._key,method:"DELETE"}),$.get(url+"userss/",function(t){e.userss=t.data,e.update()})})}.bind(this),$.get(url+"users/whoami",function(t){null===t.username&&riot.route("/login")}),$.get(url+"userss/",function(t){e.userss=t.data,e.update()})})}),require.register("___globals___",function(t,e,s){})}(),require("___globals___");