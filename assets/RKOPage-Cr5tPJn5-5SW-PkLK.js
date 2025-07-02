import{f as c,v as a,F as u,l as d,N as t,R as f,k as m,H as k}from"./index-Bhzfcokq.js";import{T as p,R as x,V as h}from"./SearchWithFilter-DK6-i9WG-zXYICZnL.js";const y=m.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,l=[{name:"client",title:"Клиент",width:"50%"},{name:"bankAccount",title:"Банковский счёт",type:"number",width:"50%"}];class R{async getRKOList(s){return(await k.post("api/rko-list",{filters:s})).data}}const w=new R,j=e=>u({queryKey:["rko-list",e],queryFn:()=>w.getRKOList(e)}),F=()=>{const e=c(),[s,i]=a.useState(),{data:r}=j(s),n=a.useCallback(o=>{e(d.service.fullPath(o))},[e]);return t.jsxs(y,{children:[t.jsx(f,{font:"Header/H1",children:"Договора РКО"}),t.jsx(p,{selectPlaceholder:"Выберите поле из выпадающего списка",columnList:l,setFilters:i,searchPlaceholder:"Введите значение для поиска"}),t.jsx(x,{columnList:l,rowList:h(r),onRowClick:n,queryKey:"rko-list"})]})};export{F as default};
