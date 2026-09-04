# Blueprint 500 — Growing Equal Formation

**Status:** Browser-tested Fundamental Motion Blueprint  
**Family:** Equal-status formation / incremental population / geometric reorganization  
**Living reference:** `index.html`, `style.css`, `app.js`

---

## 1. Fundamental Motion Idea

A formation begins with a center and a small population of equal-status participants.

Each interaction adds exactly one new participant.

The existing participants persist. They are not discarded or replaced.

After the addition, the entire population reorganizes itself into a newly balanced formation.

Conceptually:

    Formation N
         ↓
    + one participant
         ↓
    calculate Formation N+1
         ↓
    persistent participants reposition
         +
    new participant enters
         +
    connectors reorganize
         ↓
    new equilibrium

At lower counts, each population can resolve into a distinct geometric formation.

At higher counts, discrete formations transition into an expandable radial orbit.

The fundamental idea is:

> **Adding one equal-status participant causes the persistent population to reorganize into a new balanced formation.**

---

## 2. Blueprint Principle

Blueprint 500 defines population growth and equal-status reformation.

It does not permanently define:

- the visual identity of participants;
- the exact center symbol;
- the exact formation assigned to every count;
- the number eight as a universal threshold;
- exact connector patterns;
- exact orbit radius;
- exact rotation speed;
- exact timing or easing;
- exact visual styling.

The browser reference demonstrates one useful mapping.

**Workbench primitives are test instruments, not design specifications.**

---

## 3. Equal-Status Participants

The members of the formation have equal structural status.

There is no parent → child hierarchy among them.

This distinguishes Blueprint 500 from hierarchical systems such as Blueprint 400.

Conceptually:

    A = B = C = D = E

A participant may be represented by:

- symbol;
- letter;
- number;
- word;
- icon;
- image;
- Card;
- Object;
- compatible visual asset.

The formation logic operates on membership and geometry rather than content type.

---

## 4. Persistent Center

The reference contains a persistent Center.

The Center establishes the spatial origin around which the population organizes.

It is not counted as one of the equal members.

Conceptually:

          member

    member   ◎   member

          member

The Center may be visible or invisible.

It may represent:

- a subject;
- shared idea;
- shared resource;
- origin;
- system;
- focal point;
- geometric anchor.

The exact center asset is replaceable.

---

## 5. Incremental Addition

The fundamental interaction is:

    ADD ONE

Each activation increases population by exactly one participant.

For example:

    1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → ...

The important motion is not merely the entrance of the new participant.

The important event is:

> **the addition changes the geometry of the whole.**

---

## 6. Persistence

Existing members survive every structural transition.

The system should not simulate reformation by destroying the old formation and creating a new one.

Instead:

    Member A at position Aₙ
              ↓
    Member A travels
              ↓
    Member A at position Aₙ₊₁

Identity is preserved through transformation.

This allows the viewer to understand that the population remains the same while its organization changes.

---

## 7. Formation

A Formation is an equal-status geometric composition.

Possible formations include:

    line
    opposition
    triangle
    square
    pentagon
    star
    polygon
    radial arrangement
    ring
    orbit

A Formation describes the relationship among participants at a particular population size.

It is not tied to a specific visual asset.

---

## 8. Discrete Formation Mode

At lower population counts, the system may assign recognizably distinct balanced geometries.

The browser reference demonstrates approximately:

    2 → opposition / two-sided balance

    3 → triangle

    4 → square

    5 → pentagonal / star structure

    6–8 → increasingly radial polygonal structures

These mappings are reference choices.

The permanent rule is:

> **When the population is small enough for a distinct formation to remain legible, the system may reorganize into a count-appropriate balanced geometry.**

---

## 9. Reformation

When a new member enters, all target positions are recalculated.

Existing members move from the old equilibrium into the new equilibrium.

Conceptually:

    old geometry
        ↓
    population changes
        ↓
    calculate new geometry
        ↓
    all members travel
        ↓
    new geometry settles

This visible reorganization is the central motion event of Blueprint 500.

---

## 10. New Member Entrance

The newly added participant begins from an entry state and joins the persistent population.

Its entrance may use:

- scale;
- opacity;
- movement;
- rotation;
- another compatible reveal.

The entrance should remain subordinate to the larger structural event.

The blueprint is not fundamentally an “item appears” animation.

It is a **whole-formation response to membership change**.

---

## 11. Connectors

Connectors may be used to clarify the current formation.

At low counts they can make geometry more identifiable.

Examples:

    triangle outline
    square outline
    polygon outline
    radial spokes
    star diagonals

Connectors should reorganize with the participants.

They are structural visualization aids rather than permanent requirements.

---

## 12. Connector Density

Connector logic should respond to population density.

At small counts, explicit relationships can remain readable.

At large counts, connecting every participant can create visual noise.

Therefore the system may simplify:

    detailed connectors
           ↓
    simpler polygon
           ↓
    radial guide
           ↓
    ring / orbit guide

The browser reference deliberately changes to a quiet circular guide in high-count mode.

---

## 13. Threshold

At some population size, inventing a new visually distinct static formation for every additional member becomes less useful.

Blueprint 500 therefore permits a structural threshold:

    DISCRETE FORMATION
            ↓
        threshold
            ↓
       RADIAL ORBIT

The reference uses more than eight participants as the transition.

**Eight is an experimental threshold, not a permanent blueprint constant.**

The threshold may depend on:

- participant size;
- Field size;
- desired spacing;
- visual density;
- content;
- interaction purpose.

---

## 14. Radial Orbit Mode

After the threshold, the population reorganizes into a circular/radial system around the Center.

Members are distributed around the circumference.

The formation then rotates continuously.

Conceptually:

         ●   ●
      ●         ●
    ●      ◎      ●
      ●         ●
         ●   ●

The orbit creates a stable structural language that can accept further population growth without requiring a new named polygon for every count.

---

## 15. Orbit Growth

Additional participants continue to enter after orbit mode begins.

Each addition causes:

    new member
        ↓
    recalculate angular distribution
        ↓
    redistribute persistent members
        ↓
    adjust radius if necessary
        ↓
    resume continuous orbit

The ring therefore remains dynamic rather than fixed.

---

## 16. Expanding Radius

As population density increases, the radial formation may expand.

The purpose is to preserve useful spacing between participants.

Conceptually:

    more members
         ↓
    greater circumference required
         ↓
    larger radius

The relationship does not need to be linear.

Radius may depend on:

    participantCount
    participantSize
    minimumGap
    availableField
    maximumRadius

The reference uses a simple count-based expansion.

---

## 17. Continuous Rotation

In orbit mode, the formation may rotate continuously around the Center.

Rotation communicates that the high-count structure has become a persistent dynamic system rather than another static polygon.

The browser reference counter-rotates individual participants so their glyphs remain readable while their positions orbit.

This demonstrates an important transform-ownership distinction:

    formation container owns orbital rotation
    participant owns readable local orientation

---

## 18. Structural Transition

The transition from discrete formation to orbit mode is meaningful.

It represents a change in organizational strategy:

    LOW POPULATION
    distinct count-specific equilibrium

              ↓

    HIGH POPULATION
    scalable radial equilibrium

This is not merely a styling change.

It is a response to increasing structural density.

---

## 19. Balance

Every formation should aim for perceptual equilibrium.

Balance may be established through:

- equal angular spacing;
- symmetry;
- mirrored positions;
- regular polygon geometry;
- consistent radius;
- balanced connector structure.

Perfect mathematical symmetry is not mandatory in future descendants, but the fundamental reference uses balance to make equal status immediately readable.

---

## 20. Geometry Generation

Target positions should be calculated rather than manually frozen to one composition.

Possible inputs include:

    participantCount
    center
    availableField
    formationMode
    radius
    participantSize
    spacing
    orientation

Conceptually:

    population count
          ↓
    select formation logic
          ↓
    calculate target positions
          ↓
    calculate connectors
          ↓
    animate persistent members
          ↓
    establish equilibrium

---

## 21. Motion Continuity

Transitions should preserve spatial continuity.

When the population changes, members should visibly travel to their new positions.

Avoid:

    old formation disappears
    new formation appears

Prefer:

    old formation
          ↓
    continuous repositioning
          ↓
    new formation

Motion itself explains the structural transformation.

---

## 22. Motion States

A participant may conceptually occupy:

    ENTERING
       ↓
    REPOSITIONING
       ↓
    ESTABLISHED
       ↓
    ORBITING

The whole formation may occupy:

    CENTERED
       ↓
    REFORMING
       ↓
    DISCRETE EQUILIBRIUM
       ↓
    ORBIT TRANSITION
       ↓
    RADIAL ORBIT
       ↓
    EXPANDING ORBIT

Explicit states become especially useful as interaction complexity increases.

---

## 23. Variable Properties

Blueprint 500 should allow variation in:

    participantCount
    participantContent
    participantSize
    centerPosition
    centerAsset
    formationMappings
    orbitThreshold
    orbitRadius
    minimumSpacing
    connectorLogic
    rotationSpeed
    transitionDuration
    easing
    Field dimensions

Changing these parameters does not automatically create a new blueprint ID.

---

## 24. Separation of Responsibilities

The implementation should preserve separation between:

    MEMBERSHIP
    Which participants currently belong?

    IDENTITY
    Which persistent participant is which?

    FORMATION
    What geometry should this count use?

    GEOMETRY
    Where should each participant move?

    CONNECTORS
    How should the current structure be clarified?

    MOTION
    How do members travel between equilibria?

    ORBIT
    When does continuous radial behavior take ownership?

    VISUAL ASSET
    What does each participant look like?

This separation allows the mechanism to survive future visual and content changes.

---

## 25. Browser-Tested Reference

The approved living reference demonstrates:

- a persistent Center;
- incremental one-at-a-time addition;
- persistent equal-status participants;
- automatic target recalculation;
- whole-population reformation;
- two-sided formation;
- triangle;
- square;
- star/polygon behavior;
- connector reconfiguration;
- discrete formations through eight participants;
- transition to radial orbit above eight;
- continuous orbital rotation;
- readable counter-rotation of participant glyphs;
- expanding radius as population increases;
- reset and replay.

The browser reference successfully demonstrates the fundamental motion mechanism.

---

## 26. What Is Not Fixed

Blueprint 500 does **not** permanently specify:

- the `◎` Center;
- letters, numbers, or symbols;
- current participant shapes;
- exact participant dimensions;
- exact formation mappings;
- the star at five;
- the orbit threshold of eight;
- current connector topology;
- current radius formula;
- current rotation speed;
- current easing;
- current colors;
- current typography;
- current Field dimensions.

These belong to the reference implementation.

---

## 27. Fundamental vs Variation

Blueprint **500** represents the fundamental equal-population formation logic.

Parameter changes remain Blueprint 500.

For example:

    different symbols
    larger participants
    orbit begins at 10
    slower rotation
    different radius
    different polygon mapping
    different connector style

do not automatically create a descendant.

A descendant such as:

    510
    520
    530

should exist only when the underlying motion logic meaningfully changes.

Further descendants may use:

    511
    512
    513

and so on.

The number describes motion lineage, not ordinary configuration.

---

## 28. Fundamental Motion Test

Blueprint 500 asks:

> **Can the addition of one equal-status participant visibly cause a persistent population to reorganize itself into a new balanced whole?**

It also asks:

> **Can the formation change organizational strategy as population density increases, moving from distinct static geometries into a scalable radial orbit without losing participant identity?**

The browser reference confirms that this mechanism works.

---

# Permanent Motion Principle

**Membership changes the geometry of the whole.**

An equal-status formation is not a collection of independently positioned objects.

Its members define one another's positions.

Therefore:

    add one participant
          ↓
    whole structure responds
          ↓
    persistent members move
          ↓
    relationships redraw
          ↓
    new equilibrium emerges

At low density, equilibrium may be expressed through distinct geometric formations.

At higher density, the same population can transition into an expandable continuous orbit.

The participants persist.

**The formation changes around them.**
