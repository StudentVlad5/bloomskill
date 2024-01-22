"use strict";(self.webpackChunkevent_shop=self.webpackChunkevent_shop||[]).push([[596],{4313:(n,e,t)=>{t.d(e,{z:()=>C});var o,r,i,a,s,d,l,c,p=t(5705),m=t(8007),h=t(2791),u=t(9230),x=t(4420),f=t(8917),g=t(9614),b=t(168),w=t(6487),k=t(8126),v=t(1933);const y=(0,w.ZP)(p.l0)(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* gap: 30px; */\n\n  @media screen and (min-width: ",") {\n    gap: 45px;\n    padding: 0 70px;\n  }\n"])),k.r.breakpoints.desktop),j=w.ZP.div(r||(r=(0,b.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n\n  @media screen and (min-width: ",") {\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 70px;\n  }\n\n  & > div {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 100%;\n  }\n"])),k.r.breakpoints.tablet,k.r.breakpoints.desktop),Z=w.ZP.label(i||(i=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  height: 100%;\n"]))),z=w.ZP.span(a||(a=(0,b.Z)(["\n  margin-bottom: 15px;\n\n  font-family: ",";\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: ",";\n"])),k.r.fonts[0],k.r.colors.grey1),q=(0,w.ZP)(p.gN)(s||(s=(0,b.Z)(["\n  width: 100%;\n  padding: 15px;\n\n  font-family: ",";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n\n  background: ",";\n  border-color: transparent;\n  border: 1px solid ",";\n  border-radius: 10px;\n\n  @media screen and (min-width: ",") {\n  }\n\n  @media screen and (min-width: ",") {\n    max-width: 530px;\n    padding: 25px 30px;\n  }\n\n  &:focus-visible {\n    border: 0.5px solid ",";\n    outline: none;\n  }\n\n  &::placeholder {\n    color: ",";\n    font-family: ",";\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n\n  &:focus::placeholder {\n    color: transparent;\n  }\n"])),k.r.fonts[0],k.r.colors.grey2,k.r.colors.white,k.r.colors.grey2,k.r.breakpoints.tablet,k.r.breakpoints.desktop,k.r.colors.accent,k.r.colors.grey2,k.r.fonts[0]),P=w.ZP.span(d||(d=(0,b.Z)(["\n  position: absolute;\n  bottom: -10px;\n  right: 0;\n  z-index: 2;\n\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 8px;\n  text-align: right;\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 12px;\n  }\n"])),k.r.fonts[0],k.r.colors.red,k.r.breakpoints.tablet),S=(0,w.ZP)(v.xn)(l||(l=(0,b.Z)(["\n  margin-top: 30px;\n  @media screen and (min-width: ",") {\n    margin-top: 0;\n  }\n"])),k.r.breakpoints.desktop),_=w.ZP.textarea(c||(c=(0,b.Z)(["\n  height: 158px;\n  padding: 15px;\n\n  font-family: ",";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  /* \n  @media screen and (min-width: ",") {\n  } */\n\n  @media screen and (min-width: ",") {\n    height: 100%;\n    max-width: 530px;\n    padding: 25px 30px;\n  }\n\n  &:focus-visible {\n    border: 0.5px solid ",";\n    outline: none;\n  }\n\n  &::placeholder {\n    color: ",";\n    font-family: ",";\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n  }\n"])),k.r.fonts[0],k.r.colors.grey2,k.r.colors.white,k.r.colors.grey2,k.r.breakpoints.tablet,k.r.breakpoints.desktop,k.r.colors.accent,k.r.colors.grey2,k.r.fonts[0]);var F=t(3329);const C=n=>{let{specialist:e}=n;const[t,o]=(0,h.useState)(""),[r,i]=(0,h.useState)(!1),{t:a}=(0,u.$G)(),s=(0,x.I0)();const d=m.Ry().shape({name:m.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:m.Z_().email("Invalid email").required("Required"),message:m.Z_().required("Required")});return(0,F.jsx)(p.J9,{initialValues:{name:"",email:"",message:"",specialistId:null!==e&&void 0!==e&&e.specialistId?e.specialistId:""},onSubmit:(n,e)=>{let{setSubmitting:r,resetForm:a}=e;!async function(n){i(!0);try{const{data:e}=await(0,f.nG)("/messages",n);if(s((0,g.m6)({...e})),!e)onFetchError("Whoops, something went wrong")}catch(t){o(t)}finally{i(!1)}}(n),r(!1),a()},enableReinitialize:!0,validationSchema:d,children:n=>{let{handleChange:t,handleSubmit:o,setFieldValue:r,resetForm:i,isSubmitting:s,values:d,errors:l,touched:c}=n;return(0,F.jsxs)(y,{autoComplete:"off",onSubmit:o,onChange:t,children:[(0,F.jsxs)(j,{children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)(Z,{htmlFor:"name",children:[(0,F.jsx)(z,{children:a("\u0406\u043c\u2019\u044f")}),(0,F.jsx)(q,{type:"text",name:"name",id:"name",placeholder:null!==e&&void 0!==e&&e.name?e.name:"Olga",value:d.name,required:!0}),l.name&&c.name?(0,F.jsx)(P,{children:l.name}):null]}),(0,F.jsxs)(Z,{htmlFor:"email",children:[(0,F.jsx)(z,{children:a("E-mail")}),(0,F.jsx)(q,{type:"email",name:"email",id:"email",placeholder:"test@gmail.com",value:d.email,required:!0}),l.email&&c.email?(0,F.jsx)(P,{children:l.email}):null]})]}),(0,F.jsxs)(Z,{htmlFor:"message",children:[(0,F.jsx)(z,{children:a("\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f")}),(0,F.jsx)(_,{type:"text",name:"message",id:"message",placeholder:a("\u041f\u0440\u0438\u0432\u0456\u0442! \u042f \u0445\u043e\u0442\u0456\u0432 \u0431\u0438 \u0437\u0430\u043f\u0438\u0442\u0430\u0442\u0438 \u043f\u0440\u043e..."),value:d.message,required:!0,rows:"6",cols:"25",onChange:n=>{r("message",n.target.value)}}),l.state&&c.state?(0,F.jsx)(P,{children:l.state}):null]})]}),(0,F.jsx)(S,{type:"submit",disabled:s,"aria-label":"Submit",children:a("\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438")})]})}})}},1933:(n,e,t)=>{t.d(e,{TU:()=>c,tW:()=>m,xn:()=>p});var o,r,i,a=t(168),s=t(1087),d=t(6487),l=t(8126);const c=d.ZP.button(o||(o=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-width: 125px;\n  padding: 13px 23px;\n  margin: 0 auto;\n\n  font-family: ",";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  color: ",";\n  text-transform: uppercase;\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 7px;\n\n  cursor: pointer;\n  transition: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 14px;\n    padding: 18px 33px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n  }\n  &:disabled {\n    color: ",";\n    background-color: ",";\n    opacity: 0.4;\n    border: 1px solid ",";\n  }\n"])),l.r.fonts[0],l.r.colors.grey1,l.r.colors.fon,l.r.colors.grey1,l.r.transition,l.r.breakpoints.tablet,l.r.breakpoints.desktop,l.r.colors.white,l.r.colors.accent,l.r.colors.accent,l.r.colors.brown2,l.r.colors.grey1,l.r.colors.accent),p=d.ZP.button(r||(r=(0,a.Z)(["\n  min-width: 220px;\n  padding: 13px 23px;\n  margin: 0 auto;\n\n  font-family: ",";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: ",";\n\n  border-radius: 7px;\n  background: ",";\n  border: 1px solid ",";\n\n  cursor: pointer;\n  transition: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: transparent;\n    border: 1px solid ",";\n  }\n  &:disabled,\n  &[disabled]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n"])),l.r.fonts[0],l.r.colors.white,l.r.colors.accent,l.r.colors.accent,l.r.transition,l.r.breakpoints.desktop,l.r.colors.grey2,l.r.colors.grey2),m=(0,d.ZP)(s.OL)(i||(i=(0,a.Z)(["\n  position: relative;\n  padding: 2px;\n\n  color: ",";\n  font-family: ",";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%; /* 24px */\n\n  transition: ",";\n\n  @media screen and (min-width: ",") {\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n\n  &::before,\n  &::after,\n  & span::after,\n  & span::before {\n    content: '';\n    position: absolute;\n    top: 100%;\n    bottom: 0;\n    left: -16px;\n    width: 1px;\n    background: ",";\n    transition: ",";\n  }\n\n  &::before {\n    right: -16px;\n    left: -16px;\n    width: auto;\n    background: 0;\n    border-right: 1px solid ",";\n    border-left: 1px solid ",";\n  }\n\n  &::after {\n    right: 0;\n    left: 0;\n    height: 1px;\n    width: auto;\n  }\n\n  & span {\n    position: relative;\n    display: inline-block;\n\n    &::before,\n    &::after {\n      top: -2px;\n      left: auto;\n      right: auto;\n      width: 0;\n      height: 1px;\n      transition: ",";\n    }\n\n    &::before {\n      left: -18px;\n    }\n\n    &::after {\n      right: -18px;\n    }\n  }\n\n  &:hover,\n  &:focus {\n    &::before {\n      top: 0;\n    }\n    &::after {\n      right: -16px;\n      left: -16px;\n    }\n\n    & span::before,\n    & span::after {\n      width: 60%;\n    }\n  }\n"])),l.r.colors.grey1,l.r.fonts[0],l.r.transition,l.r.breakpoints.tablet,l.r.breakpoints.desktop,l.r.colors.accent,l.r.transition,l.r.colors.accent,l.r.colors.accent,l.r.transition)},5065:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_});var o=t(2791),r=t(4116),i=t(9230),a=t(4313),s=t(8081),d=t(168),l=t(6487),c=t(8126);const p=t.p+"static/media/about_1.1ae91ae35b57e9bbbec2.jpg",m=t.p+"static/media/about_1.b739d60cffb9707da706.webp",h=t.p+"static/media/about_2.747f63fbde731f59e1da.jpg",u=t.p+"static/media/about_2.98f5e75f6dddc045479c.webp";var x,f,g,b,w,k;const v=(0,l.ZP)(s.$0)(x||(x=(0,d.Z)(["\n  @media screen and (min-width: ",") {\n  }\n"])),c.r.breakpoints.desktop),y=(0,l.ZP)(s.$0)(f||(f=(0,d.Z)(["\n  padding-bottom: 75px;\n\n  @media screen and (min-width: ",") {\n    padding-bottom: 120px;\n  }\n"])),c.r.breakpoints.desktop),j=l.ZP.ul(g||(g=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n\n  @media screen and (min-width: ",") {\n    gap: 60px;\n  }\n\n  & li {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n\n    @media screen and (min-width: ",") {\n      flex-direction: row;\n      gap: 60px;\n\n      &:nth-of-type(2) {\n        flex-direction: row-reverse;\n      }\n    }\n  }\n"])),c.r.breakpoints.desktop,c.r.breakpoints.desktop),Z=l.ZP.p(b||(b=(0,d.Z)(["\n  font-family: ",";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 20px;\n  }\n\n  @media screen and (min-width: ",") {\n    max-width: 631px;\n    font-size: 24px;\n  }\n"])),c.r.fonts[0],c.r.colors.grey2,c.r.breakpoints.tablet,c.r.breakpoints.desktop),z=l.ZP.div(w||(w=(0,d.Z)(["\n  width: 314px;\n  height: 171px;\n  overflow: hidden;\n  border-radius: 29px;\n\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: cover;\n\n  background-image: url(",");\n  background-image: -webkit-image-set(url(",") 1x);\n\n  @media screen and (min-width: ",") {\n    width: 545px;\n    height: 350px;\n  }\n"])),p,m,c.r.breakpoints.desktop),q=l.ZP.div(k||(k=(0,d.Z)(["\n  width: 314px;\n  height: 171px;\n  overflow: hidden;\n  border-radius: 29px;\n\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: cover;\n\n  background-image: url(",");\n  background-image: -webkit-image-set(url(",") 1x);\n\n  @media screen and (min-width: ",") {\n    width: 545px;\n    height: 257px;\n  }\n"])),h,u,c.r.breakpoints.desktop);var P=t(3329);const S=()=>{const{t:n}=(0,i.$G)();return(0,P.jsxs)(s.W2,{children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(s.Dx,{children:n("\u041f\u0440\u043e \u043d\u0430\u0441")}),(0,P.jsxs)(j,{children:[(0,P.jsxs)("li",{"data-aos":"fade-right","data-aos-easing":"linear","data-aos-duration":"1000",children:[(0,P.jsx)(Z,{children:n("Bienvenue sur BloomSkill - une oasis cr\xe9ative unique pour ceux qui aspirent \xe0 l'auto-d\xe9veloppement et \xe0 l'\xe9panouissement de leur potentiel cr\xe9atif. Chez BloomSkill, nous croyons profond\xe9ment en la puissance du d\xe9veloppement des comp\xe9tences cr\xe9atives et de la croissance personnelle. Notre plateforme est un espace num\xe9rique o\xf9 vous pouvez acqu\xe9rir de nouvelles comp\xe9tences et lib\xe9rer votre potentiel cr\xe9atif. Explorez une vari\xe9t\xe9 de cours, des ateliers, des sessions individuelles et des consultations de groupe couvrant un large \xe9ventail de domaines - de l'art de la photographie \xe0 la ma\xeetrise du tricot.")}),(0,P.jsx)(z,{})]}),(0,P.jsxs)("li",{"data-aos":"fade-left","data-aos-easing":"linear","data-aos-duration":"2000",children:[(0,P.jsx)(Z,{children:n("Notre objectif est de devenir votre guide dans le monde de la cr\xe9ativit\xe9, o\xf9 chacun peut trouver ce qui l'inspire et le fait progresser. Rejoignez notre communaut\xe9 unique de participants \xe0 des rencontres cr\xe9atives et d'experts. Ici, vous pourrez \xe9changer des id\xe9es, trouver de l'inspiration et \xe9tablir des liens pr\xe9cieux tout au long de votre apprentissage. Nous sommes pr\xeats \xe0 vous soutenir \xe0 chaque \xe9tape de ce voyage captivant. Bienvenue dans notre monde cr\xe9atif!")}),(0,P.jsx)(q,{})]})]})]}),(0,P.jsxs)(y,{children:[(0,P.jsxs)(s.Dx,{children:[n("\u0404 \u043f\u0438\u0442\u0430\u043d\u043d\u044f"),"?"]}),(0,P.jsx)(a.z,{})]})]})},_=()=>((0,o.useEffect)((()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r.H,{title:"AboutUs",description:"Information about us"}),(0,P.jsx)(S,{})]}))},4116:(n,e,t)=>{t.d(e,{H:()=>i});t(2791);var o=t(3050),r=t(3329);function i(n){let{title:e,description:t}=n;return(0,r.jsxs)(o.ql,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:t})]})}}}]);
//# sourceMappingURL=596.263df9de.chunk.js.map