(() => {
  const NS="http://www.w3.org/2000/svg";
  const svg=document.querySelector("#tree");
  const stage=document.querySelector("#stage");
  const growBtn=document.querySelector("#grow");
  const autoBtn=document.querySelector("#autoDemo");
  const status=document.querySelector("#status");

  const glyphs=["A","7","#","△","Ä","42","XY","◇","3","K","°","+","B2","@","Z","9"];
  let seed=400, timeline;

  function rand(a,b){
    seed=(seed*1664525+1013904223)>>>0;
    return a+(seed/4294967296)*(b-a);
  }
  function pick(){return glyphs[Math.floor(rand(0,glyphs.length))];}

  // The experiment uses 4 visible generations. Counts are parameters, not blueprint rules.
  const cfg=[
    {children:[3,3], length:[150,175], spread:1.02, font:29, width:8},
    {children:[3,4], length:[100,135], spread:.84, font:21, width:5.5},
    {children:[2,3], length:[68,94], spread:.68, font:15, width:3.5},
    {children:[2,3], length:[42,62], spread:.55, font:11, width:2}
  ];

  function make(tag,attrs={}){
    const e=document.createElementNS(NS,tag);
    Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));
    return e;
  }

  function curve(parent,child,lean){
    const dx=child.x-parent.x, dy=child.y-parent.y;
    const c1x=parent.x+dx*.30+lean;
    const c1y=parent.y+dy*.34;
    const c2x=parent.x+dx*.73-lean*.35;
    const c2y=parent.y+dy*.70;
    return `M ${parent.x} ${parent.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${child.x} ${child.y}`;
  }

  function growTree(){
    if(timeline) timeline.kill();
    svg.innerHTML="";
    seed=(seed+7919)>>>0;

    const w=stage.clientWidth,h=stage.clientHeight;
    svg.setAttribute("viewBox",`0 0 ${w} ${h}`);

    const root={x:w*.5,y:h*.925,angle:-Math.PI/2,gen:-1};
    const all=[];

    // Trunk: largest textual participant at its tip.
    const trunk={x:w*.5+rand(-16,16),y:h*.70,angle:-Math.PI/2+rand(-.06,.06),gen:0,parent:root,label:pick(),trunk:true};
    all.push(trunk);

    let frontier=[trunk];

    for(let gen=0;gen<cfg.length;gen++){
      const next=[];
      frontier.forEach((p,pi)=>{
        // trunk already represents generation zero; create children from it and later nodes.
        if(gen===0){
          const count=3;
          for(let i=0;i<count;i++){
            const normalized=count===1?0:(i/(count-1)-.5)*2;
            const angle=-Math.PI/2+normalized*.86+rand(-.10,.10);
            const len=rand(135,175);
            const c={x:p.x+Math.cos(angle)*len,y:p.y+Math.sin(angle)*len,angle,gen:1,parent:p,label:pick()};
            all.push(c);next.push(c);
          }
        } else {
          const cCfg=cfg[gen];
          const count=Math.floor(rand(cCfg.children[0],cCfg.children[1]+1));
          for(let i=0;i<count;i++){
            const normalized=count===1?0:(i/(count-1)-.5)*2;
            const angle=p.angle+normalized*cCfg.spread+rand(-.14,.14);
            const len=rand(cCfg.length[0],cCfg.length[1]);
            let x=p.x+Math.cos(angle)*len;
            let y=p.y+Math.sin(angle)*len;
            x=Math.max(25,Math.min(w-25,x));
            y=Math.max(28,Math.min(h*.88,y));
            const c={x,y,angle,gen:gen+1,parent:p,label:pick()};
            all.push(c);next.push(c);
          }
        }
      });
      frontier=next;
    }

    // Render parent-first so motion can cascade by generation.
    const groups=[];
    all.forEach(n=>{
      const g=make("g",{"data-gen":n.gen});
      const path=make("path",{class:"branch",d:curve(n.parent,n,rand(-18,18))});
      path.style.strokeWidth=n.trunk?10:Math.max(1.6,7-n.gen*1.45);
      const ring=make("circle",{class:"node-ring",cx:n.x,cy:n.y,r:n.trunk?27:Math.max(8,20-n.gen*3)});
      const text=make("text",{class:"symbol",x:n.x,y:n.y});
      text.textContent=n.label;
      text.style.fontSize=`${n.trunk?36:Math.max(10,27-n.gen*4.4)}px`;
      g.append(path,ring,text);svg.appendChild(g);
      const L=path.getTotalLength();
      gsap.set(path,{strokeDasharray:L,strokeDashoffset:L});
      gsap.set([ring,text],{opacity:0,scale:.25,transformOrigin:`${n.x}px ${n.y}px`});
      groups.push({n,g,path,ring,text,L});
    });

    timeline=gsap.timeline({
      onStart:()=>status.textContent="Growing from root → descendants",
      onComplete:()=>status.textContent="Hierarchy complete · click to regrow"
    });

    // Trunk first, then each generation grows outward with small sibling overlaps.
    const maxGen=Math.max(...groups.map(x=>x.n.gen));
    for(let gen=0;gen<=maxGen;gen++){
      const members=groups.filter(x=>x.n.gen===gen);
      members.forEach((x,i)=>{
        const at=i===0?">":`<${Math.min(.28,i*.025)}`;
        timeline.to(x.path,{strokeDashoffset:0,duration:x.n.trunk?.9:.55,ease:"power1.inOut"},at)
          .to(x.ring,{opacity:1,scale:1,duration:.24,ease:"back.out(1.8)"},"<70%")
          .to(x.text,{opacity:1,scale:1,duration:.30,ease:"back.out(2.2)"},"<");
      });
      timeline.to({}, {duration:.12});
    }
  }

  stage.addEventListener("click",e=>{if(e.target.closest("button"))return;growTree();});
  growBtn.addEventListener("click",e=>{e.stopPropagation();growTree();});
  window.addEventListener("resize",()=>{clearTimeout(window.__treeR);window.__treeR=setTimeout(growTree,150)});
  growTree();

  let autoDemoTimer=null;
  function stopAutoDemo(){if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;}autoBtn.classList.remove("is-running");autoBtn.textContent="AUTO DEMO";}
  function autoDemo(){stopAutoDemo();autoBtn.classList.add("is-running");autoBtn.textContent="STOP DEMO";const cycle=()=>{growTree();autoDemoTimer=setTimeout(cycle,10000)};cycle();}
  autoBtn.addEventListener("click",e=>{e.stopPropagation();autoDemoTimer?stopAutoDemo():autoDemo()});
  growBtn.addEventListener("click",stopAutoDemo);

})();
