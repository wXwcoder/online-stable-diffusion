import{_ as x,r as l,o as g,b as m,F as b,d as v,a as d,w as r,f as _,t as w,c as C,A as k,p as I,h as V,e as a,D as A}from"./index-e111c576.js";const R={props:{Tagstr:{type:String,required:!0}},computed:{tagStyle(){return{fontSize:"16px",margin:"2px 3px"}}},data(){return{tags:[],newTag:"",editIndex:-1,buttonText:"添加标签"}},mounted(){this.tags=this.Tagstr.split(","),console.log(this.Tagstr)},watch:{Tagstr(e,t){e!=t&&(this.tags=this.Tagstr.split(","))}},methods:{addTag(){this.newTag&&!this.tags.includes(this.newTag)&&(this.tags.push(this.newTag),this.newTag="")},removeTag(e){this.tags.splice(e,1)},editTag(e){this.editIndex=e,this.newTag=this.tags[e],this.buttonText="保存修改",this.$nextTick(()=>{this.$refs.tagInput.focus()})},submitTags(){this.editIndex!==-1?(this.tags.splice(this.editIndex,1,this.newTag),this.editIndex=-1,this.newTag="",this.buttonText="添加标签"):this.addTag()},getNewTags(){return this.tags.join(", ")}}},N=e=>(I("data-v-6860c186"),e=e(),V(),e),$=N(()=>a("br",null,null,-1));function z(e,t,o,S,s,n){const u=l("el-tag"),h=l("el-input"),f=l("el-button");return g(),m(b,null,[(g(!0),m(b,null,v(s.tags,(p,c)=>(g(),C(u,{key:c,closable:"",onClose:T=>n.removeTag(c),onClick:T=>n.editTag(c),style:k(n.tagStyle)},{default:r(()=>[_(w(p),1)]),_:2},1032,["onClose","onClick","style"]))),128)),$,d(h,{modelValue:s.newTag,"onUpdate:modelValue":t[0]||(t[0]=p=>s.newTag=p),placeholder:"请输入标签名称",style:{width:"150px"},autosize:{minRows:1,maxRows:10},type:"textarea",ref:"tagInput",size:50},null,8,["modelValue"]),d(f,{type:"primary",onClick:n.submitTags},{default:r(()=>[_(w(s.buttonText),1)]),_:1},8,["onClick"])],64)}const P=x(R,[["render",z],["__scopeId","data-v-6860c186"]]);const B={components:{TagsAdd:P},data(){return{dialogVisible:!1,selectedCard:0,tableData:[],negative_prompt:A}},created(){this.$bus1.on("showRandomTagDialog",e=>{this.showDialog()})},methods:{showDialog(){this.dialogVisible=!0,this.refresh(),npstr=localStorage.getItem("negative_prompt"),npstr!=null&&npstr!=null&&(this.negative_prompt=npstr)},refresh(){this.$myFetch("/api/getTag","POST",null).then(e=>{this.tableData=e.map(t=>({name:t.name,desc:t.desc,image_md5_id:t.image_md5_id,selected:!1}))}).catch(e=>{console.log(e)})},selectCard(e){this.selectedCard=e,this.tableData.forEach((t,o)=>{t.selected=o===e})},submit(){const t=this.tableData.filter(o=>o.selected).map(o=>o.name);if(t!=null&&t!=""){const o=this.$refs.randomTagcard[this.selectedCard].getNewTags();this.dialogVisible=!1,localStorage.setItem("negative_prompt",this.negative_prompt),this.$bus1.emit("setPromptInfo",{prompt:o,negativePrompt:this.negative_prompt}),this.$bus1.emit("generateDialogToImages",{})}else this.$message.warning(`注意，您没选抽签内容，请点击3个选项卡空白处选择一个进行生成，
如果希望手写关键词请关闭随机抽签!!!`)}}},D=e=>(I("data-v-a962bb7f"),e=e(),V(),e),E=D(()=>a("a",{href:"https://aitag.top",target:"_blank"},"aitag.top",-1)),F={class:"card-container"},U=["src"],L=D(()=>a("span",{class:"demonstration",style:{"line-height":"30pt"}},"不希望出现的内容",-1)),O={class:"slider-demo-block"},j={class:"dialog-footer"},q={style:{"text-align":"right","margin-top":"20px"}};function G(e,t,o,S,s,n){const u=l("TagsAdd"),h=l("el-card"),f=l("el-tooltip"),p=l("el-input"),c=l("el-button"),T=l("el-dialog");return g(),m("div",null,[d(T,{modelValue:s.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=i=>s.dialogVisible=i),title:"随机抽签",width:"80%"},{footer:r(()=>[a("span",j,[a("div",q,[d(c,{type:"primary",onClick:n.refresh},{default:r(()=>[_("换一组")]),_:1},8,["onClick"]),d(c,{type:"primary",onClick:n.submit},{default:r(()=>[_("生成图像")]),_:1},8,["onClick"])])])]),default:r(()=>[_(" 本tag来自"),E,a("div",F,[(g(!0),m(b,null,v(s.tableData,(i,y)=>(g(),C(h,{key:y,class:"card-item","body-style":{padding:"20px"},style:k({border:i.selected?"2px solid #9b4dca":"2px solid #ebeef5"}),onClick:M=>n.selectCard(y)},{default:r(()=>[a("p",null,[d(u,{Tagstr:i.name,ref_for:!0,ref:"randomTagcard"},null,8,["Tagstr"])]),a("p",null,w(i.desc),1),a("img",{src:i.image_md5_id,style:{width:"100%"}},null,8,U)]),_:2},1032,["style","onClick"]))),128))]),d(f,{class:"box-item",effect:"dark",content:"如果图片中出现不想要的内容，在此指出哪里有问题，比如手有问题说手坏了，人物没有头发，说没有头发",placement:"top-start"},{default:r(()=>[L]),_:1}),a("div",O,[d(p,{autosize:{minRows:2,maxRows:6},modelValue:s.negative_prompt,"onUpdate:modelValue":t[0]||(t[0]=i=>s.negative_prompt=i),maxlength:"1500",placeholder:"描述图片中不希望出现的内容，多个词用逗号分隔，比如手坏了，眼睛坏了，英文表示比如：bad hands,bad eyes","show-word-limit":"",type:"textarea"},null,8,["modelValue"])])]),_:1},8,["modelValue"])])}const J=x(B,[["render",G],["__scopeId","data-v-a962bb7f"]]);export{J as default};
