import f from"./Login-2daea74a.js";import{_ as C,r as i,o as u,b as _,a as s,e as l,w as t,F as k,S as M,E as v,f as a,t as c,g as w,n as h,p as S,h as O}from"./index-e111c576.js";const n=e=>(S("data-v-d65e6885"),e=e(),O(),e),I={key:0},y=n(()=>l("div",{class:"mode-title"},"创造模式",-1)),B=n(()=>l("div",{class:"mode-desc"},"自己创造想要的图像（建议PC端使用）",-1)),b=n(()=>l("div",{class:"mode-title"},"刷图模式",-1)),$=n(()=>l("div",{class:"mode-desc"},"适合移动端刷图玩",-1)),E=n(()=>l("div",{class:"bgimg"},null,-1)),N={created(){this.check(),this.$bus1.on("SelectPageRefresh",e=>{this.userid=localStorage.getItem("userid"),this.showLoginInfo=!0,this.check()})},data(){return{isOnline:!1,isOnlineMsg:"检测中...",gotoCreateModeClick:!1,gotoBrushModeClick:!1,userid:localStorage.getItem("userid"),allImageCount:0,showLoginInfo:!1}},mounted:function(){},methods:{gotoCreateMode(){this.isOnline?(this.$router.push("/createModel"),this.gotoCreateModeClick=!0):this.$message.error("服务器离线，请联系管理员，或使用刷图模式")},gotoBrushMode(){this.$router.push("/viewer"),this.gotoBrushModeClick=!0},check(){this.$myFetch(M+"/api/checkx","POST").then(e=>{e.warring!=""&&v.alert(e.warring,"使用警告",{confirmButtonText:"我同意及希望继续使用",showClose:!1,type:"warning",callback:()=>{}}),this.allImageCount=e.imgCount,e.ol==1?(this.isOnline=!0,this.isOnlineMsg="在线"):(this.isOnline=!1,this.isOnlineMsg="离线("+e.offline+"分钟)")}).catch(e=>{})},logout(){this.$cookies.remove("token"),localStorage.removeItem("userid"),window.location.reload()}}},V=Object.assign(N,{__name:"Select",setup(e){return(o,F)=>{const g=i("el-button"),r=i("el-card"),m=i("el-tag"),d=i("el-col"),p=i("el-row");return u(),_(k,null,[s(f),l("div",null,[s(p,null,{default:t(()=>[s(d,{span:8},{default:t(()=>[o.userid!=""&&o.userid!=null?(u(),_("p",I,[a("登录账号: "+c(o.userid)+" ",1),s(g,{type:"danger",onClick:o.logout},{default:t(()=>[a("退出")]),_:1},8,["onClick"])])):w("",!0),s(r,{class:h(["mode-card card-hover",{"card-grey":o.gotoCreateModeClick}]),onClick:o.gotoCreateMode},{default:t(()=>[y,B]),_:1},8,["onClick","class"]),s(r,{class:h(["mode-card card-hover",{"card-grey":o.gotoBrushModeClick}]),onClick:o.gotoBrushMode},{default:t(()=>[b,$]),_:1},8,["onClick","class"]),a(" 当前服务器状态："),s(m,{type:o.isOnline?"success":"error"},{default:t(()=>[a(c(o.isOnlineMsg),1)]),_:1},8,["type"]),a(c(o.isOnline?"尽情进行你的创作":"浏览你的历史创作"),1)]),_:1}),s(d,{span:2},{default:t(()=>[E]),_:1})]),_:1})])],64)}}}),R=C(V,[["__scopeId","data-v-d65e6885"]]);export{R as default};
