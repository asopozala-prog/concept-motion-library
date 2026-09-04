const CFG={count:50,groups:[
["number","NUMBER"],["symbol","SYMBOL"],["text","TEXT"],["numberText","NUMBER + TEXT"],["numberSymbol","NUMBER + SYMBOL"],["mixed","MIXED"]]};
const syms=["#","△","◇","○","§","※","✦","□","+"];const AZ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const stage=document.querySelector("#stage"),field=document.querySelector("#activeField"),layer=document.querySelector("#components"),groups=document.querySelector("#groups"),status=document.querySelector("#status"),resetBtn=document.querySelector("#reset"),autoBtn=document.querySelector("#autoDemo");
let ps=[],active=null,last=performance.now();
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.floor(Math.random()*a.length)];
const digs=n=>Array.from({length:n},()=>Math.floor(Math.random()*10)).join("");
const txt=n=>Array.from({length:n},()=>pick(AZ)).join("");
function data(i){let k=CFG.groups[i%CFG.groups.length][0],s="";if(k==="number")s=[digs(2),digs(2),digs(2)].slice(0,Math.ceil(rnd(1,4))).join(" ");if(k==="symbol")s=Array.from({length:Math.floor(rnd(1,4))},()=>pick(syms)).join(" ");if(k==="text")s=txt(Math.floor(rnd(2,6)));if(k==="numberText")s=`${digs(2)} ${txt(2)}`;if(k==="numberSymbol")s=`${digs(2)} ${pick(syms)}`;if(k==="mixed")s=`${pick(syms)} ${digs(1)} ${txt(2)}`;return{k,s}}
function geo(el){let S=stage.getBoundingClientRect(),r=el.getBoundingClientRect();return{x:r.left-S.left+r.width/2,y:r.top-S.top+r.height/2,w:r.width,h:r.height}}
CFG.groups.forEach(([id,label],i)=>{let b=document.createElement("button");b.className=`group g${i}`;b.dataset.id=id;b.innerHTML=`<div><b>${label}</b><em>condition</em></div>`;b.onclick=()=>select(id,b);groups.appendChild(b)});
let F=geo(field);for(let i=0;i<CFG.count;i++){let d=data(i),e=document.createElement("div");e.className="component";e.textContent=d.s;layer.appendChild(e);let a=rnd(0,Math.PI*2),q=Math.sqrt(Math.random())*.42,p={d,e,x:F.x+Math.cos(a)*F.w*q,y:F.y+Math.sin(a)*F.h*q,vx:rnd(-30,30),vy:rnd(-30,30),mode:"free",target:null};ps.push(p);gsap.set(e,{left:p.x,top:p.y,rotation:rnd(-7,7)})}
function select(id,el){active=id;document.querySelectorAll(".group").forEach(x=>x.classList.toggle("active",x===el));let T=geo(el),n=0;
ps.forEach((p,i)=>{let match=p.d.k===id;if(match){n++;p.mode="transition";p.target=el;let a=rnd(0,Math.PI*2),q=rnd(.1,.58),x=T.x+Math.cos(a)*(T.w/2-20)*q,y=T.y+Math.sin(a)*(T.h/2-20)*q;gsap.killTweensOf(p);gsap.to(p,{x,y,duration:rnd(.65,1.1),delay:(i%10)*.018,ease:"power3.inOut",onComplete(){p.mode="group";let a=rnd(0,6.28),v=rnd(18,36);p.vx=Math.cos(a)*v;p.vy=Math.sin(a)*v}})}
else if(p.mode!=="free"){p.mode="transition";p.target=null;let C=geo(field),a=rnd(0,6.28),q=Math.sqrt(Math.random())*.38;gsap.killTweensOf(p);gsap.to(p,{x:C.x+Math.cos(a)*C.w*q,y:C.y+Math.sin(a)*C.h*q,duration:rnd(.7,1.1),ease:"power3.inOut",onComplete(){p.mode="free";p.vx=rnd(-30,30);p.vy=rnd(-30,30)}})}});status.textContent=`${n} / ${ps.length} match · ${el.innerText.split("\n")[0]}`}
function bounce(p,c,rx,ry){let dx=p.x-c.x,dy=p.y-c.y,q=dx*dx/(rx*rx)+dy*dy/(ry*ry);if(q>1){let sc=.985/Math.sqrt(q);p.x=c.x+dx*sc;p.y=c.y+dy*sc;let nx=dx/(rx*rx),ny=dy/(ry*ry),L=Math.hypot(nx,ny)||1;nx/=L;ny/=L;let dot=p.vx*nx+p.vy*ny;p.vx-=2*dot*nx;p.vy-=2*dot*ny}}
function resetExperiment(){
active=null;document.querySelectorAll(".group").forEach(x=>x.classList.remove("active"));let C=geo(field);
ps.forEach((p,i)=>{gsap.killTweensOf(p);p.mode="transition";p.target=null;let a=rnd(0,6.28),q=Math.sqrt(Math.random())*.38;
gsap.to(p,{x:C.x+Math.cos(a)*C.w*q,y:C.y+Math.sin(a)*C.h*q,duration:rnd(.55,.9),delay:(i%10)*.012,ease:"power3.inOut",onComplete(){p.mode="free";p.vx=rnd(-30,30);p.vy=rnd(-30,30)}})});
status.textContent=`${ps.length} persistent components · free field`;
}
resetBtn.addEventListener("click",resetExperiment);
function loop(now){let dt=Math.min(.033,(now-last)/1000);last=now;let C=geo(field);for(let p of ps){if(p.mode==="transition")continue;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.mode==="group"&&p.target){let G=geo(p.target);bounce(p,G,G.w/2-20,G.h/2-20)}else bounce(p,C,C.w/2-22,C.h/2-22);p.vx+=rnd(-5,5)*dt;p.vy+=rnd(-5,5)*dt;let v=Math.hypot(p.vx,p.vy);if(v>42){p.vx=p.vx/v*42;p.vy=p.vy/v*42}gsap.set(p.e,{left:p.x,top:p.y})}requestAnimationFrame(loop)}requestAnimationFrame(loop);
let autoDemoTimer=null;
function stopAutoDemo(){if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;}autoBtn.classList.remove("is-running");autoBtn.textContent="AUTO DEMO";}
function autoDemo(){stopAutoDemo();autoBtn.classList.add("is-running");autoBtn.textContent="STOP DEMO";
 const cycle=()=>{resetExperiment();
  setTimeout(()=>select("number",document.querySelector('[data-id="number"]')),900);
  setTimeout(()=>select("symbol",document.querySelector('[data-id="symbol"]')),3500);
  setTimeout(()=>select("mixed",document.querySelector('[data-id="mixed"]')),6100);
  setTimeout(()=>resetExperiment(),8200);
  autoDemoTimer=setTimeout(cycle,10000);
 };cycle();}
autoBtn.addEventListener("click",()=>autoDemoTimer?stopAutoDemo():autoDemo());
resetBtn.addEventListener("click",stopAutoDemo);
