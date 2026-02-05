---
title: "Иконки и иллюстрации"
created_by: "UI Agent"
created_at: "2025-02-05"
version: "1.0"
status: "approved"
---

# Иконки и иллюстрации — Арендо-Соседи

## Введение

Документ описывает систему иконографии и иллюстраций платформы Арендо-Соседи, включая выбор библиотеки, правила использования и каталог кастомных элементов.

---

## 1. Icon Library

### 1.1 Основная библиотека

```yaml
Primary Library: Lucide Icons
  URL: https://lucide.dev/
  License: ISC License (free)
  Style: Outlined, stroke-width 2

Reasons:
  - Консистентный дизайн
  - Обширная коллекция (1000+ иконок)
  - Активная поддержка
  - Лёгкий вес
  - React/Vue/Svelte компоненты
```

### 1.2 Альтернативные источники

```yaml
Backup:
  - Heroicons (для отсутствующих в Lucide)
  - Custom icons (для специфических нужд)

Emoji:
  - Используются для категорий
  - Только стандартные (Unicode)
```

---

## 2. Icon Specifications

### 2.1 Размеры

```yaml
Sizes:
  xs:   16×16px   # Inline, badges, chips
  sm:   20×20px   # Secondary icons
  md:   24×24px   # Primary UI (default)
  lg:   32×32px   # Feature icons
  xl:   48×48px   # Empty states
  2xl:  64×64px   # Illustrations

Base Grid: 24×24px
Stroke Width: 2px (default)
```

### 2.2 Цвета

```yaml
Icon Colors:
  default:      gray-600 (#4B5563)
  secondary:    gray-400 (#9CA3AF)
  primary:      primary-600 (#4F46E5)
  active:       primary-600 (#4F46E5)
  success:      success-600 (#059669)
  warning:      warning-600 (#D97706)
  error:        error-600 (#DC2626)
  disabled:     gray-300 (#D1D5DB)
  on-dark:      white (#FFFFFF)
  on-primary:   white (#FFFFFF)
```

### 2.3 Touch Targets

```yaml
Minimum Touch Target: 44×44px

Implementation:
  - Icon size: 24×24px
  - Padding: 10px around
  - Total: 44×44px
```

---

## 3. Icon Catalog

### 3.1 Navigation Icons

| Icon Name | Lucide | Usage |
|-----------|--------|-------|
| Home | `home` | Tab bar — Каталог |
| Plus | `plus` | Tab bar — Создать |
| MessageCircle | `message-circle` | Tab bar — Чаты |
| ClipboardList | `clipboard-list` | Tab bar — Аренды |
| User | `user` | Tab bar — Профиль |
| ChevronLeft | `chevron-left` | Back button |
| ChevronRight | `chevron-right` | Navigation arrow |
| X | `x` | Close modal |

### 3.2 Action Icons

| Icon Name | Lucide | Usage |
|-----------|--------|-------|
| Heart | `heart` | Favorite (outline) |
| HeartFilled | `heart` (filled) | Favorite (active) |
| Share | `share-2` | Share item |
| Search | `search` | Search input |
| Filter | `sliders-horizontal` | Filters |
| Send | `send` | Send message |
| Camera | `camera` | Take photo |
| Image | `image` | Gallery |
| Trash | `trash-2` | Delete |
| Edit | `pencil` | Edit |
| Copy | `copy` | Copy |
| Check | `check` | Confirm/Success |

### 3.3 Status Icons

| Icon Name | Lucide | Usage |
|-----------|--------|-------|
| Clock | `clock` | Pending |
| CheckCircle | `check-circle` | Success/Completed |
| XCircle | `x-circle` | Error/Cancelled |
| AlertTriangle | `alert-triangle` | Warning |
| Info | `info` | Information |
| Loader | `loader-2` | Loading (animated) |

### 3.4 Category Icons (Emoji)

| Category | Emoji | Code |
|----------|-------|------|
| Инструменты | 🔧 | U+1F527 |
| Спорт | ⚽ | U+26BD |
| Электроника | 📱 | U+1F4F1 |
| Детское | 👶 | U+1F476 |
| Мероприятия | 🎉 | U+1F389 |
| Другое | 📦 | U+1F4E6 |

### 3.5 Feature Icons

| Icon Name | Lucide | Usage |
|-----------|--------|-------|
| Star | `star` | Rating |
| StarFilled | `star` (filled) | Rating filled |
| MapPin | `map-pin` | Location |
| Calendar | `calendar` | Dates |
| CreditCard | `credit-card` | Payment |
| Shield | `shield` | Security |
| BadgeCheck | `badge-check` | Verified |
| Settings | `settings` | Settings |
| Bell | `bell` | Notifications |
| HelpCircle | `help-circle` | Help |

### 3.6 Transaction Icons

| Icon Name | Lucide | Usage |
|-----------|--------|-------|
| Package | `package` | Item/Listing |
| Handshake | `handshake` | Handover |
| RotateCcw | `rotate-ccw` | Return |
| Wallet | `wallet` | Balance |
| ArrowDownCircle | `arrow-down-circle` | Deposit |
| ArrowUpCircle | `arrow-up-circle` | Withdrawal |
| Receipt | `receipt` | Transaction |

---

## 4. Custom Icons

### 4.1 Logo

```yaml
Logo:
  Primary:
    - Full logo (text + icon): for headers, marketing
    - Icon only: for app icon, favicon
    - Text only: for specific contexts

  Sizes:
    - App icon: 512×512px (with padding)
    - Header: 120×32px
    - Favicon: 32×32px

  Colors:
    - Primary: primary-600 (#4F46E5)
    - Monochrome: gray-800 / white
```

### 4.2 Category Custom Icons (если нужны вместо emoji)

```yaml
Custom Category Icons:
  style:
    - Filled style
    - 2-color (primary + accent)
    - Rounded corners
    - Consistent visual weight

  format:
    - SVG (vector)
    - PNG @1x, @2x, @3x (raster fallback)
```

---

## 5. Illustrations

### 5.1 Style Guidelines

```yaml
Illustration Style:
  - Flat design
  - Limited color palette (brand colors)
  - Simple shapes
  - Friendly characters (optional)
  - Consistent line weight: 2-3px

Colors:
  - Primary: primary-500, primary-300
  - Secondary: gray-300, gray-200
  - Accent: success-400, warning-400

Dimensions:
  - Mobile: 200×200px max
  - Aspect: 1:1 или 4:3
```

### 5.2 Illustration Catalog

#### Empty States

| Name | Usage | Description |
|------|-------|-------------|
| empty-catalog | No items in ЖК | Дом с пустыми коробками |
| empty-search | No search results | Лупа с вопросом |
| empty-messages | No chats | Облачка сообщений |
| empty-rentals | No transactions | Календарь пустой |
| empty-listings | No user listings | Коробка с плюсом |

#### Success States

| Name | Usage | Description |
|------|-------|-------------|
| success-booking | Booking confirmed | Рукопожатие |
| success-publish | Listing published | Коробка с галочкой |
| success-payment | Payment completed | Кошелёк с галочкой |

#### Onboarding

| Name | Usage | Description |
|------|-------|-------------|
| onboard-welcome | Welcome screen | Соседи здороваются |
| onboard-rent | How to rent | Человек получает вещь |
| onboard-share | How to share | Человек делится вещью |
| onboard-safe | Safety | Щит и рукопожатие |

#### Error States

| Name | Usage | Description |
|------|-------|-------------|
| error-generic | General error | Облако с молнией |
| error-network | No connection | Wi-Fi перечёркнут |
| error-404 | Not found | Коробка с вопросом |

### 5.3 Illustration Implementation

```yaml
Format:
  - SVG (preferred for web)
  - PNG @2x fallback
  - Lottie for animated (optional)

Optimization:
  - SVGO compression
  - Max file size: 20KB
  - Lazy loading for below-fold
```

---

## 6. Icon Implementation

### 6.1 React Component

```tsx
// components/Icon.tsx
import { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const sizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
};

export const Icon = ({
  icon: IconComponent,
  size = 'md',
  color = 'currentColor',
  className,
}: IconProps) => {
  return (
    <IconComponent
      size={sizes[size]}
      color={color}
      className={className}
      strokeWidth={2}
    />
  );
};
```

### 6.2 Usage Example

```tsx
import { Icon } from '@/components/Icon';
import { Heart, Search, Home } from 'lucide-react';

// Default (24px)
<Icon icon={Heart} />

// With size
<Icon icon={Search} size="lg" />

// With color
<Icon icon={Home} color="var(--color-primary-600)" />
```

### 6.3 Icon Button Component

```tsx
// components/IconButton.tsx
interface IconButtonProps {
  icon: LucideIcon;
  label: string; // for accessibility
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'ghost';
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  label,
  size = 'md',
  variant = 'default',
  onClick,
}: IconButtonProps) => {
  return (
    <button
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center',
        'rounded-full transition-colors',
        // size styles
        // variant styles
      )}
      onClick={onClick}
    >
      <Icon icon={icon} size={size === 'lg' ? 'lg' : 'md'} />
    </button>
  );
};
```

---

## 7. Accessibility

### 7.1 Icon Accessibility Rules

```yaml
Decorative Icons:
  - aria-hidden="true"
  - Не добавлять alt/title

Interactive Icons (icon-only buttons):
  - aria-label="[действие]"
  - Или visually-hidden текст

Informative Icons:
  - role="img"
  - aria-label="[описание]"
```

### 7.2 Examples

```html
<!-- Decorative (with text label) -->
<button>
  <HeartIcon aria-hidden="true" />
  <span>Избранное</span>
</button>

<!-- Interactive (icon-only) -->
<button aria-label="Добавить в избранное">
  <HeartIcon aria-hidden="true" />
</button>

<!-- Informative (status) -->
<span role="img" aria-label="Успешно">
  <CheckCircleIcon aria-hidden="true" />
</span>
```

---

## 8. Asset Management

### 8.1 File Structure

```
/assets
  /icons
    /lucide (library icons, auto-imported)
    /custom
      logo.svg
      logo-icon.svg
      category-tools.svg
      category-sports.svg
      ...
  /illustrations
    /empty-states
      empty-catalog.svg
      empty-search.svg
      ...
    /success
      success-booking.svg
      ...
    /onboarding
      onboard-welcome.svg
      ...
    /errors
      error-generic.svg
      ...
```

### 8.2 Naming Convention

```yaml
Format: [type]-[name]-[variant].svg

Examples:
  - icon-heart-filled.svg
  - illust-empty-catalog.svg
  - logo-full-dark.svg
```

### 8.3 Export Settings

```yaml
SVG Export:
  - Outline strokes
  - Remove hidden layers
  - Optimize with SVGO
  - Use currentColor for colorable icons

PNG Export:
  - @1x, @2x, @3x
  - Transparent background
  - Optimize with ImageOptim
```

---

## 9. Icon Usage Guidelines

### 9.1 Do's

```markdown
✓ Используйте иконки консистентно
✓ Сопровождайте иконки текстом где возможно
✓ Обеспечьте достаточный touch target (44px)
✓ Используйте стандартные значения иконок
✓ Добавляйте aria-label для icon-only buttons
```

### 9.2 Don'ts

```markdown
✗ Не изменяйте stroke-width
✗ Не растягивайте иконки непропорционально
✗ Не используйте иконки как единственный индикатор
✗ Не перегружайте интерфейс иконками
✗ Не создавайте custom icons без необходимости
```

---

## Приложения

### A. Icon Cheat Sheet

```
Navigation:     home, plus, message-circle, clipboard-list, user
Actions:        heart, share-2, search, filter, send, camera
Status:         check-circle, x-circle, alert-triangle, info
Categories:     🔧 🌍 📱 👶 🎉 📦
Features:       star, map-pin, calendar, credit-card, shield
```

### B. Lucide Installation

```bash
npm install lucide-react
# or
yarn add lucide-react
```

### C. Color Tokens for Icons

```css
:root {
  --icon-default: #4B5563;
  --icon-secondary: #9CA3AF;
  --icon-primary: #4F46E5;
  --icon-success: #059669;
  --icon-warning: #D97706;
  --icon-error: #DC2626;
  --icon-disabled: #D1D5DB;
}
```

---

*Документ создан: UI Agent | Дата: 2025-02-05*
