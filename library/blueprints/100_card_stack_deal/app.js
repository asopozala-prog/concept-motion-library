gsap.registerPlugin(Draggable);

const CONFIG = {
  cardCount: 10,
  componentsPerCard: 5,
  depthX: 17,
  depthY: 10,
  depthScale: 0.035,
  minScale: 0.68,

  // Detail destinations are offsets FROM each component's own preview anchor.
  detailOffsets: [
    { x: -90, y: -155 },
    { x: -105, y: 105 },
    { x: 0, y: 145 },
    { x: 105, y: 105 },
    { x: 90, y: -155 }
  ]
};

const stack = document.querySelector("#stack");
const sleepZone = document.querySelector("#sleepZone");
const sleepCards = document.querySelector("#sleepCards");
const status = document.querySelector("#status");
const resetBtn = document.querySelector("#reset");
const autoBtn = document.querySelector("#autoDemo");

let cards = [];
let activeCard = null;
let expanded = false;
let sleepingCount = 0;
let pressPoint = null;

const glyphs = ["○", "□", "△", "•", "◇"];

function makeCard(index) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.id = index + 1;

  const label = document.createElement("div");
  label.className = "card__label";
  label.textContent = `CARD ${String(index + 1).padStart(2, "0")}`;
  card.appendChild(label);

  for (let i = 0; i < CONFIG.componentsPerCard; i++) {
    const component = document.createElement("div");
    component.className = "component";
    component.dataset.component = i;
    component.textContent = glyphs[i % glyphs.length];
    card.appendChild(component);
  }

  stack.appendChild(card);
  return card;
}

function depthState(index) {
  return {
    x: index * CONFIG.depthX,
    y: index * CONFIG.depthY,
    scale: Math.max(CONFIG.minScale, 1 - index * CONFIG.depthScale),
    zIndex: CONFIG.cardCount - index
  };
}

function resetComponents(card, animate = false) {
  const components = card.querySelectorAll(".component");
  gsap.to(components, {
    x: 0,
    y: 0,
    scale: 1,
    duration: animate ? .45 : 0,
    ease: "power3.inOut",
    stagger: animate ? { each: .025, from: "end" } : 0
  });
}

function layoutStack(animate = true) {
  cards.forEach((card, index) => {
    card.classList.toggle("is-active", index === 0);
    gsap.to(card, {
      ...depthState(index),
      duration: animate ? .55 : 0,
      ease: "power3.out"
    });

    if (index !== 0) resetComponents(card, false);
  });

  activeCard = cards[0] || null;
  expanded = false;
  updateStatus();
  setupActiveDrag();
}

function updateStatus() {
  if (!activeCard) {
    status.textContent = "Stack complete";
    return;
  }
  status.textContent =
    `Card ${String(activeCard.dataset.id).padStart(2, "0")} · active · ${expanded ? "detail" : "preview"}`;
}

function toggleComponents() {
  if (!activeCard) return;

  const components = [...activeCard.querySelectorAll(".component")];
  expanded = !expanded;

  components.forEach((component, i) => {
    const target = CONFIG.detailOffsets[i % CONFIG.detailOffsets.length];

    gsap.to(component, {
      x: expanded ? target.x : 0,
      y: expanded ? target.y : 0,
      scale: expanded ? 1.22 : 1,
      duration: .58,
      delay: i * .035,
      ease: expanded ? "back.out(1.35)" : "power3.inOut"
    });
  });

  updateStatus();
}

function pointInsideSleepZone(x, y) {
  const r = sleepZone.getBoundingClientRect();
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
}

function addSleepingCard(id) {
  const sleeper = document.createElement("div");
  sleeper.className = "sleeping-card";
  sleeper.textContent = `CARD ${String(id).padStart(2, "0")} · sleeping`;

  const col = sleepingCount % 2;
  const row = Math.floor(sleepingCount / 2);

  sleepCards.appendChild(sleeper);
  gsap.set(sleeper, {
    left: `${col * 15}%`,
    top: `${row * 34}px`,
    rotation: col ? 1.5 : -1.5,
    scale: .92
  });
  gsap.from(sleeper, {
    opacity: 0,
    scale: .8,
    duration: .35,
    ease: "back.out(1.5)"
  });
  sleepingCount++;
}

function sleepActiveCard() {
  if (!activeCard) return;

  const leaving = activeCard;
  const id = Number(leaving.dataset.id);

  resetComponents(leaving, false);
  expanded = false;
  cards = cards.filter(card => card !== leaving);
  addSleepingCard(id);

  gsap.to(leaving, {
    opacity: 0,
    scale: .75,
    duration: .25,
    ease: "power2.in",
    onComplete: () => {
      leaving.remove();
      layoutStack(true);
    }
  });
}

function returnActiveCard() {
  if (!activeCard) return;
  gsap.to(activeCard, {
    x: 0,
    y: 0,
    duration: .5,
    ease: "elastic.out(1, .72)"
  });
}

function setupActiveDrag() {
  if (!activeCard) return;

  const old = Draggable.get(activeCard);
  if (old) old.kill();

  Draggable.create(activeCard, {
    type: "x,y",

    onPress(e) {
      pressPoint = { x: e.clientX, y: e.clientY };
      activeCard.classList.add("is-dragging");
    },

    onRelease(e) {
      activeCard.classList.remove("is-dragging");

      const moved = pressPoint
        ? Math.hypot(e.clientX - pressPoint.x, e.clientY - pressPoint.y)
        : 0;

      if (pointInsideSleepZone(e.clientX, e.clientY)) {
        sleepActiveCard();
      } else if (moved < 8) {
        returnActiveCard();
        toggleComponents();
      } else {
        returnActiveCard();
      }

      pressPoint = null;
    }
  });
}

function resetExperiment() {
  cards.forEach(card => {
    const d = Draggable.get(card);
    if (d) d.kill();
  });
  gsap.killTweensOf("*");
  stack.innerHTML = "";
  sleepCards.innerHTML = "";
  cards = [];
  activeCard = null;
  expanded = false;
  sleepingCount = 0;
  pressPoint = null;

  for (let i = 0; i < CONFIG.cardCount; i++) {
    cards.push(makeCard(i));
  }
  layoutStack(false);
}

resetBtn.addEventListener("click", resetExperiment);
resetExperiment();

let autoDemoTimer = null;
function stopAutoDemo(){ if(autoDemoTimer){clearTimeout(autoDemoTimer);autoDemoTimer=null;} autoBtn.classList.remove("is-running"); autoBtn.textContent="AUTO DEMO"; }
function autoDemo(){
  stopAutoDemo(); resetExperiment(); autoBtn.classList.add("is-running"); autoBtn.textContent="STOP DEMO";
  const cycle=()=>{
    resetExperiment();
    setTimeout(()=>toggleComponents(),700);
    setTimeout(()=>toggleComponents(),2500);
    setTimeout(()=>sleepActiveCard(),3900);
    setTimeout(()=>toggleComponents(),5200);
    setTimeout(()=>toggleComponents(),6900);
    setTimeout(()=>sleepActiveCard(),7900);
    autoDemoTimer=setTimeout(cycle,10000);
  }; cycle();
}
autoBtn.addEventListener("click",()=>autoDemoTimer?stopAutoDemo():autoDemo());
resetBtn.addEventListener("click",stopAutoDemo);
