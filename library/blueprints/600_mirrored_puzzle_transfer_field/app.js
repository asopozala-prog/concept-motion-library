(() => {
const stage=document.querySelector("#stage");
const layer=document.querySelector("#pieces");
const mode=document.querySelector("#mode");
const resetBtn=document.querySelector("#reset");
const autoBtn=document.querySelector("#autoDemo");
const whiteBtn=document.querySelector("#whiteFull");
const blackBtn=document.querySelector("#blackFull");
const scatterBtn=document.querySelector("#scatter");

const COLS=8, ROWS=5, COUNT=COLS*ROWS;
let pieces=[], state="dual", seed=600;

function rand(a,b){
  seed=(seed*1664525+1013904223)>>>0;
  return a+(seed/4294967296)*(b-a);
}
function shuffle(a){
  for(let i=a.length-1;i>0;i--){const j=Math.floor(rand(0,i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function geometry(){
  const w=stage.clientWidth,h=stage.clientHeight;
  const puzzleW=Math.min(w*.31,430), puzzleH=puzzleW/1.25;
  const cellW=puzzleW/COLS, cellH=puzzleH/ROWS;
  const top=(h-puzzleH)/2;
  const leftX=w*.245-puzzleW/2, rightX=w*.755-puzzleW/2;
  return {w,h,puzzleW,puzzleH,cellW,cellH,top,leftX,rightX};
}
function home(i,side){
  const g=geometry(), row=Math.floor(i/COLS), col=i%COLS;
  const mirroredCol=COLS-1-col;
  const c=side==="white"?col:mirroredCol;
  return {
    x:(side==="white"?g.leftX:g.rightX)+c*g.cellW,
    y:g.top+row*g.cellH,
    width:g.cellW+1,height:g.cellH+1
  };
}
function build(){
  layer.innerHTML=""; pieces=[];
  const g=geometry();
  for(let i=0;i<COUNT;i++){
    const p=document.createElement("div");
    p.className="piece"; p.dataset.index=i;
    p.style.setProperty("--pw",`${g.cellW+1}px`);
    p.style.setProperty("--ph",`${g.cellH+1}px`);
    p.innerHTML=`<div class="piece-inner"><div class="face front">${String(i+1).padStart(2,"0")}</div><div class="face back">${String(i+1).padStart(2,"0")}</div></div>`;
    layer.appendChild(p);
    pieces.push({el:p,inner:p.querySelector(".piece-inner"),side:"white",floatTween:null});
    p.addEventListener("click",()=>transfer(i));
  }
}
function killFloat(p){
  if(p.floatTween){p.floatTween.kill();p.floatTween=null;}
  gsap.killTweensOf([p.el,p.inner]);
}
function place(p,i,side,duration=.85,delay=0){
  killFloat(p); p.side=side; p.el.dataset.side=side;
  const h=home(i,side);
  gsap.to(p.el,{left:h.x,top:h.y,width:h.width,height:h.height,x:0,y:0,z:0,rotationX:0,rotationY:0,rotationZ:0,scale:1,opacity:1,duration,delay,ease:"power3.inOut"});
  gsap.to(p.inner,{rotationY:side==="black"?180:0,rotationX:0,rotationZ:0,duration:duration*.8,delay,ease:"power2.inOut"});
}
function randomHalf(){
  state="dual"; mode.textContent="DUAL / TRANSFER";
  const ids=shuffle([...Array(COUNT).keys()]);
  const black=new Set(ids.slice(0,COUNT/2));
  pieces.forEach((p,i)=>place(p,i,black.has(i)?"black":"white",.9,rand(0,.16)));
}
function full(side){
  state="dual"; mode.textContent=side==="white"?"WHITE FULL":"BLACK FULL";
  pieces.forEach((p,i)=>place(p,i,side,.95,rand(0,.18)));
}
function transfer(i){
  if(state==="scatter")return;
  const p=pieces[i], target=p.side==="white"?"black":"white";
  // Lift toward viewer during cross-field transfer, then settle into mirrored home.
  killFloat(p); p.side=target; p.el.dataset.side=target;
  const h=home(i,target);
  const tl=gsap.timeline();
  tl.to(p.el,{z:120,scale:1.12,duration:.22,ease:"power2.out"})
    .to(p.el,{left:h.x,top:h.y,rotationZ:rand(-8,8),duration:.72,ease:"power3.inOut"},"<.05")
    .to(p.inner,{rotationY:target==="black"?180:0,duration:.62,ease:"power2.inOut"},"<")
    .to(p.el,{z:0,scale:1,rotationZ:0,duration:.3,ease:"power2.in"});
}
function scatter(){
  state="scatter"; mode.textContent="SCATTER / 3D FIELD";
  const g=geometry();
  pieces.forEach((p,i)=>{
    killFloat(p);
    const depth=rand(-260,220);
    const scale=gsap.utils.mapRange(-260,220,.58,1.38,depth);
    const x=rand(g.w*.08,g.w*.88), y=rand(g.h*.10,g.h*.84);
    gsap.to(p.el,{left:x,top:y,z:depth,scale,rotationX:rand(-32,32),rotationY:rand(-45,45),rotationZ:rand(-22,22),duration:1.05,delay:rand(0,.22),ease:"power3.inOut"});
    const targetFace=rand(0,1)>.5?180:0;
    gsap.to(p.inner,{rotationY:targetFace+rand(-25,25),rotationX:rand(-18,18),duration:.9,ease:"power2.inOut"});
    const driftX=rand(-32,32), driftY=rand(-24,24);
    p.floatTween=gsap.to(p.el,{
      x:driftX,y:driftY,
      rotationX:`+=${rand(-18,18)}`,
      rotationY:`+=${rand(-26,26)}`,
      rotationZ:`+=${rand(-12,12)}`,
      duration:rand(2.8,5.5),repeat:-1,yoyo:true,ease:"sine.inOut",delay:rand(0,1)
    });
    gsap.to(p.inner,{rotationY:`+=${rand(80,210)}`,duration:rand(4.5,8),repeat:-1,yoyo:true,ease:"sine.inOut"});
    p.el.style.zIndex=String(Math.round(depth+300));
  });
}
function reset(){
  seed=(seed+7919)>>>0;
  pieces.forEach(p=>p.el.style.zIndex="");
  randomHalf();
}
function rebuild(){
  pieces.forEach((p,i)=>{
    killFloat(p);
    const g=geometry();
    p.el.style.setProperty("--pw",`${g.cellW+1}px`);
    p.el.style.setProperty("--ph",`${g.cellH+1}px`);
  });
  state==="scatter"?scatter():pieces.forEach((p,i)=>place(p,i,p.side,.25));
}

resetBtn.addEventListener("click",reset);
whiteBtn.addEventListener("click",()=>full("white"));
blackBtn.addEventListener("click",()=>full("black"));
scatterBtn.addEventListener("click",scatter);
window.addEventListener("resize",()=>{clearTimeout(window.__puzR);window.__puzR=setTimeout(rebuild,150)});

build();
randomHalf();

let autoDemoTimer=null,autoSteps=[];
function stopAutoDemo(){if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;}autoSteps.forEach(clearTimeout);autoSteps=[];autoBtn.classList.remove("is-running");autoBtn.textContent="AUTO DEMO";}
function autoDemo(){stopAutoDemo();autoBtn.classList.add("is-running");autoBtn.textContent="STOP DEMO";
 const cycle=()=>{reset();autoSteps.push(setTimeout(()=>transfer(3),900),setTimeout(()=>transfer(12),1500),setTimeout(()=>full("white"),2700),setTimeout(()=>full("black"),4500),setTimeout(scatter,6100),setTimeout(reset,8300));autoDemoTimer=setTimeout(cycle,10000)};cycle();}
autoBtn.addEventListener("click",()=>autoDemoTimer?stopAutoDemo():autoDemo());
resetBtn.addEventListener("click",stopAutoDemo);

})();