"use strict";(self.webpackChunkexpense_tracker=self.webpackChunkexpense_tracker||[]).push([[302],{6302:(ft,_,s)=>{s.r(_),s.d(_,{HomeModule:()=>gt});var d=s(6895),w=s(8058),y=s(5266),t=s(4650),p=s(5412),f=s(384),h=s(9717),x=s(3267),A=s(3683),m=s(4859),C=s(7392),v=s(8739),l=s(7155),D=s(8686);function U(n,o){1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-welcome-loader"),t.qZA())}function E(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td")(2,"b"),t._uU(3,"Comment :"),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(5),t.Oqu(e.tableData.comment)}}function M(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"p"),t._uU(4,"Expense Details"),t.qZA()(),t.TgZ(5,"table",3)(6,"tr")(7,"td")(8,"b"),t._uU(9,"Name : "),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA()(),t.TgZ(12,"tr")(13,"td")(14,"b"),t._uU(15,"Amount : "),t.qZA()(),t.TgZ(16,"td"),t._uU(17),t.qZA()(),t.TgZ(18,"tr")(19,"td")(20,"b"),t._uU(21,"Expense Date :"),t.qZA()(),t.TgZ(22,"td"),t._uU(23),t.qZA()(),t.TgZ(24,"tr")(25,"td")(26,"b"),t._uU(27,"Expense Category : "),t.qZA()(),t.TgZ(28,"td"),t._uU(29),t.qZA()(),t.TgZ(30,"tr")(31,"td")(32,"b"),t._uU(33,"Payment Type : "),t.qZA()(),t.TgZ(34,"td"),t._uU(35),t.qZA()(),t.YNc(36,E,6,1,"tr",0),t.qZA()(),t.TgZ(37,"div",4)(38,"button",5),t._uU(39,"Ok"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(11),t.Oqu(e.tableData.name),t.xp6(6),t.Oqu(e.tableData.amount),t.xp6(6),t.Oqu(e.tableData.expense_date),t.xp6(6),t.Oqu(e.tableData.expense_category),t.xp6(6),t.Oqu(e.tableData.payment),t.xp6(1),t.Q6J("ngIf",null!=e.tableData.comment&&e.tableData.comment&&""!=e.tableData.comment)}}let O=(()=>{class n{constructor(e){this.businessData=e,this.tableData=[],this.isLoading=!1}ngOnInit(){this.onGetSingleExpense()}onGetSingleExpense(){this.isLoading=!0,this.businessData.onGetSingleExpense(this.businessData.data.data._id).subscribe(e=>{this.tableData=e.data,this.isLoading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-single"]],decls:2,vars:2,consts:[[4,"ngIf"],[2,"margin-top","30px"],[1,"viewExpense"],["align","center"],["mat-dialog-actions","","align","end"],["mat-flat-button","","mat-dialog-close","","color","primary"]],template:function(e,i){1&e&&(t.YNc(0,U,2,0,"div",0),t.YNc(1,M,40,6,"div",0)),2&e&&(t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading))},dependencies:[d.O5,D.R,m.lW,p.ZT,p.H8],styles:[".viewExpense[_ngcontent-%COMP%]{margin-left:10px}.viewExpense[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem}"]}),n})();var u=s(9299),b=s(9549),k=s(4385),q=s(3238),S=s(5649);function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",3)(2,"p"),t._uU(3,"Nothing to Show "),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onHome())}),t._uU(5,"Add Expense"),t.qZA(),t._UZ(6,"img",5),t.qZA()()}}function Y(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"canvas",7),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("type","pie")("datasets",e.pieChartDatasets)("labels",e.pieChartLabels)("options",e.pieChartOptions)("plugins",e.pieChartPlugins)("legend",e.pieChartLegend)}}function V(n,o){if(1&n&&(t.TgZ(0,"div")(1,"div")(2,"p",1),t._uU(3,"Click on Category for more details"),t.qZA()(),t.YNc(4,N,7,0,"div",0),t.YNc(5,Y,2,6,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",0===e.pieChartLabels.length&&"pie"===e.chartType),t.xp6(1),t.Q6J("ngIf",e.pieChartLabels.length>0)}}function L(n,o){if(1&n&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function J(n,o){1&n&&(t.TgZ(0,"div")(1,"div",3)(2,"p"),t._uU(3,"Select Year for "),t.TgZ(4,"b"),t._uU(5,"Monthly"),t.qZA(),t._uU(6," details. "),t.qZA(),t._UZ(7,"img",14),t.qZA()())}function P(n,o){if(1&n&&(t.TgZ(0,"div",15),t._UZ(1,"canvas",16),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.barChartData)("options",e.barChartOptions)("plugins",e.barChartPlugins)("legend",e.barChartLegend)("type","bar")}}function H(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div")(2,"p",1),t._uU(3,"Click on "),t.TgZ(4,"b"),t._uU(5,"Bars"),t.qZA(),t._uU(6," for more details"),t.qZA()(),t.TgZ(7,"div",8)(8,"mat-form-field",9)(9,"mat-label"),t._uU(10,"Select Year"),t.qZA(),t.TgZ(11,"mat-select",10),t.NdJ("valueChange",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.selectedYear=a)})("selectionChange",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onSelectionChange(a))}),t.YNc(12,L,2,2,"mat-option",11),t.qZA()()(),t.YNc(13,J,8,0,"div",0),t.YNc(14,P,2,5,"div",12),t.qZA()}if(2&n){const e=t.oxw();t.xp6(11),t.Q6J("value",e.selectedYear),t.xp6(1),t.Q6J("ngForOf",e.years),t.xp6(1),t.Q6J("ngIf",""===e.selectedYear&&"bar"===e.chartType),t.xp6(1),t.Q6J("ngIf",""!==e.selectedYear)}}let Z=(()=>{class n{constructor(e,i,a){this.dialog=e,this.businessData=i,this.route=a,this.chartType=[],this.pieChartLabels=[],this.pieValues=[],this.years=[],this.selectedYear="",this.allMonths=[],this.barChartData={labels:[],datasets:[]},this.pieChartLegend=!0,this.pieChartPlugins=[],this.barChartLegend=!0,this.barChartPlugins=[],this.barChartOptions={responsive:!0},this.pieChartOptions={responsive:!0}}onHome(){this.businessData.pieDialogRef.close(),this.businessData.onHome()}ngOnInit(){this.chartType=this.businessData.chartType,this.pieChartLabels=this.businessData.pieLabels,this.pieChartDatasets=[{data:this.businessData.piedata}],this.years=[];for(let e in this.businessData.hashmap)this.years.push(e)}onSelectionChange(e){this.allMonths={Jan:0,Feb:0,Mar:0,Apr:0,May:0,Jun:0,Jul:0,Aug:0,Sep:0,Oct:0,Nov:0,Dec:0};const i=this.businessData.hashmap[e.value];for(let c of i)this.allMonths[c[0]]+=c[1];let a=[];for(let c in this.allMonths)a.push(this.allMonths[c]);this.barChartData={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:a,label:e.value}]}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.uw),t.Y36(h.k),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-show-chart"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"categorypara"],["class","pieChart",4,"ngIf"],[2,"display","flex","justify-content","center","align-items","center","flex-direction","column"],["mat-raised-button","",2,"margin-bottom","10px",3,"click"],["src","../../../assets/image/pie22.gif","height","200px","width","200px"],[1,"pieChart"],["baseChart","","id","myCanvas",3,"type","datasets","labels","options","plugins","legend"],[2,"display","flex","justify-content","center"],["appearance","outline"],[3,"value","valueChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["class","barChart",4,"ngIf"],[3,"value"],["src","../../../assets/image/nobar.gif","height","220px","width","300px"],[1,"barChart"],["id","myBarCanvas","baseChart","",3,"data","options","plugins","legend","type"]],template:function(e,i){1&e&&(t.YNc(0,V,6,2,"div",0),t.YNc(1,H,15,4,"div",0)),2&e&&(t.Q6J("ngIf","pie"===i.chartType),t.xp6(1),t.Q6J("ngIf","bar"===i.chartType))},dependencies:[d.sg,d.O5,m.lW,b.KE,b.hX,k.gD,q.ey,S.jh],styles:[".pieChart[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:300px;margin-top:30px}.barChart[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:300px;margin-top:10px}#myCanvas[_ngcontent-%COMP%]{width:300px!important;height:300px!important}.categorypara[_ngcontent-%COMP%]{font-size:15px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;padding-top:10px;padding-left:10px}"]}),n})();var I=s(529),T=s(7009),Q=s(9047),F=s(266),g=s(3546);function G(n,o){1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-loader"),t.qZA())}function B(n,o){if(1&n&&(t.TgZ(0,"div",34)(1,"mat-card",35)(2,"mat-card-content")(3,"p",36)(4,"mat-icon",37),t._uU(5),t.qZA()(),t.TgZ(6,"p",38),t._uU(7),t.qZA(),t.TgZ(8,"p",39),t._uU(9),t.qZA()()()()),2&n){const e=o.$implicit;t.xp6(5),t.Oqu(e.icon),t.xp6(2),t.Oqu(e.content),t.xp6(2),t.Oqu(e.title)}}function j(n,o){1&n&&(t.TgZ(0,"th",40),t._uU(1," Name "),t.qZA())}function R(n,o){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function z(n,o){1&n&&(t.TgZ(0,"th",40),t._uU(1," Amount "),t.qZA())}function K(n,o){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.amount," ")}}function $(n,o){1&n&&(t.TgZ(0,"th",40),t._uU(1," Expense Date "),t.qZA())}function W(n,o){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.expense_date," ")}}function X(n,o){1&n&&(t.TgZ(0,"th",40),t._uU(1," Expense Category "),t.qZA())}function tt(n,o){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.expense_category," ")}}function et(n,o){1&n&&(t.TgZ(0,"th",40),t._uU(1," Payment "),t.qZA())}function nt(n,o){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.payment," ")}}function it(n,o){1&n&&(t.TgZ(0,"th",40),t._uU(1," Comment "),t.qZA())}function ot(n,o){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e.comment," ")}}function at(n,o){1&n&&t._UZ(0,"tr",42)}function st(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr",43),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.onOpen(c))}),t.qZA()}}const ct=function(){return[5,10]};function lt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,B,10,3,"div",4),t.qZA(),t.TgZ(3,"div",5)(4,"div",6)(5,"mat-card")(6,"mat-card-title",7),t._uU(7,"Category Summary"),t.qZA(),t.TgZ(8,"mat-card-subtitle",8),t._uU(9,"Click to View"),t.qZA(),t.TgZ(10,"mat-card-content")(11,"div",9)(12,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openPieChart())}),t._UZ(13,"img",11),t.qZA()()()()(),t.TgZ(14,"div",6)(15,"mat-card")(16,"mat-card-title",7)(17,"p"),t._uU(18,"Expense Monthly Summary"),t.qZA()(),t.TgZ(19,"mat-card-subtitle",12),t._uU(20,"Click to View"),t.qZA(),t.TgZ(21,"mat-card-content")(22,"div",13)(23,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openBarChart())}),t._UZ(24,"img",14),t.qZA()()()()()(),t.TgZ(25,"div",15)(26,"div",16)(27,"mat-card")(28,"mat-card-title",7),t._uU(29,"Detail Summary"),t.qZA(),t.TgZ(30,"mat-card-subtitle",7),t._uU(31,"Click on row to Edit/Delete Expense"),t.qZA(),t.TgZ(32,"mat-card-content",17)(33,"div",18)(34,"div",19)(35,"div",20)(36,"table",21),t.ynx(37,22),t.YNc(38,j,2,0,"th",23),t.YNc(39,R,2,1,"td",24),t.BQk(),t.ynx(40,25),t.YNc(41,z,2,0,"th",23),t.YNc(42,K,2,1,"td",24),t.BQk(),t.ynx(43,26),t.YNc(44,$,2,0,"th",23),t.YNc(45,W,2,1,"td",24),t.BQk(),t.ynx(46,27),t.YNc(47,X,2,0,"th",23),t.YNc(48,tt,2,1,"td",24),t.BQk(),t.ynx(49,28),t.YNc(50,et,2,0,"th",23),t.YNc(51,nt,2,1,"td",24),t.BQk(),t.ynx(52,29),t.YNc(53,it,2,0,"th",23),t.YNc(54,ot,2,1,"td",24),t.BQk(),t.YNc(55,at,1,0,"tr",30),t.YNc(56,st,1,0,"tr",31),t.qZA()(),t._UZ(57,"mat-paginator",32),t.qZA()()()()()(),t.TgZ(58,"div")(59,"button",33),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onAdd())}),t.TgZ(60,"mat-icon"),t._uU(61,"add-chart"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.cards),t.xp6(34),t.Q6J("dataSource",e.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,ct))}}let pt=(()=>{class n{constructor(e,i,a,c,r,_t){this.businessData=e,this.dialog=i,this.http=a,this.route=c,this.authServ=r,this._snackBar=_t,this.displayedColumns=["name","amount","expense_date","expense_category","payment","comment"],this.ELEMENT_DATA=[],this.isLoading=!0,this.isDelete=!1,this.dataSource=new l.by,this.cards=[],this.allexpense=0,this.count=0,this.hashMap={},this.userId=sessionStorage.getItem("Id")?.split(" ")[1]}ngOnInit(){this.isLoading=!0,this.isDelete=!1,this.userId=sessionStorage.getItem("Id")?.split(" ")[1],this.getAllExpense(this.userId)}onHome(){this.route.navigate(["home"])}updateExpene(){this.authServ.updateUserData(this.userId,{expenseLogged:this.businessData.expensesLogged?this.businessData.expensesLogged:0})}getAllExpense(e){this.businessData.onGetAllExpense(e).subscribe(i=>{this.ELEMENT_DATA=i.data,this.dataSource=new l.by(this.ELEMENT_DATA),this.count=0;let a=i.data.length;setTimeout(()=>{this.dataSource.paginator=this.paginator},5e3),this.cards=[{icon:"today",title:"First Expense Date",content:a>0?i.data[0].expense_date:"-"},{icon:"today",title:"Latest Expense Date",content:a>0?i.data[i.data.length-1].expense_date:"-"},{icon:"numbers",title:"Number of Expenses",content:a},{icon:"monetization_on",title:"Total Amount",content:"\u20b9"+this.count}],this.allexpense=a,this.businessData.expensesLogged=this.allexpense,this.updateExpene(),this.pieChartData(i.data),this.onBarChartEdit(i.data),setTimeout(()=>{this.isLoading=!1},4e3)},i=>{this._snackBar.open("Session Expired!!","",{duration:2e3}),this.authServ.onLogout()})}pieChartData(e){if(this.businessData.pieLabels=[],this.businessData.piedata=[],this.hashMap={},this.count=0,e){for(let i=0;i<e.length;i++)this.hashMap[e[i].expense_category]=0;for(let i=0;i<e.length;i++)this.hashMap[e[i].expense_category]+=e[i].amount;for(let i in this.hashMap)0!=this.hashMap[i]&&(this.businessData.pieLabels.push(i),this.businessData.piedata.push(this.hashMap[i]),this.count+=this.hashMap[i]);this.cards[3].content="\u20b9"+this.count}}openPieChart(){this.businessData.chartType="pie";let e=this.dialog.open(Z,{width:"500px",height:"400px"});this.businessData.pieDialogRef=e}onBarChartEdit(e){let i={};for(let a=0;a<e.length;a++)i[e[a].expense_date.toString().split(" ")[3]]=[];for(let a=0;a<e.length;a++){let c=e[a].expense_date.toString().split(" ");i[c[3]].push([c[1],e[a].amount])}this.businessData.hashmap=i}openBarChart(){this.businessData.chartType="bar",this.dialog.open(Z,{width:"700px",height:"450px"})}onOpen(e){this.openDialog(),this.businessData.data={action:"edit",data:e}}openDialog(){this.dialog.open(rt,{width:"300px",height:"190px"}).afterClosed().subscribe(i=>{"delete"===i&&this.getAllExpense(this.userId)})}onAdd(){this.businessData.onNavigate("home")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.k),t.Y36(p.uw),t.Y36(I.eN),t.Y36(u.F0),t.Y36(f.e),t.Y36(T.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-expenses"]],viewQuery:function(e,i){if(1&e&&t.Gf(v.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(i.paginator=a.first)}},decls:2,vars:2,consts:[[4,"ngIf"],["class","main",4,"ngIf"],[1,"main"],[1,"row","row-col-4"],["class","col-lg-3 col-xs-3 col-md-12 col-sm-6",4,"ngFor","ngForOf"],[1,"row","row-col-2"],[1,"col-sm-6","col-xs-12"],[2,"padding","10px 20px"],[2,"padding","5px 20px"],[2,"padding-bottom","20px"],[1,"btn-pie",3,"click"],["src","../../../assets/image/pie23.gif","width","250px"],[2,"padding-left","20px","padding-bottom","10px"],[2,"padding-bottom","5px"],["src","../../../assets/image/bar11.gif","width","175px"],[1,"row","row-col-1"],[1,"col","col-xs-12","col-sm-12"],[1,"tableContent"],[2,"margin","0px 8px","margin-bottom","20px"],[1,"mat-elevation-z8"],[1,"table-container"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","expense_date"],["matColumnDef","expense_category"],["matColumnDef","payment"],["matColumnDef","comment"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","matTooltip","View/Edit/Delete",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["matTooltip","Add Expense","mat-mini-fab","","color","accent",1,"btns",3,"click"],[1,"col-lg-3","col-xs-3","col-md-12","col-sm-6"],[1,"matContnet"],[1,"icons"],["role","img",2,"font-size","48px","width","50px","height","50px"],[1,"front1"],[1,"front"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","","matTooltip","View/Edit/Delete",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,G,2,0,"div",0),t.YNc(1,lt,62,6,"div",1)),2&e&&(t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading))},dependencies:[d.sg,d.O5,Q.R,F.gM,m.nh,C.Hw,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,g.a8,g.dn,g.$j,g.n5,v.NW],styles:[".main[_ngcontent-%COMP%]{padding:30px 25px;background-image:url(saving.1e72360827702eb7.jpg);background-size:cover;background-repeat:no-repeat;width:100%;height:auto}mat-card[_ngcontent-%COMP%]{margin:0 25px 20px}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.icons[_ngcontent-%COMP%]{font-size:25px;font-weight:700}.content[_ngcontent-%COMP%]{padding-top:10px;display:flex;flex-direction:row;justify-content:space-around;align-items:center}.tableContent[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:contents}.matContnet[_ngcontent-%COMP%]:hover{transform:scale(1.1);transition:.5s}.front[_ngcontent-%COMP%]{font-family:cursive;color:gray}.front1[_ngcontent-%COMP%]{font-size:24px;font-family:cursive;font-weight:700}table[_ngcontent-%COMP%]{width:100%;overflow:hidden}.table-container[_ngcontent-%COMP%]{max-width:100%;overflow-x:scroll}.noelement[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding-top:50px}.noelement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:25px;font-weight:240;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}.btn-pie[_ngcontent-%COMP%]{background-color:#fff;text-decoration:none;border:none}.btn-pie[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{transition:.5s;cursor:pointer}.btns[_ngcontent-%COMP%]{position:fixed;bottom:10%;right:5%;z-index:100}"]}),n})(),rt=(()=>{class n{constructor(e,i,a,c,r){this.dialogRef=e,this.dialog=i,this.businessData=a,this.route=c,this._snackBar=r}onOpen(){this.route.navigate(["edit",this.businessData.data.data._id])}onDelete(){this.businessData.onDeleteExpense(this.businessData.data.data._id).subscribe(e=>{this._snackBar.open(e.message,"",{duration:2e3})})}onView(){this.dialog.open(O,{width:"300px",height:"250px"})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.so),t.Y36(p.uw),t.Y36(h.k),t.Y36(u.F0),t.Y36(T.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["confirm"]],decls:11,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","","align","end"],["mat-flat-button","","mat-dialog-close","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close","delete","color","warn",3,"click"],["mat-raised-button","","mat-dialog-close","",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Confirm Action"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," Would you like to proceed?\n"),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return i.onView()}),t._uU(6,"View"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return i.onDelete()}),t._uU(8,"Delete"),t.qZA(),t.TgZ(9,"button",5),t.NdJ("click",function(){return i.onOpen()}),t._uU(10,"Edit"),t.qZA()())},dependencies:[m.lW,p.ZT,p.uh,p.xY,p.H8],encapsulation:2}),n})(),dt=(()=>{class n{constructor(e,i,a){this.dialog=e,this.authService=i,this.businessData=a}ngOnInit(){const e=sessionStorage.getItem("LEAD_ID");this.authService.authAfterReferesh(!0,e),this.app_version=sessionStorage.getItem("Version")}onAdd(){this.businessData.onNavigate("home")}Profile(){this.openDialog()}openDialog(){this.dialog.open(y.d,{width:"600px"})}onLogout(){this.dialog.open(w.T,{data:{type:"alert"}})}onGithub(){this.businessData.onGithub()}onLinkedin(){this.businessData.onLinkedin()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.uw),t.Y36(f.e),t.Y36(h.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:42,vars:1,consts:[["hasBackdrop","True","autosize","",1,"example-container",2,"height","100vh"],["mode","over",1,"example-sidenav",2,"height","100%"],["drawer",""],[2,"border-bottom","2px solid red","font-family","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"],[1,"side-nav-btn"],["mat-raised-button","","color","primary",3,"click"],[2,"margin-top","20px"],[1,"social-btns",2,"margin-top","20px"],["mat-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon",3,"click"],["src","../../../assets/image/github.png","height","40px","width","40px"],["mat-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"click"],["src","../../../assets/image/linkedin.png","height","30px","width","30px"],[2,"font-size","12px","margin-top","20px"],[2,"border-bottom","1px solid black"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],[1,"example-spacer"],["mat-raised-button","","color","accent",3,"click"],[1,"mainlogin"]],template:function(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"h2",3),t._uU(4," Expense Tracker "),t.qZA(),t.TgZ(5,"div")(6,"div",4)(7,"button",5),t.NdJ("click",function(){return i.Profile()}),t.TgZ(8,"mat-icon"),t._uU(9,"perm_identity"),t.qZA(),t._uU(10,"Profile "),t.qZA(),t.TgZ(11,"div",6)(12,"button",5),t.NdJ("click",function(){return i.onAdd()}),t.TgZ(13,"mat-icon"),t._uU(14,"add-chart"),t.qZA(),t._uU(15,"Add Expenses "),t.qZA()(),t.TgZ(16,"div",6)(17,"button",5),t.NdJ("click",function(){return i.onLogout()}),t.TgZ(18,"mat-icon"),t._uU(19,"logout"),t.qZA(),t._uU(20,"Logout "),t.qZA(),t.TgZ(21,"div",7)(22,"button",8),t.NdJ("click",function(){return i.onGithub()}),t._UZ(23,"img",9),t.qZA(),t.TgZ(24,"button",10),t.NdJ("click",function(){return i.onLinkedin()}),t._UZ(25,"img",11),t.qZA()()()()(),t.TgZ(26,"div",12),t._uU(27),t.qZA()(),t.TgZ(28,"div")(29,"mat-toolbar",13)(30,"button",14),t.NdJ("click",function(){t.CHM(a);const r=t.MAs(2);return t.KtG(r.toggle())}),t.TgZ(31,"mat-icon"),t._uU(32,"list"),t.qZA()(),t.TgZ(33,"span"),t._uU(34,"Expense Tracker"),t.qZA(),t._UZ(35,"span",15),t.TgZ(36,"button",16),t.NdJ("click",function(){return i.onLogout()}),t.TgZ(37,"mat-icon"),t._uU(38,"logout"),t.qZA(),t._uU(39,"Logout "),t.qZA()()(),t.TgZ(40,"div",17),t._UZ(41,"app-view-expenses"),t.qZA()()}2&e&&(t.xp6(27),t.hij(" Application Version ",i.app_version," "))},dependencies:[x.jA,x.kh,A.Ye,m.lW,m.RK,C.Hw,pt],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.example-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.example-sidenav[_ngcontent-%COMP%]{padding-left:50px;padding-right:100px;padding-top:50px}.btns[_ngcontent-%COMP%]{position:fixed;bottom:10%;right:5%;z-index:100}.social-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background-color:#fff}.side-nav-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);transition:.5s}"]}),n})();var mt=s(3870),ht=s(8032);const ut=[{path:"",component:dt,canActivate:[mt.a],title:"Dashboard | ExpenseTracker"}];let gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,ht.m,u.Bz.forChild(ut)]}),n})()}}]);