import{_ as p,b as i,g as h,c as m,o as t,d as f,F as g,i as v,k as q,l as w,C as k}from"./index-DTQlRFv5.js";const y={class:"outer-container"},x=["src","onLoad"],C={__name:"Cards",props:{photos:{type:Array,required:!0}},setup(l){const c=l,b=new k({cloud:{cloudName:"dxm7oj4xi"}}),z=_=>b.image(_).toURL(),u=i(c.photos.map(()=>!0)),j=_=>{u.value[_]=!1},s=i(null),o=i(c.photos.map(()=>!1)),d=i([]);return h(()=>{s.value&&(s.value.scrollTop=0);const _=new IntersectionObserver(e=>{e.forEach(n=>{const a=d.value.findIndex(r=>r===n.target);a!==-1&&n.isIntersecting&&n.boundingClientRect.top>0&&(o.value[a]=!0,setTimeout(()=>{o.value[a]=!1},1500))})},{root:null,rootMargin:"0px",threshold:0});d.value.forEach(e=>{e&&_.observe(e)})}),(_,e)=>(t(),m("div",y,[f("div",{class:"card-container",ref_key:"cardContainer",ref:s},[(t(!0),m(g,null,v(l.photos,(n,a)=>(t(),m("div",{class:q(["card",{"large-card":a%3===0,"small-card":a%3!==0,"shimmer-visible":o.value[a]}]),key:a.id,ref_for:!0,ref:r=>{d.value[a]=r}},[f("img",{src:z(n.name),alt:"Photo",draggable:"false",onContextmenu:e[0]||(e[0]=w(()=>{},["prevent"])),onLoad:()=>j(a)},null,40,x)],2))),128))],512)]))}},F=p(C,[["__scopeId","data-v-d86ea23d"]]),I={photos:[{id:1,name:"scozzesi_01_vzpqri"},{id:2,name:"scozzesi_02_nvu5as"},{id:3,name:"scozzesi_03_nemqnl"},{id:4,name:"scozzesi_04_nyxjl4"},{id:5,name:"scozzesi_05_rl0ay2"},{id:6,name:"scozzesi_06_qfb42a"},{id:7,name:"scozzesi_07_vb8ks8"},{id:8,name:"scozzesi_08_f5nj7u"},{id:9,name:"scozzesi_09_zc7bhj"},{id:10,name:"scozzesi_10_drplzp"},{id:11,name:"scozzesi_11_jggyd4"},{id:12,name:"scozzesi_12_cdhosi"},{id:13,name:"scozzesi_13_nx2po3"},{id:14,name:"scozzesi_14_tg0s4p"},{id:15,name:"scozzesi_15_qkzsrc"},{id:16,name:"scozzesi_16_rzgjfe"},{id:17,name:"scozzesi_17_dx5cox"},{id:18,name:"scozzesi_18_eiltn5"}]},L={photos:[{id:19,name:"elena_andrea_01_ppkmo0"},{id:20,name:"elena_andrea_02_ktj1mj"},{id:21,name:"elena_andrea_03_z4llzp"},{id:22,name:"elena_andrea_04_nnnvur"},{id:23,name:"elena_andrea_05_mjeybh"},{id:24,name:"elena_andrea_06_atdamj"},{id:25,name:"elena_andrea_07_wziimf"},{id:26,name:"elena_andrea_08_cbyiuq"},{id:27,name:"elena_andrea_09_nuww8a"},{id:28,name:"elena_andrea_10_t5hakv"},{id:29,name:"elena_andrea_11_a9scbi"},{id:30,name:"elena_andrea_12_l6q0zc"},{id:31,name:"elena_andrea_13_t6v8qr"},{id:32,name:"elena_andrea_14_okmypv"},{id:33,name:"elena_andrea_15_xiawn0"},{id:34,name:"elena_andrea_16_pg54x9"},{id:35,name:"elena_andrea_17_e5yacq"},{id:36,name:"elena_andrea_18_cmjylw"},{id:37,name:"elena_andrea_19_wv5mas"},{id:38,name:"elena_andrea_20_a4ngl6"}]},B={photos:[{id:39,name:"barbara_mattia_01_uhz8ef"},{id:40,name:"barbara_mattia_02_tfhu22"},{id:41,name:"barbara_mattia_03_cpv1rw"},{id:42,name:"barbara_mattia_04_zijwzh"},{id:43,name:"barbara_mattia_05_isrgxm"},{id:44,name:"barbara_mattia_06_ueqtkj"},{id:45,name:"barbara_mattia_07_h5otib"},{id:46,name:"barbara_mattia_08_hjtrtb"},{id:47,name:"barbara_mattia_09_gdpiqb"},{id:48,name:"barbara_mattia_10_txfr4a"},{id:49,name:"barbara_mattia_11_zfrzlm"},{id:50,name:"barbara_mattia_12_hanlrt"},{id:51,name:"barbara_mattia_13_pjfbeu"},{id:52,name:"barbara_mattia_14_dpflrq"},{id:53,name:"barbara_mattia_15_ouablz"},{id:54,name:"barbara_mattia_16_zhkfsi"},{id:55,name:"barbara_mattia_17_dcfa06"},{id:56,name:"barbara_mattia_18_crrkaw"}]},E={photos:[{id:57,name:"sofia_jan_01_ytbbow"},{id:58,name:"sofia_jan_02_nqpmxq"},{id:59,name:"sofia_jan_03_hg50rn"},{id:60,name:"sofia_jan_04_nhuqzc"},{id:61,name:"sofia_jan_05_f9qo9g"},{id:62,name:"sofia_jan_06_vfygcc"},{id:63,name:"sofia_jan_07_uj6ipq"},{id:64,name:"sofia_jan_08_j0qu9g"},{id:65,name:"sofia_jan_09_egfpmb"},{id:66,name:"sofia_jan_10_lcgjli"},{id:67,name:"sofia_jan_11_qhknbm"},{id:68,name:"sofia_jan_12_ralzht"},{id:69,name:"sofia_jan_13_wubybg"},{id:70,name:"sofia_jan_14_xws8xz"},{id:71,name:"sofia_jan_15_n1nbet"},{id:72,name:"sofia_jan_16_ycurxm"},{id:73,name:"sofia_jan_17_dmaazp"},{id:74,name:"sofia_jan_18_wjyqsj"},{id:75,name:"sofia_jan_19_jz3qje"},{id:76,name:"sofia_jan_20_caajbw"},{id:77,name:"sofia_jan_21_yubfoe"},{id:78,name:"sofia_jan_22_lmtbcr"},{id:79,name:"sofia_jan_23_zauste"},{id:80,name:"sofia_jan_24_ix1tzi"},{id:81,name:"sofia_jan_25_f85fuu"},{id:82,name:"sofia_jan_26_wmqg3q"},{id:83,name:"sofia_jan_27_ujm5oj"},{id:84,name:"sofia_jan_28_vquuna"}]},M={photos:[{id:85,name:"nicole_alessandro_01_pk8bc8"},{id:86,name:"nicole_alessandro_02_lwft5v"},{id:87,name:"nicole_alessandro_03_fpf1fb"},{id:88,name:"nicole_alessandro_04_hct0sv"},{id:89,name:"nicole_alessandro_05_b5qxgz"},{id:90,name:"nicole_alessandro_06_cblqed"},{id:91,name:"nicole_alessandro_07_uniiek"},{id:92,name:"nicole_alessandro_08_hugtmg"},{id:93,name:"nicole_alessandro_09_qrlstl"},{id:94,name:"nicole_alessandro_10_ighn7b"},{id:95,name:"nicole_alessandro_11_p7j86w"},{id:96,name:"nicole_alessandro_12_t3viym"},{id:97,name:"nicole_alessandro_13_ygfxio"},{id:98,name:"nicole_alessandro_14_dw3ine"},{id:99,name:"nicole_alessandro_15_cqegnu"},{id:100,name:"nicole_alessandro_16_bceoj3"},{id:101,name:"nicole_alessandro_17_mcvmyh"},{id:102,name:"nicole_alessandro_18_ibrfip"},{id:103,name:"nicole_alessandro_19_mk515m"}]},N={work1:I,work2:L,work3:B,work4:E,work5:M};export{F as C,N as p};
