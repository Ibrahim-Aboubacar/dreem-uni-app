import{r,u as $,a as X,j as e}from"./index-BDELPA6b.js";import{S as y}from"./svgs-B5uZsCGl.js";import{u as B,I as g}from"./Input-D1ajou34.js";import{L as S}from"./link-Bhx-j4P4.js";import{L as I}from"./loader-circle-By6vc7XF.js";function L({phone:l,setPhone:o}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-10 mt-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Register your account"}),e.jsx("p",{className:"text-xl text-black/50 font-semibold ",children:"Fill the details below to submit register account."})]}),e.jsxs("div",{className:"space-y-4 mb-10",children:[e.jsx(g.text,{label:"Username",name:"username",required:!0,placeholder:"Your username",preIcon:e.jsx(y.mailBox,{})}),e.jsx(g.text,{label:"Phone Number",name:"phone",value:l,onChange:c=>o(c.target.value),required:!0,placeholder:"(+233) 05X XXX XXXX",preIcon:e.jsx(y.phone,{})}),e.jsx(g.email,{label:"Email",name:"email",required:!0,placeholder:"Your email",preIcon:e.jsx(y.mailBox,{})}),e.jsx(g.password,{label:"New Password",name:"password",placeholder:"****************"}),e.jsx(g.password,{label:"Confirm Password",name:"password_confirmation",placeholder:"****************"}),e.jsx("div",{className:"",children:e.jsxs("p",{className:"font-semibold",children:["By signing in, you're agree to our"," ",e.jsx(S,{to:"/terms-and-condition",className:"text-primary",children:"Terms & Condition"})," ","and"," ",e.jsx(S,{to:"/privacy-policy",className:"text-primary",children:"Privacy Policy"}),". ",e.jsx("span",{className:"text-red-500",children:" *"})]})})]})]})}function E({phone:l,onSubmit:o}){const[c,P]=r.useState(""),[m,T]=r.useState(""),[i,C]=r.useState(""),[n,b]=r.useState(""),[x,O]=r.useState(""),[w,R]=r.useState(""),d=r.useRef(null),f=r.useRef(null),p=r.useRef(null),h=r.useRef(null),j=r.useRef(null),v=r.useRef(null);r.useEffect(()=>{d.current&&d.current.focus()},[]);function k(a){const t=a||`${c}${m}${i}${n}${x}${w}`;t.length==6?o(t):console.log({nope:t})}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-10 mt-10",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Check your Mail or Phone Number"}),e.jsxs("p",{className:"text-xl text-black/50 font-semibold ",children:["We've sent a 6-digit confirmation code to ",e.jsx("span",{className:"text-primary",children:l}),". Make sure you enter correct code."]})]}),e.jsxs("ol",{className:"flex gap-6 mb-10",children:[e.jsx(u,{ref:d,value:c,tabIndex:0,onChange:a=>{var N;const t=c.trim(),s=((N=a.target.value[0])==null?void 0:N.trim())||"";console.log({OTP1:typeof c,prev:t,value:s}),P(s),f.current&&t!=s&&s!=""&&f.current.focus()}}),e.jsx(u,{ref:f,value:m,onChange:a=>{var s;const t=((s=a.target.value[0])==null?void 0:s.trim())||"";T(t),d.current&&t==""?d.current.focus():p.current&&t!=""&&p.current.focus()}}),e.jsx(u,{ref:p,value:i,onChange:a=>{var s;const t=((s=a.target.value[0])==null?void 0:s.trim())||"";C(t),f.current&&t==""?f.current.focus():h.current&&t!=""&&h.current.focus()}}),e.jsx(u,{ref:h,value:n,onChange:a=>{var s;const t=((s=a.target.value[0])==null?void 0:s.trim())||"";b(t),p.current&&t==""?p.current.focus():j.current&&t!=""&&j.current.focus()}}),e.jsx(u,{ref:j,value:x,onChange:a=>{var s;const t=((s=a.target.value[0])==null?void 0:s.trim())||"";O(t),h.current&&t==""?h.current.focus():v.current&&t!=""&&v.current.focus()}}),e.jsx(u,{ref:v,value:w,onChange:a=>{var s;const t=((s=a.target.value[0])==null?void 0:s.trim())||"";if(R(t),j.current&&t=="")j.current.focus();else if(v.current&&t!=""){console.log("submitting...");const N=`${c}${m}${i}${n}${x}${t}`;k(N)}}})]})]})}function u({ref:l,value:o,onChange:c}){return e.jsx("li",{className:"shrink-0 size-16 border border-gray-400 bg-gray-200 text-5xl text-primary rounded flex items-center gap-2 focus-within:border-primary",children:e.jsx("input",{ref:l,type:"text",value:o,onChange:c,className:"w-full h-full grid place-content-center text-center rounded"})})}const Y=function(){const[o,c]=r.useState(!1),P=$(),m=X(),T=B(),[i,C]=r.useState(""),[n,b]=r.useState(1);function x(O){c(!0),console.log(O),setTimeout(()=>{m({to:"/app/dashboard",replace:!0})},1500)}return e.jsx("div",{className:" flex justify-center max-h-screen overflow-auto",children:e.jsxs("div",{className:"w-[555px] mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mt-5",children:[T||n>=2?e.jsxs("button",{className:"flex gap-2 items-center text-slate-600 cursor-pointer",onClick:()=>{n>=2?(b(1),c(!1)):P.history.back()},children:[e.jsx(y.caretBack,{}),e.jsx("span",{className:"-mt-0.5",children:"Back"})]}):e.jsx("span",{}),e.jsxs("div",{className:"",children:[e.jsxs("p",{className:"text-sm text-slate-500 text-right",children:["Step ",n," of 2"]}),e.jsx("p",{className:"text-sm text-slate-600 font-semibold text-right",children:"Signup"})]})]}),n==1&&e.jsx(L,{phone:i,setPhone:C}),n==2&&e.jsx(E,{phone:i,onSubmit:x}),e.jsxs("div",{className:"flex justify-center mb-10",children:[n==1&&e.jsx("button",{className:"bg-primary w-72 h-14 px-10 py-2 rounded text-white cursor-pointer grid place-content-center",onClick:()=>b(2),children:"Continue"}),n==2&&e.jsxs("button",{disabled:o,className:"bg-primary disabled:bg-gray-400 w-72 h-14 px-10 py-2 rounded text-white cursor-pointer grid place-content-center",children:[o&&e.jsx("span",{className:"size-5 grid place-content-center animate-spin",children:e.jsx(I,{})}),!o&&"Reset Password"]})]}),e.jsxs("div",{className:"pb-10",children:[n==1&&e.jsxs("p",{className:"font-semibold text-slate-600 text-center",children:["Already have an account?",e.jsxs(S,{to:"/login",className:"text-primary",children:[" ","Login"]})]}),n==2&&e.jsxs("p",{className:"font-semibold text-slate-600 text-center",children:["Didn't Recieve code? ",e.jsx("button",{className:"text-primary",children:" Resend Code"})]})]})]})})};export{Y as component};
