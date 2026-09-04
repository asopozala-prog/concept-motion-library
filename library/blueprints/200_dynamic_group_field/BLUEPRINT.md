# Blueprint 200 — Dynamic Group Field

**Status:** Fundamental Motion Blueprint  
**Family:** Dynamic grouping / classification / regrouping  
**Reference implementation:** `index.html`, `style.css`, `app.js`

---

## 1. Fundamental Motion Idea

A population of persistent Components exists freely inside an Active Field.

Multiple Groups represent different structural conditions.

When a Group becomes active, every Component is evaluated against that Group's condition.

Matching Components leave their current spatial state, travel toward the selected Group, enter its region, and continue moving inside it.

When another Group is selected, the population is evaluated again.

Components may:

- remain where they are;
- leave a previous Group;
- travel across the Active Field;
- enter the newly selected Group;
- continue moving after regrouping.

The important idea is not filtering or hiding.

The important idea is:

> **Persistent elements visibly reorganize themselves when their structural relationships change.**

---

## 2. Blueprint Principle

Blueprints define motion behavior, structural relationships, states, and spatial rules.

They must not unnecessarily freeze the number, content, size, shape, or visual identity of their participants.

**Workbench primitives are test instruments, not design specifications.**

The current reference implementation uses:

- 50 Components;
- 6 Groups;
- circular Group boundaries;
- text, numbers and symbols;
- simple drifting motion.

These choices demonstrate the mechanism.

They are not requirements of the blueprint.

---

## 3. Structural Model

The fundamental structure is:

    ACTIVE FIELD
        │
        ├── Component
        ├── Component
        ├── Component
        ├── ...
        │
        └── Groups
             ├── Group
             ├── Group
             ├── Group
             └── ...

Components are persistent participants.

Groups define possible structural memberships.

The Active Field provides the shared spatial environment in which Components and Groups interact.

---

## 4. Component

A Component is a persistent participant that can be evaluated, moved and regrouped.

The blueprint does not define what a Component must visually contain.

A Component may eventually represent:

- a number;
- text;
- a symbol;
- a combination of types;
- an icon;
- an image;
- an asset;
- a Card;
- a Diagram;
- another structured object.

A Component may have its own:

- width;
- height;
- aspect ratio;
- visual identity;
- internal structure;
- semantic properties;
- movement characteristics.

The grouping mechanism should depend on the Component's relevant properties, not on its temporary workbench appearance.

---

## 5. Component Persistence

Components are not recreated when the grouping condition changes.

A Component remains the same participant throughout the experience.

Conceptually:

    COMPONENT A
       │
       ├── free
       │
       ├── travelling
       │
       ├── member of Group X
       │
       ├── travelling
       │
       └── member of Group Y

Its structural relationship changes.

Its identity does not.

This persistence is essential because the motion itself communicates the transformation.

If Components disappeared and new Components appeared elsewhere, the viewer would lose the structural relationship.

---

## 6. Groups

A Group represents a condition or membership model.

A Group is not merely a visual container.

Conceptually:

    Group
      ├── condition
      ├── spatial region
      ├── membership
      └── internal motion environment

The current reference implementation demonstrates six conditions:

    NUMBER
    SYMBOL
    TEXT
    NUMBER + TEXT
    NUMBER + SYMBOL
    MIXED

These six conditions are examples only.

Future Group conditions may represent any meaningful classification, such as:

- category;
- status;
- priority;
- similarity;
- sequence;
- ownership;
- role;
- type;
- relationship;
- process stage;
- semantic property.

The blueprint does not require six Groups.

**Group count is variable.**

---

## 7. Group Geometry

The current experiment uses circles.

A circle is not part of the fundamental specification.

A future Group may be represented by:

- circle;
- ellipse;
- rectangle;
- irregular SVG region;
- visual asset;
- invisible spatial boundary;
- responsive generated region;
- another compatible geometry.

The motion system should interact with Group geometry through spatial information such as:

- bounds;
- center;
- boundary;
- available interior;
- entry region;
- collision region.

It should not unnecessarily depend on a circular shape.

---

## 8. Active Field

The Active Field is the shared spatial environment.

Components can exist freely within it before joining a Group.

The Field may provide:

- usable bounds;
- movement boundaries;
- exclusion regions;
- Group positions;
- available travel space;
- collision geometry.

Its size, aspect ratio and visual appearance are not fixed by the blueprint.

The visible ellipse used in the reference experiment is only a workbench representation.

---

## 9. Fundamental Component States

A Component may occupy conceptual states such as:

    FREE
      ↓
    TRANSITIONING
      ↓
    GROUPED

and later:

    GROUPED
      ↓
    TRANSITIONING
      ↓
    FREE

or:

    GROUP A
      ↓
    TRANSITIONING
      ↓
    GROUP B

### Free

The Component belongs to the general Active Field.

It remains visible and may continue autonomous motion.

### Transitioning

The Component is moving between structural states.

The trajectory should make the relationship change perceptible.

### Grouped

The Component belongs to an active Group and occupies that Group's spatial region.

Being Grouped does not require becoming static.

---

## 10. Group Selection

Selecting a Group initiates structural evaluation.

Conceptually:

    user selects Group
            ↓
    evaluate Components
            ↓
       match condition?
         /       \
       yes        no
        ↓          ↓
    join Group   remain / leave
        ↓
    settle into Group motion

The exact trigger does not have to remain a mouse click.

Future triggers may include:

- click;
- tap;
- hover;
- scroll state;
- timeline state;
- programmatic event;
- external control;
- another structural interaction.

The blueprint defines the regrouping response, not a permanently fixed input mechanism.

---

## 11. Regrouping

Selecting another Group causes a new evaluation.

The system does not need to reset the scene.

Instead, persistent Components change structural relationships in place.

Conceptually:

    CURRENT STRUCTURE
           ↓
    new Group selected
           ↓
    re-evaluate population
           ↓
    determine new membership
           ↓
    Components remain / leave / enter
           ↓
    NEW STRUCTURE

This is the core regrouping behavior.

---

## 12. Motion Inside a Group

A Group should be capable of remaining visually alive after Components enter it.

The current experiment uses continuous drifting and boundary reflection.

Conceptually:

    ╭──────────────╮
    │  A →         │
    │       B ↘    │
    │ ↑ C          │
    │        D ←   │
    ╰──────────────╯

A Component may reach the Group boundary and respond by:

- bouncing;
- reflecting;
- steering away;
- orbiting;
- slowing;
- changing trajectory;
- following another appropriate bounded-motion rule.

The exact behavior is a variation parameter.

The fundamental principle is:

> **Entering a Group does not necessarily terminate motion.**

The Group may become a local motion environment.

---

## 13. Boundary Interaction

The current reference implementation demonstrates boundary collision through reflection.

This gives the Group a physical feeling:

    Component travels
          ↓
    reaches boundary
          ↓
    trajectory changes
          ↓
    Component remains inside

Boundary response should be derived from the actual Group geometry where practical.

A future irregular Group should not require circular collision mathematics merely because the original workbench experiment used a circle.

---

## 14. Motion Continuity

Regrouping should preserve perceptual continuity.

The viewer should be able to follow a Component from:

    free position
         ↓
    travel path
         ↓
    Group entry
         ↓
    internal Group movement

and later:

    Group position
         ↓
    Group exit
         ↓
    travel path
         ↓
    new structural state

This continuity is more important than decorative complexity.

Motion explains the change of membership.

---

## 15. Variable Properties

The blueprint should permit future variation in at least the following.

### Population

- Component count;
- Component content;
- Component geometry;
- Component visual identity;
- Component properties.

### Groups

- Group count;
- Group conditions;
- Group size;
- Group shape;
- Group visual identity;
- Group position;
- Group capacity behavior.

### Active Field

- dimensions;
- aspect ratio;
- shape;
- usable regions;
- exclusion zones.

### Motion

- free-floating speed;
- trajectory;
- acceleration;
- transition duration;
- easing;
- stagger;
- Group-entry behavior;
- Group-exit behavior;
- internal Group motion;
- boundary response.

These values should be parameters or derived geometry where appropriate.

They should not become accidental structural constants.

---

## 16. Responsive Group Capacity

A future implementation should be able to consider how many Components belong to a Group and how much space those Components require.

For example:

    Group A
    4 Components

and:

    Group B
    18 Components

do not necessarily need identical spatial capacity.

Possible future behavior may include:

- Group expansion;
- adaptive Component scale;
- density management;
- responsive internal spacing;
- multiple internal zones.

The blueprint does not yet prescribe one solution.

It preserves the possibility.

---

## 17. Component Collision

The current fundamental experiment primarily tests Group-boundary interaction.

Component-to-Component collision is not required to define Blueprint 200.

Future variations may explore:

- collision;
- repulsion;
- attraction;
- flocking;
- clustering;
- orbiting;
- spring relationships;
- local avoidance.

These would be legitimate descendants of the fundamental Group motion if they meaningfully change the motion logic.

---

## 18. Separation of Responsibilities

The blueprint should preserve a separation between:

    STRUCTURE
    Who belongs where?

    CONDITION
    Why does the Component belong there?

    GEOMETRY
    Where is the Group and what space is available?

    MOTION
    How does the Component travel between states?

    LOCAL MOTION
    How does the Component behave after entering?

    VISUAL ASSET
    What does the Component or Group look like?

This separation allows the same motion logic to survive future changes in visual design and content.

---

## 19. Reference Implementation

The living browser reference currently uses:

    componentCount = 50
    groupCount = 6

Component examples include:

    12 48 93
    # △
    ABCDE
    27 #
    42 AB
    △ 7 XY

The Components float inside a central field.

Six circular Group targets surround the field.

When a Group is selected:

1. all Components are evaluated;
2. matching Components travel into the selected Group;
3. non-matching previous members return to the Active Field;
4. grouped Components continue autonomous movement;
5. Group boundaries constrain that movement.

This implementation successfully demonstrates the fundamental idea.

It should remain available as a permanent browser reference.

---

## 20. What Is Not Fixed

Blueprint 200 does **not** permanently specify:

- 50 Components;
- 6 Groups;
- circular Groups;
- an elliptical Active Field;
- numbers;
- letters;
- symbols;
- current Group positions;
- current Component dimensions;
- current speeds;
- current easing;
- current collision response;
- current typography;
- current visual styling.

Those are properties of the reference experiment.

They are not the motion blueprint itself.

---

## 21. Fundamental vs Variation

Blueprint **200** represents the fundamental Group motion logic.

Parameter changes remain Blueprint 200.

For example:

    20 Components instead of 50
    different symbols
    larger Groups
    faster movement
    different colors
    different easing

do not automatically create a new blueprint number.

A descendant such as:

    210
    220
    230

should exist only when a meaningful new motion logic is derived from the fundamental.

Further descendants may use:

    211
    212
    213

and so on.

The number records motion lineage, not ordinary configuration.

---

## 22. Fundamental Motion Test

Blueprint 200 asks:

> **Can persistent moving Components dynamically reorganize themselves between free space and condition-defined Groups while preserving identity, spatial continuity, and autonomous motion?**

The current browser experiment demonstrates that this mechanism is viable.

---

## Permanent Motion Principle

**Elements persist; structures can change around them.**

A Group is a dynamic structural relationship and a possible local motion environment.

Regrouping is therefore not the replacement of one scene with another.

It is the visible transformation of relationships among persistent participants.
