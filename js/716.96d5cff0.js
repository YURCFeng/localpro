"use strict";(self["webpackChunkgeoview"]=self["webpackChunkgeoview"]||[]).push([[716],{4764:function(e,i,l){l.d(i,{Z:function(){return k}});var a=l(3396),t=l(7139);const s=e=>((0,a.dD)("data-v-45290c92"),e=e(),(0,a.Cn)(),e),o={class:"img-display-box"},n={class:"index-number"},d=s((()=>(0,a._)("div",{class:"img-infor"},[(0,a._)("span",null,"原图")],-1))),c={key:0},r={class:"img-infor"},u=s((()=>(0,a._)("span",null,"预测结果",-1))),p=["onClick"],f=s((()=>(0,a._)("i",{class:"iconfont icon-xiazai"},null,-1))),m=[f],h={key:1,class:"img-index"},g={class:"index-number"};function _(e,i,l,s,f,_){const w=(0,a.up)("el-empty"),b=(0,a.up)("el-divider"),v=(0,a.up)("el-image"),y=(0,a.up)("el-card");return(0,a.wg)(),(0,a.j4)(y,{style:{"margin-bottom":"10px"}},{default:(0,a.w5)((()=>[0===f.childImgArr.length?((0,a.wg)(),(0,a.j4)(w,{key:0,"image-size":200})):(0,a.kq)("",!0),(0,a._)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.childImgArr,((e,i)=>((0,a.wg)(),(0,a.iD)("div",{key:i,class:"img-display-item"},[(0,a.Wm)(b,{class:"img-divider"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 第"),(0,a._)("span",n,(0,t.zw)(e.id),1),(0,a.Uk)("组 ")])),_:2},1024),(0,a._)("div",null,[(0,a.Wm)(v,{ref_for:!0,ref:"tableTab",class:"img-display",src:e.before_img,fit:f.fit,lazy:!0,"preview-src-list":[e.before_img],"preview-teleported":!0},null,8,["src","fit","preview-src-list"]),d]),(0,a._)("div",null,["场景分类"!==e.type?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(v,{ref_for:!0,ref:"tableTab",class:"img-display",src:e.after_img,fit:f.fit,lazy:!0,"preview-src-list":[e.after_img],"preview-teleported":!0},null,8,["src","fit","preview-src-list"]),(0,a._)("div",r,[u,(0,a._)("span",{onClick:i=>_.downloadimgWithWords(e.id,e.after_img,`${e.type}结果图.png`)},m,8,p)])])):((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("span",g,(0,t.zw)(Object.keys(e.data)[0])+": "+(0,t.zw)(e.data[Object.keys(e.data)]),1)]))])])))),128))])])),_:1})}var w=l(5893),b={name:"Imgshow",props:{imgArr:{type:Array,default(){return[]}}},data(){return{fit:"fill",childImgArr:[]}},mounted(){this.childImgArr=this.imgArr},updated(){this.childImgArr=this.imgArr},methods:{downloadimgWithWords:w.R3}},v=l(89);const y=(0,v.Z)(b,[["render",_],["__scopeId","data-v-45290c92"]]);var k=y},923:function(e,i,l){l.r(i),l.d(i,{default:function(){return P}});var a=l(3396),t=l(7139);const s=e=>((0,a.dD)("data-v-f7484ea4"),e=e(),(0,a.Cn)(),e),o=s((()=>(0,a._)("div",{id:"sub-title"},[(0,a.Uk)(" 场景分类"),(0,a._)("i",{class:"iconfont icon-dianji"})],-1))),n=(0,a.uE)('<p data-v-f7484ea4> 请上传包含<span class="go-bold" data-v-f7484ea4>图片的文件夹</span><i class="iconfont icon-wenjianjia" data-v-f7484ea4></i>或者<span class="go-bold" data-v-f7484ea4>图片</span><i class="iconfont icon-tupiantianjia" data-v-f7484ea4></i>，<i class="iconfont icon-zidingyi" data-v-f7484ea4></i>自定义模型文件请上传至<span class="go-bold" data-v-f7484ea4>backend/model文件夹</span><i class="iconfont icon-wenjianjia" data-v-f7484ea4></i>下的<span class="go-bold" data-v-f7484ea4>classification文件夹</span></p>',1),d={key:0,class:"clear-queue"},c=s((()=>(0,a._)("i",{class:"iconfont icon-yunduanshangchuan"},null,-1))),r=s((()=>(0,a._)("div",{class:"el-upload__text"},[(0,a.Uk)(" 将文件拖到此处，或"),(0,a._)("em",null,"点击上传")],-1))),u=s((()=>(0,a._)("div",{class:"el-upload__tip"}," 只能上传一张或多张图片，请在下方上传文件夹 ",-1))),p={class:"prehandle-label container"},f=s((()=>(0,a._)("span",{class:"checkmark"},null,-1))),m=s((()=>(0,a._)("span",{class:"go-bold label-words"},"上传时编辑图片",-1))),h=s((()=>(0,a._)("i",{class:"iconfont icon-crop-full"},null,-1))),g={class:"custom-model"},_={key:0},w={class:"handle-button"},b=s((()=>(0,a._)("div",{id:"sub-title"},[(0,a.Uk)(" 结果图预览"),(0,a._)("i",{class:"iconfont icon-dianji"})],-1))),v=s((()=>(0,a._)("p",null,[(0,a._)("span",{class:"go-bold"},"点击图片"),(0,a.Uk)("即可预览 "),(0,a._)("i",{class:"iconfont icon-duigou"}),(0,a._)("span",null,[(0,a._)("span",{class:"go-bold"},"滑轮滚动"),(0,a.Uk)("即可放大缩小")])],-1))),y={class:"go-bold"},k=s((()=>(0,a._)("span",{class:"hidden-sm-and-down"},"点击刷新",-1))),C=[k];function U(e,i,l,s,k,U){const W=(0,a.up)("Tabinfor"),j=(0,a.up)("el-divider"),A=(0,a.up)("el-button"),I=(0,a.up)("el-upload"),x=(0,a.up)("el-row"),S=(0,a.up)("el-radio"),V=(0,a.up)("el-card"),L=(0,a.up)("el-col"),M=(0,a.up)("MyVueCropper"),D=(0,a.up)("el-dialog"),P=(0,a.up)("ImgShow"),z=(0,a.up)("Bottominfor");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(W,null,{left:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(j),n,(0,a.Wm)(x,{type:"flex",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{span:24},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{style:{border:"4px dashed var(--el-border-color)"}},{default:(0,a.w5)((()=>[k.fileList.length?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(A,{type:"primary",class:"btn-animate2 btn-animate__surround",onClick:U.clearQueue},{default:(0,a.w5)((()=>[(0,a.Uk)(" 清空图片 ")])),_:1},8,["onClick"])])):(0,a.kq)("",!0),(0,a.Wm)(I,{ref:"upload","file-list":k.fileList,"onUpdate:fileList":i[0]||(i[0]=e=>k.fileList=e),class:"upload-card",drag:"",action:"#",multiple:"","auto-upload":!1,onChange:i[1]||(i[1]=e=>U.beforeUpload(k.fileList[k.fileList.length-1].raw))},{default:(0,a.w5)((()=>[c,r,u])),_:1},8,["file-list"]),(0,a.Wm)(x,{justify:"center"},{default:(0,a.w5)((()=>[(0,a._)("input",{id:"folder",ref:"uploadFile",type:"file",webkitdirectory:"",directory:"",multiple:"",onChange:i[2]||(i[2]=e=>U.uploadMore())},null,544),(0,a._)("i",{class:"iconfont icon-wenjianshangchuan",onClick:i[3]||(i[3]=(...e)=>U.fileClick&&U.fileClick(...e))},"上传文件夹")])),_:1}),(0,a.Wm)(x,{justify:"center"},{default:(0,a.w5)((()=>[(0,a._)("p",null,[(0,a._)("label",p,[(0,a._)("input",{ref:"cut",type:"checkbox",onChange:i[4]||(i[4]=e=>U.select())},null,544),f,m,h])])])),_:1}),(0,a.Wm)(x,{justify:"center"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.Uk)(" 可选训练模型： "),0===k.modelPathArr.length?((0,a.wg)(),(0,a.iD)("span",_,"未检测到模型文件，请查看上传目录是否有误")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.modelPathArr,((e,l)=>((0,a.wg)(),(0,a.j4)(S,{key:l,modelValue:k.uploadSrc.model_path,"onUpdate:modelValue":i[5]||(i[5]=e=>k.uploadSrc.model_path=e),class:"choose-item",label:e.model_path},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.model_name),1)])),_:2},1032,["modelValue","label"])))),128))])])),_:1}),(0,a._)("div",w,[(0,a.Wm)(A,{type:"primary",class:"btn-animate btn-animate__shiny",onClick:i[6]||(i[6]=e=>U.upload("场景分类","classification"))},{default:(0,a.w5)((()=>[(0,a.Uk)(" 开始处理 ")])),_:1})])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(W,null,{left:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(j),(0,a.Wm)(W,null,{left:(0,a.w5)((()=>[v])),right:(0,a.w5)((()=>[(0,a._)("span",y,[(0,a._)("i",{class:"iconfont icon-shuaxin",style:{"padding-right":"55px"},onClick:i[7]||(i[7]=(...e)=>U.getMore&&U.getMore(...e))},C)])])),_:1}),(0,a.Wm)(D,{modelValue:k.cutVisible,"onUpdate:modelValue":i[8]||(i[8]=e=>k.cutVisible=e),modal:!1,title:"编辑",width:"75%",top:"0"},{default:(0,a.w5)((()=>[(0,a.Wm)(M,{fileimg:k.fileimg,funtype:k.funtype,file:k.file,child_prehandle:k.uploadSrc.prehandle,child_denoise:k.uploadSrc.denoise,"child-model-path":k.uploadSrc.model_path,onCutChanged:U.notvisible,onChildRefresh:U.getMore},null,8,["fileimg","funtype","file","child_prehandle","child_denoise","child-model-path","onCutChanged","onChildRefresh"])])),_:1},8,["modelValue"]),(0,a.Wm)(P,{"img-arr":k.imgArr},null,8,["img-arr"]),(0,a.Wm)(z)])}l(7658);var W=l(8692),j=l(9450),A=l(2239),I=l(4764),x=l(4314),S=l(2606),V=l(410),L={name:"Classification",components:{Tabinfor:x.Z,Bottominfor:S.Z,MyVueCropper:V.Z,ImgShow:I.Z},beforeRouteEnter(e,i,l){l((e=>{document.querySelector(".el-main").scrollTop=0}))},data(){return{isUpload:!0,canUpload:!0,before:[],fileimg:"",file:{},isNotCut:!0,cutVisible:!1,funtype:"场景分类",scrollTop:"",fit:"fill",fileList:[],uploadSrc:{list:[],model_path:""},modelPathArr:[],imgArr:[]}},watch:{uploadSrc:{handler(e,i){this.uploadSrc=e},deep:!0,immediate:!0}},created(){this.getUploadImg("场景分类"),this.getCustomModel("classification").then((e=>{this.modelPathArr=e.data.data,this.uploadSrc.model_path=this.modelPathArr[0]?.model_path})).catch((e=>{}))},methods:{imgUpload:W.cM,getCustomModel:W.Xk,historyGetPage:j.G,createSrc:W.EE,getUploadImg:A.sw,upload:A.ws,checkUpload(){this.isUpload=0!==this.beforeImg.length},clearQueue(){this.fileList=[],this.$message.success("清除成功")},notvisible(){this.cutVisible=!1,this.fileList=[]},getMore(){this.getUploadImg("场景分类")},uploadMore(){this.beforeUpload(...this.$refs.uploadFile.files),this.canUpload?this.fileList.push(...this.$refs.uploadFile.files):setTimeout((()=>{this.$message.error("检测到您上传的文件夹内存在不符合规范的图片类型")}),1e3)},fileClick(){document.querySelector("#folder").click()},beforeUpload(e){this.cutVisible=this.$refs.cut.checked;const i=e.name.substring(e.name.lastIndexOf(".")+1),l=["jpg","jpeg","png","JPG","JPEG"];-1===l.indexOf(i)?(this.$message.error("只允许上传jpg, jpeg, png, JPG, 或JPEG格式,请重新上传"),this.fileList=[],this.canUpload=!1,this.cutVisible=!1):(this.canUpload=!0,this.fileimg=window.URL.createObjectURL(new Blob([e])))},select(){this.isNotCut=this.$refs.cut.checked}}},M=l(89);const D=(0,M.Z)(L,[["render",U],["__scopeId","data-v-f7484ea4"]]);var P=D}}]);
//# sourceMappingURL=716.96d5cff0.js.map