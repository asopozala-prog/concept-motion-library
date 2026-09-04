# Blueprint 700 — Progressive Filter / Routing Gates

**Status:** Browser-tested Fundamental Motion Blueprint  
**Family:** Progressive classification / filtering / routing / drill-down  
**Living reference:** `index.html`, `style.css`, `app.js`

---

## 1. Fundamental Motion Idea

A mixed population enters a Gate, is classified, travels through visible Routes, and emerges into multiple Output Stations.

Selecting one Output promotes that result into the next active filtering layer, where the population can be classified again at finer resolution.

Conceptually:

    MIXED INPUT
         ↓
       GATE
      ╱  │  ╲
     ╱   │   ╲
    ↓    ↓    ↓
   A     B     C
         ↓
   select output
         ↓
   camera enters
         ↓
   selected result becomes
   the next active input
         ↓
      finer Gate
       ╱     ╲
      ↓       ↓
     B1       B2

The fundamental principle is:

> **A population becomes progressively more specific by passing through successive routing gates; selecting an output promotes that result into the next active filtering layer.**

---

## 2. Why This Is Not Blueprint 200

Blueprint 200 reorganizes persistent Components according to a selected Group rule inside one active Field.

Blueprint 700 explains a different structure:

    input
      ↓
    processing
      ↓
    routing
      ↓
    outputs
      ↓
    deeper processing

The essential mechanism is **progressive classification through a directed hierarchy of Gates**, not merely regrouping.

---

## 3. Components

Components are the units being processed.

The browser reference uses:

- characters;
- numbers;
- symbols.

These are test content only.

A Component may represent any atomic participant that can be classified by a rule.

Examples could include:

- text;
- symbols;
- records;
- visual assets;
- Cards;
- categories;
- process items;
- semantic units.

Component identity should persist where practical so motion visibly explains classification.

---

## 4. Input Stream

A layer begins with an Input population.

The reference expresses the first Input as a large mixed stream falling toward the active Gate.

Conceptually:

    A  7  #  b  △  3  K  @  x  9
                ↓
                ↓
                ↓
              GATE

The exact entrance direction is variable.

Input could arrive:

- downward;
- horizontally;
- radially;
- from multiple sources;
- from an existing Station;
- from a previous layer.

The permanent requirement is that the population visibly approaches the processing structure.

---

## 5. Gate

A Gate is the active classification Station.

It receives Components and applies a structural rule.

Conceptually:

    Gate(input, rule)
          ↓
    classified outputs

The Gate should feel like a processing point rather than a decorative node.

The reference makes incoming Components visually converge and crash/funnel into it before routing outward.

---

## 6. Classification Rule

A Gate owns a classification rule.

Example first layer:

    mixed
      ↓
    CHARACTER
    NUMBER
    SYMBOL

Example second layer:

    CHARACTER
        ↓
    CAPITAL
    LOWERCASE

Example deeper layer:

    CAPITAL
       ↓
    A B C D ... X Y Z

These categories are examples only.

The permanent mechanism must accept variable rules and variable branching factors.

---

## 7. Routes / Pipes

Outputs are connected to the Gate through visible Routes.

The reference represents Routes as curved Pipes.

Pipes serve two purposes:

1. communicate structural relationship;
2. make processing motion visible.

A Route is therefore both geometry and motion space.

Conceptually:

    Gate
      ╲
       ╲  moving Component / pulse
        ╲────────────→ Output

The Pipe appearance is replaceable.

Routes may later be:

- tubes;
- lines;
- channels;
- tracks;
- branches;
- curved connectors;
- spatial paths.

---

## 8. Flow Through Routes

A Route should not feel static while processing occurs.

The reference uses moving dash patterns and traveling Components to make flow legible.

Possible flow signals include:

- Components moving along the Route;
- pulses;
- traveling markers;
- directional texture;
- repeated packets;
- local Route deformation.

The permanent requirement is:

> **The viewer should be able to perceive that classified material is traveling from Gate to Output.**

---

## 9. Output Stations

Each classification result has an Output Station.

An Output Station represents both:

- the result of the current classification;
- a possible entrance into a deeper classification layer.

This dual role is essential.

Conceptually:

    current output
         ↓
    selected by user
         ↓
    promoted to active context
         ↓
    becomes next input

An Output is therefore not necessarily a terminal destination.

---

## 10. Progressive Filtering

Filtering can occur recursively.

Conceptually:

    Layer 1
    MIXED
      ↓
    CHARACTERS

    Layer 2
    CHARACTERS
      ↓
    CAPITAL

    Layer 3
    CAPITAL
      ↓
    A B C ... Z

Each layer increases specificity.

The number of layers is variable.

---

## 11. Camera / Field Transition

Selecting an Output should not feel like replacing one unrelated diagram with another.

The browser reference moves and scales the World toward the selected Station.

Conceptually:

    select Station
         ↓
    camera approaches
         ↓
    Station becomes dominant
         ↓
    previous layer leaves view
         ↓
    next layer resolves

This establishes spatial continuity between levels.

The camera motion communicates:

> **We are entering deeper into the same classification system.**

---

## 12. Promotion of Context

When a Station is selected, its structural role changes.

Before selection:

    Output of current Gate

After selection:

    Input / active context of next Gate

This is a structural promotion.

The same semantic result moves from being a destination to being a new processing origin.

---

## 13. Hierarchical Depth

Blueprint 700 expresses classification depth through successive spatial layers.

A hierarchy can therefore be experienced through motion rather than displayed all at once.

Conceptually:

    broad
      ↓
    category
      ↓
    subtype
      ↓
    specific member

Motion reveals the hierarchy progressively.

---

## 14. Branching Factor

A Gate may have:

    2 outputs
    3 outputs
    5 outputs
    26 outputs
    N outputs

The browser reference intentionally demonstrates different branching factors:

- three broad outputs;
- two finer outputs;
- many final character outputs.

The system must not assume a fixed number of Routes.

---

## 15. Fan-Out Geometry

Output geometry should respond to branching factor and available Field space.

Small branching factors may use broad separation.

Large branching factors may require:

- multiple rows;
- radial distribution;
- denser spacing;
- adaptive Route geometry;
- smaller Stations.

Layout should be generated from structure rather than manually authored for every category.

---

## 16. Local vs Global Meaning

Each layer explains one classification decision.

The entire sequence explains the larger hierarchy.

Therefore:

    Gate = local classification
    Route = relationship / transport
    Output = classification result
    Camera transition = hierarchy navigation
    sequence of layers = global classification system

These responsibilities should remain distinct.

---

## 17. Persistence

Where practical, Components should remain persistent through classification.

Avoid:

    input disappears
    unrelated output appears

Prefer:

    Component approaches Gate
         ↓
    enters processing point
         ↓
    travels through assigned Route
         ↓
    emerges at correct Output

Persistence makes the classification understandable through motion.

---

## 18. Continuous Processing

The reference shows repeated Component flow rather than one isolated packet.

This communicates that the Gate represents a system capable of continuously processing a population.

Continuous flow is not mandatory for every descendant, but the fundamental supports:

- streams;
- batches;
- single Components;
- repeated cycles.

---

## 19. States

A Component may conceptually occupy:

    INPUT
      ↓
    APPROACHING_GATE
      ↓
    PROCESSING
      ↓
    ROUTED
      ↓
    TRAVELING
      ↓
    OUTPUT

A Station may occupy:

    OUTPUT
      ↓
    SELECTED
      ↓
    PROMOTING
      ↓
    ACTIVE_INPUT

The whole system may occupy:

    PROCESSING_LAYER
    ENTERING_OUTPUT
    TRANSITIONING_LAYER
    PROCESSING_NEXT_LAYER
    RETURNING

Explicit states are preferable as the system becomes more complex.

---

## 20. Navigation

The browser reference supports entering a deeper layer and returning to a previous layer.

Navigation history is structural history.

Conceptually:

    root
      ↓
    characters
      ↓
    capitals

Back:

    capitals
      ↑
    characters
      ↑
    root

Future implementations may preserve previous layers spatially rather than rebuilding them, but that is not required by the fundamental mechanism.

---

## 21. Geometry Interface

A useful conceptual structure is:

    layer.id
    layer.input
    layer.rule
    layer.outputs[]

    gate.position
    gate.bounds

    output.id
    output.position
    output.nextLayer

    route.from
    route.to
    route.path

    component.id
    component.category
    component.state
    component.route

This separates classification data from rendering geometry.

---

## 22. Data-Driven Hierarchy

The classification tree should ideally be represented as data.

Conceptually:

    root
      outputs:
        characters → charactersLayer
        numbers    → numbersLayer
        symbols    → symbolsLayer

    charactersLayer
      outputs:
        capital   → capitalLayer
        lowercase → lowercaseLayer

The renderer then builds Gates, Routes, Stations, and transitions from that structure.

This makes the motion reusable for different classification systems.

---

## 23. Separation of Responsibilities

The implementation should preserve separation between:

    COMPONENT
    What persistent item is moving?

    CLASSIFICATION
    Which output should receive it?

    GATE
    Where does processing happen?

    ROUTE
    What geometry connects Gate and Output?

    FLOW
    How is travel through the Route communicated?

    STATION
    What result does this destination represent?

    HIERARCHY
    What deeper layer does this result expose?

    CAMERA / FIELD
    How does the viewer enter that deeper layer?

    VISUAL ASSET
    What do Gates, Pipes, Components, and Stations look like?

This separation keeps the mechanism reusable.

---

## 24. Motion Ownership

Prefer clear motion ownership.

For example:

    World / camera layer
        owns:
        global translation
        global scale

    Route
        owns:
        path geometry
        flow texture

    Component
        owns:
        route progress
        local rotation / scale

    Station
        owns:
        local reaction
        active / inactive state

Camera motion should not fight with Component route motion.

---

## 25. Browser-Tested Reference

The approved living reference demonstrates:

- large mixed input stream;
- repeated Components falling toward an active Gate;
- three first-level classification outputs;
- Characters / Numbers / Symbols;
- curved Pipes;
- visible Pipe flow;
- Components traveling through Routes;
- clickable Output Stations;
- camera zoom/translation into selected output;
- selected Output becoming the next active filtering context;
- second-level two-way filtering;
- Characters → Capital / Lowercase;
- Numbers → two number groups;
- Symbols → two symbol groups;
- third-level fan-out;
- Capital → 26 individual letters;
- Lowercase → 26 individual letters;
- variable branching factor;
- back navigation;
- reset to root.

The browser reference successfully demonstrates the fundamental progressive routing mechanism.

---

## 26. What Is Not Fixed

Blueprint 700 does **not** permanently specify:

- characters, numbers, and symbols;
- three first-level outputs;
- two second-level outputs;
- twenty-six final outputs;
- downward input;
- current Gate shape;
- current Station shape;
- current Pipe thickness;
- current curve geometry;
- current typography;
- current camera zoom;
- current timing;
- current easing;
- current labels;
- current screen layout.

These belong to the living reference implementation.

---

## 27. Variable Properties

Blueprint 700 should allow variation in:

    componentCount
    componentData
    layerCount
    classificationRules
    branchingFactor
    inputDirection
    gateGeometry
    routeGeometry
    stationGeometry
    stationLayout
    routeSpeed
    flowDensity
    cameraScale
    cameraTravel
    transitionTiming
    easing
    hierarchyDepth

Changing these parameters does not automatically create a new blueprint ID.

---

## 28. Fundamental vs Variation

Blueprint **700** represents the fundamental progressive filtering and routing logic.

Ordinary parameter changes remain Blueprint 700.

For example:

    five outputs instead of three
    radial Pipes instead of downward Pipes
    Cards instead of characters
    faster flow
    four hierarchy levels
    different Gate visuals

do not automatically create a descendant.

A descendant such as:

    710
    720
    730

should exist only when the underlying motion logic meaningfully changes.

Further descendants may use:

    711
    712
    713

and so on.

The number describes motion lineage, not ordinary configuration.

---

## 29. Fundamental Motion Test

Blueprint 700 asks:

> **Can a mixed population visibly pass through a processing Gate, be routed into meaningful outputs, and then allow one output to become the next active filtering context without breaking the viewer's understanding of the hierarchy?**

It also asks:

> **Can motion make progressive classification readable as a journey from broad categories toward increasingly specific results?**

The browser reference confirms that this mechanism works.

---

# Permanent Motion Principle

**Classification becomes a journey through successive Gates.**

A result is not necessarily an endpoint.

It can become the next question.

Therefore:

    INPUT
      ↓
    FILTER
      ↓
    ROUTE
      ↓
    OUTPUT
      ↓
    SELECT
      ↓
    ENTER
      ↓
    FILTER AGAIN

The structure becomes more specific with depth.

**Motion makes the hierarchy visible by showing where Components enter, how they are routed, what they become grouped with, and how one result opens the next layer of meaning.**
