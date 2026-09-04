(() => {
  const NS="http://www.w3.org/2000/svg";
  const stage=document.querySelector("#stage");
  const layer=document.querySelector("#elements");
  const svg=document.querySelector("#connectors");
  const addBtn=document.querySelector("#add");
  const resetBtn=document.querySelector("#reset");
  const autoBtn=document.querySelector("#autoDemo");
  const countLabel=document.querySelector("#countLabel");
  const modeLabel=document.querySelector("#mode");

  const glyphs=["A","7","#","△","Ä","42","◇","K","°","+","B","9","×","Ω","3","R","□","8","Z","@"];
  let members=[];
  let orbitTween=null;
  let nextGlyph=0;

  function center(){
    return {x:stage.clientWidth*.5,y:stage.clientHeight*.48};
  }

  function radiusFor(n){
    const minDim=Math.min(stage.clientWidth,stage.clientHeight);
    if(n<=2)return minDim*.17;
    if(n<=4)return minDim*.21;
    if(n<=6)return minDim*.245;
    if(n<=8)return minDim*.275;
    return Math.min(minDim*.39, minDim*(.29+(n-9)*.012));
  }

  function positions(n){
    const c=center(), r=radiusFor(n);
    if(n===1)return [{x:c.x,y:c.y-r*.72}];

    // Discrete balanced formations 2–8.
    // 3 triangle, 4 square, 5+ regular/star-like polygon distribution.
    let start=-Math.PI/2;
    if(n===2) start=Math.PI;       // left / right
    if(n===4) start=-Math.PI*.75; // square corners
    return Array.from({length:n},(_,i)=>{
      const a=start+(Math.PI*2*i/n);
      return {x:c.x+Math.cos(a)*r,y:c.y+Math.sin(a)*r,a};
    });
  }

  function createMember(){
    const el=document.createElement("div");
    el.className="element";
    el.textContent=glyphs[nextGlyph++%glyphs.length];
    const c=center();
    el.style.left=`${c.x}px`;
    el.style.top=`${c.y}px`;
    layer.appendChild(el);
    gsap.set(el,{scale:0,opacity:0,rotation:-25});
    members.push(el);
    return el;
  }

  function drawConnectors(pos,n){
    svg.innerHTML="";
    svg.setAttribute("viewBox",`0 0 ${stage.clientWidth} ${stage.clientHeight}`);
    if(n<2)return;

    const lines=[];
    // For 2–8, outline the current equal formation.
    if(n<=8){
      if(n===2){
        lines.push([pos[0],pos[1]]);
      } else {
        for(let i=0;i<n;i++)lines.push([pos[i],pos[(i+1)%n]]);
      }

      // Radial spokes strengthen equality for 5–8.
      if(n>=5){
        const c=center();
        pos.forEach(p=>lines.push([c,p]));
      }

      // At 5, make the star logic explicit with skip-one diagonals.
      if(n===5){
        for(let i=0;i<5;i++)lines.push([pos[i],pos[(i+2)%5]]);
      }
    } else {
      // Orbit mode: quiet ring only, avoiding a dense spiderweb.
      const c=center(), r=radiusFor(n);
      const circle=document.createElementNS(NS,"circle");
      circle.setAttribute("class","connector");
      circle.setAttribute("cx",c.x);circle.setAttribute("cy",c.y);circle.setAttribute("r",r);
      circle.style.strokeDasharray="5 8";
      svg.appendChild(circle);
      return;
    }

    lines.forEach(([a,b])=>{
      const line=document.createElementNS(NS,"line");
      line.setAttribute("class","connector");
      line.setAttribute("x1",a.x);line.setAttribute("y1",a.y);
      line.setAttribute("x2",b.x);line.setAttribute("y2",b.y);
      svg.appendChild(line);
      const L=Math.hypot(b.x-a.x,b.y-a.y);
      gsap.fromTo(line,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:.55,ease:"power2.out"});
    });
  }

  function stopOrbit(){
    if(orbitTween){orbitTween.kill();orbitTween=null;}
    gsap.set(layer,{rotation:0,transformOrigin:"50% 48%"});
  }

  function updateFormation(newMember){
    const n=members.length;
    const pos=positions(n);
    stopOrbit();

    countLabel.textContent=`${n} element${n===1?"":"s"}`;
    modeLabel.textContent=n<=8 ? `DISCRETE FORMATION · ${n}` : `RADIAL ORBIT · ${n}`;

    const tl=gsap.timeline({defaults:{duration:.72,ease:"power3.inOut"}});
    members.forEach((el,i)=>{
      tl.to(el,{left:pos[i].x,top:pos[i].y,rotation:0},0);
    });
    if(newMember){
      tl.to(newMember,{scale:1,opacity:1,rotation:0,duration:.46,ease:"back.out(2)"},.12);
    }
    tl.call(()=>drawConnectors(pos,n),[],.28);

    if(n>8){
      tl.call(()=>{
        orbitTween=gsap.to(layer,{
          rotation:360,
          duration:Math.max(16,26-n*.25),
          repeat:-1,
          ease:"none",
          transformOrigin:"50% 48%"
        });
        // Counter-rotate participants so their glyphs remain readable.
        members.forEach(el=>{
          gsap.to(el,{rotation:-360,duration:Math.max(16,26-n*.25),repeat:-1,ease:"none"});
        });
      });
    }
  }

  function add(){
    const m=createMember();
    updateFormation(m);
  }

  function reset(){
    stopOrbit();
    gsap.killTweensOf(members);
    gsap.to(members,{scale:0,opacity:0,duration:.25,stagger:.015,onComplete:()=>{
      layer.innerHTML="";
      svg.innerHTML="";
      members=[];
      nextGlyph=0;
      add();
    }});
  }

  addBtn.addEventListener("click",add);
  resetBtn.addEventListener("click",reset);
  window.addEventListener("resize",()=>{
    clearTimeout(window.__formationR);
    window.__formationR=setTimeout(()=>updateFormation(null),140);
  });

  add();

  let autoDemoTimer=null, autoSteps=[];
  function stopAutoDemo(){if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;}autoSteps.forEach(clearTimeout);autoSteps=[];autoBtn.classList.remove("is-running");autoBtn.textContent="AUTO DEMO";}
  function autoDemo(){stopAutoDemo();autoBtn.classList.add("is-running");autoBtn.textContent="STOP DEMO";
    const cycle=()=>{reset();[900,1700,2500,3300,4100,4900,5700,6500,7300].forEach(t=>autoSteps.push(setTimeout(add,t)));autoDemoTimer=setTimeout(cycle,10000)};cycle();}
  autoBtn.addEventListener("click",()=>autoDemoTimer?stopAutoDemo():autoDemo());
  resetBtn.addEventListener("click",stopAutoDemo);

})();
