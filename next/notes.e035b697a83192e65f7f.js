(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,t,a){"use strict";a.r(t);var o=a(22),s=a(40),l=a(4),n=a(0),r=a.n(n),c=a(24),i=a(9),m=Object(i.d)({NotesPanel:e=>({height:"100%",flexGrow:1,display:"flex",flexDirection:"column",padding:e.isMobile?"1rem":"0",width:"100%"}),NotesHeader:{display:"flex",marginBottom:"0.5rem","& h2":{fontSize:"1.25rem",fontWeight:500,letterSpacing:"0.05em",marginRight:"1rem",flex:"1 0 auto"}},NotesReset:{flex:"0 0 auto",alignSelf:"flex-start"},Notepad:{flex:"1 0 auto",marginBottom:"1rem",fontSize:"1.25rem",resize:"vertical"}}),f=a(91);t.default=function(){const e=l.b+"notes",{t:t}=Object(f.a)(),a=Object(c.c)(o.b),n=Object(c.c)(o.c),i=m({isMobile:a,orientation:n}),[N,d]=r.a.useState(localStorage.getItem(e)||"");return r.a.useEffect(()=>{localStorage.setItem(e,N)},[N]),r.a.createElement("div",{className:i.NotesPanel},!a&&r.a.createElement("div",{className:i.NotesHeader},r.a.createElement("h2",null,t("controls.notes")),r.a.createElement(s.b,{className:i.NotesReset,onClick:()=>{d("")}},t("controls.resetNotes"))),r.a.createElement("textarea",{className:i.Notepad,name:"notes",onChange:e=>{d(e.target.value)},value:N}),a&&r.a.createElement(s.b,{className:i.NotesReset,onClick:()=>{d("")}},t("controls.resetNotes")))}}}]);