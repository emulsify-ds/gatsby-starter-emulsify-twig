<h1 align="center">
  Gatsby Starter for the Emulsify Design System (Twig)
</h1>

## 🚀 Install

`yarn` or `npm install`

## 🔧 Develop

`yarn develop` or `npm develop`

## Documenting Components

Create a `Code.mdx` file alongside one of your components.

Inside of `Code.mdx`, simply use the `<Code />`, `<Component />`, and/or `<TableOfContents />` components in your MDX to fluidly author your docs and inline code snippets and rendered examples of your component.

#### Example
```mdx
---
title: "CTAs"
description: "Call To Action component for use on landing pages"
tab: "Code"
tabOrder: 1
publishToStyleGuide: true
---

<TableOfContents />

# This is a CTA

## Example

<Component />

## Source

<Code />
```

This file will be used to generate a "Code" tab on CTA component documentation. Create any number of tabs: "Style", "Usage", etc...

#### Custom MDX components available:

* `<Code />` renders the source for you component with syntax highlighting
* `<Component />` renders your component inline
* `<TableOfContents />` renders a Table of Contents for the given page

### Custom pages
In a `styleguide` directory in your component library root directory, you can create custom pages to be added to your design system.

For example, inside `styleguide`, you can create a directory called `1__Getting Started`.

<details>
<summary>💡 Hint</summary>
Prepending your directories with numbers like "1__" is a great way to sort your sidebar links.
</details>

Inside `1__Getting Started` create `Welcome.md`.

#### Example

```md
---
title: "Welcome"
description: "Welcome to the Acme Corporation design system"
publishToStyleGuide: true
---

# Welcome to the Acme Corporation design system!
```

This page will be automatically added to the menu bar in your design system.
