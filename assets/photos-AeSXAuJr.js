import{_ as u,b as i,g as h,c as m,o as t,d as b,F as g,i as v,k,l as y,C as w}from"./index-BpHDvq4w.js";const q={class:"outer-container"},x=["src","onLoad"],C={__name:"Cards",props:{photos:{type:Array,required:!0}},setup(l){const c=l,f=new w({cloud:{cloudName:"dxm7oj4xi"}}),p=_=>f.image(_).toURL(),z=i(c.photos.map(()=>!0)),j=_=>{z.value[_]=!1},s=i(null),o=i(c.photos.map(()=>!1)),d=i([]);return h(()=>{s.value&&(s.value.scrollTop=0);const _=new IntersectionObserver(e=>{e.forEach(n=>{const a=d.value.findIndex(r=>r===n.target);a!==-1&&n.isIntersecting&&n.boundingClientRect.top>0&&(o.value[a]=!0,setTimeout(()=>{o.value[a]=!1},1500))})},{root:null,rootMargin:"0px",threshold:0});d.value.forEach(e=>{e&&_.observe(e)})}),(_,e)=>(t(),m("div",q,[b("div",{class:"card-container",ref_key:"cardContainer",ref:s},[(t(!0),m(g,null,v(l.photos,(n,a)=>(t(),m("div",{class:k(["card",{"large-card":a%3===0,"small-card":a%3!==0,"shimmer-visible":o.value[a]}]),key:a.id,ref_for:!0,ref:r=>{d.value[a]=r}},[b("img",{src:p(n.name),alt:"Photo",draggable:"false",onContextmenu:e[0]||(e[0]=y(()=>{},["prevent"])),onLoad:()=>j(a)},null,40,x)],2))),128))],512)]))}},F=u(C,[["__scopeId","data-v-d86ea23d"]]),I={photos:[{id:1,name:"scozzesi_01_nhj1ec"},{id:2,name:"scozzesi_02_aiye7y"},{id:3,name:"scozzesi_03_bmcofr"},{id:4,name:"scozzesi_04_xkkd40"},{id:5,name:"scozzesi_05_jpp3wl"},{id:6,name:"scozzesi_06_yb6and"},{id:7,name:"scozzesi_07_bbsmhs"},{id:8,name:"scozzesi_08_ho1nnj"},{id:9,name:"scozzesi_09_vcqykg"},{id:10,name:"scozzesi_10_phi9jc"},{id:11,name:"scozzesi_11_bcvfqh"},{id:12,name:"scozzesi_12_zzpals"},{id:13,name:"scozzesi_13_z4h1al"},{id:14,name:"scozzesi_14_z09e9g"},{id:15,name:"scozzesi_15_o6ogc1"},{id:16,name:"scozzesi_16_rgv5xo"},{id:17,name:"scozzesi_17_ovuw8u"},{id:18,name:"scozzesi_18_bybkpo"}]},L={photos:[{id:19,name:"elena_andrea_01_zzjpy0"},{id:20,name:"elena_andrea_02_vinkth"},{id:21,name:"elena_andrea_03_h1iv22"},{id:22,name:"elena_andrea_04_pljyi7"},{id:23,name:"elena_andrea_05_lplylc"},{id:24,name:"elena_andrea_06_e9q6tk"},{id:25,name:"elena_andrea_07_p3stcj"},{id:26,name:"elena_andrea_08_xvnpht"},{id:27,name:"elena_andrea_09_cw66zh"},{id:28,name:"elena_andrea_10_v0yxem"},{id:29,name:"elena_andrea_11_bqa62o"},{id:30,name:"elena_andrea_12_nwpgjh"},{id:31,name:"elena_andrea_13_tzeljd"},{id:32,name:"elena_andrea_14_kzk6nl"},{id:33,name:"elena_andrea_15_hdufls"},{id:34,name:"elena_andrea_16_wwfkz5"},{id:35,name:"elena_andrea_17_jg67yh"},{id:36,name:"elena_andrea_18_bqodup"},{id:37,name:"elena_andrea_19_fptl0i"},{id:38,name:"elena_andrea_20_vt4opx"}]},B={photos:[{id:39,name:"barbara_mattia_01_jyksnh"},{id:40,name:"barbara_mattia_02_pqky6g"},{id:41,name:"barbara_mattia_03_sfbihq"},{id:42,name:"barbara_mattia_04_sb5o6c"},{id:43,name:"barbara_mattia_05_iqhkrv"},{id:44,name:"barbara_mattia_06_zifg92"},{id:45,name:"barbara_mattia_07_i5ypae"},{id:46,name:"barbara_mattia_08_vbkkjj"},{id:47,name:"barbara_mattia_09_g7vygb"},{id:48,name:"barbara_mattia_10_b4irow"},{id:49,name:"barbara_mattia_11_u6ju5m"},{id:50,name:"barbara_mattia_12_kqirmp"},{id:51,name:"barbara_mattia_13_cnpe7b"},{id:52,name:"barbara_mattia_14_sudqot"},{id:53,name:"barbara_mattia_15_lcnokj"},{id:54,name:"barbara_mattia_16_xj8eru"},{id:55,name:"barbara_mattia_17_lk2csm"},{id:56,name:"barbara_mattia_18_ugp333"}]},E={photos:[{id:57,name:"sofia_jan_01_ejbtyd"},{id:58,name:"sofia_jan_02_zf5iyo"},{id:59,name:"sofia_jan_03_i8ucdy"},{id:60,name:"sofia_jan_04_faezzy"},{id:61,name:"sofia_jan_05_isjezd"},{id:62,name:"sofia_jan_06_da9t97"},{id:63,name:"sofia_jan_07_iuepga"},{id:64,name:"sofia_jan_08_bckq1h"},{id:65,name:"sofia_jan_09_ndflnr"},{id:66,name:"sofia_jan_10_cdllyo"},{id:67,name:"sofia_jan_11_sbjibn"},{id:68,name:"sofia_jan_12_coqgwp"},{id:69,name:"sofia_jan_13_gqmwxq"},{id:70,name:"sofia_jan_14_ev7c7t"},{id:71,name:"sofia_jan_15_f2rjbp"},{id:72,name:"sofia_jan_16_pzrojq"},{id:73,name:"sofia_jan_17_amz0oz"},{id:74,name:"sofia_jan_18_ujpzol"},{id:75,name:"sofia_jan_19_tawbcp"},{id:76,name:"sofia_jan_20_cdispp"},{id:77,name:"sofia_jan_21_s1mbsk"},{id:78,name:"sofia_jan_22_a2ft2g"},{id:79,name:"sofia_jan_23_bn9doj"},{id:80,name:"sofia_jan_24_l2pnxe"},{id:81,name:"sofia_jan_25_gsvlli"},{id:82,name:"sofia_jan_26_kujj4w"},{id:83,name:"sofia_jan_27_pyerbw"},{id:84,name:"sofia_jan_28_ibler7"}]},M={photos:[{id:85,name:"nicole_alessandro_01_pk8bc8"},{id:86,name:"nicole_alessandro_02_lwft5v"},{id:87,name:"nicole_alessandro_03_fpf1fb"},{id:88,name:"nicole_alessandro_04_hct0sv"},{id:89,name:"nicole_alessandro_05_b5qxgz"},{id:90,name:"nicole_alessandro_06_cblqed"},{id:91,name:"nicole_alessandro_07_uniiek"},{id:92,name:"nicole_alessandro_08_hugtmg"},{id:93,name:"nicole_alessandro_09_qrlstl"},{id:94,name:"nicole_alessandro_10_ighn7b"},{id:95,name:"nicole_alessandro_11_p7j86w"},{id:96,name:"nicole_alessandro_12_t3viym"},{id:97,name:"nicole_alessandro_13_ygfxio"},{id:98,name:"nicole_alessandro_14_dw3ine"},{id:99,name:"nicole_alessandro_15_cqegnu"},{id:100,name:"nicole_alessandro_16_bceoj3"},{id:101,name:"nicole_alessandro_17_mcvmyh"},{id:102,name:"nicole_alessandro_18_ibrfip"},{id:103,name:"nicole_alessandro_19_mk515m"}]},N={work1:I,work2:L,work3:B,work4:E,work5:M};export{F as C,N as p};
