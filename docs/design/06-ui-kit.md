---
title: "UI Kit / Component Library"
created_by: "UI Agent"
created_at: "2025-02-05"
version: "1.0"
status: "approved"
---

# UI Kit — Арендо-Соседи

## Введение

Документ описывает все UI-компоненты платформы Арендо-Соседи с их вариантами, состояниями и спецификациями для реализации.

---

## 1. Buttons

### 1.1 Button Variants

#### Primary Button

```
┌─────────────────────────┐
│      Арендовать         │
└─────────────────────────┘
```

```yaml
primary:
  background: primary-600 (#4F46E5)
  color: white
  border: none
  border-radius: 12px
  padding: 12px 16px
  font: body-md, weight 600
  min-height: 48px

  states:
    default:
      background: primary-600
    hover:
      background: primary-700
    pressed:
      background: primary-800
      scale: 0.98
    disabled:
      background: gray-300
      color: gray-500
    loading:
      background: primary-600
      opacity: 0.8
      content: spinner
```

#### Secondary Button

```yaml
secondary:
  background: white
  color: primary-600
  border: 1px solid primary-600
  border-radius: 12px
  padding: 12px 16px

  states:
    hover:
      background: primary-50
    pressed:
      background: primary-100
    disabled:
      border-color: gray-300
      color: gray-400
```

#### Ghost Button

```yaml
ghost:
  background: transparent
  color: primary-600
  border: none
  padding: 12px 16px

  states:
    hover:
      background: primary-50
    pressed:
      background: primary-100
```

#### Destructive Button

```yaml
destructive:
  background: error-500
  color: white
  border: none

  states:
    hover:
      background: error-600
    pressed:
      background: error-700
```

### 1.2 Button Sizes

```yaml
sizes:
  sm:
    height: 36px
    padding: 8px 12px
    font-size: 14px

  md:
    height: 44px
    padding: 10px 16px
    font-size: 16px

  lg:
    height: 52px
    padding: 14px 20px
    font-size: 18px
```

### 1.3 Button with Icon

```
┌─────────────────────────┐
│  ➕  Создать объявление │
└─────────────────────────┘
```

```yaml
with-icon:
  icon-size: 20px
  gap: 8px
  icon-position: left | right
```

### 1.4 Icon Button

```
┌─────┐
│  ♡  │
└─────┘
```

```yaml
icon-button:
  size: 44×44px (touch target)
  icon-size: 24px
  border-radius: rounded-full | rounded-lg
  variants: primary, secondary, ghost
```

---

## 2. Inputs

### 2.1 Text Input

```
┌─────────────────────────────┐
│ Label                       │
├─────────────────────────────┤
│ Placeholder text...         │
└─────────────────────────────┘
  Helper text
```

```yaml
text-input:
  height: 48px
  padding: 12px 16px
  border: 1px solid gray-300
  border-radius: 12px
  background: white
  font: body-md

  label:
    font: body-sm, weight 500
    color: gray-700
    margin-bottom: 6px

  placeholder:
    color: gray-400

  helper:
    font: caption
    color: gray-500
    margin-top: 4px

  states:
    default:
      border-color: gray-300
    focus:
      border-color: primary-500
      box-shadow: 0 0 0 3px primary-100
    error:
      border-color: error-500
      helper-color: error-500
    disabled:
      background: gray-100
      color: gray-400
```

### 2.2 Textarea

```yaml
textarea:
  min-height: 120px
  resize: vertical
  max-height: 300px
  # остальные стили как у text-input
```

### 2.3 Search Input

```
┌─────────────────────────────┐
│ 🔍  Найти вещь...       ✕  │
└─────────────────────────────┘
```

```yaml
search-input:
  height: 44px
  padding-left: 44px (icon space)
  padding-right: 44px (clear button)
  border-radius: rounded-full (22px)
  background: gray-100
  border: none

  icon:
    size: 20px
    color: gray-400
    position: left 12px

  clear-button:
    visibility: when has value
    position: right 12px
```

### 2.4 Select / Dropdown

```
┌─────────────────────────────┐
│ Категория                  ▼│
└─────────────────────────────┘

Dropdown:
┌─────────────────────────────┐
│ ✓ Инструменты               │
├─────────────────────────────┤
│   Спорт                     │
├─────────────────────────────┤
│   Электроника               │
└─────────────────────────────┘
```

```yaml
select:
  trigger:
    height: 48px
    padding: 12px 16px
    border: 1px solid gray-300
    border-radius: 12px

  dropdown:
    background: white
    border-radius: 12px
    shadow: shadow-lg
    margin-top: 4px
    max-height: 300px
    overflow: auto

  option:
    padding: 12px 16px
    min-height: 44px

    states:
      hover: background gray-50
      selected: background primary-50, icon checkmark
```

### 2.5 Checkbox

```
┌───┐
│ ✓ │  Согласен с правилами
└───┘
```

```yaml
checkbox:
  size: 20×20px
  border: 2px solid gray-300
  border-radius: 4px

  states:
    unchecked:
      background: white
    checked:
      background: primary-600
      border-color: primary-600
      icon: checkmark white
    disabled:
      background: gray-100
      border-color: gray-200

  label:
    margin-left: 12px
    font: body-md
```

### 2.6 Radio Button

```
( ● )  Вариант 1
(   )  Вариант 2
```

```yaml
radio:
  size: 20×20px
  border: 2px solid gray-300
  border-radius: rounded-full

  states:
    unselected:
      background: white
    selected:
      border-color: primary-600
      inner-dot: primary-600, 10px
```

### 2.7 Toggle / Switch

```
┌────────────┐
│     ●──────│
└────────────┘
```

```yaml
toggle:
  width: 44px
  height: 24px
  border-radius: 12px
  background: gray-300

  thumb:
    size: 20px
    background: white
    shadow: shadow-sm

  states:
    off:
      background: gray-300
      thumb-position: left 2px
    on:
      background: primary-600
      thumb-position: right 2px

  transition: 200ms ease-out
```

---

## 3. Cards

### 3.1 Item Card (Catalog)

```
┌─────────────────┐
│ ┌─────────────┐ │
│ │             │ │
│ │    📷      │ │
│ │             │ │
│ └─────────────┘ │
│ Дрель Bosch     │
│ 300 ₽/день      │
│ ★4.8 • 3 подъезд │
└─────────────────┘
```

```yaml
item-card:
  width: calc(50% - 6px)
  border-radius: 16px
  background: white
  shadow: shadow-sm
  overflow: hidden

  image:
    aspect-ratio: 1:1
    border-radius: 12px (top corners)
    object-fit: cover

  content:
    padding: 12px

  title:
    font: heading-sm
    color: gray-800
    lines: 2
    overflow: ellipsis

  price:
    font: body-md, weight 600
    color: primary-600
    margin-top: 4px

  meta:
    font: caption
    color: gray-500
    margin-top: 4px

  favorite-button:
    position: absolute
    top: 8px
    right: 8px
```

### 3.2 User Card

```
┌─────────────────────────────┐
│ 👤  Алексей                 │
│     ★4.8 (23 отзыва)        │
│     Подъезд 3               │
└─────────────────────────────┘
```

```yaml
user-card:
  padding: 16px
  border: 1px solid gray-200
  border-radius: 12px
  background: white

  avatar:
    size: 48px
    border-radius: rounded-full

  name:
    font: heading-sm
    color: gray-800

  rating:
    font: body-sm
    color: gray-600

  location:
    font: caption
    color: gray-500
```

### 3.3 Transaction Card

```
┌─────────────────────────────┐
│ 📷  Дрель Bosch             │
│                             │
│     🔵 В аренде             │
│     6-7 февраля             │
│     👤 Алексей              │
└─────────────────────────────┘
```

```yaml
transaction-card:
  padding: 16px
  border: 1px solid gray-200
  border-radius: 16px
  background: white

  thumbnail:
    size: 64×64px
    border-radius: 8px

  status-badge:
    font: caption, weight 500
    padding: 4px 8px
    border-radius: rounded-full

    variants:
      pending: background warning-100, color warning-700
      active: background info-100, color info-700
      completed: background gray-100, color gray-600
      cancelled: background error-100, color error-700
```

### 3.4 Chat Card

```
┌─────────────────────────────┐
│ 👤 Мария               14:32│
│    Дрель Bosch              │
│    Отлично, жду вас...   ●  │
└─────────────────────────────┘
```

```yaml
chat-card:
  padding: 16px
  border-bottom: 1px solid gray-100

  avatar:
    size: 48px

  unread-dot:
    size: 8px
    background: primary-600
    position: right

  time:
    font: caption
    color: gray-400

  preview:
    font: body-sm
    color: gray-500
    lines: 1
    overflow: ellipsis
```

---

## 4. Navigation

### 4.1 Tab Bar (Bottom Navigation)

```
┌─────────────────────────────┐
│  🏠    ➕    💬    📋    👤  │
│ Каталог     Чаты  Аренды   │
│   ●                         │
└─────────────────────────────┘
```

```yaml
tab-bar:
  height: 56px + safe-area-bottom
  background: white
  border-top: 1px solid gray-200
  padding-bottom: safe-area-inset-bottom

  item:
    flex: 1
    padding: 8px
    min-width: 64px

    icon:
      size: 24px
      color: gray-400

    label:
      font: caption
      color: gray-400
      margin-top: 2px

    states:
      active:
        icon-color: primary-600
        label-color: primary-600
```

### 4.2 Header

```
┌─────────────────────────────┐
│ ←  Заголовок        ♡  ↗   │
└─────────────────────────────┘
```

```yaml
header:
  height: 56px
  background: white
  border-bottom: 1px solid gray-100
  padding: 0 16px

  back-button:
    size: 44px
    icon: 24px

  title:
    font: heading-md
    color: gray-800
    text-align: center
    flex: 1

  actions:
    gap: 8px
```

### 4.3 Category Tabs (Horizontal Scroll)

```
┌────┬────┬────┬────┬────→
│ Все│🔧  │⚽  │📱  │👶 │
│  ● │    │    │    │    │
└────┴────┴────┴────┴────→
```

```yaml
category-tabs:
  scroll: horizontal
  gap: 8px
  padding: 0 16px

  tab:
    padding: 8px 16px
    border-radius: rounded-full
    background: gray-100
    font: body-sm, weight 500
    color: gray-600
    white-space: nowrap

    states:
      active:
        background: primary-600
        color: white
```

### 4.4 Inline Tabs

```
┌──────────────────────────────┐
│  Арендатор  │   Владелец    │
│      ●      │               │
└──────────────────────────────┘
```

```yaml
inline-tabs:
  border-bottom: 2px solid gray-200

  tab:
    padding: 12px 16px
    font: body-md, weight 500
    color: gray-500

    states:
      active:
        color: primary-600
        border-bottom: 2px solid primary-600
```

---

## 5. Overlays

### 5.1 Modal

```
┌─────────────────────────────┐
│                             │
│  ┌───────────────────────┐  │
│  │ ✕  Заголовок          │  │
│  ├───────────────────────┤  │
│  │                       │  │
│  │     Контент           │  │
│  │                       │  │
│  ├───────────────────────┤  │
│  │  [Отмена] [Действие]  │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

```yaml
modal:
  backdrop:
    background: overlay-medium
    animation: fade-in 200ms

  content:
    background: white
    border-radius: 20px
    margin: 16px
    max-height: calc(100vh - 32px)
    animation: scale-in 200ms

  header:
    padding: 16px
    border-bottom: 1px solid gray-100

  body:
    padding: 16px
    overflow: auto

  footer:
    padding: 16px
    border-top: 1px solid gray-100
    gap: 12px
```

### 5.2 Bottom Sheet

```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
├─────────────────────────────┤
│          ───                │
│   Заголовок                 │
│                             │
│   Контент                   │
│                             │
└─────────────────────────────┘
```

```yaml
bottom-sheet:
  background: white
  border-radius: 20px 20px 0 0
  padding-bottom: safe-area-inset-bottom
  animation: slide-up 300ms

  handle:
    width: 36px
    height: 4px
    background: gray-300
    border-radius: 2px
    margin: 8px auto

  header:
    padding: 16px
    font: heading-lg

  content:
    padding: 0 16px 16px
    max-height: 70vh
    overflow: auto
```

### 5.3 Toast / Snackbar

```
┌─────────────────────────────┐
│ ✓  Объявление опубликовано  │
└─────────────────────────────┘
```

```yaml
toast:
  position: bottom 16px
  width: calc(100% - 32px)
  padding: 16px
  border-radius: 12px
  background: gray-800
  color: white
  font: body-md

  icon:
    size: 20px
    margin-right: 12px

  variants:
    success:
      icon: checkmark
      icon-color: success-400
    error:
      icon: x-circle
      icon-color: error-400
    info:
      icon: info
      icon-color: info-400

  animation: slide-up 300ms
  auto-dismiss: 3000ms
```

### 5.4 Alert Dialog

```yaml
alert:
  title:
    font: heading-lg
    text-align: center

  message:
    font: body-md
    color: gray-600
    text-align: center
    margin-top: 8px

  actions:
    margin-top: 24px
    gap: 12px
    flex-direction: column | row
```

---

## 6. Lists

### 6.1 Simple List

```
┌─────────────────────────────┐
│ 📦 Мои объявления        →  │
├─────────────────────────────┤
│ 💰 Финансы               →  │
├─────────────────────────────┤
│ ⭐ Отзывы                →  │
└─────────────────────────────┘
```

```yaml
list-item:
  padding: 16px
  min-height: 56px
  border-bottom: 1px solid gray-100
  display: flex
  align-items: center

  icon:
    size: 24px
    color: gray-500
    margin-right: 16px

  title:
    font: body-md
    color: gray-800
    flex: 1

  chevron:
    size: 20px
    color: gray-400

  states:
    pressed:
      background: gray-50
```

### 6.2 List with Subtitle

```yaml
list-item-subtitle:
  # extends list-item

  subtitle:
    font: body-sm
    color: gray-500
    margin-top: 2px
```

### 6.3 List with Value

```
┌─────────────────────────────┐
│ Баланс              2 450 ₽ │
└─────────────────────────────┘
```

```yaml
list-item-value:
  # extends list-item

  value:
    font: body-md, weight 500
    color: gray-800
```

---

## 7. Feedback & Status

### 7.1 Badge

```yaml
badge:
  padding: 2px 8px
  border-radius: rounded-full
  font: caption, weight 500

  variants:
    default:
      background: gray-100
      color: gray-600
    primary:
      background: primary-100
      color: primary-700
    success:
      background: success-100
      color: success-700
    warning:
      background: warning-100
      color: warning-700
    error:
      background: error-100
      color: error-700
```

### 7.2 Notification Dot

```yaml
notification-dot:
  size: 8px
  background: error-500
  border-radius: rounded-full
  position: absolute
```

### 7.3 Progress Bar

```yaml
progress-bar:
  height: 4px
  background: gray-200
  border-radius: 2px

  fill:
    background: primary-600
    border-radius: 2px
    transition: width 300ms ease-out
```

### 7.4 Skeleton Loader

```yaml
skeleton:
  background: gray-200
  border-radius: 8px
  animation: pulse 2s infinite

  text:
    height: 16px
    border-radius: 4px

  avatar:
    width: 48px
    height: 48px
    border-radius: rounded-full

  image:
    aspect-ratio: 1:1
    border-radius: 12px
```

### 7.5 Empty State

```
┌─────────────────────────────┐
│                             │
│           📦               │
│                             │
│       Пока пусто            │
│                             │
│   В вашем ЖК ещё никто     │
│   не разместил объявлений   │
│                             │
│   [  Станьте первым!  ]    │
│                             │
└─────────────────────────────┘
```

```yaml
empty-state:
  padding: 48px 24px
  text-align: center

  icon:
    size: 64px
    color: gray-300
    margin-bottom: 16px

  title:
    font: heading-lg
    color: gray-800
    margin-bottom: 8px

  description:
    font: body-md
    color: gray-500
    margin-bottom: 24px

  action:
    # Primary button
```

---

## 8. Images & Media

### 8.1 Avatar

```yaml
avatar:
  sizes:
    xs: 24px
    sm: 32px
    md: 40px
    lg: 48px
    xl: 64px
    2xl: 80px

  border-radius: rounded-full
  background: gray-200
  object-fit: cover

  placeholder:
    icon: user
    color: gray-400

  badge:
    position: bottom-right
    offset: -2px
```

### 8.2 Image Gallery

```yaml
gallery:
  main-image:
    aspect-ratio: 4:3
    border-radius: 0 (fullwidth)
    object-fit: cover

  thumbnails:
    height: 64px
    gap: 8px
    padding: 8px 16px
    scroll: horizontal

  counter:
    position: bottom-right
    padding: 4px 8px
    background: overlay-medium
    color: white
    font: caption
    border-radius: 4px
```

### 8.3 Image Placeholder

```yaml
image-placeholder:
  background: gray-100
  display: flex
  align-items: center
  justify-content: center

  icon:
    size: 32px
    color: gray-300
```

---

## 9. Forms Patterns

### 9.1 Form Section

```yaml
form-section:
  margin-bottom: 24px

  title:
    font: heading-sm
    color: gray-800
    margin-bottom: 16px

  fields:
    gap: 16px
```

### 9.2 Form Actions

```yaml
form-actions:
  padding: 16px
  background: white
  border-top: 1px solid gray-100
  position: sticky
  bottom: 0

  primary-action:
    width: 100%
```

### 9.3 Step Indicator

```
━━━━━━━━━━○○○○
Шаг 1 из 5
```

```yaml
step-indicator:
  track:
    height: 4px
    background: gray-200
    border-radius: 2px

  progress:
    background: primary-600

  label:
    font: caption
    color: gray-500
    margin-top: 8px
    text-align: center
```

---

## 10. Chat Components

### 10.1 Message Bubble

```yaml
message:
  max-width: 80%
  padding: 12px 16px
  border-radius: 16px
  font: body-md

  outgoing:
    background: primary-600
    color: white
    border-radius: 16px 16px 4px 16px
    align-self: flex-end

  incoming:
    background: gray-100
    color: gray-800
    border-radius: 16px 16px 16px 4px
    align-self: flex-start

  time:
    font: caption
    color: gray-400 | primary-200
    margin-top: 4px
```

### 10.2 Chat Context Card

```yaml
chat-context:
  background: gray-50
  border-radius: 12px
  padding: 12px
  margin: 8px 16px

  status:
    font: body-sm, weight 500
    color: primary-600
```

### 10.3 Chat Input

```yaml
chat-input:
  padding: 12px 16px
  background: white
  border-top: 1px solid gray-100

  input:
    flex: 1
    padding: 12px 16px
    background: gray-100
    border-radius: rounded-full
    font: body-md

  send-button:
    size: 44px
    background: primary-600
    border-radius: rounded-full
    margin-left: 8px
```

---

## Приложения

### A. Component Checklist

```markdown
## Для каждого компонента проверить:
- [ ] Все состояния (default, hover, pressed, disabled, loading)
- [ ] Dark mode поддержка
- [ ] RTL поддержка (если применимо)
- [ ] Accessibility (ARIA, focus states)
- [ ] Responsive behavior
- [ ] Animation/transition
```

### B. Storybook Structure

```
/components
  /buttons
    Button.stories.tsx
    IconButton.stories.tsx
  /inputs
    TextInput.stories.tsx
    Select.stories.tsx
  /cards
    ItemCard.stories.tsx
    UserCard.stories.tsx
  /navigation
    TabBar.stories.tsx
    Header.stories.tsx
  ...
```

### C. Связь с Tech Stack

```yaml
Implementation:
  - React компоненты
  - TypeScript типизация
  - TailwindCSS для стилей
  - Radix UI для примитивов
  - Framer Motion для анимаций
```

---

*Документ создан: UI Agent | Дата: 2025-02-05*
