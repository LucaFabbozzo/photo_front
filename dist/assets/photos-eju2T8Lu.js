import{_ as g,f as s,g as k,c as r,o as d,b as p,F as b,i as y,k as z,d as C,l as j,C as w}from"./index-CQp_G8_-.js";const x={class:"outer-container"},I={key:0,class:"loading-indicator"},q=["src","onLoad"],L={__name:"Cards",props:{photos:{type:Array,required:!0}},setup(c){const m=c,v=new w({cloud:{cloudName:"dxm7oj4xi"}}),f=n=>v.image(n).toURL(),u=s(m.photos.map(()=>!0)),h=n=>{u.value[n]=!1},l=s(null),_=s(m.photos.map(()=>!1)),i=s([]);return k(()=>{l.value&&(l.value.scrollTop=0);const n=new IntersectionObserver(a=>{a.forEach(o=>{const e=i.value.findIndex(t=>t===o.target);e!==-1&&o.isIntersecting&&o.boundingClientRect.top>0&&(_.value[e]=!0,setTimeout(()=>{_.value[e]=!1},1e3))})},{root:null,rootMargin:"0px",threshold:.4});i.value.forEach(a=>{a&&n.observe(a)})}),(n,a)=>(d(),r("div",x,[p("div",{class:"card-container",ref_key:"cardContainer",ref:l},[(d(!0),r(b,null,y(c.photos,(o,e)=>(d(),r("div",{class:z(["card",{"large-card":e%3===0,"small-card":e%3!==0,"shimmer-visible":_.value[e]}]),key:e.id,ref_for:!0,ref:t=>{i.value[e]=t}},[u.value[e]?(d(),r("div",I)):C("",!0),p("img",{src:f(o.name),alt:"Photo",draggable:"false",onContextmenu:a[0]||(a[0]=j(()=>{},["prevent"])),onLoad:()=>h(e)},null,40,q)],2))),128))],512)]))}},N=g(L,[["__scopeId","data-v-01b2b591"]]),B={photos:[{id:1,name:"nicole_alessandro-1_unngkp"},{id:2,name:"nicole_alessandro-2_wcazzd"},{id:3,name:"nicole_alessandro-3_kr0ve1"},{id:4,name:"nicole_alessandro-4_mfal9y"},{id:5,name:"nicole_alessandro-5_xgn7dr"},{id:6,name:"nicole_alessandro-6_lhqve3"},{id:7,name:"nicole_alessandro-8_mcp5pg"},{id:8,name:"nicole_alessandro-9_xpslrc"},{id:9,name:"nicole_alessandro-11_uue6kl"},{id:10,name:"nicole_alessandro-12_gni3uc"},{id:11,name:"nicole_alessandro-13_rgkj4y"},{id:12,name:"nicole_alessandro-14_bkzv0r"},{id:13,name:"nicole_alessandro-15_htyodx"},{id:14,name:"nicole_alessandro-16_fj3f3z"},{id:15,name:"nicole_alessandro-17_izhkkx"},{id:16,name:"nicole_alessandro-18_dbejbu"},{id:17,name:"nicole_alessandro-19_vlv2ph"},{id:18,name:"nicole_alessandro-20_uotpre"}]},E={photos:[{id:19,name:"elena_andrea_01_zzjpy0"},{id:20,name:"elena_andrea_02_vinkth"},{id:21,name:"elena_andrea_03_h1iv22"},{id:22,name:"elena_andrea_04_pljyi7"},{id:23,name:"elena_andrea_05_lplylc"},{id:24,name:"elena_andrea_06_e9q6tk"},{id:25,name:"elena_andrea_07_p3stcj"},{id:26,name:"elena_andrea_08_xvnpht"},{id:27,name:"elena_andrea_09_cw66zh"},{id:28,name:"elena_andrea_10_v0yxem"},{id:29,name:"elena_andrea_11_bqa62o"},{id:30,name:"elena_andrea_12_nwpgjh"},{id:31,name:"elena_andrea_13_tzeljd"},{id:32,name:"elena_andrea_14_kzk6nl"},{id:33,name:"elena_andrea_15_hdufls"},{id:34,name:"elena_andrea_16_wwfkz5"},{id:35,name:"elena_andrea_17_jg67yh"},{id:36,name:"elena_andrea_18_bqodup"},{id:37,name:"elena_andrea_19_fptl0i"},{id:38,name:"elena_andrea_20_vt4opx"}]},R={work1:B,work2:E};export{N as C,R as p};
