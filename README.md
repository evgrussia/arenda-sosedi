# Арендо-Соседи

Гиперлокальная P2P-платформа для аренды вещей между соседями в рамках жилого комплекса. Telegram WebApp.

Ниже — навигация по всей проектной документации: документы сгруппированы по **категориям** (Discovery, Design, Context, Прочее) и по **типам** (продукт, UX, бизнес, дизайн-система и т.д.). Все ссылки ведут на файлы в репозитории.

---

## Оглавление

- [Discovery (исследование и продукт)](#discovery-исследование-и-продукт)
- [Design (дизайн и UX)](#design-дизайн-и-ux)
- [Context (контекст проекта)](#context-контекст-проекта)
- [Прочее](#прочее)

---

## Discovery (исследование и продукт)

Документы фазы Discovery: рынок, конкуренты, видение, требования, персоны, метрики, риски и глоссарий.

### Тип: Продукт и стратегия

- **[Vision Document](docs/discovery/02-vision-document.md)** — видение продукта, elevator pitch, стратегические цели
- **[PRD (Product Requirements Document)](docs/discovery/03-prd.md)** — требования к MVP, функциональные и нефункциональные
- **[User Stories](docs/discovery/04-user-stories.md)** — пользовательские истории для MVP

### Тип: Рынок и конкуренты

- **[Конкурентный анализ](docs/discovery/01-competitive-analysis.md)** — анализ конкурентов и позиционирование
- **[Анализ рынка](docs/discovery/12-market-analysis.md)** — рынок, сегменты, тренды

### Тип: Бизнес и метрики

- **[Бизнес-модель и Unit-экономика](docs/discovery/05-business-model.md)** — модель монетизации, unit-экономика
- **[Metrics Framework и Tracking Plan](docs/discovery/06-metrics-tracking-plan.md)** — KPI, метрики, план трекинга
- **[Бизнес-процессы](docs/discovery/10-business-processes.md)** — описание ключевых бизнес-процессов

### Тип: Пользователи и путь клиента

- **[User Personas](docs/discovery/07-user-personas.md)** — персоны целевой аудитории
- **[Customer Journey Map](docs/discovery/08-customer-journey-map.md)** — карта пути клиента

### Тип: Риски и стратегический анализ

- **[SWOT-анализ](docs/discovery/09-swot-analysis.md)** — сильные/слабые стороны, возможности, угрозы
- **[Risk Register](docs/discovery/11-risk-register.md)** — реестр рисков и митигации

### Тип: Политики и справочники

- **[Политики и правила платформы](docs/discovery/13-platform-policies.md)** — правила использования, модерация
- **[Глоссарий терминов](docs/discovery/14-glossary.md)** — термины проекта по категориям

---

## Design (дизайн и UX)

Документы фазы Design: потоки, структура, вайрфреймы, доступность, дизайн-система, UI Kit, копирайтинг.

### Тип: UX — потоки и структура

- **[User Flows](docs/design/01-user-flows.md)** — пользовательские потоки (онбординг, каталог, аренда и др.)
- **[Information Architecture](docs/design/02-information-architecture.md)** — структура информации и навигация
- **[Wireframes](docs/design/03-wireframes.md)** — вайрфреймы ключевых экранов

### Тип: Доступность и универсальный дизайн

- **[Accessibility Guidelines](docs/design/04-accessibility-guidelines.md)** — рекомендации по доступности (a11y)

### Тип: Дизайн-система и UI

- **[Design System](docs/design/05-design-system.md)** — цвета, типографика, отступы, компоненты
- **[UI Kit](docs/design/06-ui-kit.md)** — каталог UI-компонентов и состояний
- **[Иконки и иллюстрации](docs/design/07-iconography.md)** — иконография и визуальный стиль

### Тип: Копирайтинг и тон

- **[UX Copy Guidelines](docs/design/08-ux-copy-guidelines.md)** — правила текстов в интерфейсе
- **[Microcopy & Error Messages](docs/design/09-microcopy-catalog.md)** — микрокопи и сообщения об ошибках
- **[Tone of Voice Guide](docs/design/10-tone-of-voice.md)** — тон коммуникаций бренда

---

## Context (контекст проекта)

Управление контекстом: краткое описание проекта, саммари фаз и чекпоинты.

### Тип: Краткое описание проекта

- **[Project Brief](context/project-brief.yaml)** — цель, scope, метрики, риски, стек

### Тип: Саммари фаз

- **[Discovery Summary](context/summaries/discovery-summary.yaml)** — краткое саммари фазы Discovery
- **[Design Summary](context/summaries/design-summary.yaml)** — краткое саммари фазы Design

### Тип: Чекпоинты

- **[CP-000 Intake](context/checkpoints/CP-000-intake-2025-02-05.yaml)** — чекпоинт приёма/старта
- **[CP-001 Discovery](context/checkpoints/CP-001-discovery-2025-02-05.yaml)** — чекпоинт после Discovery
- **[CP-002 Design](context/checkpoints/CP-002-design-2025-02-05.yaml)** — чекпоинт после Design

---

## Прочее

Документация вне папок `docs/` и `context/`: фронтенд, лицензии, атрибуции.

### Тип: Фронтенд

- **[Frontend Guidelines](frontend/guidelines/Guidelines.md)** — правила и гайдлайны фронтенда
- **[Attributions](frontend/ATTRIBUTIONS.md)** — атрибуции и лицензии сторонних ресурсов

---

## Сводка по типам документов

- **Продукт и стратегия** (3) — [Discovery → Продукт](#тип-продукт-и-стратегия)
- **Рынок и конкуренты** (2) — [Discovery → Рынок](#тип-рынок-и-конкуренты)
- **Бизнес и метрики** (3) — [Discovery → Бизнес](#тип-бизнес-и-метрики)
- **Пользователи и путь клиента** (2) — [Discovery → Пользователи](#тип-пользователи-и-путь-клиента)
- **Риски и стратегический анализ** (2) — [Discovery → Риски](#тип-риски-и-стратегический-анализ)
- **Политики и справочники** (2) — [Discovery → Политики](#тип-политики-и-справочники)
- **UX — потоки и структура** (3) — [Design → UX](#тип-ux--потоки-и-структура)
- **Доступность** (1) — [Design → Доступность](#тип-доступность-и-универсальный-дизайн)
- **Дизайн-система и UI** (3) — [Design → Дизайн-система](#тип-дизайн-система-и-ui)
- **Копирайтинг и тон** (3) — [Design → Копирайтинг](#тип-копирайтинг-и-тон)
- **Контекст** (6) — [Context](#context-контекст-проекта)
- **Фронтенд** (2) — [Прочее](#прочее)

---

## Быстрый старт по документам

- **Понять продукт:** [Vision](docs/discovery/02-vision-document.md) → [PRD](docs/discovery/03-prd.md) → [User Stories](docs/discovery/04-user-stories.md).
- **Понять пользователей:** [Personas](docs/discovery/07-user-personas.md) → [Customer Journey](docs/discovery/08-customer-journey-map.md).
- **Реализовать интерфейс:** [User Flows](docs/design/01-user-flows.md) → [IA](docs/design/02-information-architecture.md) → [Wireframes](docs/design/03-wireframes.md) → [Design System](docs/design/05-design-system.md) → [UI Kit](docs/design/06-ui-kit.md).
- **Термины и правила:** [Глоссарий](docs/discovery/14-glossary.md), [Политики платформы](docs/discovery/13-platform-policies.md).

---

README создан: Orchestrator Agent | Дата: 2025-02-05
