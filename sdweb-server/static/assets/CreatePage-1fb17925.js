import{_ as D,E as T,S,r,o as f,b as y,a as t,w as i,f as b,t as C,c as v,e as l,p as P,h as x,F as R}from"./index-e111c576.js";import{_ as k,A as z,D as F}from"./DialogShowImage-0c32e50a.js";import G from"./RandomTagDialog-b000d81e.js";import E from"./Login-2daea74a.js";import M from"./Go-9873cd90.js";import"./ImageSize-bc02babf.js";const I=S+"/api/readImage?id=";let a={prompt:"",negative_prompt:"",seed:0,step:0,imageBatchCount:0,imageBatchSize:0,sizew:0,sizeh:0,hires_upscale:1},h={};const N={data(){return{createImagesBtnTxt:"Generate(生成)",createImagesBtnType:"warning",createImagesBtnDisabled:!1,createRunning:!1,randomPrompt:!0}},created(){this.$bus1.on("generateBtnReset",e=>{this.resetButton()}),this.$bus1.on("generateDialogToImages",e=>{a.prompt=e.prompt,this.createImages()})},setup(e){},mounted:function(){},methods:{createSubmit(){if(this.$bus1.emit("getPromptInfo",(e,s,n)=>{a.prompt=e,a.negative_prompt=s,this.randomPrompt=n}),this.createRunning){this.interrupt();return}this.randomPrompt?this.$bus1.emit("showRandomTagDialog",{}):this.createImages()},interrupt(){this.createImagesBtnTxt="停止中...",this.$myFetch("/api/interrupt","POST",null).then(e=>{this.resetButton(),this.$bus1.emit("generateDialogProcessDestroy")})},createImages(){if(a={},this.$bus1.emit("createSeedRandom",{}),this.$bus1.emit("getAdvancedInfo",(e,s,n,c,o,p)=>{a.seed=e,a.step=s,a.imageBatchCount=n,a.imageBatchSize=c,a.cfgScale=o,a.samplerIndex=p}),this.$bus1.emit("getImageSize",(e,s,n)=>{a.sizew=e,a.sizeh=s,a.upscaleB=n}),this.$bus1.emit("getPromptInfo",(e,s,n)=>{a.prompt=e,a.negative_prompt=s,this.randomPrompt=n}),a.prompt==""&&this.randomPrompt){T.alert("绘画内容描述中-希望出现的内容没有填写-No input prompt","有内容没填写-No input prompt",{confirmButtonText:"OK",callback:()=>{this.$bus1.emit("setElCollapseExpand",{})}});return}this.createImgData=null,this.seedRandomCheck&&this.seedNumMake(),this.createImagesBtnTxt="Stop(终止)",this.createImagesBtnType="info",this.createRunning=!0,this.$bus1.emit("getModelInfoSelected",function(e){h=e}),h!=null&&h.title!=""&&this.switchModel(h.title),this.$bus1.emit("generateDialogShowHidden",{show:!0}),this.$myFetch("/api/create","POST",a).then(e=>{if(this.createRunning!=!1){this.$bus1.emit("generateDialogProcessDestroy",{}),e.sub_seed_path.length==1,this.$bus1.emit("generateDialogDone",{processCount:100,imageUrl:I+e.sub_seed_path[0].image_tag_md5_id+"&t=4"});for(let s=0;s<e.sub_seed_path.length;s++){let n=I+e.sub_seed_path[s].image_tag_md5_id+"&t=4";this.$bus1.emit("generateDialogPushSrcList",{imageUrl:n});let c={};Object.assign(c,a),c.seed=e.seed,c.image_tag_md5_id=e.sub_seed_path[s].image_tag_md5_id,c.star=0,this.$bus1.emit("addImagesFirst",{createImgData:c,url:n}),e.seed!=-200}this.resetButton()}}).catch(e=>{this.resetButton(),this.$bus1.emit("generateDialogProcessDestroy"),console.log(e),console.log(".................................................................."),this.$message.error("创建绘画失败,可能相关图画描述及种子图已存在,请查看历史生成图")})},switchModel(e){let s={modelId:e};this.$myFetch(S+"/api/changeModel","POST",s).then(n=>{})},resetButton(){this.createImagesBtnTxt="Generate(生成)",this.createImagesBtnType="warning",this.createImagesBtnDisabled=!1,this.createRunning=!1}}},L={class:"demonstration",style:{"line-height":"30pt"}};function O(e,s,n,c,o,p){const m=r("el-button");return f(),y("span",L,[t(m,{type:o.createImagesBtnType,size:e.large,disabled:o.createImagesBtnDisabled,onClick:p.createSubmit,style:{height:"50px",width:"150px"}},{default:i(()=>[b(C(o.createImagesBtnTxt),1)]),_:1},8,["type","size","disabled","onClick"])])}const V=D(N,[["render",O]]);const U=e=>e===100?"完成":`${e}%`,A=e=>{},j={data(){return{createImageDialog:!1,createImageDialogType:"ttb",handleCloseCreateImage:A,processTabFormat:U,processCount:100,createImageCloseBtn:!1,createRunning:!1,generateImageSrc:"",generateImageSrcList:[],processTimer:null}},created(){},setup(e){},mounted:function(){this.$bus1.on("generateDialogShowHidden",e=>{e.show?(this.createImageDialog=!0,this.processCount=0,this.processStart()):(this.createImageDialog=!1,this.processDestroy())}),this.$bus1.on("generateDialogPushSrcList",e=>{this.generateImageSrcList.push(e.imageUrl)}),this.$bus1.on("generateDialogDone",e=>{this.processCount=e.processCount,this.generateImageSrc=e.imageUrl}),this.$bus1.on("generateDialogProcessDestroy",e=>{this.processDestroy()})},methods:{processGet(){this.createRunning||(this.createRunning=!0,this.$myFetch("/api/process","POST",null).then(e=>{this.createRunning=!1,e.eta_relative>0?(console.log("activeactiveactive"),this.processCount=parseInt(e.progress*100),this.generateImageSrc="data:image/png;base64,"+e.current_image):this.processDestroy()}).catch(e=>{console.log(e),this.processDestroy()}))},processStart(){this.generateImageSrcList=[],this.generateImageSrc="",this.processDestroy(),this.processTimer=setInterval(()=>{this.processGet()},1e3)},processDestroy(){this.createRunning=!1,clearInterval(this.processTimer),this.processTimer=null},closeDialog(){this.createImageDialog=!1,this.processDestroy()}}},H=e=>(P("data-v-a4ba8163"),e=e(),x(),e),K=H(()=>l("span",null,"请稍等..",-1)),q={class:"image-slot"};function J(e,s,n,c,o,p){const m=r("icon-picture"),g=r("el-icon"),u=r("el-image"),_=r("el-progress"),d=r("el-button"),B=r("el-drawer");return f(),v(B,{modelValue:o.createImageDialog,"onUpdate:modelValue":s[0]||(s[0]=w=>o.createImageDialog=w),size:"70%",title:"正在生成中...",direction:o.createImageDialogType},{default:i(()=>[K,t(u,{style:{width:"70%",height:"70%"},src:o.generateImageSrc,"zoom-rate":1.7,"preview-src-list":o.generateImageSrcList,"initial-index":4,fit:"contain"},{error:i(()=>[l("div",q,[t(g,null,{default:i(()=>[t(m)]),_:1})])]),_:1},8,["src","zoom-rate","preview-src-list"]),t(_,{class:"progresscss",percentage:o.processCount,format:o.processTabFormat},null,8,["percentage","format"]),t(d,{type:"primary",style:{"margin-left":"16px",cursor:"pointer"},onClick:p.closeDialog,size:"large"},{default:i(()=>[b("关闭")]),_:1},8,["onClick"])]),_:1},8,["modelValue","direction"])}const Q=D(j,[["render",J],["__scopeId","data-v-a4ba8163"]]);const W={class:"container"},X=l("div",{class:"logo-1"}," ai painting ",-1),Y=l("p",{class:"space1"},"Power By ai8",-1),Z=l("p",{class:"space1"},[l("a",{href:"https://github.com/newlxj/stablediffusion-website-online",target:"_blank"},"github")],-1),ee=l("p",{class:"space1"},[l("a",{href:"https://gitee.com/aliu/sdweb-multi-user-website",target:"_blank"},"gitee")],-1),$=e=>`还剩${e}%图片未浏览`,te={data(){return{isCollapse:!1,processCount:100,duration:5,pageTotal:100,pageSize:10,processTabFormat:$,page:1}},mounted:function(){this.setPage(),this.$bus1.on("setPageProgress",e=>{this.processCount=(100-e.pageNum/e.totalSize*100).toFixed(2)})},methods:{setPage(){},handleSelect(e){this.$router.push(e)}}},ce=Object.assign(te,{__name:"CreatePage",setup(e){return(s,n)=>{const c=r("el-header"),o=r("el-aside"),p=r("el-backtop"),m=r("el-main"),g=r("el-col"),u=r("el-progress"),_=r("el-row"),d=r("el-footer");return f(),y(R,null,[t(E),l("div",W,[t(c,{class:"header"},{default:i(()=>[X]),_:1}),t(o,{class:"aside"},{default:i(()=>[t(k),t(M)]),_:1}),t(m,{class:"main"},{default:i(()=>[t(p,{bottom:100,target:".el-main","visibility-height":200},{default:i(()=>[b(" 返回顶部 ")]),_:1}),t(z),t(F)]),_:1}),t(d,{class:"footer"},{default:i(()=>[t(_,{gutter:16},{default:i(()=>[t(g,{span:7},{default:i(()=>[t(o,null,{default:i(()=>[t(V),t(Q)]),_:1})]),_:1}),t(g,{span:7},{default:i(()=>[t(u,{percentage:s.processCount,"stroke-width":12,striped:"","striped-flow":"",duration:s.duration,format:$,color:"#e6a23c"},null,8,["percentage","duration"])]),_:1}),t(g,{span:3,class:"versioninfo"},{default:i(()=>[Y,Z,ee]),_:1})]),_:1})]),_:1})]),t(G)],64)}}});export{ce as default};
