# Blueprint 400 — Growing Symbol Tree

**Status:** Browser-tested Fundamental Motion Blueprint  
**Family:** Hierarchical growth / branching / progressive structure  
**Living reference:** `index.html`, `style.css`, `app.js`

---

## 1. Fundamental Motion Idea

A hierarchical structure begins from a single Root and progressively grows outward.

The structure does not appear all at once.

Growth follows ancestry:

    ROOT
      ↓
    TRUNK
      ↓
    PRIMARY BRANCHES
      ↓
    SECONDARY BRANCHES
      ↓
    TERTIARY BRANCHES
      ↓
    NEWEST DESCENDANTS

A parent must exist before its descendants can grow from it.

The visible participants may be letters, numbers, symbols, text fragments, Cards, Objects, or other compatible Components.

Scale decreases as the hierarchy moves farther from the Root.

The fundamental idea is:

> **A hierarchy becomes understandable by visibly growing from parent to descendant.**

---

## 2. Blueprint Principle

Blueprint 400 defines hierarchical growth behavior.

It does not permanently define:

- the number of generations;
- the number of children per parent;
- the symbols used;
- exact branch geometry;
- exact curvature;
- exact size;
- exact timing;
- exact visual styling.

The browser reference demonstrates one possible tree.

**Workbench primitives are test instruments, not design specifications.**

---

## 3. Structural Model

The basic structure is:

    Tree
    │
    └── Root
         │
         └── Trunk
              │
              ├── Child
              │    ├── Child
              │    └── Child
              │
              ├── Child
              │    ├── Child
              │    ├── Child
              │    └── Child
              │
              └── Child
                   ├── Child
                   └── Child

This is fundamentally a parent → child hierarchy.

Each participant may itself become the parent of another generation.

---

## 4. Root

The Root is the origin of the hierarchy.

It establishes:

- the initial position;
- the initial growth direction;
- the beginning of the structural sequence.

The Root does not need to be visually prominent.

It may be:

- visible;
- labelled;
- represented by an Object;
- represented by another asset;
- or function primarily as a spatial anchor.

The current experiment places the Root near the bottom of the Field.

This is a reference choice, not a permanent requirement.

---

## 5. Trunk

The Trunk is the first major structural participant emerging from the Root.

It carries the strongest visual hierarchy.

In the reference experiment it is:

- the largest participant;
- the thickest connection;
- the first structure to grow;
- the parent of the primary branches.

The Trunk may eventually represent:

- a central subject;
- root concept;
- organization;
- system;
- category;
- primary argument;
- starting entity.

Its visual form is replaceable.

---

## 6. Branch

A Branch represents a parent → child relationship.

A Branch connects an existing participant to a newly growing descendant.

Conceptually:

    Parent
       │
       └── Branch grows
                ↓
              Child

The Branch is therefore not merely decoration.

It communicates ancestry and structural dependency.

---

## 7. Curved Growth

Branches may use curved geometry.

The reference implementation uses generated Bézier curves.

Curvature gives the hierarchy a more organic spatial character and prevents the tree from becoming a rigid technical diagram.

However:

> **Curvature is preferred behavior, not a structural requirement.**

Straight connections remain valid when required by layout, renderer, or design.

---

## 8. Generation

A Generation is one hierarchical depth level.

For example:

    Generation 0 — Trunk

    Generation 1 — Primary branches

    Generation 2 — Secondary branches

    Generation 3 — Tertiary branches

    Generation 4 — Newest descendants

Generation count is variable.

Blueprint 400 does not prescribe a maximum depth.

---

## 9. Parent Before Child

The essential sequencing rule is:

> **A descendant cannot visually grow before the structure it grows from exists.**

Therefore:

    Parent appears
        ↓
    Branch extends
        ↓
    Child appears
        ↓
    Child becomes potential Parent
        ↓
    next Branch extends

This causality is fundamental to Blueprint 400.

---

## 10. Progressive Growth

The hierarchy should not simply fade into view generation by generation.

The structural connection itself should visibly grow outward.

The browser reference demonstrates:

    branch draws outward
          ↓
    destination becomes visible
          ↓
    symbol resolves
          ↓
    descendants may begin

This gives the viewer a visible explanation of where each new participant came from.

---

## 11. Sibling Growth

Multiple children belonging to the same Parent may grow with slight temporal overlap.

For example:

              Parent
             /  |  \
            ↓   ↓   ↓
           A    B    C

They do not necessarily need to grow strictly one after another.

Controlled overlap can make growth feel alive while preserving the parent → child relationship.

The important rule is that siblings do not begin before their Parent exists.

---

## 12. Variable Branching Factor

Each Parent may produce a different number of children.

Conceptually:

    Parent A → 3 children

    Parent B → 5 children

    Parent C → 2 children

The branching factor is therefore variable.

Possible inputs include:

    minChildren
    maxChildren
    generation
    availableSpace
    parentData

The reference implementation uses randomized branching within controlled ranges.

Those ranges are experimental parameters.

---

## 13. Persistent Participants

Once a participant grows into the tree, it remains part of the visible structure.

The experiment is not:

    appear
    disappear
    replace

It is:

    appear
      ↓
    become part of hierarchy
      ↓
    potentially produce descendants

The completed tree therefore contains the visible history of its own growth.

---

## 14. Symbolic Participants

The reference experiment deliberately uses abstract textual participants such as:

    A
    7
    #
    △
    Ä
    42
    XY
    ◇

This tests whether hierarchical growth works independently of specific content.

The participant may later be:

- letter;
- number;
- symbol;
- word;
- short text;
- icon;
- image;
- Card;
- visual asset;
- Diagram;
- another structured Component.

Blueprint 400 operates on hierarchy rather than content type.

---

## 15. Scale Encodes Hierarchy

Scale decreases through successive generations.

Conceptually:

    TRUNK             █████

    PRIMARY           ████

    SECONDARY         ███

    TERTIARY          ██

    NEWEST            █

This creates immediate visual hierarchy.

The Root/Trunk has the strongest visual weight.

Newer and deeper descendants become progressively smaller.

Exact scale values are not fixed.

---

## 16. Connection Weight

Connection weight may also decrease with hierarchical depth.

The reference experiment uses:

    Trunk          thickest
    Primary        thick
    Secondary      medium
    Tertiary       thin
    Newest         thinnest

This reinforces the same structural hierarchy expressed by participant scale.

Connection thickness is optional visual encoding rather than the fundamental motion mechanism.

---

## 17. Growth Direction

The browser reference grows primarily upward from a Root near the ground.

This produces the intuitive metaphor of a growing tree.

However, Blueprint 400 is fundamentally directional rather than specifically vertical.

Possible future orientations include:

    bottom → top
    top → bottom
    left → right
    right → left
    center → outward
    radial growth

The important principle is consistent parent → descendant expansion.

---

## 18. Generated Geometry

The tree geometry should be capable of being generated from structural data.

Possible inputs include:

    rootPosition
    initialDirection
    generationCount
    childrenPerParent
    branchLength
    branchSpread
    curvature
    availableField
    randomSeed

Conceptually:

    hierarchy
       ↓
    calculate parent position
       ↓
    calculate child directions
       ↓
    calculate branch lengths
       ↓
    constrain to Field
       ↓
    generate connection curves
       ↓
    animate growth

The hierarchy should own the structure.

Geometry should express it.

---

## 19. Controlled Irregularity

The tree does not need perfect symmetry.

Variation may occur in:

- branch angle;
- branch length;
- curvature;
- child count;
- spacing.

This gives the structure an organic quality.

However, randomness must remain controlled.

The goal is not chaos.

The goal is:

> **A readable hierarchy with natural variation.**

A seeded random system is useful because successful compositions can be reproduced.

---

## 20. Field Constraints

Generated descendants should remain inside the available Field where practical.

Geometry generation should consider:

- screen bounds;
- available width;
- available height;
- sibling spacing;
- existing branches;
- generation depth.

The current experiment applies simple boundary constraints.

More advanced collision or layout intelligence may become later variations.

---

## 21. Growth Timing

Timing should reflect hierarchy.

A useful conceptual timing model is:

    Trunk
      ↓
    Generation 1
      ↓
    Generation 2
      ↓
    Generation 3
      ↓
    Generation N

Within a generation, sibling growth may overlap.

Between generations, the next level should wait until enough of the parent structure exists to make ancestry understandable.

---

## 22. Motion States

A participant may conceptually occupy:

    NOT CREATED
         ↓
    BRANCH GROWING
         ↓
    APPEARING
         ↓
    ESTABLISHED
         ↓
    PARENT-CAPABLE

The whole Tree may occupy:

    EMPTY
      ↓
    ROOTED
      ↓
    GROWING
      ↓
    EXPANDING
      ↓
    COMPLETE

Explicit states are preferable when the blueprint becomes more interactive.

---

## 23. Regrowth

The reference implementation allows the Tree to be regenerated.

Regrowth demonstrates that the motion logic is independent of one fixed geometry.

Each regeneration can produce:

- different angles;
- different branch lengths;
- different child counts;
- different symbols;
- different curves.

The structural rule remains unchanged.

This is useful evidence that Blueprint 400 describes a mechanism rather than a single composition.

---

## 24. Separation of Responsibilities

The implementation should preserve separation between:

    HIERARCHY
    Who is the parent of whom?

    GENERATION
    How deep is each participant?

    GEOMETRY
    Where does each participant live?

    CONNECTION
    How is parent connected to child?

    GROWTH
    In what order does structure come into existence?

    SCALE
    How is hierarchical depth visually encoded?

    CONTENT
    What does each participant represent?

    VISUAL ASSET
    What does each participant look like?

This separation allows the motion logic to survive future content and design changes.

---

## 25. Browser-Tested Reference

The approved visual reference demonstrates:

- one shared Root;
- one large Trunk;
- multiple hierarchical generations;
- variable child counts;
- generated curved branches;
- abstract symbol participants;
- decreasing participant scale;
- decreasing connection weight;
- parent-first growth;
- sibling overlap;
- persistent completed structure;
- regeneration with new controlled geometry.

The browser reference successfully demonstrates the fundamental motion idea.

---

## 26. What Is Not Fixed

Blueprint 400 does **not** permanently specify:

- four generations;
- three primary branches;
- two to four children;
- upward orientation;
- the current symbols;
- the current branch lengths;
- the current branch angles;
- Bézier curvature;
- current font sizes;
- current line widths;
- current timing;
- current easing;
- current colors;
- current typography;
- current Field dimensions.

These are properties of the living reference implementation.

---

## 27. Fundamental vs Variation

Blueprint **400** represents the fundamental hierarchical-growth logic.

Parameter changes remain Blueprint 400.

For example:

    6 generations instead of 4
    5 children instead of 3
    longer branches
    different symbols
    stronger curvature
    horizontal orientation
    faster growth

do not automatically create a descendant.

A descendant such as:

    410
    420
    430

should exist only when the underlying motion logic meaningfully changes.

Further descendants may use:

    411
    412
    413

and so on.

The number describes motion lineage, not ordinary configuration.

---

## 28. Fundamental Motion Test

Blueprint 400 asks:

> **Can a variable hierarchy become visually understandable by growing from its Root outward, ensuring that parents visibly establish themselves before descendants emerge?**

It also asks:

> **Can decreasing scale, branching geometry, and progressive connection growth communicate hierarchical depth without depending on any particular content or visual asset?**

The browser reference confirms that this mechanism works.

---

# Permanent Motion Principle

**Structure grows from ancestry.**

A hierarchy should not merely reveal its completed form.

Its motion can explain how that form came into existence:

    Root establishes origin
           ↓
    Trunk establishes primary structure
           ↓
    Parents produce descendants
           ↓
    descendants become new parents
           ↓
    the hierarchy expands through generations

The farther a participant is from the Root, the lighter its visual hierarchy may become.

Elements persist after appearing, so the completed structure preserves the visible history of its own growth.
