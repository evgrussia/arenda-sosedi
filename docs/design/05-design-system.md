---
title: "Design System Foundation"
created_by: "UI Agent"
created_at: "2025-02-05"
version: "1.0"
status: "approved"
---

# Design System — Арендо-Соседи

## Введение

Design System определяет визуальный язык платформы Арендо-Соседи. Документ включает цвета, типографику, сетку, отступы, тени и другие фундаментальные элементы дизайна.

---

## 1. Философия дизайна

### 1.1 Принципы

| Принцип | Описание |
|---------|----------|
| **Дружелюбный** | Тёплый, располагающий дизайн для соседского общения |
| **Простой** | Минимум когнитивной нагрузки |
| **Надёжный** | Ощущение безопасности транзакций |
| **Локальный** | Акцент на близость и сообщество |

### 1.2 Ключевые характеристики

```yaml
Mood:
  - Дружелюбный, но профессиональный
  - Светлый и воздушный
  - Современный, но не холодный

Не:
  - Агрессивный или навязчивый
  - Перегруженный элементами
  - Слишком формальный
```

---

## 2. Цветовая палитра

### 2.1 Primary Colors

```yaml
Primary:
  primary-50:   "#EEF2FF"   # Самый светлый
  primary-100:  "#E0E7FF"
  primary-200:  "#C7D2FE"
  primary-300:  "#A5B4FC"
  primary-400:  "#818CF8"
  primary-500:  "#6366F1"   # ← Основной (Indigo)
  primary-600:  "#4F46E5"   # ← Акцент
  primary-700:  "#4338CA"
  primary-800:  "#3730A3"
  primary-900:  "#312E81"   # Самый тёмный

Usage:
  - Кнопки CTA
  - Активные состояния
  - Ссылки
  - Акценты
```

### 2.2 Secondary Colors

```yaml
Success (Green):
  success-50:   "#ECFDF5"
  success-100:  "#D1FAE5"
  success-500:  "#10B981"   # ← Основной
  success-600:  "#059669"
  success-700:  "#047857"

Warning (Amber):
  warning-50:   "#FFFBEB"
  warning-100:  "#FEF3C7"
  warning-500:  "#F59E0B"   # ← Основной
  warning-600:  "#D97706"
  warning-700:  "#B45309"

Error (Red):
  error-50:     "#FEF2F2"
  error-100:    "#FEE2E2"
  error-500:    "#EF4444"   # ← Основной
  error-600:    "#DC2626"
  error-700:    "#B91C1C"

Info (Blue):
  info-50:      "#EFF6FF"
  info-100:     "#DBEAFE"
  info-500:     "#3B82F6"   # ← Основной
  info-600:     "#2563EB"
  info-700:     "#1D4ED8"
```

### 2.3 Neutral Colors

```yaml
Gray:
  gray-50:    "#F9FAFB"    # Background light
  gray-100:   "#F3F4F6"    # Background secondary
  gray-200:   "#E5E7EB"    # Border light
  gray-300:   "#D1D5DB"    # Border default
  gray-400:   "#9CA3AF"    # Placeholder text
  gray-500:   "#6B7280"    # Secondary text
  gray-600:   "#4B5563"    # Body text
  gray-700:   "#374151"    # Heading text
  gray-800:   "#1F2937"    # Primary text ← Основной для текста
  gray-900:   "#111827"    # Darkest

White:  "#FFFFFF"
Black:  "#000000"
```

### 2.4 Специальные цвета

```yaml
Overlay:
  overlay-light:  "rgba(0, 0, 0, 0.1)"
  overlay-medium: "rgba(0, 0, 0, 0.4)"
  overlay-dark:   "rgba(0, 0, 0, 0.7)"

Background:
  bg-primary:     "#FFFFFF"
  bg-secondary:   "#F9FAFB"
  bg-tertiary:    "#F3F4F6"

Telegram Theme (dynamic):
  tg-bg:          "var(--tg-theme-bg-color)"
  tg-text:        "var(--tg-theme-text-color)"
  tg-hint:        "var(--tg-theme-hint-color)"
  tg-link:        "var(--tg-theme-link-color)"
  tg-button:      "var(--tg-theme-button-color)"
  tg-button-text: "var(--tg-theme-button-text-color)"
```

### 2.5 Dark Mode

```yaml
Dark Mode Mapping:
  background:       "#1F2937"  (gray-800)
  surface:          "#374151"  (gray-700)
  text-primary:     "#F9FAFB"  (gray-50)
  text-secondary:   "#D1D5DB"  (gray-300)
  border:           "#4B5563"  (gray-600)
  primary:          "#818CF8"  (primary-400)

Note: Использовать Telegram theme colors когда доступны
```

---

## 3. Типографика

### 3.1 Шрифты

```yaml
Primary Font:
  family: "Inter"
  fallback: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  weights:
    - 400 (Regular)
    - 500 (Medium)
    - 600 (Semibold)
    - 700 (Bold)

Usage:
  - Все текстовые элементы

Note:
  - Inter — бесплатный, оптимизирован для экранов
  - Хорошая читаемость на маленьких размерах
```

### 3.2 Type Scale

```yaml
Display:
  display-lg:
    size: 36px
    line-height: 44px
    weight: 700
    letter-spacing: -0.02em

  display-md:
    size: 30px
    line-height: 38px
    weight: 700
    letter-spacing: -0.02em

  display-sm:
    size: 24px
    line-height: 32px
    weight: 700
    letter-spacing: -0.01em

Heading:
  heading-lg:
    size: 20px
    line-height: 28px
    weight: 600
    letter-spacing: -0.01em

  heading-md:
    size: 18px
    line-height: 26px
    weight: 600

  heading-sm:
    size: 16px
    line-height: 24px
    weight: 600

Body:
  body-lg:
    size: 18px
    line-height: 28px
    weight: 400

  body-md:
    size: 16px
    line-height: 24px
    weight: 400

  body-sm:
    size: 14px
    line-height: 20px
    weight: 400

Caption:
  caption:
    size: 12px
    line-height: 16px
    weight: 400

  caption-sm:
    size: 11px
    line-height: 14px
    weight: 500
```

### 3.3 Использование типографики

| Элемент | Style | Пример |
|---------|-------|--------|
| Заголовок страницы | display-sm | "Каталог" |
| Заголовок секции | heading-lg | "Инструменты" |
| Название товара (карточка) | heading-sm | "Дрель Bosch" |
| Цена | heading-md + bold | "300 ₽/день" |
| Описание | body-md | "Профессиональная дрель..." |
| Метаданные | body-sm + gray-500 | "★4.8 • Подъезд 3" |
| Подсказки | caption + gray-400 | "Минимум 1 день" |

---

## 4. Spacing System

### 4.1 Base Unit

```yaml
Base: 4px

Scale:
  space-0:    0px
  space-0.5:  2px
  space-1:    4px
  space-1.5:  6px
  space-2:    8px
  space-2.5:  10px
  space-3:    12px
  space-3.5:  14px
  space-4:    16px   ← Базовый отступ
  space-5:    20px
  space-6:    24px
  space-7:    28px
  space-8:    32px
  space-9:    36px
  space-10:   40px
  space-12:   48px
  space-14:   56px
  space-16:   64px
  space-20:   80px
```

### 4.2 Применение отступов

```yaml
Page:
  padding-horizontal: 16px (space-4)
  padding-top: 16px
  padding-bottom: 24px + safe-area

Cards:
  padding: 16px (space-4)
  gap: 12px (space-3)

Sections:
  margin-bottom: 24px (space-6)
  gap-between-items: 12px (space-3)

Form fields:
  gap: 16px (space-4)
  label-input-gap: 6px (space-1.5)

Buttons:
  padding-x: 16px (space-4)
  padding-y: 12px (space-3)
  gap (with icon): 8px (space-2)
```

---

## 5. Grid System

### 5.1 Layout Grid

```yaml
Mobile (Telegram WebApp):
  columns: 4
  gutter: 16px
  margin: 16px

Catalog Grid:
  columns: 2
  gutter: 12px
  item-aspect-ratio: 1:1 (photo)

Breakpoints:
  - sm: 320px (mobile small)
  - md: 375px (mobile default)
  - lg: 428px (mobile large)
```

### 5.2 Content Width

```yaml
Max Content Width: 100% (ограничено WebApp)
Min Content Width: 320px

Safe Areas:
  top: Telegram header (dynamic)
  bottom: 34px (iOS home indicator)
```

---

## 6. Border & Radius

### 6.1 Border Radius

```yaml
Radius Scale:
  rounded-none:   0px
  rounded-sm:     4px
  rounded-md:     8px     ← Базовый
  rounded-lg:     12px
  rounded-xl:     16px
  rounded-2xl:    20px
  rounded-full:   9999px

Usage:
  - Buttons: rounded-lg (12px)
  - Cards: rounded-xl (16px)
  - Inputs: rounded-lg (12px)
  - Chips/Tags: rounded-full
  - Avatars: rounded-full
  - Images: rounded-lg (12px)
  - Bottom Sheet: rounded-t-2xl (20px)
```

### 6.2 Borders

```yaml
Border Width:
  border-0:   0px
  border:     1px     ← Дефолт
  border-2:   2px

Border Colors:
  default:    gray-200 (#E5E7EB)
  focus:      primary-500 (#6366F1)
  error:      error-500 (#EF4444)
  success:    success-500 (#10B981)
```

---

## 7. Shadows & Elevation

### 7.1 Shadow Scale

```yaml
Shadows:
  shadow-none:
    none

  shadow-sm:
    0 1px 2px 0 rgba(0, 0, 0, 0.05)
    Usage: Subtle cards, hover states

  shadow-md:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1)
    Usage: Cards, dropdowns

  shadow-lg:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1)
    Usage: Modals, overlays

  shadow-xl:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1)
    Usage: Large modals, bottom sheets
```

### 7.2 Elevation Levels

| Level | Shadow | Использование |
|-------|--------|---------------|
| 0 | none | Базовый контент |
| 1 | shadow-sm | Карточки в списке |
| 2 | shadow-md | Выделенные карточки, dropdowns |
| 3 | shadow-lg | Модалы, floating buttons |
| 4 | shadow-xl | Bottom sheets |

---

## 8. Иконки

### 8.1 Icon Library

```yaml
Primary:
  library: "Lucide Icons"
  style: Outline (stroke-width: 2)

Alternative:
  - Heroicons (если нужно)
  - Custom icons (для бренда)
```

### 8.2 Icon Sizes

```yaml
Sizes:
  icon-xs:    16×16px   # Inline, badges
  icon-sm:    20×20px   # Secondary actions
  icon-md:    24×24px   # Primary UI ← Дефолт
  icon-lg:    32×32px   # Feature icons
  icon-xl:    48×48px   # Empty states
  icon-2xl:   64×64px   # Illustrations

Touch Target:
  minimum: 44×44px (с padding)
```

### 8.3 Icon Colors

```yaml
Default:      gray-600
Active:       primary-600
Disabled:     gray-300
Destructive:  error-500
Success:      success-500
```

---

## 9. Motion & Animation

### 9.1 Timing

```yaml
Duration:
  instant:    0ms
  fast:       100ms    # Micro-interactions
  normal:     200ms    # Default ← Дефолт
  slow:       300ms    # Complex animations
  slower:     500ms    # Page transitions

Easing:
  linear:     linear
  ease-in:    cubic-bezier(0.4, 0, 1, 1)
  ease-out:   cubic-bezier(0, 0, 0.2, 1)     ← Дефолт
  ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
  spring:     cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### 9.2 Transitions

```yaml
Transitions:
  default:
    property: all
    duration: 200ms
    easing: ease-out

  colors:
    property: color, background-color, border-color
    duration: 150ms
    easing: ease-out

  transform:
    property: transform
    duration: 200ms
    easing: ease-out

  opacity:
    property: opacity
    duration: 150ms
    easing: linear
```

### 9.3 Анимации

```yaml
Animations:
  fade-in:
    from: opacity 0
    to: opacity 1
    duration: 200ms

  slide-up:
    from: transform translateY(10px), opacity 0
    to: transform translateY(0), opacity 1
    duration: 300ms

  scale-in:
    from: transform scale(0.95), opacity 0
    to: transform scale(1), opacity 1
    duration: 200ms

  skeleton-pulse:
    0%, 100%: opacity 1
    50%: opacity 0.5
    duration: 2s
    iteration: infinite
```

### 9.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Z-Index Scale

```yaml
Z-Index:
  z-0:      0      # Base
  z-10:     10     # Cards, floating
  z-20:     20     # Sticky headers
  z-30:     30     # Dropdowns
  z-40:     40     # Modal backdrop
  z-50:     50     # Modal content
  z-60:     60     # Toast notifications
  z-70:     70     # Tooltips
  z-max:    9999   # Maximum
```

---

## 11. CSS Variables (Design Tokens)

### 11.1 Implementation

```css
:root {
  /* Colors */
  --color-primary-500: #6366F1;
  --color-primary-600: #4F46E5;
  --color-gray-800: #1F2937;
  /* ... */

  /* Typography */
  --font-family: 'Inter', -apple-system, sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.5;
  /* ... */

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  /* ... */

  /* Radius */
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  /* ... */

  /* Shadows */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  /* ... */

  /* Transitions */
  --transition-default: 200ms ease-out;
  /* ... */
}

/* Dark mode */
[data-theme="dark"] {
  --color-background: #1F2937;
  --color-text: #F9FAFB;
  /* ... */
}

/* Telegram theme integration */
.telegram-theme {
  --color-primary-500: var(--tg-theme-button-color);
  --color-background: var(--tg-theme-bg-color);
  --color-text: var(--tg-theme-text-color);
}
```

---

## 12. Figma Structure

### 12.1 File Organization

```
📁 Арендо-Соседи Design System
│
├── 📄 Cover
├── 📄 Changelog
│
├── 📁 Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Grid
│   ├── Shadows
│   └── Icons
│
├── 📁 Components
│   ├── Buttons
│   ├── Inputs
│   ├── Cards
│   ├── Navigation
│   ├── Modals
│   ├── Lists
│   └── ...
│
├── 📁 Patterns
│   ├── Forms
│   ├── Catalog
│   ├── Item Detail
│   └── ...
│
└── 📁 Screens
    ├── Onboarding
    ├── Catalog
    ├── Item Detail
    ├── Booking
    ├── ...
    └── All Screens (overview)
```

### 12.2 Naming Convention

```yaml
Components:
  format: "[Category]/[Component]/[Variant]/[State]"
  examples:
    - "Button/Primary/Default"
    - "Button/Primary/Hover"
    - "Input/Text/Error"
    - "Card/Item/With Badge"

Styles:
  colors: "Color/[category]/[shade]"
  text: "Text/[size]/[weight]"
  effects: "Shadow/[level]"
```

---

## Приложения

### A. Color Contrast Matrix

| Foreground | Background | Ratio | WCAG AA |
|------------|------------|-------|---------|
| gray-800 | white | 12.6:1 | ✓ |
| primary-600 | white | 7.2:1 | ✓ |
| gray-500 | white | 4.6:1 | ✓ |
| gray-400 | white | 3.0:1 | ✗ (только large text) |

### B. Responsive Values

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| Page margin | 16px | 24px | 32px |
| Card gap | 12px | 16px | 20px |
| Max content | 100% | 100% | 600px |

### C. Browser Support

```yaml
Supported:
  - Chrome Mobile (latest)
  - Safari Mobile (latest)
  - Firefox Mobile (latest)
  - Telegram WebApp (built-in browser)

CSS Features:
  - CSS Variables: ✓
  - Flexbox: ✓
  - Grid: ✓
  - Container Queries: with fallback
```

---

*Документ создан: UI Agent | Дата: 2025-02-05*
