import{N as H}from"./NativeField-D_51wDLT.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-kmstmYw1.js";const R={title:"Lecciones/2.3 Números, fechas y teclados virtuales/Componentes/NativeField",component:H,args:{defaultValue:2,hint:"Entre 1 y 12, en pasos de una persona.",label:"Número de asistentes",max:12,min:1,name:"attendees",step:1,type:"number"}},e={name:"Number"},a={args:{defaultValue:50,hint:"Un ajuste aproximado entre 0 y 100.",label:"Volumen",max:100,min:0,name:"volume",step:10,type:"range"}},n={name:"Date",args:{defaultValue:"2026-09-12",hint:void 0,label:"Fecha de llegada",max:"2026-09-30",min:"2026-09-01",name:"arrival-date",step:void 0,type:"date"}},t={args:{defaultValue:"10:30",hint:void 0,label:"Hora de llegada",max:"18:00",min:"09:00",name:"arrival-time",step:900,type:"time"}},r={args:{defaultValue:"2026-09",hint:void 0,label:"Mes de facturación",max:void 0,min:void 0,name:"billing-month",step:void 0,type:"month"}},o={args:{defaultValue:"2026-W37",hint:void 0,label:"Semana de planificación",max:void 0,min:void 0,name:"planning-week",step:void 0,type:"week"}},i={args:{defaultValue:"2026-09-12T10:30",hint:"Fecha y hora locales, sin zona horaria.",label:"Inicio de la cita",max:void 0,min:void 0,name:"appointment-start",step:void 0,type:"datetime-local"}},s={args:{defaultValue:"#0b5fff",hint:void 0,label:"Color del distintivo",max:void 0,min:void 0,name:"badge-color",step:void 0,type:"color"}},d={args:{defaultValue:void 0,hint:"Sigue siendo texto: puede conservar el cero inicial.",inputMode:"numeric",label:"Código de acceso",max:void 0,min:void 0,name:"access-code",step:void 0,type:"text"}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Number'
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    hint: 'Un ajuste aproximado entre 0 y 100.',
    label: 'Volumen',
    max: 100,
    min: 0,
    name: 'volume',
    step: 10,
    type: 'range'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Date',
  args: {
    defaultValue: '2026-09-12',
    hint: undefined,
    label: 'Fecha de llegada',
    max: '2026-09-30',
    min: '2026-09-01',
    name: 'arrival-date',
    step: undefined,
    type: 'date'
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,y,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultValue: '10:30',
    hint: undefined,
    label: 'Hora de llegada',
    max: '18:00',
    min: '09:00',
    name: 'arrival-time',
    step: 900,
    type: 'time'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var V,S,C;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: '2026-09',
    hint: undefined,
    label: 'Mes de facturación',
    max: undefined,
    min: undefined,
    name: 'billing-month',
    step: undefined,
    type: 'month'
  }
}`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var N,k,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    defaultValue: '2026-W37',
    hint: undefined,
    label: 'Semana de planificación',
    max: undefined,
    min: undefined,
    name: 'planning-week',
    step: undefined,
    type: 'week'
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,M,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: '2026-09-12T10:30',
    hint: 'Fecha y hora locales, sin zona horaria.',
    label: 'Inicio de la cita',
    max: undefined,
    min: undefined,
    name: 'appointment-start',
    step: undefined,
    type: 'datetime-local'
  }
}`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var w,W,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: '#0b5fff',
    hint: undefined,
    label: 'Color del distintivo',
    max: undefined,
    min: undefined,
    name: 'badge-color',
    step: undefined,
    type: 'color'
  }
}`,...(L=(W=s.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var j,z,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    hint: 'Sigue siendo texto: puede conservar el cero inicial.',
    inputMode: 'numeric',
    label: 'Código de acceso',
    max: undefined,
    min: undefined,
    name: 'access-code',
    step: undefined,
    type: 'text'
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const U=["Quantity","Range","CalendarDate","Time","Month","Week","LocalDateTime","Color","NumericKeyboard"];export{n as CalendarDate,s as Color,i as LocalDateTime,r as Month,d as NumericKeyboard,e as Quantity,a as Range,t as Time,o as Week,U as __namedExportsOrder,R as default};
