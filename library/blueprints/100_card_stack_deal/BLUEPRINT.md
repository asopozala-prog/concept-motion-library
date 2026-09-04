# Blueprint 001 — Card Stack / Preview → Detail → Deal

**Status:** Blueprint / Experimental  
**Family:** Card structure  
**Purpose:** Explore a variable card stack whose active member can expand its preview components into an active field and then be dealt into a sleeping state.

---

## Blueprint Principle

Blueprints define motion behavior, structural relationships, states, and spatial rules.

They must not unnecessarily freeze the number, content, size, shape, or visual identity of their participants.

**Workbench primitives are test instruments, not design specifications.**

A rectangle used as a Card in the workbench does not mean the future Card must be rectangular.

A symbol used as a Component does not mean the future Component must be a symbol.

---

## 1. Structural Model

The blueprint contains:

- a Card Stack
- Cards
- Components belonging to each Card
- an Active Field
- a Sleeping Field

Conceptually:

    STACK
      │
      ├── Card
      │    ├── Component
      │    ├── Component
      │    └── ...
      │
      ├── Card
      └── ...

The number of Cards is variable.

The number of Components belonging to a Card is variable.

These quantities are experiment parameters, not structural constants.

---

## 2. Card

A Card is a replaceable host object.

It provides:

- a preview state
- a region for previewing its Components
- an active state
- participation in the stack
- participation in the deal / sleeping behavior

The blueprint must not require a Card to have a particular:

- width
- height
- aspect ratio
- shape
- artwork
- visual asset
- content type

A future Card may be a rectangle, SVG object, illustration, irregular asset, or another compatible visual object.

The motion system should depend on usable geometry rather than a particular appearance.

Useful Card geometry may include:

- bounds
- center
- preview region
- stack anchor
- drag anchor

---

## 3. Components

A Component is a participant belonging to a Card.

Its content is undefined by this blueprint.

A Component may later contain:

- text
- number
- symbol
- icon
- image
- visual asset
- another Card
- a Diagram
- another structured composition

Components may have different sizes and aspect ratios.

The parent Card should not need to understand the internal content of a Component.

It needs only the structural and geometric information necessary to place and animate it.

---

## 4. Card Stack

Cards form a perceptible depth structure.

The front Card is the Active Card.

Cards behind it remain perceptible through spatial differences such as:

- position offset
- scale
- depth
- other renderer-appropriate spatial cues

The exact depth treatment is not permanently fixed by this blueprint.

When the Active Card leaves the stack, the remaining Cards advance structurally.

The next Card inherits the active/front position.

Therefore the stack is governed by relative membership and order rather than hardcoded Card coordinates.

---

## 5. Card States

A Card may occupy the following conceptual states:

    QUEUED
       ↓
    ACTIVE
      ├── PREVIEW
      └── DETAIL
       ↓
    SLEEPING

### Queued

The Card belongs to the stack but is not currently active.

### Active / Preview

The Card is the front member of the stack.

Its Components are already represented within the Card.

The Card acts as a preview space.

### Active / Detail

The same Components expand from their preview positions into the Active Field.

Component identity is preserved throughout the transition.

### Sleeping

The Card has been dealt from the active stack into the Sleeping Field.

It still exists but no longer participates in the active stack.

---

## 6. Preview Principle

**Card = preview space.**

Components should not collapse into an indistinguishable central pile.

Each Component should have a perceptible preview representation on the Card.

The preview layout should be derived from:

- available preview space
- Component count
- Component geometry
- spacing rules

It should not depend on hardcoded coordinates for specific Component indices.

Examples such as 3+2 arrangements are valid workbench tests, not permanent blueprint rules.

---

## 7. Preview → Detail Motion

Opening a Card does not mean revealing previously nonexistent objects.

Instead:

    COMPONENT PREVIEW
           ↓
    spatial transformation
           ↓
    COMPONENT DETAIL

Each Component travels from its actual preview position into an allocated region of the Active Field.

Closing reverses the relationship:

    COMPONENT DETAIL
           ↓
    spatial transformation
           ↓
    ORIGINAL PREVIEW POSITION

The motion should preserve Component identity so that the viewer can understand which preview became which detailed element.

---

## 8. Active Field

The Active Field is the available spatial region into which Components can expand.

Expanded Component positions must not be permanently hardcoded.

The layout mechanism should consider:

- available field bounds
- Card geometry
- Component count
- Component preferred size
- Component aspect ratio
- spacing
- overlap avoidance
- balanced use of available space

The Active Card may reserve part of the field while its Components occupy the remaining space.

The resulting geometry becomes the destination for motion.

---

## 9. Intelligent Expansion

"Intelligent" does not require AI.

For this blueprint it means responsive, geometry-aware allocation.

Conceptually:

    measure Active Field
            ↓
    measure Card
            ↓
    inspect Component geometry
            ↓
    calculate usable regions
            ↓
    allocate Components
            ↓
    resolve destination geometry
            ↓
    animate preview → detail

The layout system determines **where** participants belong.

The motion system determines **how** they travel there.

---

## 10. Deal → Sleeping

The Active Card can leave the stack and enter a designated Sleeping Field.

Conceptually:

    ACTIVE CARD
         ↓
       DEAL
         ↓
    SLEEPING FIELD

Once the Card is committed to the Sleeping Field:

1. it leaves the active stack;
2. its state becomes Sleeping;
3. the remaining stack advances;
4. the next queued Card becomes Active.

The motion should make this structural handoff perceptible.

---

## 11. Variable Properties

The blueprint should permit future variation in at least:

### Stack

- Card count
- depth spacing
- depth scaling
- stack direction
- stack geometry

### Card

- size
- aspect ratio
- shape
- visual asset
- preview region

### Components

- count
- size
- aspect ratio
- content
- visual identity
- internal structure

### Fields

- size
- shape
- available regions
- spatial relationship to the Card Stack

### Motion

- timing
- easing
- stagger
- trajectory
- expansion behavior
- settling behavior

Variation must remain subordinate to the structural meaning of the blueprint.

---

## 12. Separation of Responsibilities

The blueprint should prefer:

    STRUCTURE
    determines relationships and states

    LAYOUT
    determines natural spatial positions

    MOTION
    transforms participants between those positions

    VISUAL ASSETS
    determine appearance and identity

For example, browser layout may determine natural Component preview positions while GSAP animates between preview and detail geometry.

GSAP should not be used to hardcode layout decisions that belong to the layout system.

---

## 13. Workbench Experiment

The current workbench experiment uses:

- 10 Cards
- 5 Components per Card
- rectangular Card primitives
- simple symbolic Component primitives
- a visible Sleeping Field

These are test conditions only.

They are not specifications of the future Template.

Before promotion, the mechanism should be tested with substantially different configurations without rewriting index-specific layout rules.

Examples:

    10 Cards × 5 Components
    6 Cards × 8 Components
    15 Cards × 3 Components
    mixed Component geometries

---

## 14. Promotion Condition

Blueprint 001 becomes a Template only after the motion mechanism survives meaningful variation.

Promotion should demonstrate that changing participant count, geometry, or visual representation does not require rebuilding the fundamental motion behavior.

The Template should preserve the proven mechanism, not the accidental appearance of the workbench experiment.

---

## Permanent Motion Idea

**A variable ordered stack presents one active Card as a preview space. Its persistent Components can expand into geometry-aware detail space and return while preserving identity. The active Card can then be dealt into a sleeping state, causing the remaining structure to advance and the next Card to inherit the active role.**
