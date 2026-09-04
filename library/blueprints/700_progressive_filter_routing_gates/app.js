(() => {
const NS="http://www.w3.org/2000/svg";
const viewport=document.querySelector("#viewport"), world=document.querySelector("#world");
const svg=document.querySelector("#pipes"), nodes=document.querySelector("#nodes");
const rain=document.querySelector("#rain"), travellers=document.querySelector("#travellers");
const levelLabel=document.querySelector("#levelLabel");
const backBtn=document.querySelector("#back"), resetBtn=document.querySelector("#reset"), autoBtn=document.querySelector("#autoDemo");

const levels={
 root:{title:"LEVEL 1 · MIXED INPUT",input:"MIXED",outputs:[
   {id:"letters",name:"CHARACTERS",sample:["A","b","K","x","M","q"]},
   {id:"numbers",name:"NUMBERS",sample:["7","3","42","9","0","16"]},
   {id:"symbols",name:"SYMBOLS",sample:["#","△","@","+","◇","×"]}
 ]},
 letters:{title:"LEVEL 2 · CHARACTERS",input:"CHARACTERS",outputs:[
   {id:"upper",name:"CAPITAL",sample:["A","B","C","K","M","Z"]},
   {id:"lower",name:"LOWERCASE",sample:["a","b","c","q","x","z"]}
 ]},
 numbers:{title:"LEVEL 2 · NUMBERS",input:"NUMBERS",outputs:[
   {id:"small",name:"0 — 4",sample:["0","1","2","3","4"]},
   {id:"large",name:"5 — 9",sample:["5","6","7","8","9"]}
 ]},
 symbols:{title:"LEVEL 2 · SYMBOLS",input:"SYMBOLS",outputs:[
   {id:"math",name:"MATH",sample:["+","−","×","÷","="]},
   {id:"marks",name:"MARKS",sample:["#","@","!","?","&"]}
 ]},
 upper:{title:"LEVEL 3 · CAPITAL CHARACTERS",input:"CAPITAL",alphabet:true},
 lower:{title:"LEVEL 3 · LOWERCASE CHARACTERS",input:"LOWERCASE",alphabet:true},
 small:{title:"LEVEL 3 · NUMBER GROUP",input:"0 — 4",final:["0","1","2","3","4"]},
 large:{title:"LEVEL 3 · NUMBER GROUP",input:"5 — 9",final:["5","6","7","8","9"]},
 math:{title:"LEVEL 3 · MATH SYMBOLS",input:"MATH",final:["+","−","×","÷","="]},
 marks:{title:"LEVEL 3 · MARKS",input:"MARKS",final:["#","@","!","?","&"]}
};
let current="root", history=[], loops=[], rainLoop=null;

function clearLoops(){loops.forEach(t=>t.kill());loops=[];if(rainLoop)rainLoop.kill();rainLoop=null;gsap.killTweensOf("*");}
function dims(){return {w:viewport.clientWidth,h:viewport.clientHeight}}
function station(x,y,name,cls="output",sub=""){
 const el=document.createElement("button");el.className=`station ${cls}`;
 el.style.left=x+"px";el.style.top=y+"px";
 el.innerHTML=`<div><div class="name">${name}</div><div class="count">${sub}</div></div>`;
 nodes.appendChild(el);return el;
}
function path(a,b,bend=0){
 const p=document.createElementNS(NS,"path");
 const mid=(a.y+b.y)/2;
 p.setAttribute("d",`M${a.x},${a.y} C${a.x+bend},${mid} ${b.x-bend},${mid} ${b.x},${b.y}`);
 return p;
}
function pipe(a,b,bend=0){
 const base=path(a,b,bend), core=path(a,b,bend), flow=path(a,b,bend);
 base.setAttribute("class","pipe");core.setAttribute("class","pipe-core");flow.setAttribute("class","pipe-flow");
 svg.append(base,core,flow);
 loops.push(gsap.to(flow,{strokeDashoffset:-72,duration:1.4,repeat:-1,ease:"none"}));
 return core;
}
function tokenOnPath(p,text,delay){
 const el=document.createElement("div");el.className="token";el.textContent=text;travellers.appendChild(el);
 const len=p.getTotalLength(), proxy={v:0};
 const t=gsap.to(proxy,{v:len,duration:2.2,delay,repeat:-1,repeatDelay:.7,ease:"none",
   onUpdate(){const q=p.getPointAtLength(proxy.v);gsap.set(el,{left:q.x,top:q.y,scale:.75+proxy.v/len*.25})}});
 loops.push(t);
}
function inputRain(gate){
 const chars=["A","7","#","b","△","3","K","@","x","9","◇","M","+","q","42","Z","×","2"];
 for(let i=0;i<46;i++){
   const el=document.createElement("div");el.className="rain-token";el.textContent=chars[i%chars.length];
   rain.appendChild(el);
   const x=gate.x+((i%11)-5)*16+Math.random()*12;
   gsap.set(el,{left:x,top:-35-Math.random()*220,rotation:Math.random()*50-25});
   const t=gsap.to(el,{top:gate.y-20,left:gate.x+(Math.random()*70-35),rotation:`+=${Math.random()*180-90}`,
     duration:1.5+Math.random()*1.7,delay:Math.random()*2.4,repeat:-1,repeatDelay:Math.random()*.8,ease:"power1.in"});
   loops.push(t);
 }
}
function render(id){
 clearLoops();svg.innerHTML="";nodes.innerHTML="";rain.innerHTML="";travellers.innerHTML="";
 gsap.set(world,{x:0,y:0,scale:1});
 const L=levels[id], {w,h}=dims();levelLabel.textContent=L.title;
 svg.setAttribute("viewBox",`0 0 ${w} ${h}`);
 const gate={x:w*.5,y:h*.30};
 station(gate.x,gate.y,L.input,"gate","FILTER GATE");
 inputRain(gate);

 let outputs=[];
 if(L.alphabet){
   const letters=L.input==="CAPITAL"?"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""):"abcdefghijklmnopqrstuvwxyz".split("");
   const cols=13, startY=h*.59, gapX=Math.min(55,w*.062), gapY=86;
   letters.forEach((ch,i)=>{
     const row=Math.floor(i/cols), col=i%cols;
     const total=Math.min(cols,letters.length-row*cols);
     const x=w*.5+(col-(total-1)/2)*gapX, y=startY+row*gapY;
     outputs.push({x,y,name:ch,sample:[ch]});
   });
 } else if(L.final){
   const n=L.final.length;
   L.final.forEach((ch,i)=>outputs.push({x:w*.5+(i-(n-1)/2)*Math.min(120,w*.14),y:h*.67,name:ch,sample:[ch]}));
 } else {
   const n=L.outputs.length;
   L.outputs.forEach((o,i)=>outputs.push({...o,x:w*.5+(i-(n-1)/2)*Math.min(260,w*.27),y:h*.68}));
 }

 outputs.forEach((o,i)=>{
   const core=pipe({x:gate.x,y:gate.y+44},{x:o.x,y:o.y-36},(i-(outputs.length-1)/2)*-45);
   const el=station(o.x,o.y,o.name,"output",o.sample?.slice(0,4).join("  ")||"");
   if(o.id){el.dataset.next=o.id;el.addEventListener("click",()=>enter(o.id,el));}
   tokenOnPath(core,o.sample?.[i%o.sample.length]||o.name, i*.42);
 });
}
function enter(id,el){
 const r=el.getBoundingClientRect(), vr=viewport.getBoundingClientRect();
 const x=r.left-vr.left+r.width/2,y=r.top-vr.top+r.height/2;
 const tl=gsap.timeline({onComplete(){history.push(current);current=id;render(id)}});
 tl.to(world,{x:viewport.clientWidth/2-x,y:viewport.clientHeight/2-y,scale:2.15,duration:.75,ease:"power3.inOut"})
   .to(world,{opacity:0,duration:.2},"-=.18")
   .set(world,{opacity:1});
}
backBtn.addEventListener("click",()=>{if(!history.length)return;current=history.pop();render(current)});
resetBtn.addEventListener("click",()=>{history=[];current="root";render(current)});
window.addEventListener("resize",()=>{clearTimeout(window.__gateR);window.__gateR=setTimeout(()=>render(current),150)});
render(current);

let autoDemoTimer=null,autoSteps=[];
function stopAutoDemo(){if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;}autoSteps.forEach(clearTimeout);autoSteps=[];autoBtn.classList.remove("is-running");autoBtn.textContent="AUTO DEMO";}
function enterNext(id){const el=nodes.querySelector(`[data-next="${id}"]`);if(el)enter(id,el);}
function autoDemo(){stopAutoDemo();autoBtn.classList.add("is-running");autoBtn.textContent="STOP DEMO";
 const cycle=()=>{history=[];current="root";render(current);autoSteps.push(setTimeout(()=>enterNext("letters"),2500),setTimeout(()=>enterNext("upper"),5400));autoDemoTimer=setTimeout(cycle,10000)};cycle();}
autoBtn.addEventListener("click",()=>autoDemoTimer?stopAutoDemo():autoDemo());
resetBtn.addEventListener("click",stopAutoDemo);

})();