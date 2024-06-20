# Badges

Use these badges components to highlight important information, statuses, or counts in your application.

## Usage

<br/>

Flat badges

---
Light | Dark
---------- | ---------
![""](images/badge/badge-flat.png) | ![""](images/badge/badge-flat-dark.png)

>Code sample

```html
<nxt-badge className="bg-gray-600 text-gray-600">Badge</nxt-badge>
<nxt-badge className="bg-red-600 text-red-700">Badge</nxt-badge>
<nxt-badge className="bg-yellow-600 text-yellow-800">Badge</nxt-badge>
...
```

<br/>

With border

---
Light | Dark
---------- | ---------
![""](images/badge/badge-with-border.png) | ![""](images/badge/badge-with-border-dark.png)

>Code sample

```html
<nxt-badge className="... ring-1 ring-gray-300">Badge</nxt-badge>
<nxt-badge className="... ring-1 ring-yellow-800">Badge</nxt-badge>
<nxt-badge className="... ring-1 ring-red-700">Badge</nxt-badge>
...
```

> We simply added the ``ring-1`` class. It can be any of ``ring-*`` class (where ``*`` equals a supported number).

<br/>

Rounded badges

---
Light | Dark
---------- | ---------
![""](images/badge/badge-rounded-with-leading-icon.png) | ![""](images/badge/badge-rounded-with-leading-icon-dark.png)
![""](images/badge/badge-rounded-with-leading-icon-and-border.png) | ![""](images/badge/badge-rounded-with-leading-icon-and-border-dark.png)

>Code sample

```html
<nxt-badge className="... rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor">
    <path
      d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
  </svg>
  Badge
</nxt-badge>
...
```

<br/>

With action button

---
Light | Dark
---------- | ---------
![""](images/badge/badge-with-action.png) | ![""](images/badge/badge-with-action-dark.png)
![""](images/badge/badge-with-action-and-border.png) | ![""](images/badge/badge-with-action-and-border-dark.png)

```html
<!--With action-->
<nxt-badge className="... rounded-none">
  Badge
  <button class="hover:bg-gray-600 hover:bg-opacity-20 size-[16px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</nxt-badge>
...
<!--With action and border-->
<nxt-badge className="... rounded-none">
  Badge
  <button class="hover:bg-indigo-600 hover:bg-opacity-20 size-[16px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  </button>
</nxt-badge>
...
```

## API

<br/>

### Badge `<nxt-badge>`

---
Property  | Type        | Attribute   | Default | Description
----------|-------------|-------------|---------|------------
className | string      | `className` |  `''`   | The list of classes to add or override in the component `style` property.
padding | string      | `padding` |  `px-1.5 py-1`   | The padding size of the badge.

<br/>

## Default configurations

<br/>

Dropdown config

---

```ts
export const BadgeConfigKey = 'BadgeConfigKey';

export const BadgeConfig: BadgeConfig = {
  display: {
    gap: 'gap-1',
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
  },
  fontWeight: 'font-medium',
  borderRadius: 'rounded-md'
}
```

---