import{i as A,j as S,u as T,k as V,l as M,r,o as v,c as x,w as a,a as o,m as b,q as N,s as L,v as R,_ as $,x as f,b as F,F as P,d as U,y as C,z as I,f as B,e as s,t as m,S as G,p as H,h as O}from"./index-06db2a6d.js";const _e=A({__name:"Theme",setup(e){const t=S(T()),n=V(t),l=M("vueuse-color-scheme",null).value==="auto"?S(!1):S(!0);return(u,c)=>{const d=r("el-switch"),w=r("el-divider"),y=r("el-col"),D=r("el-row");return v(),x(D,null,{default:a(()=>[o(y,null,{default:a(()=>[o(w,{"content-position":"center"},{default:a(()=>[o(d,{modelValue:b(l),"onUpdate:modelValue":c[0]||(c[0]=h=>N(l)?l.value=h:null),"inline-prompt":"","active-icon":b(L),"inactive-icon":b(R),style:{"margin-left":"10px","--el-switch-on-color":"#ff0000","--el-switch-off-color":"#409eff"},onChange:c[1]||(c[1]=h=>b(n)())},null,8,["modelValue","active-icon","inactive-icon"])]),_:1})]),_:1})]),_:1})}}});const q=G+"/api/readImage?id=",X={data(){return{images:[],url:"",sizeNum:0,photos:{},count:S(0),load:()=>{this.count+=2},showMore:!0,isStaring:!1,isComing:!1}},setup(e,{emit:t}){},mounted:function(){this.loadPhotos(0),this.load()},created(){this.$bus1.on("addImagesList",e=>{this.addImagesList(e.createImgData)}),this.$bus1.on("addImagesFirst",e=>{this.addImagesFirst(e.createImgData)})},methods:{load(){count.value+=2},handleImageError(e,t){console.error(`Failed to load image: ${t}`)},addImagesFirst(e){e.share=0,e.self=1,this.addImagesList(e);let t=this.images.pop();this.images.unshift(t)},addImagesList(e){let t="希望出现内容描述："+e.prompt+",不希望出现的内容:"+e.negative_prompt+",采样迭代步数:"+e.step+",高宽:"+e.sizeh+"X"+e.sizew+",种子:"+e.seed,n=e.prompt;e.name!=null&&e.name!=""&&e.name!=null?n=e.name:(n=n.substring(0,100),n+="...  "),e.url=q+e.image_tag_md5_id,this.images.push({url:e.url,seedid:e.image_tag_md5_id,seed:e.seed,strPromptShort:n,starview:e.star,strPrompt:t,image_tag_md5_id:e.image_tag_md5_id,imageData:e})},imageAddList(){},copyPrompt(e){const t=this.$refs["prompts_"+e][0].innerHTML;navigator.clipboard.writeText(t).then(()=>{this.$message.success(t+`   \r
\r
\r
                             已复制到剪切板`)},()=>{this.$message.error("复制失败")})},downloadImg(e){const t=this.$refs["image_"+e][0].src+"&t=4";window.open(t,"_blank")},copyToInput(e){this.$bus1.emit("setPromptInfo",{prompt:e.prompt,negativePrompt:e.negative_prompt}),this.$bus1.emit("setAdvancedInfo",{seed:e.seed,step:e.step,imageBatchCount:1,imageBatchSize:1}),this.$bus1.emit("setImageSize",{width:e.sizew,height:e.sizeh}),this.$bus1.emit("setRandomPrompt",{randomPrompt:!1}),this.$bus1.emit("setElCollapseExpand",{})},async loadPhotos(e){if(!this.isComing){debugger;this.isComing=!0,this.$myFetch("/api/photos","POST",{size:e}).then(t=>{if(t==null)return!1;this.isComing=!1,this.photos=t;for(let n=0;n<this.photos.rows.length;n++)console.log(this.photos.rows[n].url),this.addImagesList(this.photos.rows[n]);this.photos.rows.length==0?(this.showMore=!1,this.$message.warning("已经到底部了!!!"),this.$bus1.emit("setPageProgress",{pageNum:1,totalSize:1})):this.$bus1.emit("setPageProgress",{pageNum:this.photos.pageNum,totalSize:this.photos.totalSize})})}},loadMore(){let e=parseInt(this.photos.pageNum)+10;this.loadPhotos(e)},showImageDialog(e){console.log(e),this.$bus1.emit("showImageDialog",{imageData:e})},star(e){this.$message.success("加油!!!"),this.isStaring=!0,this.$myFetch("/api/star","POST",{id:e}).then(t=>{this.isStaring=!1,this.$refs["star_"+e][0].innerHTML=t.starNum}).catch(t=>console.error(t))},deleteImage(e,t,n){this.$myFetch("/api/deleteImage","POST",{id:t}).then(g=>{g.code==200&&g.flag?(this.images.splice(e,1),f({showClose:!0,message:"删除成功.",type:"success"})):f({showClose:!0,message:"删除失败，可能你没有权限删除，这个作品属于："+n,type:"error"})}).catch(g=>f({showClose:!0,message:"删除失败,未知.",type:"error"}))},shareImageStatus(e,t){debugger;this.$myFetch("/api/share","POST",{id:e.image_tag_md5_id,flag:t}).then(n=>{n.code==200&&n.flag?n.flag&&(t==1?(f({showClose:!0,message:"共享成功，其他人都能看见你的作品并可进行点赞.",type:"success"}),e.share=1):(f({showClose:!0,message:"取消成功，其他人将不能再看见你的作品，只有自己能看见.",type:"success"}),e.share=0)):f({showClose:!0,message:"失败，作品用户是："+e.user_id,type:"error"})})},confirmEvent(e,t){shareImageStatus(e,t),console.log("confirm!")},cancelEvent(){console.log("cancel!")}}},J={class:"card-content"},K={style:{padding:"14px"}},Q={class:"time text-ellipsis"},W={class:"time"},Y={class:"bottom"};function Z(e,t,n,g,l,u){const c=r("el-button"),d=r("el-tooltip"),w=r("el-popconfirm"),y=r("el-image"),D=r("el-card"),h=r("el-space"),z=r("el-col"),E=r("el-row");return v(),F(P,null,[o(E,{gutter:16},{default:a(()=>[o(z,{span:24,style:{"padding-left":"3vw"}},{default:a(()=>[o(h,{wrap:"",size:15,class:"assddw"},{default:a(()=>[(v(!0),F(P,null,U(l.images,(i,k)=>(v(),x(D,{key:k,class:"box-card","body-style":{padding:"20px",width:"210px"}},{default:a(()=>[o(d,{class:"box-item",effect:"dark",content:"删除",placement:"bottom-end"},{default:a(()=>[C(o(c,{type:"danger",icon:"delete",circle:"",onClick:p=>u.deleteImage(k,i.image_tag_md5_id,i.imageData.user_id),style:{},class:"deleteButton"},null,8,["onClick"]),[[I,i.imageData.self==1]])]),_:2},1024),o(w,{"confirm-button-text":"确定","cancel-button-text":"不",icon:e.InfoFilled,"icon-color":"#626AEF",title:"共享后其他人都能看见你的图片，确定共享的图片不包含色情、政治、暴力内容?",onConfirm:p=>u.shareImageStatus(i.imageData,1),onCancel:u.cancelEvent},{reference:a(()=>[C(o(c,{type:"warning",icon:"share",style:{},class:"shareButton"},{default:a(()=>[B("共享")]),_:2},1536),[[I,i.imageData.self==1&&i.imageData.share==0]])]),_:2},1032,["icon","onConfirm","onCancel"]),o(d,{class:"box-item",effect:"dark",content:"图片已共享，所有人都能看见，点击取消共享",placement:"bottom-end"},{default:a(()=>[C(o(c,{type:"warning",icon:"CloseBold",circle:"",onClick:p=>u.shareImageStatus(i.imageData,0),style:{},class:"shareButton"},null,8,["onClick"]),[[I,i.imageData.self==1&&i.imageData.share==1]])]),_:2},1024),s("div",J,[(v(),x(y,{name:"test",lazy:"",ref_for:!0,ref:"image_"+i.image_tag_md5_id,class:"album-image shadow",key:k,style:{"text-align":"center",cursor:"pointer"},src:i.url,"zoom-rate":1.2,"initial-index":4,fit:"cover",error:u.handleImageError,"hide-on-click-modal":!1,"z-index":22,onClick:p=>u.showImageDialog(i.imageData)},null,8,["src","zoom-rate","error","onClick"])),s("div",K,[s("span",Q,m(i.strPromptShort),1),s("div",W,"图片种子："+m(i.seed),1),s("div",{style:{display:"none"},ref_for:!0,ref:"prompts_"+i.image_tag_md5_id},m(i.strPrompt),513),s("div",Y,[o(d,{class:"box-item",effect:"dark",content:"拷贝关键词",placement:"bottom-end"},{default:a(()=>[o(c,{type:"primary",icon:"CopyDocument",circle:"",onClick:p=>u.copyPrompt(i.image_tag_md5_id),style:{"margin-left":"20px"}},null,8,["onClick"])]),_:2},1024),o(d,{class:"box-item",effect:"dark",content:"下载图片",placement:"bottom-end"},{default:a(()=>[o(c,{type:"primary",icon:"Download",circle:"",onClick:p=>u.downloadImg(i.image_tag_md5_id),style:{"margin-left":"20px"}},null,8,["onClick"])]),_:2},1024),o(d,{class:"box-item",effect:"dark",content:"将该图片描绘词复制到 <br/>'希望出现的内容中'","raw-content":"",placement:"bottom"},{default:a(()=>[o(c,{type:"primary",icon:"MagicStick",circle:"",onClick:p=>u.copyToInput(i.imageData),style:{"margin-left":"20px"}},null,8,["onClick"])]),_:2},1024),o(d,{class:"box-item",effect:"dark",content:"点赞",placement:"bottom-end"},{default:a(()=>[o(c,{type:"warning",icon:"Star",circle:"",onClick:p=>u.star(i.image_tag_md5_id),style:{"margin-left":"20px"}},null,8,["onClick"])]),_:2},1024),s("span",{ref_for:!0,ref:"star_"+i.image_tag_md5_id},m(i.starview),513)])])])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),C(o(E,{gutter:16},{default:a(()=>[o(z,{span:20,offset:3},{default:a(()=>[o(c,{onMouseover:u.loadMore,type:"primary",style:{width:"50vw",height:"70px",cursor:"pointer"}},{default:a(()=>[B("鼠标移到这里加载更多...")]),_:1},8,["onMouseover"])]),_:1})]),_:1},512),[[I,l.showMore]])],64)}const pe=$(X,[["render",Z],["__scopeId","data-v-132a00de"]]),j={data(){return{name:"",prompt:"",negative_prompt:"",size:"",seed:"",upscale:"",step:"",eta:"",denoising_strength:"",imageurl:"",imgageShowDialogVisible:S(!1),create_ip:"",user_id:""}},setup(e,{emit:t}){},created(){this.$bus1.on("showImageDialog",e=>{this.showImageDialog(e)})},methods:{showImageDialog(e){this.name=e.imageData.name,this.prompt=e.imageData.prompt,this.negative_prompt=e.imageData.negative_prompt,this.size=e.imageData.sizeh+"x"+e.imageData.sizew,this.prompt=e.imageData.prompt,this.seed=e.imageData.seed,this.upscale=e.imageData.hires_upscaler+"   倍数("+e.imageData.hires_upscale+")",this.step=e.imageData.step,this.eta=e.imageData.eta,this.denoising_strength=e.imageData.denoising_strength,this.imageurl=e.imageData.url+"&t=4",this.imgageShowDialogVisible=!0,this.create_ip=e.imageData.create_ip,this.user_id=e.imageData.user_id;debugger}}};const _=e=>(H("data-v-c21bada1"),e=e(),O(),e),ee=_(()=>s("div",{class:"imgageShowDialogDiv"}," 图片名称/备注: ",-1)),te={id:""},se=_(()=>s("div",{class:"imgageShowDialogDiv"}," 希望出现的(prompt): ",-1)),oe=_(()=>s("div",{class:"imgageShowDialogDiv"}," 不希望出现的(negative prompt): ",-1)),ie=_(()=>s("div",{class:"imgageShowDialogDiv"}," 图片大小高x宽(Size): ",-1)),ae=_(()=>s("div",{class:"imgageShowDialogDiv"}," 图片种子(Seed): ",-1)),le=_(()=>s("div",{class:"imgageShowDialogDiv"}," 放大(Upscale): ",-1)),ne=_(()=>s("div",{class:"imgageShowDialogDiv"}," 采样迭代步数(Step): ",-1)),re=_(()=>s("div",{class:"imgageShowDialogDiv"}," Eta: ",-1)),ce=_(()=>s("div",{class:"imgageShowDialogDiv"}," 降噪强度(denoising strength): ",-1)),me=_(()=>s("div",{class:"imgageShowDialogDiv"}," 创作者: ",-1));function ue(e,t,n,g,l,u){const c=r("el-image"),d=r("el-aside"),w=r("el-main"),y=r("el-container"),D=r("el-dialog");return v(),x(D,{modelValue:l.imgageShowDialogVisible,"onUpdate:modelValue":t[0]||(t[0]=h=>l.imgageShowDialogVisible=h),title:"图片预览",width:"85vw",center:""},{default:a(()=>[s("div",null,[o(y,null,{default:a(()=>[o(d,{class:"imgageShowDialogBox"},{default:a(()=>[o(c,{name:"test",lazy:"",class:"album-image shadow",style:{height:"calc(100% - 60px)",cursor:"pointer","user-select":"none","box-shadow":"0 0 20px rgba(0, 0, 0, 0.8)","border-radius":"2%"},src:l.imageurl,"zoom-rate":.4,"initial-index":1,fit:"cover","hide-on-click-modal":!0,"z-index":22},null,8,["src","zoom-rate"])]),_:1}),o(w,{class:"imgageShowDialogBox2"},{default:a(()=>[ee,s("div",te,m(l.name),1),se,s("div",null,m(l.prompt),1),oe,s("div",null,m(l.negative_prompt),1),ie,s("div",null,m(l.size),1),ae,s("div",null,m(l.seed),1),le,s("div",null,m(l.upscale),1),ne,s("div",null,m(l.step),1),re,s("div",null,m(l.eta),1),ce,s("div",null,m(l.denoising_strength),1),me,s("div",null,m(l.user_id)+" ("+m(l.create_ip)+") ",1)]),_:1})]),_:1})])]),_:1},8,["modelValue"])}const ge=$(j,[["render",ue],["__scopeId","data-v-c21bada1"]]);export{pe as A,ge as D,_e as _};
