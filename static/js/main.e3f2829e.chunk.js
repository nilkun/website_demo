(this.webpackJsonpforiio=this.webpackJsonpforiio||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(21),a(4)),s=a(8),l=a(11),u=a(12),m=a(14),_=a(13),f=a(15),d=(a(22),function(e){var t=e.className,a=e.user,n=e.changePage,c=e.noAvatar,i=a.works.slice(0,4);return r.a.createElement("div",{className:t,key:a.id},r.a.createElement("div",{className:"card__infobox"},r.a.createElement("div",{className:"card__infobox__imgContainer"},r.a.createElement("img",{onClick:function(){return n("Profile",a.screen_name)},className:"card__infobox__image",src:""===a.avatar?c:a.avatar,alt:"avatar"})),r.a.createElement("div",{className:"card__infobox__username"},a.name),r.a.createElement("div",{className:"card__infobox__usertitle"},a.profession)),r.a.createElement("div",{className:"card__works"},i.map((function(e){return r.a.createElement("img",{key:e.id,onClick:function(){return n("Project",e.id)},className:"card__works__individual",src:e.thumbnail,alt:"{work.title}"})}))))}),v=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loading__title"},"Loading"),r.a.createElement("div",{className:"loading__one"},"."),r.a.createElement("div",{className:"loading__two"},"."),r.a.createElement("div",{className:"loading__three"},"."))},h=function(e){var t=function(){window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&_()},a=e.users,c=e.noAvatar,i=e.changePage,s=Object(n.useRef)(!1),l=Object(n.useRef)(4),u=Object(n.useRef)(t),m=Object(n.useRef)(t),_=function(){s.current||(s.current=!0,E((function(e){return Math.min(a.length,e+l.current)})))},f=Object(n.useState)(l.current),h=Object(o.a)(f,2),g=h[0],E=h[1];return Object(n.useEffect)((function(){return window.addEventListener("wheel",u.current)}),[]),Object(n.useEffect)((function(){return window.addEventListener("touchmove",m.current)}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("wheel",u.current)}}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("touchmove",m.current)}}),[]),Object(n.useEffect)((function(){s.current=!1})),a.length>0?r.a.createElement("div",{className:"pickedCreators"},r.a.createElement("h1",{className:"pickedCreators__title"},"Picked up creators"),r.a.createElement("div",{className:"pickedCreators__cardContainer"},a.slice(0,g).map((function(e,t){return r.a.createElement(d,{key:t,className:"card",user:e,changePage:i,noAvatar:c})})))):r.a.createElement(v,null)},g=a(3),E=a(2),p=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return window.addEventListener("click",s.current=function(){return i(!0)})}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("click",s.current)}}),[]),r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__title"},"foriio"),r.a.createElement("nav",{className:"header__navbar"},r.a.createElement("div",{className:"header__navbar__item",onClick:function(){return e.changePage("UserList")}},r.a.createElement(g.a,{icon:E.h}),r.a.createElement("span",{className:"header__navbar__item__text"},"Picked up creators")),r.a.createElement("div",{className:"header__navbar__item",onClick:function(e){e.stopPropagation(),i(!c)}},r.a.createElement(g.a,{icon:E.f}),r.a.createElement("span",{className:"header__navbar__item__text"},c?"Open":"Close"," history"))),r.a.createElement("div",{className:"history"+(c?" history__hide":"")},e.history.length>0?e.history.sort((function(e,t){return e.time<t.time?1:-1})).map((function(t,a){return r.a.createElement("div",{className:"history__user",key:a},r.a.createElement("div",{className:"history__user__container",onClick:function(){return e.changePage("Profile",t.username)}},r.a.createElement("img",{className:"history__user__avatar",src:t.avatar,alt:"user avatar"}),r.a.createElement("div",{className:"history__user__about"},r.a.createElement("div",{className:"history__user__about__name"},t.name),r.a.createElement("div",{className:"history__user__about__profession"},t.profession))),r.a.createElement("div",{className:"history__projects"},t.visited.map((function(t,a){return r.a.createElement("div",{key:a,onClick:function(){return e.changePage("Project",t.id)},className:"history__projects__image"},r.a.createElement("img",{src:t.thumbnail,alt:"project"}),r.a.createElement("div",{className:"history__projects__title"},t.title))}))))})):r.a.createElement("div",{className:"history__user history__empty"},"You haven't visited any pages yet...")))},b=a(7),w=function(e){var t=e.arr,a=e.profile,n=e.className;return r.a.createElement("div",{className:n},t.map((function(e,t){if(""===a[e])return"";var n;switch(e){case"twitter_url":n=b.b;break;case"instagram_url":n=b.a;break;case"website":default:n=E.e}return r.a.createElement("div",{key:t,onClick:function(){return window.open(a[e])},className:"profile__userdata__snsIcon"},r.a.createElement(g.a,{icon:n}))})))},j=function(e){var t=function(){window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&u()},a=Object(n.useRef)(!1),c=Object(n.useRef)(6),i=Object(n.useRef)(t),s=Object(n.useRef)(t),l=Object(n.useRef)(6),u=function(){a.current||(a.current=!0,y((function(e){return Math.min(f.tags[p].length,e+c.current)})),l.current=l.current+6>f.tags[p].length?f.tags[p].length:l.current+6)},m=Object(n.useState)(e),_=Object(o.a)(m,2),f=_[0],d=_[1],v=Object(n.useState)("All"),h=Object(o.a)(v,2),p=h[0],b=h[1],j=Object(n.useState)(c.current),N=Object(o.a)(j,2),y=(N[0],N[1]);return Object(n.useEffect)((function(){return window.addEventListener("wheel",i.current)}),[]),Object(n.useEffect)((function(){return window.addEventListener("touchmove",s.current)}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("wheel",i.current)}}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("touchmove",s.current)}}),[]),Object(n.useEffect)((function(){a.current=!1})),Object(n.useEffect)((function(){b("All"),y(c.current),l.current=6,d(e)}),[e]),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__userdata"},r.a.createElement("div",{className:"profile__userdata__avatar"},r.a.createElement("img",{src:f.profile.avatar.thumb2x?f.profile.avatar.thumb2x:f.noAvatar,alt:"user avatar",width:"60px"})),r.a.createElement("div",{className:"profile__userdata__container"},r.a.createElement("div",{className:"profile__userdata__name"},f.profile.name),r.a.createElement("div",{className:"profile__userdata__profession"},f.profile.profession," ",f.profile.location&&"@\xa0"+f.profile.location),r.a.createElement("div",{className:"profile__userdata__bio"},r.a.createElement("br",null),f.profile.bio),r.a.createElement("div",{className:"profile__userdata__location"}),r.a.createElement("div",{className:"profile__userdata__lookingFor"},r.a.createElement("br",null),f.profile.i_want_to_work_with),r.a.createElement(w,{className:"profile__userdata__sns",arr:["twitter_url","instagram_url","website"],profile:f.profile}))),r.a.createElement("div",{className:"portfolio"},r.a.createElement("div",{className:"portfolio__taglist"},Object.keys(f.tags).map((function(e,t){return p===e?r.a.createElement("div",{className:"portfolio__taglist__tag portfolio__taglist__selected",key:t},e):r.a.createElement("div",{className:"portfolio__taglist__tag ",onClick:function(){return function(e){b(e),y(c.current)}(e)},key:t},e)}))),r.a.createElement("div",{className:"portfolio__listing"},f.tags[p].slice(0,l.current).map((function(e,t){var a=f.works[e];return r.a.createElement("div",{key:t,className:"portfolio__listing__wrapper",onClick:function(){return f.changePage("Project",a.id)}},r.a.createElement("div",{className:"portfolio__listing__container"},r.a.createElement("img",{className:"portfolio__listing__container__thumbnail polaroid",src:a.thumbnail,alt:"thumbnail"}),r.a.createElement("div",{className:"portfolio__listing__container__overlay"},r.a.createElement("div",{className:"portfolio__listing__container__overlay__title"},a.title),r.a.createElement("div",{className:"portfolio__listing__container__overlay__roles"},a.user_roles.map((function(e,t,a){return r.a.createElement("div",{key:t},e," ",t<a.length-1?"and\xa0 ":"")}))),r.a.createElement("div",{className:"portfolio__listing__container__overlay__icon"},"image"===a.type?r.a.createElement(g.a,{icon:E.g}):r.a.createElement(g.a,{icon:E.j}))),r.a.createElement("div",{className:"portfolio__listing__wrapper__info"},r.a.createElement("div",{className:"portfolio__listing__wrapper__info__title"},"image"===a.type?r.a.createElement(g.a,{icon:E.g}):r.a.createElement(g.a,{icon:E.j}),"\xa0",a.title),r.a.createElement("div",{className:"portfolio__listing__wrapper__info__roles"},a.user_roles.map((function(e,t,a){return r.a.createElement("div",{key:t},e," ",t<a.length-1?"and\xa0":"")}))))))})))))},N=function(e){var t=function(){window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&O()},a=e.noOfMedia,c=e.videos,i=e.images,s=e.thumbnail,l=e.mediatype,u=e.title,m=e.description,_=e.changePage,f=e.credits,d=e.noAvatar,h=Object(n.useRef)(!1),p=Object(n.useRef)(i||(c||[[s]])),b=Object(n.useRef)(i?"srcset":c?"picture_url":0),w=Object(n.useRef)(6),j=Object(n.useRef)(t),N=Object(n.useRef)(t),y=Object(n.useRef)(!1),k=Object(n.useRef)(!!document.fullscreenElement),O=function(){h.current||(h.current=!0,U((function(e){return Math.min(a.length,e+w.current)})))},P=Object(n.useState)(!1),C=Object(o.a)(P,2),x=C[0],A=C[1],L=Object(n.useState)(""),R=Object(o.a)(L,2),I=R[0],H=R[1],S=Object(n.useState)(w.current),F=Object(o.a)(S,2),U=(F[0],F[1]);Object(n.useEffect)((function(){return window.addEventListener("wheel",j.current)}),[]),Object(n.useEffect)((function(){return window.addEventListener("touchmove",N.current)}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("wheel",j.current)}}),[]),Object(n.useEffect)((function(){return function(){return window.removeEventListener("touchmove",N.current)}}),[]),Object(n.useEffect)((function(){h.current=!1}));var M=function(){document.documentElement.requestFullscreen(),A(!0)},T=function(){document.fullscreenElement&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),A(!1))},D=function(){y.current=!1,k.current?M():T(),H(-1)},Y=function(e){var t=I+e;t<0?t+=i.length:t>=i.length&&(t-=i.length),H(t)};return l||s?r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"project__info"},r.a.createElement("div",{className:"project__info__container"},r.a.createElement("h1",{className:"project__info__title"},u),r.a.createElement("div",{className:"project__info__description"},m)),r.a.createElement("div",{className:"project__info__credits"},f.map((function(e,t){return r.a.createElement("div",{key:t,className:"project__info__credits__container"},r.a.createElement("div",{className:"project__info__credits__role"},e.name),r.a.createElement("div",{className:"project__info__credits__name",onClick:function(){return _("Profile",e.user.screen_name)}},r.a.createElement("img",{src:null===e.user.profile.avatar.thumb2x?d:e.user.profile.avatar.thumb2x,alt:"user avatar"}),e.user.profile.name))})))),r.a.createElement("div",{style:{margin:"1rem"}}),r.a.createElement("div",{className:"portfolio"},r.a.createElement("div",{className:"portfolio__listing"},p.current.map((function(e,t){return r.a.createElement("div",{key:t,className:"portfolio__listing__wrapper"},r.a.createElement("div",{className:"project__view"},r.a.createElement("img",{className:"portfolio__listing__container__thumbnail zoominCursor",src:e[b.current],alt:"portfolio item",onClick:function(){return function(e){1===l?window.open(c[e].url):(k.current=!!document.fullscreenElement,y.current=!0,A(k.current),H(e))}(t)}})))})))),y.current?r.a.createElement("div",{className:"fullscreenImage"},r.a.createElement("div",{onClick:function(){return D()},className:"fullscreenImage__overlay"}),r.a.createElement("img",{src:p.current[I].srcset,alt:"viewing fullscreen"}),r.a.createElement("div",{onClick:function(){return Y(-1)},className:"fullscreenImage__button fullscreenImage__button-left"},r.a.createElement(g.a,{icon:E.a})),r.a.createElement("div",{onClick:function(){return Y(1)},className:"fullscreenImage__button fullscreenImage__button-right"},r.a.createElement(g.a,{icon:E.b})),r.a.createElement("div",{onClick:function(){return D()},className:"fullscreenImage__button fullscreenImage__button-close"},r.a.createElement(g.a,{icon:E.i})),x?r.a.createElement("div",{onClick:function(){return T()},className:"fullscreenImage__button fullscreenImage__button-fullscreen"},r.a.createElement(g.a,{icon:E.c})):r.a.createElement("div",{onClick:function(){return M()},className:"fullscreenImage__button fullscreenImage__button-fullscreen"},r.a.createElement(g.a,{icon:E.d}))):""):r.a.createElement(v,null)},y="https://api.foriio.com/api/v1",k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(_.a)(t).call(this,e))).noAvatar="https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png",a.state={header:r.a.createElement("div",null),page:r.a.createElement(v,null),data:"",history:[],props:{},users:[],currentUser:!1},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"getPersonFromHistory",value:function(e){return this.state.history.findIndex((function(t){return t.username===e}))}},{key:"addPersonToHistory",value:function(e,t){var a=Object(s.a)(this.state.history),n=a.findIndex((function(a){return a.username===(t||e.user.screen_name)}));if(n<0){if(a.length>=5){for(var r=0,c=1;c<a.length;c++)a[c].time<a[r].time&&(r=c);a.splice(r,1)}a.push({username:t||e.user.screen_name,name:e.name,profession:e.profession,avatar:e.avatar.thumb2x?e.avatar.thumb2x:this.noAvatar,visited:[],time:Date.now()}),n=a.length-1}else a[n].time=Date.now();return[a,n]}},{key:"addProjectToHistory",value:function(e){var t,a=this.state.currentUser?this.getPersonFromHistory():-1;if(a<0){var n=this.addPersonToHistory(e.author.profile,e.author.screen_name),r=Object(o.a)(n,2);t=r[0],a=r[1]}else t=Object(s.a)(this.state.history);var c={title:e.title,thumbnail:e.thumbnail,id:e.id},i=t[a].visited.findIndex((function(e){return e.id===c.id}));return i>=0&&t[a].visited.splice(i,1),t[a].visited.length>=6&&t[a].visited.pop(),t[a].visited.unshift(c),t}},{key:"changePage",value:function(e,t){var a,n=this;switch(e){case"UserList":fetch("".concat(y,"/promoted/users")).then((function(e){if(200===e.status)return e.json();throw e.status})).catch((function(e){console.log("Error:",e)})).then((function(e){n.setState({props:{users:e.users,noAvatar:n.noAvatar,changePage:n.changePage.bind(n)},page2:"UserList",page:r.a.createElement(h,{users:e.users,noAvatar:n.noAvatar,changePage:n.changePage.bind(n)}),currentUser:!1})}));break;case"Profile":(function(e){var t=fetch("".concat(y,"/users/").concat(e,"/profile")).then((function(e){if(200===e.status)return e.json();throw e.status})).then((function(e){return e.profile})).catch((function(e){console.log("Error:",e)})),a=fetch("".concat(y,"/users/").concat(e,"/works")).then((function(e){if(200===e.status)return e.json();throw e.status})).then((function(e){var t={All:[]};return e.works.forEach((function(e,a){e.category_list.forEach((function(e){t[e]||(t[e]=[]),t[e].push(a)})),t.All.push(a)})),[e.works,t]})).catch((function(e){console.log("Error:",e)}));return Promise.all([t,a])})(t).then((function(e){n.setState({props:{profile:e[0],works:e[1][0],tags:e[1][1],noAvatar:n.noAvatar,changePage:n.changePage.bind(n)},page2:"Profile",page:r.a.createElement(j,{profile:e[0],time:Date.now(),works:e[1][0],tags:e[1][1],noAvatar:n.noAvatar,changePage:n.changePage.bind(n)}),history:n.addPersonToHistory(e[0])[0],currentUser:e[0].user.screen_name})}));break;case"Project":(a=t,fetch("".concat(y,"/works/").concat(a)).then((function(e){if(200===e.status)return e.json();throw e.status})).then((function(e){var t=e.work,a=t.creative_roles,n=t.description,r=t.title,c=t.images,i=t.videos,o=t.thumbnail,s=t.id,l=t.author;return{credits:a,description:n,title:r,images:c,videos:i,id:s,mediatype:c?2:i?1:void 0,noOfMedia:c?c.length:i?i.length:0,thumbnail:o,author:l}})).catch((function(e){console.log("Error:",e)}))).then((function(e){n.setState({page:r.a.createElement(N,Object.assign({noAvatar:n.noAvatar},e,{changePage:n.changePage.bind(n)})),history:n.addProjectToHistory(e)})}));break;default:e=r.a.createElement(v,null)}window.scrollTo(0,0)}},{key:"componentDidMount",value:function(){this.changePage("UserList")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{history:this.state.history,changePage:this.changePage.bind(this)}),r.a.createElement("div",{className:"main"},this.state.page))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e3f2829e.chunk.js.map