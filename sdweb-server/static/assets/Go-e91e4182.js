import{_ as v,D as y,r as i,o as x,b,a as e,w as n,e as a,y as R,z as P,f as r,F as C,S as z,d as B,c as E,t as I,p as A,h as U}from"./index-83b16cf2.js";import{M as N,I as M}from"./ImageSize-c8b7883a.js";const T={data(){return{prompt:"",promptDialogTxt:"",negative_prompt:y,randomPrompt:!1,promptIsShow:!0,dialogVisible:!0}},created(){this.$bus1.on("getPromptInfo",t=>{t(this.prompt,this.negative_prompt,this.randomPrompt)}),this.$bus1.on("setRandomPrompt",t=>{this.randomPrompt=t.randomPrompt}),this.$bus1.on("setPromptInfo",t=>{this.prompt=t.prompt,this.negative_prompt==""&&(this.negative_prompt=t.negativePrompt)})},methods:{switchRandomPrompt(t){t&&(this.dialogVisible=!1,this.$bus1.emit("showRandomTagDialog",{}))},promptChange(){this.randomPrompt=!1}}},D=a("span",{class:"demonstration",style:{"line-height":"30pt"}},"希望出现的内容 ",-1),F={class:"slider-demo-block"},G=a("span",{class:"demonstration",style:{"line-height":"30pt"}},"不希望出现的内容",-1),O={class:"slider-demo-block"},L=a("a",{href:"https://aibooru.online",target:"_blank"},"aibooru.online",-1),j=a("a",{href:"https://aitag.top",target:"_blank"},"aitag.top",-1),X=a("a",{href:"https://wolfchen.top/tag/",target:"_blank"},"wolfchen tag",-1),q=a("p",null,"如果需要lora，可以使用 <lora:名称:1>",-1);function H(t,o,_,h,l,d){const c=i("el-tooltip"),u=i("el-switch"),p=i("el-input"),w=i("el-dialog");return x(),b(C,null,[e(c,{class:"box-item",effect:"dark",content:"说出你想要画的内容，说的越详细图画越近似，可以通过拆成多个英文描述词以逗号分割进行描述",placement:"top-start"},{default:n(()=>[D]),_:1}),e(c,{class:"box-item",effect:"dark",content:"随机从aitag.top抽取抽签魔导师魔法",placement:"top-start"},{default:n(()=>[e(u,{modelValue:l.randomPrompt,"onUpdate:modelValue":o[0]||(o[0]=m=>l.randomPrompt=m),class:"ml-2","inline-prompt":"",size:"large",style:{"--el-switch-on-color":"#17c8cb","--el-switch-off-color":"#13ce66"},"active-text":"随机抽签","inactive-text":"手动输入",onChange:d.switchRandomPrompt},null,8,["modelValue","onChange"])]),_:1}),a("div",F,[R(e(p,{autosize:{minRows:4,maxRows:10},modelValue:l.prompt,"onUpdate:modelValue":o[1]||(o[1]=m=>l.prompt=m),maxlength:"1000",onChange:d.promptChange,placeholder:"描述希望图片出现的内，多个词用逗号分隔，比如1个女孩，靠在窗边，用英文表示：1girl,against table，词汇越多，细节会越靠近","show-word-limit":"",type:"textarea",onClick:o[2]||(o[2]=m=>l.dialogVisible=!0)},null,8,["modelValue","onChange"]),[[P,l.promptIsShow]])]),e(c,{class:"box-item",effect:"dark",content:"如果图片中出现不想要的内容，在此指出哪里有问题，比如手有问题说手坏了，人物没有头发，说没有头发",placement:"top-start"},{default:n(()=>[G]),_:1}),a("div",O,[e(p,{autosize:{minRows:2,maxRows:6},modelValue:l.negative_prompt,"onUpdate:modelValue":o[3]||(o[3]=m=>l.negative_prompt=m),maxlength:"1500",placeholder:"描述图片中不希望出现的内容，多个词用逗号分隔，比如手坏了，眼睛坏了，英文表示比如：bad hands,bad eyes","show-word-limit":"",type:"textarea"},null,8,["modelValue"])]),e(w,{class:"dialogxx",modelValue:l.dialogVisible,"onUpdate:modelValue":o[6]||(o[6]=m=>l.dialogVisible=m),"append-to-body":"",title:"输入图像中希望出现的词"},{default:n(()=>[r(" 输入希望出现的英词，如果不清楚可以查询"),L,r("   "),j,r("    "),X,r("   ，或者开启随机抽签随机抽一组词 "),e(c,{class:"box-item",effect:"dark",content:"随机从aitag.top抽取抽签魔导师魔法",placement:"top-start"},{default:n(()=>[e(u,{modelValue:l.randomPrompt,"onUpdate:modelValue":o[4]||(o[4]=m=>l.randomPrompt=m),class:"ml-2","inline-prompt":"",size:"large",style:{"--el-switch-on-color":"#ff4949","--el-switch-off-color":"#13ce66"},"active-text":"随机抽签","inactive-text":"手动输入",onChange:d.switchRandomPrompt},null,8,["modelValue","onChange"])]),_:1}),q,e(p,{class:"inputcss",modelValue:l.prompt,"onUpdate:modelValue":o[5]||(o[5]=m=>l.prompt=m),type:"textarea",autosize:{minRows:4,maxRows:10},maxlength:"1000",onChange:d.promptChange,"show-word-limit":""},null,8,["modelValue","onChange"])]),_:1},8,["modelValue"])],64)}const J=v(T,[["render",H]]),K={data(){return{seed:-1,seedRandomCheck:!0,imageBatchCount:1,imageBatchSize:1,step:20,sizew:0,sizeh:0,cfgScale:7,samplerIndexArr:["Euler a"],samplerIndex:"Euler a"}},created(){this.$bus1.on("getAdvancedInfo",t=>{this.getAdvancedInfo(t)}),this.$bus1.on("setAdvancedInfo",t=>{this.setAdvancedInfo(t.seed,t.step,t.imageBatchCount,t.imageBatchSize,t.cfgScale,t.samplerIndex)}),this.$bus1.on("createSeedRandom",t=>{this.createSeedRandom()})},setup(t){},mounted:function(){this.getSampler(),this.seedNumMake()},methods:{setAdvancedInfo(t,o,_,h,l,d){this.seed=t,this.step=o,this.imageBatchCount=_,this.imageBatchSize=h,(l==null||l=="")&&(l=7),this.cfgScale=l,(d==null||d=="")&&(d="Euler a"),this.samplerIndex=d},getAdvancedInfo(t){t(this.seed,this.step,this.imageBatchCount,this.imageBatchSize,this.cfgScale,this.samplerIndex)},randomNum(t,o){return Math.floor(Math.random()*(o-t+1)+t)},seedNumMake(){this.seed=this.randomNum(1000222,9000000001),console.log(this.seed)},seedNumChange(t){this.seedRandomCheck=!1},createSeedRandom(){this.seedRandomCheck&&this.seedNumMake()},getSampler(){this.$myFetch(z+"/api/getSampler","POST",{}).then(t=>{if(t.length>0){this.samplerIndexArr=t;let o=localStorage.getItem("samplerIndex");(o==null||o=="")&&(o="Euler a"),this.samplerIndex=o}})},samplerChange(t){this.samplerIndex=t,localStorage.setItem("samplerIndex",t)}},render(){}},Q={class:"demonstration",style:{"line-height":"30pt"}},W={class:"slider-demo-block"},Y={class:"demonstration",style:{"line-height":"30pt"}},Z={class:"demonstration",style:{"line-height":"30pt"}},$={class:"demonstration",style:{"line-height":"30pt"}},ee={class:"demonstration",style:{"line-height":"30pt"}},te={class:"demonstration",style:{"line-height":"30pt"}},oe={class:"demonstration"};function le(t,o,_,h,l,d){const c=i("info-filled"),u=i("el-icon"),p=i("el-tooltip"),w=i("el-input-number"),m=i("el-checkbox"),f=i("el-col"),g=i("el-row"),k=i("el-option"),S=i("el-select"),V=i("el-slider");return x(),b(C,null,[e(g,null,{default:n(()=>[e(f,{span:18,offset:1},{default:n(()=>[e(p,{class:"box-item",effect:"dark",content:"每个描述词都对应无数种近似图片，图片种子是描述图片唯一编号，可以通过描述词+种子复现之前图片",placement:"top-start"},{default:n(()=>[a("span",Q,[r("图片种子 "),e(u,{class:"header-icon"},{default:n(()=>[e(c)]),_:1})])]),_:1}),a("div",W,[e(w,{modelValue:l.seed,"onUpdate:modelValue":o[0]||(o[0]=s=>l.seed=s),value:"3",min:1,max:1e10,style:{width:"150px","text-align":"left"},onChange:d.seedNumChange},null,8,["modelValue","onChange"]),e(p,{class:"box-item",effect:"dark",content:"每次生成换不同种子",placement:"top-start"},{default:n(()=>[e(m,{modelValue:l.seedRandomCheck,"onUpdate:modelValue":o[1]||(o[1]=s=>l.seedRandomCheck=s),style:{"margin-left":"20px"}},{default:n(()=>[r("每次随机种子")]),_:1},8,["modelValue"])]),_:1})])]),_:1})]),_:1}),e(g,null,{default:n(()=>[e(f,{span:22,offset:1},{default:n(()=>[e(p,{class:"box-item",effect:"dark",content:"每个采样器都有自己独特的风格，有些采样器需要更多采样迭代步数才会出好片",placement:"top-start"},{default:n(()=>[a("span",Y,[r("采样方法 "),e(u,{class:"header-icon"},{default:n(()=>[e(c)]),_:1})])]),_:1}),e(S,{modelValue:l.samplerIndex,"onUpdate:modelValue":o[2]||(o[2]=s=>l.samplerIndex=s),placeholder:"Select",style:{width:"240px"},onChange:d.samplerChange},{default:n(()=>[(x(!0),b(C,null,B(l.samplerIndexArr,s=>(x(),E(k,{key:s,label:s,value:s},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(g,null,{default:n(()=>[e(f,{span:22,offset:1},{default:n(()=>[e(p,{class:"box-item",effect:"dark",content:"建议20，采样数越高细节越多，但生成速度越慢",placement:"top-start"},{default:n(()=>[a("span",Z,[r("采样迭代步数 "),e(u,{class:"header-icon"},{default:n(()=>[e(c)]),_:1})])]),_:1}),e(V,{modelValue:l.step,"onUpdate:modelValue":o[3]||(o[3]=s=>l.step=s),"show-input":"",min:1,max:40},null,8,["modelValue"])]),_:1})]),_:1}),e(g,null,{default:n(()=>[e(f,{span:22,offset:1},{default:n(()=>[e(p,{class:"box-item",effect:"dark",content:"提示词相关性Scale，是希望出现词和图像匹配度，值越大AI越自由发挥，值越小越和描述词匹配,推荐7。",placement:"top-start"},{default:n(()=>[a("span",$,[r("提示词相关性 "),e(u,{class:"header-icon"},{default:n(()=>[e(c)]),_:1})])]),_:1}),e(V,{modelValue:l.cfgScale,"onUpdate:modelValue":o[4]||(o[4]=s=>l.cfgScale=s),"show-input":"",min:1,max:40},null,8,["modelValue"])]),_:1})]),_:1}),e(g,null,{default:n(()=>[e(f,{span:22,offset:1},{default:n(()=>[e(p,{class:"box-item",effect:"dark",content:"每个批次生成的图片都不一样",placement:"top-start"},{default:n(()=>[a("span",ee,[r("生成批次 "),e(u,{class:"header-icon"},{default:n(()=>[e(c)]),_:1})])]),_:1}),e(V,{modelValue:l.imageBatchCount,"onUpdate:modelValue":o[5]||(o[5]=s=>l.imageBatchCount=s),"show-input":"",min:1,max:20},null,8,["modelValue"])]),_:1})]),_:1}),e(g,null,{default:n(()=>[e(f,{span:22,offset:1},{default:n(()=>[e(p,{class:"box-item",effect:"dark",content:"每批次生成微调风格数量",placement:"top-start"},{default:n(()=>[a("span",te,[r("每批次数量 "),e(u,{class:"header-icon"},{default:n(()=>[e(c)]),_:1})])]),_:1}),a("span",oe,[e(p,{class:"box-item",effect:"dark",content:"Left Top prompts info",placement:"top-start"})]),e(V,{modelValue:l.imageBatchSize,"onUpdate:modelValue":o[6]||(o[6]=s=>l.imageBatchSize=s),"show-input":"",min:1,max:20},null,8,["modelValue"])]),_:1})]),_:1})],64)}const ne=v(K,[["render",le]]);const se=t=>(A("data-v-0a0b2279"),t=t(),U(),t),ae={class:"demo-collapse blink",style:{"margin-left":"10px"}},ie=se(()=>a("div",{style:{height:"120px"}},null,-1)),de={data(){return{widthx:0,heightx:0,conllapseExpand:["1"]}},created(){this.$bus1.on("setElCollapseShowImageSize",t=>{this.widthx=t.width,this.heightx=t.height}),this.$bus1.on("setElCollapseExpand",t=>{this.conllapseExpand=["1","2","3"]})},setup(t){},mounted:function(){},methods:{}},me=Object.assign(de,{__name:"Go",setup(t){return(o,_)=>{const h=i("el-collapse-item"),l=i("el-collapse");return x(),b("div",ae,[e(N),e(l,{modelValue:o.conllapseExpand,"onUpdate:modelValue":_[0]||(_[0]=d=>o.conllapseExpand=d),onChange:o.handleChange},{default:n(()=>[e(h,{title:"绘画内容描述",name:"1"},{default:n(()=>[e(J)]),_:1}),e(h,{title:"高级设置",name:"2"},{default:n(()=>[e(ne)]),_:1}),e(h,{name:"3"},{title:n(()=>[r(" 选择画幅（"+I(o.widthx)+"X"+I(o.heightx)+"） ",1)]),default:n(()=>[e(M)]),_:1})]),_:1},8,["modelValue","onChange"]),ie])}}}),ce=v(me,[["__scopeId","data-v-0a0b2279"]]);export{ce as default};
