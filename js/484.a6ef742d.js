"use strict";(self["webpackChunkgeoview"]=self["webpackChunkgeoview"]||[]).push([[484],{5484:function(e,i,t){t.r(i),t.d(i,{default:function(){return Z}});var l=t(3396),n=t(7139),a=t(9242);const o=e=>((0,l.dD)("data-v-5dd79cb4"),e=e(),(0,l.Cn)(),e),c={class:"hint"},r={key:0},s={key:1},u={id:"sub-title"},d=["src","onClick"],g=["src","onClick"],p=["src","onClick"],h=o((()=>(0,l._)("div",{class:"select-fun-title"},[(0,l._)("span",{style:{}},"功能筛选")],-1))),m=o((()=>(0,l._)("div",{class:"select-fun-icon"},[(0,l._)("i",{class:"iconfont icon-shaixuan"})],-1))),w=[h,m],f=o((()=>(0,l._)("h3",null,[(0,l._)("i",{class:"iconfont icon-bianhuajiance"}),(0,l.Uk)("变化检测 ")],-1))),y=o((()=>(0,l._)("h3",null,[(0,l._)("i",{class:"iconfont icon-mubiaojiance"}),(0,l.Uk)("目标检测 ")],-1))),_=o((()=>(0,l._)("h3",null,[(0,l._)("i",{class:"iconfont icon-erfenleibianhuajiance16px"}),(0,l.Uk)("地物分类 ")],-1))),b=o((()=>(0,l._)("h3",null,[(0,l._)("i",{class:"iconfont icon-changjingguanli"}),(0,l.Uk)("场景分类 ")],-1))),k=o((()=>(0,l._)("h3",null,[(0,l._)("i",{class:"iconfont icon-jishu"}),(0,l.Uk)("图像复原 ")],-1))),C=o((()=>(0,l._)("h3",null,[(0,l._)("i",{class:"iconfont icon-fuyuan"}),(0,l.Uk)("列表复原")],-1))),v={style:{"margin-top":"20px"}},W={key:0},S=["src"],P=["src"],U={key:1},x=["src"],z={key:2},j=["src"],D=["src"],T=["src"];function A(e,i,t,o,h,m){const A=(0,l.up)("el-table-column"),B=(0,l.up)("el-button"),R=(0,l.up)("el-table"),E=(0,l.up)("el-menu-item"),L=(0,l.up)("el-menu-item-group"),O=(0,l.up)("el-menu"),F=(0,l.up)("el-drawer"),V=(0,l.up)("el-pagination"),$=(0,l.up)("el-col"),I=(0,l.up)("el-row"),Z=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",c,[(0,l.Uk)(" 当前浏览功能区："),""!==h.type?((0,l.wg)(),(0,l.iD)("span",r,(0,n.zw)(h.type),1)):((0,l.wg)(),(0,l.iD)("span",s,"全部")),(0,l._)("i",{style:{"margin-left":"8px","font-size":"20px"},class:(0,n.C_)({"iconfont icon-bianhuajiance":"变化检测"===h.type,"iconfont icon-mubiaojiance":"目标检测"===h.type,"iconfont icon-erfenleibianhuajiance16px":"地物分类"===h.type,"iconfont icon-changjingguanli":"场景分类"===h.type,"iconfont icon-jishu":"图像复原"===h.type})},null,2)]),(0,l.Wm)(R,{ref:"multipleTable",data:h.tableData,onSelectionChange:m.handleSelectionChange},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{type:"selection"}),(0,l.Wm)(A,{label:"日期"},{default:(0,l.w5)((e=>[(0,l._)("span",null,(0,n.zw)(e.row.create_time),1)])),_:1}),(0,l.Wm)(A,{label:"功能区"},{default:(0,l.w5)((e=>[(0,l._)("span",u,[(0,l._)("i",{class:(0,n.C_)({"iconfont icon-bianhuajiance":"变化检测"===e.row.type,"iconfont icon-mubiaojiance":"目标检测"===e.row.type,"iconfont icon-erfenleibianhuajiance16px":"地物分类"===e.row.type,"iconfont icon-changjingguanli":"场景分类"===e.row.type,"iconfont icon-jishu":"图像复原"===e.row.type})},null,2),(0,l.Uk)((0,n.zw)(e.row.type),1)])])),_:1}),(0,l.Wm)(A,{label:"原图"},{default:(0,l.w5)((e=>[(0,l._)("img",{src:h.global.BASEURL+e.row.before_img,"min-width":"70",height:"70",alt:"原图",onClick:i=>m.previewOnePic(e.row.before_img)},null,8,d),"变化检测"===e.row.type?((0,l.wg)(),(0,l.iD)("img",{key:0,src:h.global.BASEURL+e.row.before_img1,"min-width":"70",height:"70",style:{"margin-left":"20px"},alt:"原图",onClick:i=>m.previewOnePic(e.row.before_img1)},null,8,g)):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(A,{label:"结果图/预测结果"},{default:(0,l.w5)((e=>[(0,l.wy)((0,l._)("img",{src:h.global.BASEURL+e.row.after_img,"min-width":"70",height:"70",alt:"结果图",onClick:i=>m.previewOnePic(e.row.after_img)},null,8,p),[[a.F8,"场景分类"!==e.row.type]]),(0,l.wy)((0,l._)("div",null,(0,n.zw)(Object.keys(e.row.data)[0])+": "+(0,n.zw)(e.row.data[Object.keys(e.row.data)[0]]),513),[[a.F8,"场景分类"===e.row.type]])])),_:1}),(0,l.Wm)(A,{label:"操作"},{default:(0,l.w5)((e=>[(0,l.Wm)(B,{size:"default",type:"danger",onClick:i=>m.handleDelete(e.$index,e.row)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 删除 ")])),_:2},1032,["onClick"]),(0,l.wy)((0,l.Wm)(B,{size:"default",type:"primary",onClick:i=>m.previewTwoPic(e.row.before_img,e.row.after_img)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 预览 ")])),_:2},1032,["onClick"]),[[a.F8,"变化检测"!==e.row.type&&"场景分类"!==e.row.type]]),(0,l.wy)((0,l.Wm)(B,{size:"default",type:"primary",onClick:i=>m.previewOnePic(e.row.before_img,e.row.after_img)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 预览 ")])),_:2},1032,["onClick"]),[[a.F8,"场景分类"===e.row.type]]),(0,l.wy)((0,l.Wm)(B,{size:"default",type:"primary",onClick:i=>m.previewThreePic(e.row.before_img,e.row.before_img1,e.row.after_img)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 预览 ")])),_:2},1032,["onClick"]),[[a.F8,"变化检测"===e.row.type]]),(0,l.wy)((0,l.Wm)(B,{size:"default",type:"primary",onClick:i=>m.downloadimgWithWords(e.row.id,h.global.BASEURL+e.row.after_img,`${e.row.type}结果图.png`)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 下载 ")])),_:2},1032,["onClick"]),[[a.F8,"场景分类"!==e.row.type]])])),_:1})])),_:1},8,["data","onSelectionChange"]),(0,l._)("div",{type:"primary",class:"select-fun-drawer hidden-md-and-down",onClick:i[0]||(i[0]=e=>h.isSelect=!0)},w),(0,l.Wm)(F,{modelValue:h.isSelect,"onUpdate:modelValue":i[7]||(i[7]=e=>h.isSelect=e),title:"功能区筛选",direction:h.direction,size:h.size},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"el-menu-vertical-demo","text-color":"black","background-color":"white"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,null,{default:(0,l.w5)((()=>[(0,l.Wm)(E,{index:"1",onClick:i[1]||(i[1]=e=>m.onlyOneFun("变化检测"))},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(E,{index:"2",onClick:i[2]||(i[2]=e=>m.onlyOneFun("目标检测"))},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(E,{index:"3",onClick:i[3]||(i[3]=e=>m.onlyOneFun("地物分类"))},{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)(E,{index:"4",onClick:i[4]||(i[4]=e=>m.onlyOneFun("场景分类"))},{default:(0,l.w5)((()=>[b])),_:1}),(0,l.Wm)(E,{index:"5",onClick:i[5]||(i[5]=e=>m.onlyOneFun("图像复原"))},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(E,{index:"6",onClick:i[6]||(i[6]=e=>m.onlyOneFun(""))},{default:(0,l.w5)((()=>[C])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","direction","size"]),(0,l.wy)((0,l._)("div",v,[(0,l.Wm)(B,{onClick:i[8]||(i[8]=e=>m.toggleSelection(h.tableData))},{default:(0,l.w5)((()=>[(0,l.Uk)(" 全选 ")])),_:1}),(0,l.Wm)(B,{onClick:i[9]||(i[9]=e=>m.toggleSelection())},{default:(0,l.w5)((()=>[(0,l.Uk)(" 取消选择 ")])),_:1}),(0,l.Wm)(B,{type:"danger",onClick:i[10]||(i[10]=e=>m.deleteAll())},{default:(0,l.w5)((()=>[(0,l.Uk)(" 删除 ")])),_:1}),(0,l.Wm)(B,{type:"primary",onClick:i[11]||(i[11]=e=>m.downLoadAll())},{default:(0,l.w5)((()=>[(0,l.Uk)(" 下载 ")])),_:1})],512),[[a.F8,0!==h.tableData.length]]),(0,l.Wm)(I,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{xs:24,sm:24,md:10,lg:11,xl:10,style:{"margin-right":"40px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{background:"","page-size":h.pageSize,layout:"prev, pager, next, jumper",total:h.total,"current-page":h.currentPage,onSizeChange:m.handleSizeChange,onCurrentChange:m.handleCurrentChange,onNextClick:m.goNextPage,onPrevClick:m.goPrePage},null,8,["page-size","total","current-page","onSizeChange","onCurrentChange","onNextClick","onPrevClick"])])),_:1})])),_:1}),(0,l.Wm)(Z,{modelValue:h.preVisible,"onUpdate:modelValue":i[13]||(i[13]=e=>h.preVisible=e),modal:!1,title:"图片预览",width:"75%",fullscreen:"",center:""},{default:(0,l.w5)((()=>[2===h.flag?((0,l.wg)(),(0,l.iD)("div",W,[(0,l.Wm)(I,{justify:"space-evenly"},{default:(0,l.w5)((()=>[(0,l._)("img",{id:"pre-img",src:h.previewPic1,alt:"预览"},null,8,S),(0,l._)("img",{id:"pre-img",src:h.previewPic2,alt:"预览"},null,8,P)])),_:1})])):1===h.flag?((0,l.wg)(),(0,l.iD)("div",U,[(0,l.Wm)(I,{justify:"space-evenly"},{default:(0,l.w5)((()=>[(0,l._)("img",{id:"pre-img",src:h.previewPic1,alt:"预览"},null,8,x)])),_:1})])):3===h.flag?((0,l.wg)(),(0,l.iD)("div",z,[(0,l.Wm)(I,{justify:"space-evenly"},{default:(0,l.w5)((()=>[(0,l._)("img",{id:"pre-img",src:h.previewPic1,alt:"预览"},null,8,j),(0,l._)("img",{id:"pre-img",src:h.previewPic3,alt:"预览"},null,8,D),(0,l._)("img",{id:"pre-img",src:h.previewPic2,alt:"预览"},null,8,T)])),_:1}),(0,l.Wm)(I)])):(0,l.kq)("",!0),(0,l.Wm)(I,{type:"flex",justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{span:1},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{type:"primary",onClick:i[12]||(i[12]=e=>h.preVisible=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" OK ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}t(7658);var B=t(9450),R=t(9070);function E(e){this.flag=1,this.fbflag=1,this.previewPic1=R.Z.BASEURL+e,this.preVisible=!0}function L(e,i){this.flag=2,this.fbflag=2,this.previewPic1=R.Z.BASEURL+e,this.previewPic2=R.Z.BASEURL+i,this.preVisible=!0}function O(e,i,t){this.flag=3,this.fbflag=3,this.previewPic1=R.Z.BASEURL+e,this.previewPic2=R.Z.BASEURL+i,this.previewPic3=R.Z.BASEURL+t,this.preVisible=!0}var F=t(5893),V={name:"History",beforeRouteEnter(e,i,t){t((e=>{document.querySelector(".el-main").scrollTop=0}))},data(){return{delete:{ids:[]},type:"",isSelect:!1,direction:"rtl",size:"15%",pageSize:10,total:0,flag:"",currentPage:1,multipleSelection:[],preVisible:!1,previewPic1:"",previewPic2:"",previewPic3:"",tableData:[],global:{BASEURL:R.Z.BASEURL}}},mounted(){this.getTabelInfo()},methods:{previewOnePic:E,downloadimgWithWords:F.R3,historyGetPage:B.G,historyDelete:B.W,previewTwoPic:L,previewThreePic:O,handleDelete(e,i){this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.delete.ids.push(i.id),this.historyDelete(this.delete).then((i=>{this.tableData.splice(e,1),this.getTabelInfo(),this.$message({type:"success",message:"删除成功!"})})).catch((e=>{}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},deleteAll(){0===this.multipleSelection.length?this.$message.warning("请选择要删除的记录哦"):this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.delete.ids=this.multipleSelection.map((e=>e.id)),this.historyDelete(this.delete).then((e=>{this.getTabelInfo(),this.tableData=this.tableData.filter((e=>this.multipleSelection.every((i=>e.id!==i.id)))),this.$message({type:"success",message:"删除成功!"})})).catch((e=>{}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},downLoadAll(){if(0===this.multipleSelection.length)this.$message.warning("请选择要下载的历史记录的图片哦");else for(let e of this.multipleSelection)this.downloadimgWithWords(e.id,R.Z.BASEURL+e.after_img,`${e.type}结果图.png`)},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},handleSizeChange(e){this.pageSize=e,this.getTabelInfo()},handleCurrentChange(e){this.page=e,this.currentPage=e,this.getTabelInfo()},getTabelInfo(){this.historyGetPage(this.currentPage,10,this.type).then((e=>{this.total=e.data.count,this.tableData=e.data.data})).catch((e=>{}))},goNextPage(){this.getTabelInfo()},goPrePage(){this.getTabelInfo()},onlyOneFun(e){this.type=e,this.getTabelInfo(),this.isSelect=!1}}},$=t(89);const I=(0,$.Z)(V,[["render",A],["__scopeId","data-v-5dd79cb4"]]);var Z=I}}]);
//# sourceMappingURL=484.a6ef742d.js.map