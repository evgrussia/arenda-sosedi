# Metrics Framework и Tracking Plan: Арендо-Соседи

> Система метрик, KPI и план аналитической реализации

---
**Документ:** ANALYTICS-001
**Версия:** 1.0
**Дата:** 2025-02-05
**Автор:** Analytics Agent
---

## 1. Metrics Framework

### 1.1 North Star Metric

> **GMV (Gross Merchandise Value)** — общая стоимость всех аренд через платформу

**Почему GMV:**
- Отражает ценность для обеих сторон (арендатор + владелец)
- Коррелирует с revenue (Take Rate × GMV)
- Показывает реальное использование платформы

**Формула:**
```
GMV = SUM(rental_amount) за период
```

### 1.2 Иерархия метрик (Metrics Tree)

```
                            GMV
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
      Transactions      AOV (Avg Order      Take Rate
           │              Value)               │
    ┌──────┴──────┐          │            Revenue
    │             │          │
  MAU      Tx/MAU      Avg Price ×
    │                   Avg Days
┌───┴───┐
│       │
New   Returning
Users  Users
```

### 1.3 AARRR Framework (Pirate Metrics)

| Stage | Метрика | Target MVP | Target Y1 |
|-------|---------|------------|-----------|
| **Acquisition** | New Users/week | 25 | 500 |
| **Activation** | % completed first action | 40% | 50% |
| **Retention** | D30 Retention | 30% | 40% |
| **Revenue** | Revenue/month | 2.5K | 125K |
| **Referral** | Viral coefficient | 0.3 | 0.8 |

---

## 2. KPI Dashboard

### 2.1 Acquisition Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **New Users** | Новые регистрации | COUNT(users WHERE created_at = period) | +25/week |
| **Signup Rate** | Конверсия в регистрацию | New Users / WebApp Opens | 50% |
| **CAC** | Стоимость привлечения | Marketing Spend / New Users | <100₽ |
| **Source Distribution** | Распределение по каналам | % by utm_source | Organic >70% |

### 2.2 Activation Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **Activation Rate** | % активированных | Users with first action / New Users | 40% |
| **Time to First Action** | Время до действия | AVG(first_action_at - created_at) | <24h |
| **First Listing Rate** | % добавивших вещь | Users with listing / New Users | 20% |
| **First Booking Rate** | % забронировавших | Users with booking / New Users | 30% |

**Определение "активированного" пользователя:**
- Добавил хотя бы 1 вещь, ИЛИ
- Сделал хотя бы 1 бронирование

### 2.3 Engagement Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **DAU** | Ежедневные пользователи | COUNT(DISTINCT users active today) | 50 |
| **WAU** | Еженедельные пользователи | COUNT(DISTINCT users active this week) | 150 |
| **MAU** | Ежемесячные пользователи | COUNT(DISTINCT users active this month) | 500 |
| **DAU/MAU** | Stickiness | DAU / MAU | 15% |
| **Sessions/User** | Сессий на пользователя | Sessions / MAU | 4/month |
| **Avg Session Duration** | Средняя сессия | AVG(session_duration) | 3 min |

### 2.4 Retention Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **D1 Retention** | Возврат на след. день | Users active D1 / New Users D0 | 25% |
| **D7 Retention** | Возврат через неделю | Users active D7 / New Users D0 | 15% |
| **D30 Retention** | Возврат через месяц | Users active D30 / New Users D0 | 30% |
| **Churn Rate** | Отток | Users inactive >30d / Total Users | <10%/month |

### 2.5 Transaction Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **Transactions** | Кол-во аренд | COUNT(rentals WHERE status=completed) | 20/month |
| **GMV** | Объём транзакций | SUM(rental_amount) | 20K/month |
| **AOV** | Средний чек | GMV / Transactions | 1000₽ |
| **Tx/MAU** | Транзакций на пользователя | Transactions / MAU | 0.4 |
| **Fill Rate** | Заполняемость | Rented Days / Available Days | 20% |

### 2.6 Supply Metrics (Владельцы)

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **Total Listings** | Всего вещей | COUNT(listings WHERE active=true) | 50 |
| **Listings/User** | Вещей на владельца | Listings / Owners | 3 |
| **New Listings/week** | Новые листинги | COUNT(listings created this week) | 10 |
| **Listing Activation** | % с арендой | Listings with ≥1 rental / Total | 50% |
| **Avg Price** | Средняя цена | AVG(daily_price) | 500₽ |

### 2.7 Demand Metrics (Арендаторы)

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **Search Volume** | Объём поиска | COUNT(searches) | 100/day |
| **Search-to-View** | Конверсия в просмотр | Views / Searches | 50% |
| **View-to-Book** | Конверсия в бронь | Bookings / Views | 10% |
| **Book-to-Complete** | Конверсия в сделку | Completed / Bookings | 85% |
| **Repeat Renters** | Повторные арендаторы | Users with >1 rental / All Renters | 30% |

### 2.8 Quality Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **NPS** | Net Promoter Score | % Promoters - % Detractors | >40 |
| **Avg Rating** | Средний рейтинг | AVG(reviews.rating) | 4.5 |
| **Dispute Rate** | % споров | Disputes / Completed Rentals | <3% |
| **Cancellation Rate** | % отмен | Cancelled / Total Bookings | <15% |
| **Response Time** | Время ответа владельца | AVG(time to confirm/reject) | <4h |

### 2.9 Revenue Metrics

| KPI | Описание | Формула | Target |
|-----|----------|---------|--------|
| **Revenue** | Выручка | GMV × Take Rate | 2.5K/month |
| **Take Rate** | Комиссия | Revenue / GMV | 12.5% |
| **ARPU** | Доход на пользователя | Revenue / MAU | 5₽ |
| **LTV** | Lifetime Value | AVG(Revenue per User lifetime) | 2000₽ |
| **LTV/CAC** | Эффективность | LTV / CAC | >5x |

---

## 3. Tracking Plan

### 3.1 Технологический стек

| Компонент | Инструмент | Назначение |
|-----------|------------|------------|
| Event Tracking | PostHog / Amplitude | Трекинг событий |
| Backend Analytics | Django + PostgreSQL | Бизнес-метрики |
| Dashboards | Metabase / Grafana | Визуализация |
| Error Tracking | Sentry | Ошибки |
| Session Recording | PostHog | UX анализ |

### 3.2 Event Taxonomy

#### Naming Convention

```
{object}_{action}

Примеры:
- user_registered
- listing_created
- booking_started
- payment_completed
```

### 3.3 Полный список событий

#### Authentication Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `app_opened` | Открытие WebApp | platform, source, referrer |
| `user_registered` | Первая авторизация | user_id, telegram_id |
| `user_logged_in` | Повторный вход | user_id |
| `complex_selected` | Выбор ЖК | complex_id, complex_name |

#### Catalog Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `catalog_viewed` | Открытие каталога | complex_id, filters |
| `category_selected` | Выбор категории | category_id, category_name |
| `search_performed` | Поиск | query, results_count |
| `listing_viewed` | Просмотр карточки | listing_id, category, price |
| `listing_shared` | Шеринг | listing_id, share_type |

#### Listing Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `listing_create_started` | Начало создания | - |
| `listing_photo_added` | Добавление фото | photo_count |
| `listing_created` | Публикация | listing_id, category, price, deposit |
| `listing_edited` | Редактирование | listing_id, changed_fields |
| `listing_hidden` | Скрытие | listing_id |
| `listing_deleted` | Удаление | listing_id |

#### Booking Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `booking_started` | Начало бронирования | listing_id |
| `booking_dates_selected` | Выбор дат | start_date, end_date, days |
| `booking_created` | Создание заявки | booking_id, amount, deposit |
| `payment_started` | Переход к оплате | booking_id, amount |
| `payment_completed` | Успешная оплата | booking_id, payment_id |
| `payment_failed` | Неуспешная оплата | booking_id, error |
| `booking_confirmed` | Подтверждение владельцем | booking_id |
| `booking_rejected` | Отклонение | booking_id, reason |
| `booking_cancelled` | Отмена | booking_id, cancelled_by, reason |

#### Rental Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `rental_started` | Начало аренды | booking_id |
| `rental_completed` | Завершение | booking_id, condition |
| `dispute_opened` | Открытие спора | booking_id, type |
| `dispute_resolved` | Решение спора | booking_id, resolution |

#### Review Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `review_started` | Начало отзыва | booking_id, role |
| `review_submitted` | Отправка отзыва | booking_id, rating, has_text |
| `review_viewed` | Просмотр отзыва | user_id, reviewer_id |

#### Communication Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `chat_opened` | Открытие чата | booking_id, with_user_id |
| `notification_received` | Получение уведомления | type |
| `notification_clicked` | Клик по уведомлению | type, action |

#### Profile Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `profile_viewed` | Просмотр профиля | viewed_user_id, is_own |
| `profile_edited` | Редактирование | changed_fields |

### 3.4 User Properties

| Property | Type | Description | Updated |
|----------|------|-------------|---------|
| `user_id` | string | Внутренний ID | Один раз |
| `telegram_id` | string | Telegram ID | Один раз |
| `complex_id` | string | ID ЖК | При смене |
| `created_at` | datetime | Дата регистрации | Один раз |
| `role` | string | owner/renter/both | При изменении |
| `listings_count` | int | Кол-во вещей | При изменении |
| `rentals_as_owner` | int | Аренды как владелец | При изменении |
| `rentals_as_renter` | int | Аренды как арендатор | При изменении |
| `total_gmv` | float | Общий GMV | При изменении |
| `avg_rating_owner` | float | Рейтинг владельца | При изменении |
| `avg_rating_renter` | float | Рейтинг арендатора | При изменении |
| `last_active_at` | datetime | Последняя активность | При каждом входе |

### 3.5 Super Properties (автоматические)

| Property | Type | Description |
|----------|------|-------------|
| `platform` | string | ios/android/desktop |
| `app_version` | string | Версия WebApp |
| `telegram_version` | string | Версия Telegram |
| `screen_width` | int | Ширина экрана |
| `session_id` | string | ID сессии |
| `utm_source` | string | Источник трафика |
| `utm_campaign` | string | Кампания |

---

## 4. Dashboards

### 4.1 Executive Dashboard (ежедневно)

| Метрика | Визуализация |
|---------|--------------|
| GMV (today, WoW, MoM) | Number + Trend |
| Transactions (today) | Number |
| MAU (rolling) | Number + Trend |
| New Users (today) | Number |
| Take Rate | Number |

### 4.2 Product Dashboard (ежедневно)

| Секция | Метрики |
|--------|---------|
| Acquisition | New Users, Signup Rate, Source |
| Activation | Activation Rate, Time to First Action |
| Engagement | DAU, Sessions, Session Duration |
| Retention | D1/D7/D30, Churn Rate |

### 4.3 Marketplace Dashboard (ежедневно)

| Секция | Метрики |
|--------|---------|
| Supply | Listings, New Listings, Fill Rate |
| Demand | Searches, Views, Bookings |
| Transactions | GMV, AOV, Tx Count |
| Quality | Cancellation Rate, Dispute Rate |

### 4.4 Financial Dashboard (еженедельно)

| Секция | Метрики |
|--------|---------|
| Revenue | Revenue, Take Rate, ARPU |
| Unit Economics | LTV, CAC, LTV/CAC |
| Cohorts | Revenue Retention by Cohort |

---

## 5. Cohort Analysis

### 5.1 Cohort Definition

```sql
-- Когорта = месяц регистрации
SELECT
  DATE_TRUNC('month', created_at) as cohort,
  user_id
FROM users
```

### 5.2 Retention Cohort

| Cohort | M0 | M1 | M2 | M3 | M6 |
|--------|----|----|----|----|-------|
| Jan-25 | 100% | 45% | 35% | 30% | 25% |
| Feb-25 | 100% | 48% | 38% | 32% | - |
| Mar-25 | 100% | 50% | 40% | - | - |

### 5.3 Revenue Cohort

| Cohort | M0 | M1 | M2 | M3 | M6 |
|--------|------|------|------|------|-------|
| Jan-25 | 10K | 8K | 7K | 6.5K | 5K |
| Feb-25 | 15K | 13K | 11K | 10K | - |

---

## 6. A/B Testing Framework

### 6.1 Experimentation Platform

| Компонент | Инструмент |
|-----------|------------|
| Feature Flags | PostHog / LaunchDarkly |
| Statistical Engine | Встроенный |
| Segmentation | По user_id % |

### 6.2 Sample Size Calculator

```
Minimum Detectable Effect (MDE) = 10%
Baseline Conversion = 5%
Significance Level = 95%
Power = 80%

Required Sample Size = ~3000 users per variant
```

### 6.3 Planned Experiments (MVP)

| Experiment | Hypothesis | Primary Metric |
|------------|------------|----------------|
| Deposit default | Default deposit = 2x price increases trust | Booking Rate |
| Category order | Tool-first ordering increases engagement | CTR Category |
| Photo requirement | 3+ photos increases booking | View-to-Book |

---

## 7. Alerts & Monitoring

### 7.1 Critical Alerts (немедленно)

| Metric | Condition | Action |
|--------|-----------|--------|
| Error Rate | >5% | On-call notification |
| Payment Success | <90% | Check YooKassa |
| API Latency | >2s | Check infrastructure |

### 7.2 Business Alerts (ежедневно)

| Metric | Condition | Action |
|--------|-----------|--------|
| New Users | <5/day | Review acquisition |
| GMV | <50% of average | Review marketplace |
| Dispute Rate | >5% | Review moderation |
| Cancellation Rate | >20% | Review UX |

### 7.3 Weekly Review

| Topic | Metrics to Review |
|-------|-------------------|
| Growth | MAU, New Users, Retention |
| Marketplace | GMV, Transactions, AOV |
| Quality | NPS, Ratings, Disputes |
| Finance | Revenue, LTV, CAC |

---

## 8. Data Pipeline

### 8.1 Architecture

```
Frontend (WebApp)
     │
     ▼ events
PostHog / Analytics SDK
     │
     ▼ webhook
Backend (Django)
     │
     ▼ ETL
PostgreSQL (Analytics DB)
     │
     ▼ queries
Metabase (Dashboards)
```

### 8.2 Data Freshness

| Data Type | Latency |
|-----------|---------|
| Real-time events | <1 min |
| Aggregated metrics | Hourly |
| Cohort reports | Daily |
| Financial reports | Daily |

---

## 9. Privacy & Compliance

### 9.1 Data Retention

| Data Type | Retention |
|-----------|-----------|
| Event data | 2 years |
| User profiles | Until deletion |
| Session recordings | 30 days |
| Financial data | 5 years (legal) |

### 9.2 PII Handling

| Field | Treatment |
|-------|-----------|
| Telegram ID | Hashed |
| Phone | Encrypted |
| Name | Plain (from Telegram) |
| Address | Not collected |

### 9.3 152-ФЗ Compliance

- [ ] Согласие на обработку ПД
- [ ] Политика конфиденциальности
- [ ] Право на удаление данных
- [ ] Локализация данных в РФ

---

## 10. Implementation Checklist

### Phase 1: MVP Analytics

- [ ] Настроить PostHog / Amplitude
- [ ] Реализовать базовые события (Auth, Catalog, Booking)
- [ ] Создать Executive Dashboard
- [ ] Настроить критические алерты

### Phase 2: Extended Analytics

- [ ] Добавить все события
- [ ] Создать Product и Marketplace Dashboards
- [ ] Настроить Cohort Analysis
- [ ] Реализовать A/B testing framework

### Phase 3: Advanced Analytics

- [ ] ML-модели (churn prediction, recommendations)
- [ ] Automated reporting
- [ ] Custom attribution model

---

*Документ создан: Analytics Agent | Дата: 2025-02-05*
