(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{38862:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t(3131)}])},10410:function(e,i,t){"use strict";var r=t(85893),n=t(67294),l=t(69661),s=t(2734),a=t(41796),o=t(81931);let c=(0,n.forwardRef)((e,i)=>{let{sx:t,src:n,skin:c,color:d}=e,x=(0,s.Z)(),h=(0,o.Z)(),m=(e,i)=>"light"===e?{...h["".concat(i,"Light")]}:"light-static"===e?{color:h["".concat(i,"Light")].color,backgroundColor:(0,a.$n)(x.palette[i].main,.88)}:{...h["".concat(i,"Filled")]},p={primary:m(c,"primary"),secondary:m(c,"secondary"),success:m(c,"success"),error:m(c,"error"),warning:m(c,"warning"),info:m(c,"info")};return(0,r.jsx)(l.Z,{ref:i,...e,sx:!n&&c&&d?Object.assign(p[d],t):t})});c.defaultProps={skin:"filled",color:"primary"},i.Z=c},81931:function(e,i,t){"use strict";var r=t(2734),n=t(42563);let l=()=>{let e=(0,r.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,n.E)(e.palette.primary.main,.16)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,n.E)(e.palette.secondary.main,.16)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,n.E)(e.palette.success.main,.16)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,n.E)(e.palette.error.main,.16)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,n.E)(e.palette.warning.main,.16)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,n.E)(e.palette.info.main,.16)}}};i.Z=l},3131:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return J}});var r=t(85893),n=t(67294),l=t(5152),s=t.n(l),a=t(95715),o=t(99226),c=t(98456),d=t(15861),x=t(86886),h=t(66242),m=t(2734),p=t(28756),u=t(90948);t(93780);let g=(0,u.ZP)("div")(e=>{let{theme:i}=e;return{"& .keen-slider":{direction:"ltr","& .keen-slider__slide":{"& img":{height:"auto",maxWidth:"100%"}},"&.thumbnail .keen-slider__slide:not(.active)":{opacity:.4},"&.zoom-out":{perspective:"1000px","& .zoom-out__slide":{"& .slider-content-wrapper":{width:"100%",height:"100%",position:"absolute","& img":{width:"100%",height:"100%",objectFit:"cover",position:"absolute",backgroundColor:"transparent"}}}},"& .default-slide":{height:200,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:i.palette.background.default}},"& .fader":{position:"relative",overflow:"hidden","& .fader__slide":{width:"100%",height:"100%",position:"absolute",top:"0","& img":{width:" 100%",height:" 100%",objectFit:"cover",position:"absolute"}}},"& .navigation-wrapper":{position:"relative","& .arrow":{top:"50%",width:"3rem",height:"3rem",cursor:"pointer",position:"absolute",transform:"translateY(-50%)",color:i.palette.common.white,..."rtl"===i.direction?{transform:"translateY(-50%) rotate(180deg)"}:{},"&.arrow-disabled":{cursor:"not-allowed",pointerEvents:"none",color:i.palette.action.disabled},"&.arrow-left":{left:0},"&.arrow-right":{right:0}}},"& .swiper-dots":{display:"flex",justifyContent:"center",marginTop:i.spacing(4),"& .MuiBadge-root":{"&:not(:last-child)":{marginRight:i.spacing(4)},"& .MuiBadge-dot":{width:10,height:10,cursor:"pointer",borderRadius:"50%",backgroundColor:i.palette.action.disabled},"&.active .MuiBadge-dot":{backgroundColor:i.palette.primary.main}}}}});var f=t(78445),j=t(44267),Z=t(79878),y=t(10410);let b=s()(()=>Promise.all([t.e(4814),t.e(7229)]).then(t.bind(t,47229)),{loadableGenerated:{webpack:()=>[47229]},ssr:!1});var v=t(42563);let w=(0,u.ZP)(x.ZP)(e=>{let{theme:i}=e;return{[i.breakpoints.up("sm")]:{paddingTop:"0 !important"}}});var k=function(e){var i,t,n,l,s,a,p,u,g,k,C,I,P,D,R,T;let{reportDetail:F,data:A,loading:E}=e,L=(0,m.Z)(),z=[{data:[(null===(i=A[0])||void 0===i?void 0:i.fatura)?A[0].fatura:0,(null===(t=A[1])||void 0===t?void 0:t.fatura)?A[1].fatura:0,(null===(n=A[2])||void 0===n?void 0:n.fatura)?A[2].fatura:0,(null===(l=A[3])||void 0===l?void 0:l.fatura)?A[3].fatura:0,(null===(s=A[4])||void 0===s?void 0:s.fatura)?A[4].fatura:0,(null===(a=A[5])||void 0===a?void 0:a.fatura)?A[5].fatura:0]}],S={chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:5,distributed:!0,columnWidth:"31%",startingShape:"rounded"}},legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},colors:[(0,v.E)(L.palette.primary.main,1)],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},grid:{show:!1,padding:{top:20,left:-5,right:-8,bottom:-12}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:[(null===(p=A[0])||void 0===p?void 0:p.ay)?"".concat(A[0].ay.slice(0,3)):"-",(null===(u=A[1])||void 0===u?void 0:u.ay)?"".concat(A[1].ay.slice(0,3)):"-",(null===(g=A[2])||void 0===g?void 0:g.ay)?"".concat(A[2].ay.slice(0,3)):"-",(null===(k=A[3])||void 0===k?void 0:k.ay)?"".concat(A[3].ay.slice(0,3)):"-",(null===(C=A[4])||void 0===C?void 0:C.ay)?"".concat(A[4].ay.slice(0,3)):"-",(null===(I=A[5])||void 0===I?void 0:I.ay)?"".concat(A[5].ay.slice(0,3)):"-"],labels:{style:{colors:L.palette.text.disabled,fontFamily:L.typography.fontFamily,fontSize:L.typography.body2.fontSize}}},yaxis:{show:!1}};return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{sx:{pb:0},title:"Rapor İstatistikleri",subheader:"T\xfcm zamanlar"}),E?(0,r.jsx)(j.Z,{children:(0,r.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",height:"100%",justifyContent:"center"},children:(0,r.jsx)(c.Z,{sx:{mb:4}})})}):(0,r.jsxs)(j.Z,{children:[(0,r.jsxs)(x.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(w,{item:!0,sm:5,xs:12,sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end"},children:[(0,r.jsx)(d.Z,{variant:"body2",children:"Toplam"}),(0,r.jsx)(o.Z,{sx:{mb:3,rowGap:1,columnGap:2.5,display:"flex",flexWrap:"wrap",alignItems:"center"},children:(0,r.jsxs)(d.Z,{variant:"h1",children:[F.find(e=>1===e.status)?null===(P=F.find(e=>1===e.status))||void 0===P?void 0:P.total:"0"," ","Rapor"]})})]}),(0,r.jsxs)(w,{item:!0,xs:12,sm:7,children:[(0,r.jsx)(d.Z,{variant:"body2",children:"Son 6 Ay"}),(0,r.jsx)(b,{type:"bar",height:180,series:z,options:S})]})]}),(0,r.jsx)(o.Z,{sx:{mt:6,borderRadius:1,p:L.spacing(4,5),border:"1px solid ".concat(L.palette.divider)},children:(0,r.jsxs)(x.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:4,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"success",sx:{mr:2,width:42,height:42},children:(0,r.jsx)(Z.Z,{fontSize:"1.5rem",icon:"tabler:circle-check"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[F.find(e=>7===e.status)?null===(D=F.find(e=>7===e.status))||void 0===D?void 0:D.total:"0"," ","Rapor"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"Hazırlanan"})]})]})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:4,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"warning",sx:{mr:2,width:42,height:42},children:(0,r.jsx)(Z.Z,{fontSize:"1.5rem",icon:"tabler:clock"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[F.find(e=>8===e.status)?null===(R=F.find(e=>8===e.status))||void 0===R?void 0:R.total:"0"," ","Rapor"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"Hazırlanıyor"})]})]})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:4,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"error",sx:{mr:2,width:42,height:42},children:(0,r.jsx)(Z.Z,{fontSize:"1.5rem",icon:"tabler:exclamation-circle"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[F.find(e=>9===e.status)?null===(T=F.find(e=>9===e.status))||void 0===T?void 0:T.total:"0"," ","Rapor"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"Hatalı"})]})]})})]})})]})]})},C=t(67720),I=t(81458),P=function(e){let{credit:i,loading:t}=e;return(0,r.jsx)(h.Z,{sx:{minHeight:"240px",height:"240px"},children:(0,r.jsx)(j.Z,{sx:{p:e=>"".concat(e.spacing(5)," !important"),height:"100%"},children:t?(0,r.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",height:"100%",justifyContent:"center"},children:(0,r.jsx)(c.Z,{sx:{mb:4}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{sx:{gap:2,mb:10,display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Kont\xf6r Bilgileri (T\xfcm Zamanlar)"}),(0,r.jsxs)(d.Z,{variant:"h4",children:[Intl.NumberFormat("tr-TR").format((null==i?void 0:i.totalCredit)?null==i?void 0:i.totalCredit:0)," Kont\xf6r"]})]})}),(0,r.jsxs)(o.Z,{sx:{mb:3.5,gap:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(o.Z,{sx:{py:2.25,display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(o.Z,{sx:{mb:2.5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"light",color:"info",variant:"rounded",sx:{mr:1.5,height:24,width:24},children:(0,r.jsx)(Z.Z,{icon:"tabler:wallet",fontSize:"1.125rem"})}),(0,r.jsx)(d.Z,{sx:{color:"text.secondary"},children:"Kalan"})]}),(0,r.jsxs)(d.Z,{variant:"h6",children:[Intl.NumberFormat("tr-TR").format((null==i?void 0:i.creditAmount)?null==i?void 0:i.creditAmount:0)," Kont\xf6r"]})]}),(0,r.jsx)(C.Z,{flexItem:!0,sx:{m:0},orientation:"vertical",children:(0,r.jsx)(y.Z,{skin:"light",color:"secondary",sx:{height:24,width:24,fontSize:"0.6875rem",color:"text.secondary"},children:(null==i?void 0:i.totalCreditRate)?null==i?void 0:i.totalCreditRate:0})}),(0,r.jsxs)(o.Z,{sx:{py:2.25,display:"flex",alignItems:"flex-end",flexDirection:"column"},children:[(0,r.jsxs)(o.Z,{sx:{mb:2.5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(d.Z,{sx:{mr:1.5,color:"text.secondary"},children:"Harcanan"}),(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",sx:{height:24,width:24},children:(0,r.jsx)(Z.Z,{icon:"tabler:shopping-cart",fontSize:"1.125rem"})})]}),(0,r.jsxs)(d.Z,{variant:"h6",children:[Intl.NumberFormat("tr-TR").format((null==i?void 0:i.spentCredit)?null==i?void 0:i.spentCredit:0)," Kont\xf6r"]})]})]}),(0,r.jsx)(I.Z,{value:(null==i?void 0:i.totalCreditRate)?null==i?void 0:i.totalCreditRate:0,color:"info",variant:"determinate",sx:{height:10,"&.MuiLinearProgress-colorInfo":{backgroundColor:"primary.main"},"& .MuiLinearProgress-bar":{borderTopRightRadius:0,borderBottomRightRadius:0}}})," "]})})})},D=t(78262),R=t(83321),T=t(16628),F=t(9581),A=t(31425),E=t(25935),L=t(41248),z=t(47590);let S=(0,n.forwardRef)(function(e,i){return(0,r.jsx)(T.Z,{ref:i,...e})});var _=function(e){let{id:i}=e,t=(0,L.I0)(),{notification:l,notificationLoading:s}=(0,L.v9)(e=>({notification:e.notification.notification,notificationLoading:e.notification.notificationLoading}),L.wU),[a,c]=(0,n.useState)(!1),m=()=>{c(!1)},p=async()=>{await t((0,z.rD)(i)),await c(!0)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R.Z,{variant:"contained",color:"error",onClick:p,children:"Detaylar"}),s?null:(0,r.jsx)(h.Z,{children:(0,r.jsxs)(D.Z,{fullWidth:!0,open:a,maxWidth:"sm",scroll:"body",onClose:()=>m(),TransitionComponent:S,onBackdropClick:()=>c(!1),sx:{"& .MuiDialog-paper":{overflow:"visible"}},children:[(0,r.jsxs)(F.Z,{sx:{pb:e=>"".concat(e.spacing(8)," !important"),px:e=>["".concat(e.spacing(5)," !important"),"".concat(e.spacing(15)," !important")],pt:e=>["".concat(e.spacing(8)," !important"),"".concat(e.spacing(12.5)," !important")]},children:[(0,r.jsx)(o.Z,{sx:{mb:8,textAlign:"center"},children:(0,r.jsxs)(d.Z,{variant:"h4",sx:{mb:3},children:["\uD83D\uDCE3 ",l.title]})}),(0,r.jsx)(x.ZP,{container:!0,spacing:6,children:(0,r.jsx)(x.ZP,{item:!0,xs:12,children:l.description&&(0,r.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:(0,E.ZP)(l.description,{replace:e=>{if("tag"===e.type&&"img"===e.name)return(0,r.jsx)("img",{...e.attribs,style:{maxWidth:"100%",marginBottom:"2rem",marginTop:"1rem"}})}})})})})]}),(0,r.jsx)(A.Z,{sx:{justifyContent:"center",px:e=>["".concat(e.spacing(5)," !important"),"".concat(e.spacing(15)," !important")],pb:e=>["".concat(e.spacing(8)," !important"),"".concat(e.spacing(12.5)," !important")]},children:(0,r.jsx)(R.Z,{variant:"contained",color:"error",sx:{mr:1},onClick:m,children:"Kapat"})})]})})]})},W=t(2261),B=t(98918);t(76268);var H=function(e){let{data:i}=e,t=(0,m.Z)();return(0,r.jsx)(h.Z,{sx:{position:"relative",backgroundColor:"primary.main",minHeight:"240px",height:"240px",[t.breakpoints.down("sm")]:{height:"auto"}},children:(0,r.jsx)(W.tq,{spaceBetween:50,slidesPerView:1,loop:!0,autoplay:{delay:1e4,disableOnInteraction:!1},modules:[B.pt],children:i.map((e,i)=>(0,r.jsx)(W.o5,{children:(0,r.jsx)(o.Z,{sx:{p:6,"& .MuiTypography-root":{color:"common.white"},minHeight:"240px !important",background:"primary.main"},children:(0,r.jsxs)(x.ZP,{container:!0,sx:{alignItems:"center"},spacing:12,children:[(0,r.jsxs)(x.ZP,{item:!0,xs:12,sm:8,sx:{order:[2,1]},children:[(0,r.jsx)(d.Z,{variant:"h5",sx:{mt:20,mb:3,[t.breakpoints.down("sm")]:{mt:0}},children:e.title}),(0,r.jsx)(_,{id:e.id})]}),(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:4,sx:{order:[1,2],textAlign:"center","& img":{height:"220px !important",maxWidth:"none !important",[t.breakpoints.up("sm")]:{top:"50%",position:"absolute",right:t.spacing(6),transform:"translateY(-50%)"}}},children:(0,r.jsx)("img",{src:"/images/avatars/anons.png",alt:"bildirim"})})]})})},i))})})},M=t(49259),K=t(95205),N=function(e){let{orders:i,loading:t}=e;return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{title:"Sipariş İstatistikleri",sx:{"& .MuiCardHeader-action":{m:0,alignSelf:"center"}}}),t?(0,r.jsxs)(j.Z,{children:[" ",(0,r.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",height:"100%",justifyContent:"center"},children:(0,r.jsx)(c.Z,{sx:{mb:4}})})]}):(0,r.jsxs)(j.Z,{sx:{pb:e=>"".concat(e.spacing(7.5)," !important")},children:[(0,r.jsx)(o.Z,{sx:{gap:2,mb:5,display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Toplam"}),(0,r.jsxs)(d.Z,{variant:"h4",children:[(null==i?void 0:i.totalOrders)?i.totalOrders:"0"," Sipariş"]})]})}),(0,r.jsxs)(x.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(x.ZP,{item:!0,xs:6,md:3,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",color:"success",sx:{mr:4,width:42,height:42},children:(0,r.jsx)(Z.Z,{icon:"tabler:circle-check",fontSize:"1.5rem"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[(null==i?void 0:i.totalPaid)?i.totalPaid:"0"," Sipariş"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"\xd6dendi"})]})]})}),(0,r.jsx)(x.ZP,{item:!0,xs:6,md:3,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",color:"warning",sx:{mr:4,width:42,height:42},children:(0,r.jsx)(Z.Z,{icon:"tabler:clock",fontSize:"1.5rem"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[(null==i?void 0:i.totalPreparing)?i.totalPreparing:"0"," Sipariş"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"Beklemede"})]})]})}),(0,r.jsx)(x.ZP,{item:!0,xs:6,md:3,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",color:"primary",sx:{mr:4,width:42,height:42},children:(0,r.jsx)(Z.Z,{icon:"tabler:clock-check",fontSize:"1.5rem"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[(null==i?void 0:i.totalPendingApproval)?i.totalPendingApproval:"0"," Sipariş"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"Onay Bekliyor"})]})]})}),(0,r.jsx)(x.ZP,{item:!0,xs:6,md:3,children:(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",color:"error",sx:{mr:4,width:42,height:42},children:(0,r.jsx)(Z.Z,{icon:"tabler:exclamation-circle",fontSize:"1.5rem"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(d.Z,{variant:"h5",children:[(null==i?void 0:i.totalError)?i.totalError:"0"," Sipariş"]}),(0,r.jsx)(d.Z,{variant:"body2",children:"Başarısız"})]})]})})]})]})]})},O=function(e){let{demands:i,loading:t}=e;return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(f.Z,{title:"Talep İstatistikleri"}),(0,r.jsx)(C.Z,{}),t?(0,r.jsxs)(j.Z,{children:[" ",(0,r.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",height:"100%",justifyContent:"center"},children:(0,r.jsx)(c.Z,{sx:{mb:4}})})," "]}):(0,r.jsxs)(j.Z,{children:[(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:5},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"warning",sx:{mr:4,width:34,height:34},children:(0,r.jsx)(Z.Z,{icon:"tabler:point"})}),(0,r.jsxs)(o.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:(0,r.jsx)(d.Z,{variant:"h6",children:"Toplam Talep"})}),(0,r.jsxs)(d.Z,{sx:{fontWeight:500},children:[null==i?void 0:i.totalDemands," Talep"]})]})]}),(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:5},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"success",sx:{mr:4,width:34,height:34},children:(0,r.jsx)(Z.Z,{icon:"tabler:point-filled"})}),(0,r.jsxs)(o.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:(0,r.jsx)(d.Z,{variant:"h6",children:"A\xe7ık"})}),(0,r.jsxs)(d.Z,{sx:{fontWeight:500},children:[null==i?void 0:i.openDemand," Talep"]})]})]}),(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:5},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"info",sx:{mr:4,width:34,height:34},children:(0,r.jsx)(Z.Z,{icon:"tabler:point-filled"})}),(0,r.jsxs)(o.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:(0,r.jsx)(d.Z,{variant:"h6",children:"M\xfcşteri Yanıtladı"})}),(0,r.jsxs)(d.Z,{sx:{fontWeight:500},children:[null==i?void 0:i.userAnswer," Talep"]})]})]}),(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:5},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"primary",sx:{mr:4,width:34,height:34},children:(0,r.jsx)(Z.Z,{icon:"tabler:point-filled"})}),(0,r.jsxs)(o.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:(0,r.jsx)(d.Z,{variant:"h6",children:"Destek Birimi Yanıtladı"})}),(0,r.jsxs)(d.Z,{sx:{fontWeight:500},children:[null==i?void 0:i.adminAnswer," Talep"]})]})]}),(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"dark",variant:"rounded",color:"secondary",sx:{mr:4,width:34,height:34},children:(0,r.jsx)(Z.Z,{icon:"tabler:point-filled"})}),(0,r.jsxs)(o.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:(0,r.jsx)(d.Z,{variant:"h6",children:"Kapalı"})}),(0,r.jsxs)(d.Z,{sx:{fontWeight:500},children:[t?"0":i.closed," Talep"]})]})]})]})]})},G=t(86501);let V=(0,u.ZP)("img")(e=>{let{theme:i}=e;return{right:20,bottom:0,position:"absolute",[i.breakpoints.down("sm")]:{right:5,width:200}}}),Y=e=>{let{code:i}=e,t=e=>{let i=document.createElement("textarea");i.value=e,document.body.appendChild(i),i.select();try{document.execCommand("copy"),G.ZP.success("Referans kodu kopyalandı")}catch(e){G.ZP.error("Kopyalama işlemi başarısız")}document.body.removeChild(i)};return(0,r.jsx)(h.Z,{sx:{display:"flex",alignItems:"center",position:"relative",minHeight:"240px",background:"#EA5455"},children:(0,r.jsxs)(j.Z,{children:[(0,r.jsxs)(o.Z,{sx:{position:"relative",zIndex:100},children:[(0,r.jsx)(d.Z,{variant:"h5",sx:{mb:.5,color:"white"},children:"Bayi Referans Kodunuz"}),(0,r.jsx)(o.Z,{sx:{background:"#ffffffb5",width:"min-content",mt:2,mb:2,borderRadius:"5px",cursor:"pointer"},onClick:()=>t(i),children:(0,r.jsx)(d.Z,{variant:"h1",sx:{color:"#EA5455",padding:"0.5rem 1.5rem"},children:i})}),(0,r.jsx)(d.Z,{variant:"body2",sx:{color:"white"},children:"* Bu kodu \xfcye olacak kullanıcı ile paylaşınız."})]}),(0,r.jsx)(V,{width:200,alt:"congratulations john",src:"/images/referenceHand.png"})]})})};var U=function(e){let{credit:i,loading:t}=e,n=i.totalCredit-i.spentCredit,l=0===n?0:n/i.totalCredit*100;return(0,r.jsx)(h.Z,{sx:{minHeight:"240px",height:"240px"},children:(0,r.jsx)(j.Z,{sx:{p:e=>"".concat(e.spacing(5)," !important"),height:"100%"},children:t||!i?(0,r.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",height:"100%",justifyContent:"center"},children:(0,r.jsx)(c.Z,{sx:{mb:4}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{sx:{gap:2,mb:10,display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Kont\xf6r Bilgileri (T\xfcm Zamanlar)"}),(0,r.jsxs)(d.Z,{variant:"h4",sx:{color:"text.secondary"},children:[Intl.NumberFormat("tr-TR").format((null==i?void 0:i.totalCredit)?null==i?void 0:i.totalCredit:0)," Kont\xf6r"]})]})}),(0,r.jsxs)(o.Z,{sx:{mb:3.5,gap:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(o.Z,{sx:{py:2.25,display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(o.Z,{sx:{mb:2.5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"light",color:"info",variant:"rounded",sx:{mr:1.5,height:24,width:24},children:(0,r.jsx)(Z.Z,{icon:"tabler:wallet",fontSize:"1.125rem"})}),(0,r.jsx)(d.Z,{sx:{color:"text.secondary"},children:"Kalan"})]}),(0,r.jsxs)(d.Z,{variant:"h6",children:[Intl.NumberFormat("tr-TR").format(n)," Kont\xf6r"]})]}),(0,r.jsx)(C.Z,{flexItem:!0,sx:{m:0},orientation:"vertical",children:(0,r.jsxs)(y.Z,{skin:"light",color:"secondary",sx:{height:34,width:34,fontSize:"0.6875rem",color:"black"},children:["%",l.toFixed(0)]})}),(0,r.jsxs)(o.Z,{sx:{py:2.25,display:"flex",alignItems:"flex-end",flexDirection:"column"},children:[(0,r.jsxs)(o.Z,{sx:{mb:2.5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(d.Z,{sx:{mr:1.5,color:"text.secondary"},children:"Harcanan"}),(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",sx:{height:24,width:24},children:(0,r.jsx)(Z.Z,{icon:"tabler:shopping-cart",fontSize:"1.125rem"})})]}),(0,r.jsxs)(d.Z,{variant:"h6",children:[Intl.NumberFormat("tr-TR").format((null==i?void 0:i.spentCredit)?null==i?void 0:i.spentCredit:0)," Kont\xf6r"]})]})]}),(0,r.jsx)(I.Z,{value:l,color:"success",variant:"determinate",sx:{height:10,"& .MuiLinearProgress-bar":{borderTopRightRadius:0,borderBottomRightRadius:0}}})," "]})})})};let q=e=>{let{total:i,month:t}=e;return(0,r.jsx)(h.Z,{sx:{height:"240px",background:"#0661B4"},children:(0,r.jsx)(j.Z,{children:(0,r.jsxs)(o.Z,{sx:{gap:2,display:"flex",alignItems:"stretch",justifyContent:"space-between"},children:[(0,r.jsxs)(o.Z,{sx:{gap:3,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{variant:"h5",sx:{color:"white",mb:1},children:"Kazan\xe7 Raporu"}),(0,r.jsx)(d.Z,{variant:"body",sx:{color:"whitesmoke"},children:"Bu ay"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)(d.Z,{variant:"h3",sx:{color:"white",mb:1},children:[Intl.NumberFormat("tr-TR").format(t)," TL"]})}),(0,r.jsx)("div",{children:(0,r.jsx)(d.Z,{variant:"body2",sx:{color:"whitesmoke"},children:"T\xfcm zamanlar"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(d.Z,{variant:"h5",sx:{color:"white"},children:[Intl.NumberFormat("tr-TR").format(i)," TL"]})})]}),(0,r.jsx)("img",{src:"/images/wallet.png",alt:"wallet",height:"185px"})]})})})},X=()=>{var e;let i=(0,L.I0)(),[t,l]=(0,n.useState)(!0),s=(0,m.Z)(),u=(0,a.a)(),{settings:f}=(0,p.r)(),{notifications:j,reportDetail:Z,reportCountWithMonth:y,reportDetailLoading:b,userCredit:v,userCreditLoading:w,userAllOrders:C,userAllOrdersLoading:I,userAllDemands:D,userAllDemandsLoading:R,resellerAllCreditValue:T,resellerAllCreditValueLoading:F,resellerPaymentMonth:A,resellerPaymentMonthLoading:E,resellerCode:S}=(0,L.v9)(e=>({notifications:e.notification.notifications,reportDetail:e.report.reportDetail,reportCountWithMonth:e.report.reportCountWithMonth,reportDetailLoading:e.report.reportDetailLoading,userCredit:e.user.userCredit,userCreditLoading:e.user.userCreditLoading,userAllOrders:e.user.userAllOrders,userAllOrdersLoading:e.user.userAllOrdersLoading,userAllDemands:e.user.userAllDemands,userAllDemandsLoading:e.user.userAllDemandsLoading,resellerAllCreditValue:e.user.resellerAllCreditValue,resellerAllCreditValueLoading:e.user.resellerAllCreditValueLoading,resellerPaymentMonth:e.user.resellerPaymentMonth,resellerPaymentMonthLoading:e.user.resellerPaymentMonthLoading,resellerCode:e.user.resellerCode}),L.wU);return(0,n.useEffect)(()=>{let e=async()=>{try{await i((0,z.nZ)())}catch(e){console.log("Fetch Notifications Error:",e)}try{await i((0,K.WR)())}catch(e){console.log("Fetch User Credit Error:",e)}if("Reseller"===u.user.role){try{await i((0,K.qR)(u.user.id))}catch(e){console.log("Fetch Reseller All Credit Value Detail Error:",e)}try{await i((0,K.F9)())}catch(e){console.log("Fetch Reseller Code Error:",e)}try{await i((0,K._H)())}catch(e){console.log("Fetch Reseller Payment Value Detail Error:",e)}}if("Reseller"!=u.user.role){try{await i((0,M.vJ)())}catch(e){console.log("Fetch Report Detail Error:",e)}try{await i((0,M.t6)())}catch(e){console.log("Fetch Report Count Error:",e)}}if("Admin"===u.user.role){try{await i((0,K.h_)())}catch(e){console.log("Fetch All Orders Error:",e)}try{await i((0,K.ju)())}catch(e){console.log("Fetch All Demands Error:",e)}}l(!1)};e()},[u.user.id,u.user.role,i]),(0,r.jsx)(g,{children:t?(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[(0,r.jsx)(c.Z,{disableShrink:!0,sx:{mt:6,mb:4}}),(0,r.jsx)(d.Z,{children:"Y\xfckleniyor..."})]}):(0,r.jsxs)(x.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,lg:7,children:0!=j.filter(e=>e.isActive).length?(0,r.jsx)(H,{data:j.filter(e=>e.isActive)}):(0,r.jsx)(h.Z,{sx:{position:"relative",backgroundColor:"primary.main",minHeight:"240px",height:"240px",[s.breakpoints.down("sm")]:{height:"auto"}},children:(0,r.jsx)(o.Z,{sx:{p:6,"& .MuiTypography-root":{color:"common.white"},minHeight:"240px !important",background:"primary.main"},children:(0,r.jsxs)(x.ZP,{container:!0,sx:{alignItems:"center"},spacing:12,children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:8,sx:{order:[2,1]},children:(0,r.jsx)(d.Z,{variant:"h5",sx:{mt:20,mb:3,[s.breakpoints.down("sm")]:{mt:0}},children:"Aktif bildirim bulunamadı!"})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,sm:4,sx:{order:[1,2],textAlign:"center","& img":{height:"220px !important",maxWidth:"none !important",[s.breakpoints.up("sm")]:{top:"50%",position:"absolute",right:s.spacing(6),transform:"translateY(-50%)"}}},children:(0,r.jsx)("img",{src:"/images/avatars/anons.png",alt:"bildirim"})})]})})})}),"Reseller"===u.user.role?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,lg:5,sx:{display:"flex",flexDirection:"column",gap:"1rem"},children:(0,r.jsx)(U,{credit:T,loading:F})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,lg:5,sx:{display:"flex",flexDirection:"column",gap:"1rem"},children:(0,r.jsxs)(x.ZP,{container:!0,spacing:4,children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:12,children:(0,r.jsx)(Y,{code:S})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,md:6,lg:12,children:(0,r.jsx)(q,{total:null==T?void 0:T.totalPrice,month:null===(e=A[5])||void 0===e?void 0:e.totalPrice})})]})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,lg:5,sx:{display:"flex",flexDirection:"column",gap:"1rem"},children:(0,r.jsx)(P,{credit:v,loading:w})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,lg:7,children:(0,r.jsx)(k,{reportDetail:Z,data:y,loading:b})})]}),"Admin"===u.user.role?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.ZP,{item:!0,xs:12,lg:5,children:(0,r.jsx)(O,{demands:D,loading:R})}),(0,r.jsx)(x.ZP,{item:!0,xs:12,xl:7,children:(0,r.jsx)(N,{orders:C,loading:I})})]}):null]})})};X.acl={action:"read",subject:"Home.Read"};var J=X}},function(e){e.O(0,[4732,2317,9774,2888,179],function(){return e(e.s=38862)}),_N_E=e.O()}]);