import{f as g,g as _,_ as k,c as r,o as d,d as v,b as n,u as a,h as x,F as f,i as y,j as h,k as C,a as m,l as I,s as b,m as L,p as w,t as N}from"./index-B5g18paO.js";function V(){let t=0,i=null;const l=g([]);_(()=>{c()});function c(){l.value=document.querySelectorAll(".slides .box"),l.value.length>0&&(l.value[t].classList.add("displaySlide"),i=setInterval(e,5e3))}function o(u){u>=l.value.length?t=0:u<0&&(t=l.value.length-1),l.value.forEach(s=>{s.classList.remove("displaySlide")}),l.value[t].classList.add("displaySlide")}function p(){clearInterval(i),t--,o(t)}function e(){t++,o(t)}return{prevSlide:p,nextSlide:e}}const B={key:0,class:"site-title"},q={class:"slider"},z={class:"slide"},A={class:"slides"},E={key:0},F={__name:"Slider",props:{slides:{type:Array,required:!0}},setup(t){const{prevSlide:i,nextSlide:l}=V(),c=t,o=x();return(p,e)=>{const u=h("router-link");return d(),r(f,null,[a(o).name==="home"?(d(),r("div",B,e[3]||(e[3]=[n("p",null,"L a g o L u x ",-1),n("p",{class:"site-title2"},"artful + events + wedding photography",-1)]))):v("",!0),n("section",q,[n("div",z,[n("div",A,[(d(!0),r(f,null,y(c.slides,(s,S)=>(d(),r("div",{key:S,class:C(["box",s.class])},[m(a(b),{cldImg:s.src,alt:s.alt,draggable:"false",onContextmenu:e[0]||(e[0]=I(()=>{},["prevent"]))},null,8,["cldImg","alt"]),m(u,{to:s.link||"#"},{default:L(()=>[w(N(s.name),1)]),_:2},1032,["to"])],2))),128))])]),a(o).name&&a(o).name.startsWith("work")?(d(),r("div",E,[n("button",{class:"prev",onClick:e[1]||(e[1]=(...s)=>a(i)&&a(i)(...s))},e[4]||(e[4]=[n("i",{class:"fa-solid fa-chevron-left"},null,-1)])),n("button",{class:"next",onClick:e[2]||(e[2]=(...s)=>a(l)&&a(l)(...s))},e[5]||(e[5]=[n("i",{class:"fa-solid fa-chevron-right"},null,-1)]))])):v("",!0)])],64)}}},j=k(F,[["__scopeId","data-v-6c0ae613"]]);export{j as S};
