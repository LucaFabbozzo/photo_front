import{_ as p,f as i,g as h,q as k,c as t,o as n,b as c,F as g,i as y,d as w,l as x,C as L}from"./index-BpCh7LLf.js";const q={class:"outer-container"},C={key:0,class:"loading-indicator"},M=["src","onLoad"],z={__name:"Cards",props:{photos:{type:Array,required:!0}},setup(_){const b=_,m=new L({cloud:{cloudName:"dxm7oj4xi"}}),u=a=>m.image(a).toURL(),o=i(b.photos.map(()=>!0)),v=a=>{o.value[a]=!1,o.value.every(r=>!r)&&(e.value.scrollLeft=e.value.scrollLeft)},e=i(null),d=a=>{if(a.deltaMode===0&&Math.abs(a.deltaY)>Math.abs(a.deltaX)){a.preventDefault();const r=Math.min(Math.abs(a.deltaY)/10,5),l=a.deltaY*r;e.value.scrollLeft+=l}},f=()=>{e.value&&(e.value.scrollLeft=0)};return h(()=>{e.value&&(e.value.addEventListener("wheel",d,{passive:!1}),f())}),k(()=>{e.value&&e.value.removeEventListener("wheel",d)}),(a,r)=>(n(),t("div",q,[c("div",{class:"card-container",ref_key:"cardContainer",ref:e},[(n(!0),t(g,null,y(_.photos,(l,s)=>(n(),t("div",{class:"card",key:s},[o.value[s]?(n(),t("div",C)):w("",!0),c("img",{src:u(l),alt:"Photo",draggable:"false",onContextmenu:r[0]||(r[0]=x(()=>{},["prevent"])),onLoad:()=>v(s)},null,40,M)]))),128))],512)]))}},N=p(z,[["__scopeId","data-v-2efa30d9"]]),j={title:"Nicole & Alessandro",photos:["nicole_alessandro-1_unngkp","nicole_alessandro-2_wcazzd","nicole_alessandro-3_kr0ve1","nicole_alessandro-4_mfal9y","nicole_alessandro-5_xgn7dr","nicole_alessandro-6_lhqve3","nicole_alessandro-8_mcp5pg","nicole_alessandro-9_xpslrc","nicole_alessandro-11_uue6kl","nicole_alessandro-12_gni3uc","nicole_alessandro-13_rgkj4y","nicole_alessandro-14_bkzv0r","nicole_alessandro-15_htyodx","nicole_alessandro-16_fj3f3z","nicole_alessandro-17_izhkkx","nicole_alessandro-18_dbejbu","nicole_alessandro-19_vlv2ph","nicole_alessandro-20_uotpre"]},A={title:"Elena & Andrea",photos:["elena_andrea-1","elena_andrea-2","elena_andrea-3","elena_andrea-4","elena_andrea-5","elena_andrea-6","elena_andrea-7","elena_andrea-8","elena_andrea-9","elena_andrea-10","elena_andrea-11","elena_andrea-12","elena_andrea-13","elena_andrea-14","elena_andrea-15","elena_andrea-16"]},B={title:"Barbara & Mattia",photos:["barbara_mattia-1_tqwcf5","barbara_mattia-2_pfuvsi","barbara_mattia-3_vt6zus","barbara_mattia-4_yeotyt","barbara_mattia-5_soqbym","barbara_mattia-6_xt2pqx","barbara_mattia-7_vmm8pw","barbara_mattia-8_uulmr1","barbara_mattia-9_yguy6o","barbara_mattia-10_eebp44","barbara_mattia-11_nrffx6","barbara_mattia-12_gv0jnu","barbara_mattia-13_uabwc0","barbara_mattia-14_uwlckc","barbara_mattia-15_dslhmc","barbara_mattia-16_amuqef","barbara_mattia-17_rytkwf","barbara_mattia-18_kkbnxk","barbara_mattia-19_qxonft","barbara_mattia-20_lmql20"]},F={work1:j,work2:A,work3:B};export{N as C,F as p};
