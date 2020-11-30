(this["webpackJsonprecipes-app"]=this["webpackJsonprecipes-app"]||[]).push([[0],{14:function(e,t,c){},24:function(e,t,c){"use strict";(function(e){c.d(t,"a",(function(){return a}));var n=c(4),r=c(0),s=c(1),i=c(5);function a(t){var c=t.loaded,a=t.setRecipes,o=s.useState(!1),l=Object(n.a)(o,2),u=l[0],d=l[1],j=s.useCallback((function(){e.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:i.e,range:"Recipes!A2:O"}).then((function(e){var t=e.result.values;if(t.length>0){var c=t.map((function(e){var t=Object(n.a)(e,15),c=t[0],r=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],d=t[8],j=t[9],p=t[10],h=t[11],b=t[12];return{name:s,person:r,raw_cat:i,raw_recipe:t[13],ingreds:o,instructions:l,story:u,source:d,cooking_time:j,preheat_temp:b,servings:p,photos:h,timestamp:c,alt_cat:a,id:t[14]}}));a(c)}else console.error("No Data Found")}),(function(e){console.error("Error: "+e.result.error.message)}))}),[a]);return s.useEffect((function(){var t=e.gapi;if(c){function n(e){e?(d(!0),j()):d(!1)}t&&t.load("client:auth2",(function(){t.client.init({apiKey:i.a,clientId:i.b,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets.readonly"}).then((function(){t.auth2.getAuthInstance().isSignedIn.listen(n),n(t.auth2.getAuthInstance().isSignedIn.get())}),(function(e){console.error(JSON.stringify(e,null,2))}))}))}}),[c,j]),Object(r.jsx)("div",{className:"auth_container ".concat(u?"logged_in":"not_authorized"),children:u?Object(r.jsx)("button",{className:"logout_button",onClick:function(t){e.gapi.auth2.getAuthInstance().signOut(),a(null)},children:Object(r.jsx)("svg",{width:"24px",height:"24px",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 511.989 511.989",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{d:"M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2 C119.467,225.605,115.644,221.782,110.933,221.782z"}),Object(r.jsx)("path",{d:"M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427 c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33 c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29 c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z"}),Object(r.jsx)("path",{d:"M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533 c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533 S173.423,51.115,178.133,51.115z"}),Object(r.jsx)("path",{d:"M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2 c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128 C341.333,302.405,337.519,298.582,332.8,298.582z"}),Object(r.jsx)("path",{d:"M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0 c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533 h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5 l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z"})]})})}):Object(r.jsx)("button",{className:"authorize_button",onClick:function(t){e.gapi.auth2.getAuthInstance().signIn()},children:"AUTHORIZE WITH GOOGLE ACCOUNT"})})}}).call(this,c(20))},30:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),i=c(15),a=c.n(i),o=(c(30),c(4)),l=c(7),u=c(2),d=(c(14),c(22)),j=c(5);function p(e){var t=e.match(new RegExp(/(https:\/\/drive.google.com\/)(file\/d\/|open\?id=)([^/]*)/));return t&&"".concat(t[1],"uc?export=view&id=").concat(t[3])}var h=["cooking_time","preheat_temp","servings","source"];function b(e){var t=e.recipes,c=Object(u.g)().recipeId,s=r.useRef(),i=Object(d.useReactToPrint)({content:function(){return s.current}});if(!t||0===t.length)return null;var a=t.find((function(e){return e.id===c})),o=a.name,l=a.person,b=a.ingreds,m=a.instructions,v=a.photos,O=a.story,f=v?v.split(", "):[];return Object(n.jsxs)("div",{ref:s,className:"recipe_container",children:[Object(n.jsx)("div",{className:"button_row",children:Object(n.jsx)("button",{onClick:i,title:"print this recipe",className:"print_recipe_button",children:Object(n.jsxs)("svg",{id:"_x31__px",enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"m21.5 18h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5h-19c-.827 0-1.5.673-1.5 1.5v7c0 .827.673 1.5 1.5 1.5h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-1.379 0-2.5-1.122-2.5-2.5v-7c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v7c0 1.378-1.121 2.5-2.5 2.5z"}),Object(n.jsx)("path",{d:"m14.5 21h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(n.jsx)("path",{d:"m14.5 19h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(n.jsx)("path",{d:"m10.5 17h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(n.jsx)("path",{d:"m18.5 7c-.276 0-.5-.224-.5-.5v-4c0-.827-.673-1.5-1.5-1.5h-9c-.827 0-1.5.673-1.5 1.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-1.378 1.121-2.5 2.5-2.5h9c1.379 0 2.5 1.122 2.5 2.5v4c0 .276-.224.5-.5.5z"}),Object(n.jsx)("path",{d:"m16.5 24h-9c-1.379 0-2.5-1.122-2.5-2.5v-8c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v8c0 1.378-1.121 2.5-2.5 2.5zm-10.5-10v7.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-7.5z"})]})})}),f.map((function(e,t){return Object(n.jsx)("img",{className:"recipe_photo_detail",src:p(e),alt:"".concat(o).concat(t)},t)})),Object(n.jsxs)("div",{className:"info_section",children:[Object(n.jsx)("h3",{className:"recipe_name",children:o}),Object(n.jsx)("p",{className:"recipe_person",children:"Contributed By: ".concat(l)}),Object(n.jsx)("table",{className:"recipe_metadata",children:Object(n.jsx)("tbody",{children:h.map((function(t){return e[t]?Object(n.jsxs)("tr",{className:"metadata_item",children:[Object(n.jsx)("td",{className:"metadata_key",children:j.c[t]}),Object(n.jsx)("td",{children:e[t]})]},t):null}))})}),O&&Object(n.jsx)("p",{className:"recipe_story",children:O})]}),Object(n.jsx)("div",{className:"page_break"}),Object(n.jsxs)("div",{className:"making_it_section",children:[Object(n.jsxs)("div",{className:"ingreds_wrapper",children:[Object(n.jsx)("strong",{className:"category_header",children:j.c.ingreds}),Object(n.jsx)("ul",{className:"ingreds_list",children:b&&b.split("\n").filter((function(e){return e})).map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"page_break"}),Object(n.jsx)("li",{className:"ingred_item",children:e},"".concat(t).concat(e))]})}))})]}),Object(n.jsxs)("div",{className:"instructions_wrapper",children:[Object(n.jsx)("strong",{className:"category_header",children:j.c.instructions}),Object(n.jsx)("div",{children:m&&m.split("\n").filter((function(e){return e})).map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"page_break"}),Object(n.jsx)("p",{className:"instruction_item",children:e},"".concat(t).concat(e))]})}))})]})]})]})}var m=c(8);function v(e){var t=e.name,c=e.person,r=e.photos,s=e.id;return Object(n.jsx)("div",{className:"recipe_tile",children:Object(n.jsxs)(l.b,{to:"/".concat(s),className:"recipe_tile_anchor",children:[r?Object(n.jsx)("img",{className:"recipe_photo_thumbnail",src:p(r.split(", ")[0]),alt:t}):Object(n.jsx)("div",{className:"recipe_placeholder_thumbnail"}),Object(n.jsx)("p",{className:"recipe_tile_name",children:t}),Object(n.jsx)("p",{className:"recipe_tile_person",children:c})]})})}function O(e){var t=e.recipes,c=e.filters,r=e.searchTerm;return Object(n.jsx)("div",{className:"recipes_container",children:t.map((function(e){var t=c.every((function(t){var c=t.key,n=t.value;return e[c]===n})),s=""===r||function(e){return Object.keys(e).reduce((function(t,c){return j.f.includes(c)?"".concat(t).concat(e[c]):t}),"")}(e).search(new RegExp(r,"i"))>=0;return t&&s?Object(n.jsx)(v,Object(m.a)({},e),e.id):null}))})}function f(e){var t=e.setSearchTerm,c=e.searchTerm;return Object(n.jsxs)("div",{className:"search_container",children:[Object(n.jsx)("input",{onChange:function(e){return t(e.target.value)},placeholder:"Search...",value:c}),c&&Object(n.jsx)("i",{className:"clear_search_button",onClick:function(){return t("")},children:"\xd7"})]})}var x=c(19);function g(e){var t,c=e.filterKey,r=e.currentValue,s=e.allValues,i=e.setKeyFilter;return Object(n.jsx)("div",{className:"filter_container ".concat(c,"_filter"),children:Object(n.jsxs)("select",{onChange:function(e){var t=e.target.options[e.target.selectedIndex].value;i(c,t)},value:null!==r&&void 0!==r?r:"",children:[Object(n.jsx)("option",{value:"",children:"all ".concat((t=c,j.d[t]),"...")}),s.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]})})}var _=["person","raw_cat"];function N(e){var t=e.recipes,c=e.setFilters,r=e.filters,s=function(e,t){c(t?[].concat(Object(x.a)(r.filter((function(t){return t.key!==e}))),[{key:e,value:t}]):Object(x.a)(r.filter((function(t){return t.key!==e}))))},i=function(e){var t;return null===(t=r.find((function(t){return t.key===e})))||void 0===t?void 0:t.value},a=function(e){return t.map((function(t){return t[e]})).filter((function(e,t,c){return e&&c.indexOf(e)===t}))};return t?Object(n.jsxs)("div",{className:"filters_container",children:[_.map((function(e){return Object(n.jsx)(g,{filterKey:e,currentValue:i(e),allValues:a(e),setKeyFilter:s},e)})),r.length>0&&Object(n.jsx)("button",{onClick:function(){return c([])},children:"clear all"})]}):null}function y(e){var t=e.recipes,c=r.useState([]),s=Object(o.a)(c,2),i=s[0],a=s[1],l=r.useState(""),u=Object(o.a)(l,2),d=u[0],j=u[1];return t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"controls_container",children:[Object(n.jsx)(f,{setSearchTerm:j,searchTerm:d}),Object(n.jsx)(N,{recipes:t,setFilters:a,filters:i})]}),Object(n.jsx)(O,{recipes:t,filters:i,searchTerm:d})]}):null}var k=c(24),w=[];function C(e){var t=e.setRecipes,c=Object(u.f)().pathname,s=function(e){var t=r.useState({loaded:!1,error:!1}),c=Object(o.a)(t,2),n=c[0],s=c[1];return r.useEffect((function(){if(!w.includes(e)){w.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var c=function(){s({loaded:!0,error:!1})},n=function(){var c=w.indexOf(e);c>=0&&w.splice(c,1),t.remove(),s({loaded:!0,error:!0})};return t.addEventListener("load",c),t.addEventListener("error",n),document.body.appendChild(t),function(){t.removeEventListener("load",c),t.removeEventListener("error",n)}}s({loaded:!0,error:!1})}),[e]),[n.loaded,n.error]}("https://apis.google.com/js/api.js"),i=Object(o.a)(s,2),a=i[0],l=i[1];return Object(n.jsxs)("div",{className:"main_nav",children:[Object(n.jsx)(I,{to:"/",path:c,children:"Recipes"}),Object(n.jsx)(I,{to:"/about",path:c,children:"About"}),Object(n.jsx)(k.a,{loaded:a,setRecipes:t}),l&&Object(n.jsx)("p",{children:"gapiError"})]})}function I(e){var t="nav_link ".concat(e.path===e.to?"active":"");return Object(n.jsx)(l.b,Object(m.a)(Object(m.a)({},Object(m.a)({className:t},e)),{},{children:e.children}))}var z=function(){var e=r.useState(null),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.jsx)(l.a,{basename:"/",children:Object(n.jsxs)("div",{className:"app_container",children:[Object(n.jsx)(C,{setRecipes:s}),Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(y,{recipes:c})}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/about",children:Object(n.jsx)("div",{children:"TODO: about page"})}),Object(n.jsx)(u.a,{path:"/:recipeId",children:Object(n.jsx)(b,{recipes:c})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),S()},5:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return r})),c.d(t,"e",(function(){return s})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return a})),c.d(t,"f",(function(){return o}));var n="452500646277-1ghe20uhksl0eeidurc0bifcue2skevh.apps.googleusercontent.com",r="AIzaSyArIxWcUVKS77HiW62vDeSPP7WDADJGSOQ",s="1mlCIY1G-CW1EfNddv7tjEVJoXCz6TyXLcNfqLdBRkzU",i={name:"name",person:"person",raw_cat:"category",raw_recipe:"raw recipe",ingreds:"ingredients",instructions:"preparation",story:"story",source:"source",cooking_time:"cooking time",preheat_temp:"preheat temperature",servings:"servings",photos:"photos"},a={name:"names",person:"people",raw_cat:"categories",raw_recipe:"raw recipes",ingreds:"ingredients",instructions:"preparation",story:"stories",source:"sources",cooking_time:"cooking times",preheat_temp:"preheat temperatures",servings:"servings",photos:"photos"},o=["name","person","raw_cat","ingreds","instructions","story","source","cooking_time","preheat_temp","servings"]}},[[35,1,2]]]);
//# sourceMappingURL=main.3b2bc97a.chunk.js.map