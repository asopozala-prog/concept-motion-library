(() => {
  const NS = "http://www.w3.org/2000/svg";
  const stage = document.querySelector("#stage");
  const svg = document.querySelector("#paths");
  const stationLayer = document.querySelector("#stationLayer");
  const traveler = document.querySelector("#traveler");
  const note = document.querySelector("#stationNote");
  const status = document.querySelector("#status");
  const evaluation = document.querySelector("#evaluationBody");
  const resetBtn = document.querySelector("#reset");
  const autoBtn = document.querySelector("#autoDemo");

  // Seeded irregularity: reloads remain reproducible while routes still feel generated.
  let seed = 300;
  const rnd = (min, max) => {
    seed = (seed * 9301 + 49297) % 233280;
    return min + (seed / 233280) * (max - min);
  };

  const defs = {
    a: { count: 5, band: .25, label: "Journey A", summary: "Balanced route · 5 processing stations." },
    b: { count: 7, band: .49, label: "Journey B", summary: "Longer route · 7 checkpoints and greater process complexity." },
    c: { count: 3, band: .72, label: "Journey C", summary: "Compact route · 3 major transformations." }
  };
  const symbols = ["◇","#","△","Ä","□","○","×"];
  const reactions = ["jump","shake","flip","pulse","wobble"];
  const stationCopy = [
    ["Receive","The process accepts the current state."],
    ["Inspect","A checkpoint examines what arrived."],
    ["Transform","The material changes into a new state."],
    ["Route","The process chooses its next movement."],
    ["Resolve","A local operation reaches completion."],
    ["Verify","The current result is checked."],
    ["Package","The stage prepares its output."]
  ];

  let journeys = {};
  let runToken = 0;
  let activeTimeline = null;

  function point(el) {
    const s = stage.getBoundingClientRect(), r = el.getBoundingClientRect();
    return {x:r.left-s.left+r.width/2, y:r.top-s.top+r.height/2};
  }

  function pathD(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i=0;i<points.length-1;i++) {
      const p0=points[Math.max(0,i-1)], p1=points[i], p2=points[i+1], p3=points[Math.min(points.length-1,i+2)];
      const c1={x:p1.x+(p2.x-p0.x)/6,y:p1.y+(p2.y-p0.y)/6};
      const c2={x:p2.x-(p3.x-p1.x)/6,y:p2.y-(p3.y-p1.y)/6};
      d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
    }
    return d;
  }

  function build() {
    runToken++;
    if (activeTimeline) activeTimeline.kill();
    gsap.killTweensOf([traveler,note]);
    svg.innerHTML = "";
    stationLayer.innerHTML = "";
    journeys = {};
    traveler.style.opacity = 0;
    note.style.opacity = 0;

    const w=stage.clientWidth,h=stage.clientHeight;
    svg.setAttribute("viewBox",`0 0 ${w} ${h}`);
    const start=point(document.querySelector("#start"));
    const end=point(document.querySelector("#end"));

    Object.entries(defs).forEach(([id,d], routeIndex) => {
      const stations=[];
      for(let i=0;i<d.count;i++){
        const t=(i+1)/(d.count+1);
        const baseX=start.x+(end.x-start.x)*t;
        const bandY=h*d.band;
        const wave=Math.sin((i+1)*1.73+routeIndex*.9)*rnd(28,68);
        const y=Math.max(70,Math.min(h-145,bandY+wave));
        stations.push({x:baseX+rnd(-28,28),y});
      }
      const points=[start,...stations,end];
      const route=document.createElementNS(NS,"path");
      route.setAttribute("class","route");
      route.setAttribute("d",pathD(points));
      route.dataset.journey=id;
      svg.appendChild(route);

      const progress=route.cloneNode();
      progress.setAttribute("class","route-progress");
      svg.appendChild(progress);

      const els=stations.map((p,i)=>{
        const el=document.createElement("div");
        el.className=`station ${i%3===0?"diamond":i%3===1?"circle":"hex"}`;
        el.dataset.index=i;
        el.dataset.journey=id;
        el.style.left=`${p.x}px`; el.style.top=`${p.y}px`;
        el.innerHTML=`<span>${symbols[i%symbols.length]}</span>`;
        stationLayer.appendChild(el);
        return el;
      });

      journeys[id]={...d,route,progress,stations,els};
    });
  }

  function react(el,type,tl) {
    if(type==="jump") tl.to(el,{y:-18,duration:.16,ease:"power2.out"}).to(el,{y:0,duration:.22,ease:"bounce.out"});
    if(type==="shake") tl.to(el,{x:-8,duration:.06,repeat:5,yoyo:true}).to(el,{x:0,duration:.05});
    if(type==="flip") tl.to(el,{rotationY:180,duration:.35,ease:"back.inOut(1.6)"}).to(el,{rotationY:360,duration:.35});
    if(type==="pulse") tl.to(el,{scale:1.55,duration:.2,ease:"back.out(2)"}).to(el,{scale:1,duration:.25});
    if(type==="wobble") tl.to(el,{rotation:18,duration:.1,repeat:3,yoyo:true}).to(el,{rotation:0,duration:.12});
  }

  function showNote(j,i) {
    const el=j.els[i], r=el.getBoundingClientRect(), s=stage.getBoundingClientRect();
    const [title,copy]=stationCopy[i%stationCopy.length];
    note.innerHTML=`<strong>${title}</strong><p>${copy}</p>`;
    let x=r.left-s.left+26, y=r.top-s.top-82;
    if(x+200>stage.clientWidth) x-=220;
    y=Math.max(12,Math.min(stage.clientHeight-100,y));
    gsap.set(note,{left:x,top:y});
    gsap.to(note,{opacity:1,y:0,duration:.18});
  }

  function run(id) {
    const j=journeys[id]; if(!j)return;
    runToken++; const token=runToken;
    if(activeTimeline) activeTimeline.kill();
    gsap.killTweensOf([traveler,note]);
    Object.values(journeys).forEach(x=>{x.route.classList.remove("active");x.els.forEach(e=>e.classList.remove("active"));gsap.set(x.progress,{opacity:0})});
    j.route.classList.add("active");
    status.textContent=`Running ${j.label}`;
    evaluation.innerHTML=`<strong>${j.label} in progress</strong><p>Local station events will appear as the traveler arrives.</p>`;

    const length=j.route.getTotalLength();
    const start=j.route.getPointAtLength(0);
    gsap.set(traveler,{x:start.x,y:start.y,opacity:1,scale:1});
    gsap.set(j.progress,{opacity:1,strokeDasharray:length,strokeDashoffset:length});

    const stationLengths=j.stations.map((p)=>{
      let best=0,dist=Infinity;
      for(let l=0;l<=length;l+=Math.max(2,length/350)){
        const q=j.route.getPointAtLength(l),dd=(q.x-p.x)**2+(q.y-p.y)**2;
        if(dd<dist){dist=dd;best=l}
      }
      return best;
    });

    const checkpoints=[...stationLengths,length];
    let previous=0;
    const tl=gsap.timeline({onComplete:()=>{
      if(token!==runToken)return;
      status.textContent=`${j.label} complete`;
      evaluation.innerHTML=`<strong>${j.label} complete</strong><p>${j.summary}</p>`;
      gsap.to(note,{opacity:0,duration:.2});
      gsap.fromTo(document.querySelector("#end"),{scale:1},{scale:1.12,duration:.18,repeat:1,yoyo:true});
    }});
    activeTimeline=tl;

    checkpoints.forEach((target,index)=>{
      const segment=target-previous;
      const duration=Math.max(.35,segment/230);
      const proxy={l:previous};
      tl.to(proxy,{l:target,duration,ease:"none",
        onUpdate(){
          const q=j.route.getPointAtLength(proxy.l);
          gsap.set(traveler,{x:q.x,y:q.y});
          gsap.set(j.progress,{strokeDashoffset:length-proxy.l});
        }
      });
      if(index<j.els.length){
        const el=j.els[index];
        tl.call(()=>{j.els.forEach(e=>e.classList.remove("active"));el.classList.add("active");showNote(j,index)});
        react(el,reactions[index%reactions.length],tl);
        tl.to({}, {duration:.34});
        tl.to(note,{opacity:0,duration:.16});
      }
      previous=target;
    });
  }

  function resetExperiment() {
    runToken++;
    if (activeTimeline) { activeTimeline.kill(); activeTimeline = null; }
    gsap.killTweensOf([traveler,note,document.querySelector("#end")]);
    seed = 300;
    status.textContent = "Click a journey";
    evaluation.innerHTML = `<strong>No journey evaluated</strong><p>Select one of the three paths.</p>`;
    gsap.set(note,{opacity:0});
    build();
  }

  resetBtn.addEventListener("click", resetExperiment);

  document.querySelectorAll(".journey-hit").forEach(hit=>{
    hit.addEventListener("click",e=>{
      const id=hit.dataset.journey;
      // Require click reasonably close to the actual curve, despite broad hit regions.
      const j=journeys[id], r=stage.getBoundingClientRect(), mx=e.clientX-r.left,my=e.clientY-r.top;
      let close=false,L=j.route.getTotalLength();
      for(let l=0;l<=L;l+=8){const p=j.route.getPointAtLength(l);if(Math.hypot(p.x-mx,p.y-my)<34){close=true;break}}
      if(close)run(id);
    });
  });

  window.addEventListener("resize",()=>{clearTimeout(window._r);window._r=setTimeout(build,120)});
  build();

  let autoDemoTimer=null;
  function stopAutoDemo(){if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;}autoBtn.classList.remove("is-running");autoBtn.textContent="AUTO DEMO";}
  function autoDemo(){
    stopAutoDemo(); autoBtn.classList.add("is-running");autoBtn.textContent="STOP DEMO";
    const cycle=()=>{ resetExperiment(); setTimeout(()=>run("c"),650); autoDemoTimer=setTimeout(cycle,10000); };
    cycle();
  }
  autoBtn.addEventListener("click",()=>autoDemoTimer?stopAutoDemo():autoDemo());
  resetBtn.addEventListener("click",stopAutoDemo);

})();
