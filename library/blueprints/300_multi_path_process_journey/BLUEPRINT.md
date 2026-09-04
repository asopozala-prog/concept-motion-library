# Blueprint 300 — Multi-Path Process Journey

**Status:** Fundamental Motion Blueprint  
**Family:** Process traversal / alternative journey comparison  
**Reference implementation:** To be built

---

## 1. Fundamental Motion Idea

Multiple alternative processes share one common Start and one common End.

Each process is represented by its own irregular spatial Path containing an ordered sequence of Stations.

A persistent Traveler can be launched along one selected Path.

As the Traveler reaches each Station:

1. the Traveler pauses or acknowledges the Station;
2. the Station performs an individual reaction;
3. a short local explanation appears;
4. the Traveler continues toward the next Station.

After the Traveler reaches the shared End, an Evaluation Center presents a summary or assessment of the completed process.

The fundamental comparison is:

    SAME START
        │
        ├── Journey A ── 5 Stations ──╮
        │                             │
        ├── Journey B ── 7 Stations ──┼── SAME END
        │                             │
        └── Journey C ── 3 Stations ──╯
                                      │
                                      ↓
                                EVALUATION

The journeys do not need to represent the shortest geometric route.

Their different spatial forms make different process structures visible.

---

## 2. Blueprint Principle

Blueprints define motion behavior, structural relationships, states, and spatial rules.

They must not unnecessarily freeze:

- number of Journeys;
- number of Stations;
- Station content;
- Path geometry;
- Traveler appearance;
- Start or End appearance;
- Station reactions;
- explanation content;
- evaluation content;
- visual identity.

**Workbench primitives are test instruments, not design specifications.**

---

## 3. Structural Model

The fundamental structure is:

    PROCESS COMPARISON
    │
    ├── Shared Start
    │
    ├── Journey A
    │   ├── Path
    │   └── Stations[]
    │
    ├── Journey B
    │   ├── Path
    │   └── Stations[]
    │
    ├── Journey C
    │   ├── Path
    │   └── Stations[]
    │
    ├── Shared End
    │
    └── Evaluation Center

The current planned reference experiment uses three Journeys.

Three is an experiment parameter, not a permanent requirement.

---

## 4. Shared Start

All Journeys originate from the same Start.

The Start represents a common initial state, input, question, resource, or condition.

It belongs to the entire process comparison rather than to an individual Journey.

This is important because separate Start points would weaken the visual comparison.

The viewer should understand immediately:

> These alternative processes begin from the same condition.

The Start may eventually be represented by:

- circle;
- point;
- Card;
- Object;
- icon;
- image;
- Diagram;
- structured visual asset;
- invisible anchor.

Its visual appearance is replaceable.

---

## 5. Shared End

All Journeys converge into the same End.

The End represents a common destination, objective, result, or final state.

Like Start, End belongs to the comparison rather than to an individual Journey.

The visual structure therefore communicates:

> Same origin → different processes → same destination.

The End's appearance is not fixed.

---

## 6. Journey

A Journey is one alternative process between the shared Start and shared End.

Conceptually:

    Journey
    ├── Path
    ├── ordered Stations[]
    ├── Traveler behavior
    └── Evaluation data

Different Journeys may have:

- different Station counts;
- different Path lengths;
- different curvature;
- different spatial complexity;
- different Station reactions;
- different timing;
- different evaluation results.

Journeys remain structurally comparable because they share the same Start and End.

---

## 7. Path

A Path is the spatial representation of a Journey.

It defines where the Traveler moves.

A Path is not required to be:

- straight;
- shortest;
- symmetrical;
- evenly spaced;
- horizontally linear.

Instead, it may:

- curve upward;
- curve downward;
- wander;
- sweep;
- bend around empty space;
- contain multiple changes of direction;
- form broad arcs;
- create visually distinct process shapes.

The Path should remain readable as a progression from Start toward End.

---

## 8. Generated Irregular Path

Path geometry should be capable of being generated from structural information rather than manually hardcoded for every Journey.

Possible inputs include:

    startPosition
    endPosition
    stationCount
    journeyRegion
    irregularity
    curvature
    spacing
    randomSeed

Conceptually:

    structure
       ↓
    generate station anchors
       ↓
    introduce controlled spatial irregularity
       ↓
    construct smooth curve through anchors
       ↓
    place Stations
       ↓
    create Traveler motion path

Randomness must be controlled.

The goal is not chaotic geometry.

The goal is:

> **Controlled irregularity that gives each process a distinct spatial character.**

A seeded or deterministic random system is preferable so useful compositions can be reproduced.

---

## 9. Path Length Is Meaningful but Not Optimized

The Traveler does not need to follow the shortest route between Start and End.

For example:

    Start ● ───────────────────────── ● End

may be geometrically shorter than:

              ╭────◇────╮
    Start ●───╯         ╰──#──╮
                            ╰────△────● End

but the second path can communicate a richer process.

Therefore:

> **Path geometry represents process structure, not navigation efficiency.**

A longer visual Path is allowed even when Start and End are physically close.

---

## 10. Station

A Station represents one meaningful stage inside a Journey.

Stations are ordered.

Conceptually:

    Start
      ↓
    Station 1
      ↓
    Station 2
      ↓
    Station 3
      ↓
    ...
      ↓
    End

A Station may eventually represent:

- transformation;
- decision;
- action;
- checkpoint;
- calculation;
- review;
- transfer;
- approval;
- synthesis;
- processing stage.

The Station's visual representation is replaceable.

---

## 11. Variable Station Count

Different Journeys may contain different numbers of Stations.

The planned reference experiment begins with:

    Journey A → 5 Stations
    Journey B → 7 Stations
    Journey C → 3 Stations

These counts exist specifically to test whether different process complexity remains visually comparable.

They are not blueprint constants.

Station count must be variable.

---

## 12. Traveler

The Traveler is the persistent moving participant that makes process progression visible.

It begins at the shared Start.

When a Journey is selected:

    Start
      ↓
    Traveler launches
      ↓
    follows selected Path
      ↓
    activates Stations sequentially
      ↓
    reaches shared End

The Traveler's visual identity is replaceable.

It may eventually be:

- dot;
- symbol;
- icon;
- Card;
- image;
- visual asset;
- animated object;
- another compatible participant.

---

## 13. Traveler Persistence

The same Traveler should remain perceptually identifiable throughout a Journey.

It should not disappear at one Station and reappear at another.

The viewer should be able to follow:

    Traveler
       ↓
    Station 1
       ↓
    Station 2
       ↓
    Station 3
       ↓
    End

This continuity makes the process understandable through motion.

---

## 14. Journey Selection

The Journey itself acts as the interaction target.

A separate permanent control bar is not required.

Selecting a Journey launches its traversal.

The reference implementation may allow clicking:

- the Path;
- its label;
- its spatial region;
- or another obvious part of the Journey.

The fundamental interaction is:

    select Journey
          ↓
    launch Traveler
          ↓
    traverse that Journey

The trigger may later be replaced by another input mechanism without changing the blueprint.

---

## 15. One Active Journey

The initial reference experiment should permit one active Journey at a time.

This prevents multiple Travelers from competing visually and keeps comparison understandable.

Conceptually:

    Journey A running
          ↓
    Journey B selected
          ↓
    A stops / resets cleanly
          ↓
    Traveler returns to Start
          ↓
    Journey B begins

Exact interruption behavior can be refined through browser testing.

---

## 16. Station Arrival Event

When the Traveler reaches a Station, the Station becomes temporarily active.

The event may contain:

    Traveler arrives
          ↓
    brief pause
          ↓
    Station reaction
          +
    local explanation
          ↓
    reaction resolves
          ↓
    Traveler continues

This turns the Path from passive geometry into a sequence of meaningful events.

---

## 17. Individual Station Reactions

Stations do not need identical reactions.

The first reference experiment may deliberately use several simple motion reactions such as:

- jump;
- shake;
- flip;
- pulse;
- wobble;
- brief orbit;
- scale;
- rotate.

These are demonstration behaviors.

The permanent principle is:

> **A Station may express its local meaning through an individual reaction when activated by the Traveler.**

Station reaction is therefore replaceable data or behavior.

---

## 18. Station Explanation

When a Station activates, a short explanation appears in nearby available space.

Example:

    TRANSFORM

    Input is reorganized
    into the required structure.

The explanation belongs to the active Station.

It should not permanently clutter the Path.

Possible behavior:

    Station activates
          ↓
    explanation appears
          ↓
    viewer receives local meaning
          ↓
    Traveler continues
          ↓
    explanation fades / resolves

The exact text is content data, not part of the motion blueprint.

---

## 19. Local Explanation vs Evaluation

Blueprint 300 distinguishes two levels of information.

### Station Explanation

Explains the current local stage.

It answers:

> What is happening here?

### Evaluation Center

Interprets the completed Journey.

It answers:

> What does this whole process mean?

This distinction is fundamental.

---

## 20. Evaluation Center

The Evaluation Center is a persistent region associated with the entire process comparison.

It does not belong to one Station or one Journey.

After a Journey reaches End, the Evaluation Center updates with information about that completed Journey.

Example:

    JOURNEY B COMPLETE

    7 stages

    More checkpoints
    Longer transformation
    Higher process complexity

    Assessment:
    Thorough but comparatively expensive.

The content is replaceable.

The structural relationship is permanent:

    completed Journey
           ↓
       evaluation
           ↓
    comparative understanding

---

## 21. Evaluation as Comparison Memory

The Evaluation Center may eventually preserve or compare results from multiple completed Journeys.

For example:

    Journey A
    Moderate complexity
    Balanced

    Journey B
    More checkpoints
    Thorough

    Journey C
    Shortest process
    Fast

This makes the shared Start and End especially valuable.

The viewer is comparing alternative routes under common conditions.

Whether evaluations accumulate or replace one another is a future interaction decision.

---

## 22. Spatial Composition

The Journeys should occupy distinct but related regions between Start and End.

They should not simply appear as three identical parallel horizontal lines.

A useful composition may resemble:

                 ╭── Journey A ──╮
                ╱                 ╲
    START ●────●                   ●────● END
                ╲                 ╱
                 ╲── Journey B ──╱
                  ╲             ╱
                   ╰ Journey C ╯

The exact geometry should be generated responsively.

The important visual relationship is:

- common divergence from Start;
- visibly distinct middle Journeys;
- common convergence toward End.

---

## 23. Geometry and Empty Space

Generated Paths must consider the available Field.

Path generation should attempt to preserve:

- readable separation between Journeys;
- sufficient Station spacing;
- room for Station explanations;
- clear Start and End;
- clear Evaluation Center;
- low accidental overlap.

Therefore random geometry should operate inside constrained Journey regions rather than across unrestricted screen space.

---

## 24. Motion Timing

Journey timing should be derived from process structure where practical.

Possible inputs include:

    pathLength
    stationCount
    stationPauseDuration
    travelerSpeed

A Journey with seven Stations should not necessarily have the same total duration as one with three.

However, duration should remain configurable.

The blueprint does not prescribe one universal timing model.

---

## 25. Path Drawing and Traveler Motion

The Path and Traveler may communicate progression together.

Possible behaviors include:

- full Path visible before traversal;
- Path progressively illuminated;
- Path progressively drawn;
- traveled section changes state;
- upcoming section remains quiet;
- Traveler alone communicates progress.

The first reference experiment should remain simple enough to determine which mechanism is actually useful.

---

## 26. Process States

A Journey may conceptually occupy:

    IDLE
      ↓
    SELECTED
      ↓
    RUNNING
      ↓
    STATION ACTIVE
      ↓
    RUNNING
      ↓
    ...
      ↓
    COMPLETE
      ↓
    EVALUATED

A reset or new selection may return it to IDLE.

Explicit state ownership is preferable to scattered animation flags.

---

## 27. Variable Properties

Blueprint 300 should permit variation in:

### Comparison

- Journey count;
- Start geometry;
- End geometry;
- Evaluation behavior.

### Journey

- Station count;
- Path geometry;
- irregularity;
- Path length;
- spatial region;
- timing.

### Station

- content;
- geometry;
- reaction;
- explanation;
- pause duration.

### Traveler

- visual identity;
- size;
- speed;
- movement character.

### Evaluation

- content;
- layout;
- summary type;
- comparison behavior.

These are parameters or derived properties rather than permanent constants.

---

## 28. Separation of Responsibilities

The implementation should preserve separation between:

    STRUCTURE
    What Journeys and Stations exist?

    ORDER
    In what sequence are Stations visited?

    GEOMETRY
    Where are Start, End, Paths and Stations?

    PATH GENERATION
    How does each irregular Journey take shape?

    TRAVERSAL
    How does the Traveler progress?

    STATION EVENT
    What happens when a Station is reached?

    EXPLANATION
    What local information appears?

    EVALUATION
    What is concluded after completion?

    VISUAL ASSET
    What do these participants look like?

This separation allows the same motion mechanism to survive future content and visual changes.

---

## 29. Planned Reference Experiment

The first browser reference should test:

    1 Shared Start
    1 Shared End
    3 alternative Journeys

    Journey A → 5 Stations
    Journey B → 7 Stations
    Journey C → 3 Stations

Each Journey receives:

- a distinct irregular generated curve;
- ordered Station positions;
- one Traveler traversal;
- several Station reaction types;
- temporary Station explanations.

Clicking a Journey begins traversal from the common Start.

Only one Journey runs at a time.

After reaching the common End, the Evaluation Center displays a short dummy assessment of that Journey.

---

## 30. What Is Not Fixed

Blueprint 300 does **not** permanently specify:

- three Journeys;
- 5 / 7 / 3 Stations;
- circles for Start or End;
- specific symbols;
- specific curve shapes;
- shortest paths;
- specific Station reactions;
- specific Traveler appearance;
- specific explanation text;
- specific evaluation text;
- specific timing;
- specific easing;
- specific typography;
- specific colors;
- specific visual styling.

These belong to the reference implementation or future visual systems.

---

## 31. Fundamental vs Variation

Blueprint **300** represents the fundamental multi-path process comparison logic.

Ordinary parameter changes remain Blueprint 300.

For example:

    4 Journeys instead of 3
    10 Stations instead of 7
    stronger curves
    different symbols
    faster Traveler
    different text

do not automatically create descendants.

A descendant such as:

    310
    320
    330

should be created only when the underlying motion logic meaningfully changes.

Deeper descendants may use:

    311
    312
    313

and so forth.

The number describes motion lineage, not configuration.

---

## 32. Fundamental Motion Test

Blueprint 300 asks:

> **Can multiple alternative processes sharing the same origin and destination become visually comparable by giving each a distinct irregular spatial Journey, then allowing a persistent Traveler to reveal that process sequentially through Station-triggered motion and explanation?**

A second question follows:

> **Can completion of the Journey produce a whole-process Evaluation without confusing that evaluation with the local meaning of individual Stations?**

These are the questions the browser reference must test.

---

## Permanent Motion Principle

**Same origin. Same destination. Different journey.**

Alternative processes become visually comparable when their different internal structures are expressed as distinct spatial Paths between common anchors.

A persistent Traveler makes the selected process readable through time.

Each Station explains a local transformation.

The Evaluation Center interprets the completed Journey as a whole.

The Path does not need to be the shortest route.

Its irregular geometry is part of the process expression.
