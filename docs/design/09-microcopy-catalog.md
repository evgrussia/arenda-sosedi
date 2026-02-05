---
title: "Microcopy & Error Messages"
created_by: "Content Agent"
created_at: "2025-02-05"
version: "1.0"
status: "approved"
---

# Microcopy & Error Messages — Арендо-Соседи

## Введение

Каталог всех микротекстов приложения: кнопки, labels, placeholders, сообщения об ошибках, уведомления и другие UI-тексты.

---

## 1. Buttons

### 1.1 Primary Actions

| Key | Text | Context |
|-----|------|---------|
| `btn.rent` | Арендовать | Item detail |
| `btn.publish` | Опубликовать | Create listing |
| `btn.pay` | Оплатить | Payment |
| `btn.pay_amount` | Оплатить {amount} ₽ | Payment with amount |
| `btn.confirm` | Подтвердить | Confirmations |
| `btn.send` | Отправить | Forms, chat |
| `btn.save` | Сохранить | Edit forms |
| `btn.continue` | Продолжить | Multi-step flows |
| `btn.done` | Готово | Completion |
| `btn.start` | Начать | Onboarding |

### 1.2 Secondary Actions

| Key | Text | Context |
|-----|------|---------|
| `btn.cancel` | Отмена | Modals |
| `btn.back` | Назад | Navigation |
| `btn.skip` | Пропустить | Optional steps |
| `btn.later` | Позже | Deferred actions |
| `btn.edit` | Редактировать | Edit actions |
| `btn.change` | Изменить | Change selections |
| `btn.show_more` | Показать ещё | Pagination |
| `btn.see_all` | Смотреть все | Lists |
| `btn.learn_more` | Подробнее | Info links |

### 1.3 Destructive Actions

| Key | Text | Context |
|-----|------|---------|
| `btn.delete` | Удалить | Delete item |
| `btn.reject` | Отклонить | Reject request |
| `btn.cancel_booking` | Отменить бронирование | Cancel booking |
| `btn.remove` | Убрать | Remove item |
| `btn.logout` | Выйти | Logout |

### 1.4 Contextual Actions

| Key | Text | Context |
|-----|------|---------|
| `btn.create_listing` | Создать объявление | Create new listing |
| `btn.add_photo` | Добавить фото | Photo upload |
| `btn.take_photo` | Сделать фото | Camera |
| `btn.choose_from_gallery` | Выбрать из галереи | Gallery |
| `btn.apply_filters` | Применить | Filters |
| `btn.reset_filters` | Сбросить | Reset filters |
| `btn.show_results` | Показать {count} | Filter results |
| `btn.message_owner` | Написать владельцу | Contact |
| `btn.open_chat` | Открыть чат | Chat |
| `btn.confirm_handover` | Подтвердить приём | Handover |
| `btn.confirm_return` | Подтвердить возврат | Return |
| `btn.open_dispute` | Открыть спор | Dispute |
| `btn.withdraw` | Вывести | Withdrawal |
| `btn.add_card` | Добавить карту | Payment methods |

---

## 2. Form Labels & Placeholders

### 2.1 Listing Creation

| Key | Label | Placeholder | Helper |
|-----|-------|-------------|--------|
| `form.title` | Название | Например: Дрель Bosch GSB 13RE | От 5 до 100 символов |
| `form.description` | Описание | Опишите состояние и особенности... | От 20 до 2000 символов |
| `form.category` | Категория | Выберите категорию | — |
| `form.price` | Цена за день | От 50 ₽ | Рекомендуем: {suggested} ₽ |
| `form.deposit` | Залог | Необязательно | Вернётся после аренды |
| `form.condition` | Состояние | Выберите состояние | — |
| `form.min_days` | Мин. срок аренды | 1 день | — |
| `form.max_days` | Макс. срок аренды | 30 дней | — |

### 2.2 Profile

| Key | Label | Placeholder |
|-----|-------|-------------|
| `form.name` | Имя | Как вас зовут? |
| `form.address` | Адрес или ЖК | Начните вводить... |

### 2.3 Search & Filters

| Key | Label | Placeholder |
|-----|-------|-------------|
| `form.search` | — | Найти вещь... |
| `form.price_min` | от | 100 |
| `form.price_max` | до | 1000 |

---

## 3. Navigation & Headers

### 3.1 Tab Bar

| Key | Text |
|-----|------|
| `nav.catalog` | Каталог |
| `nav.create` | Создать |
| `nav.chats` | Чаты |
| `nav.rentals` | Аренды |
| `nav.profile` | Профиль |

### 3.2 Page Titles

| Key | Text |
|-----|------|
| `title.catalog` | Каталог |
| `title.search_results` | Результаты поиска |
| `title.filters` | Фильтры |
| `title.new_listing` | Новое объявление |
| `title.edit_listing` | Редактирование |
| `title.my_listings` | Мои объявления |
| `title.messages` | Сообщения |
| `title.my_rentals` | Мои аренды |
| `title.profile` | Профиль |
| `title.settings` | Настройки |
| `title.finances` | Финансы |
| `title.reviews` | Отзывы |
| `title.help` | Помощь |
| `title.booking` | Бронирование |
| `title.payment` | Оплата |
| `title.handover` | Приём вещи |
| `title.return` | Возврат вещи |
| `title.dispute` | Спор |

### 3.3 Section Headers

| Key | Text |
|-----|------|
| `section.active` | Активные |
| `section.completed` | Завершённые |
| `section.cancelled` | Отменённые |
| `section.requests` | Заявки |
| `section.description` | Описание |
| `section.availability` | Доступность |
| `section.reviews` | Отзывы |
| `section.owner` | Владелец |
| `section.history` | История |

---

## 4. Status Messages

### 4.1 Transaction Statuses

| Key | Text (Renter) | Text (Owner) |
|-----|---------------|--------------|
| `status.pending` | Ожидает подтверждения | Новая заявка |
| `status.confirmed` | Подтверждено | Вы подтвердили |
| `status.active` | В аренде | Сдано |
| `status.returning` | Возврат | Ожидает возврата |
| `status.completed` | Завершено | Завершено |
| `status.cancelled` | Отменено | Отменено |
| `status.disputed` | На рассмотрении | На рассмотрении |

### 4.2 Listing Statuses

| Key | Text |
|-----|------|
| `listing.active` | Активно |
| `listing.pending` | На модерации |
| `listing.paused` | Приостановлено |
| `listing.rented` | Сдано |
| `listing.rejected` | Отклонено |

---

## 5. Success Messages

### 5.1 Toasts

| Key | Text |
|-----|------|
| `success.listing_published` | Объявление опубликовано |
| `success.listing_saved` | Изменения сохранены |
| `success.listing_deleted` | Объявление удалено |
| `success.booking_sent` | Заявка отправлена |
| `success.booking_confirmed` | Бронирование подтверждено |
| `success.booking_cancelled` | Бронирование отменено |
| `success.payment_completed` | Оплата прошла успешно |
| `success.handover_confirmed` | Приём подтверждён |
| `success.return_confirmed` | Возврат подтверждён |
| `success.review_sent` | Отзыв отправлен |
| `success.message_sent` | Сообщение отправлено |
| `success.profile_updated` | Профиль обновлён |
| `success.withdrawal_requested` | Заявка на вывод создана |
| `success.copied` | Скопировано |

### 5.2 Full-Screen Success

| Key | Title | Description |
|-----|-------|-------------|
| `success_screen.booking` | Заявка отправлена! | Владелец получит уведомление и ответит в течение 24 часов |
| `success_screen.listing` | Объявление опубликовано! | Теперь соседи увидят его в каталоге |
| `success_screen.payment` | Оплата прошла! | Деньги зарезервированы до завершения аренды |
| `success_screen.rental_complete` | Аренда завершена! | Оставьте отзыв о вашем опыте |

---

## 6. Error Messages

### 6.1 General Errors

| Key | Text |
|-----|------|
| `error.generic` | Что-то пошло не так. Попробуйте позже |
| `error.network` | Нет подключения к интернету |
| `error.timeout` | Время ожидания истекло. Попробуйте снова |
| `error.server` | Сервер временно недоступен |
| `error.unknown` | Произошла ошибка |

### 6.2 Authentication Errors

| Key | Text |
|-----|------|
| `error.auth.session_expired` | Сессия истекла. Войдите снова |
| `error.auth.telegram_failed` | Не удалось войти через Telegram |

### 6.3 Form Validation

| Key | Text |
|-----|------|
| `error.required` | Обязательное поле |
| `error.title_too_short` | Минимум 5 символов |
| `error.title_too_long` | Максимум 100 символов |
| `error.description_too_short` | Минимум 20 символов |
| `error.description_too_long` | Максимум 2000 символов |
| `error.price_min` | Минимум 50 ₽ |
| `error.price_max` | Максимум 50 000 ₽ |
| `error.deposit_exceeds_price` | Залог не может превышать стоимость вещи |
| `error.photos_required` | Добавьте минимум одно фото |
| `error.photos_max` | Максимум 10 фото |
| `error.invalid_dates` | Выберите корректные даты |
| `error.dates_in_past` | Даты не могут быть в прошлом |

### 6.4 Booking Errors

| Key | Text |
|-----|------|
| `error.booking.unavailable` | Эти даты уже заняты |
| `error.booking.min_days` | Минимальный срок аренды: {days} дн. |
| `error.booking.max_days` | Максимальный срок аренды: {days} дн. |
| `error.booking.own_listing` | Нельзя арендовать свою вещь |
| `error.booking.already_exists` | У вас уже есть активная заявка |

### 6.5 Payment Errors

| Key | Text |
|-----|------|
| `error.payment.failed` | Оплата не прошла. Проверьте данные карты |
| `error.payment.declined` | Банк отклонил платёж |
| `error.payment.insufficient_funds` | Недостаточно средств |
| `error.payment.card_expired` | Срок действия карты истёк |
| `error.payment.try_again` | Попробуйте снова или выберите другой способ |

### 6.6 Upload Errors

| Key | Text |
|-----|------|
| `error.upload.failed` | Не удалось загрузить файл |
| `error.upload.too_large` | Файл слишком большой (макс. 10 МБ) |
| `error.upload.invalid_format` | Формат не поддерживается |

### 6.7 Action Errors

| Key | Text |
|-----|------|
| `error.send_message` | Не удалось отправить сообщение |
| `error.load_data` | Не удалось загрузить данные |
| `error.save_changes` | Не удалось сохранить изменения |
| `error.delete_listing` | Не удалось удалить объявление |
| `error.confirm_action` | Не удалось подтвердить действие |

---

## 7. Empty States

### 7.1 Catalog

| Key | Title | Description | CTA |
|-----|-------|-------------|-----|
| `empty.catalog` | Пока пусто | В вашем ЖК ещё никто не разместил объявлений | Станьте первым! |
| `empty.search` | Ничего не нашлось | Попробуйте изменить запрос или фильтры | Сбросить фильтры |
| `empty.category` | В этой категории пока пусто | Попробуйте другую категорию | Все категории |

### 7.2 User Content

| Key | Title | Description | CTA |
|-----|-------|-------------|-----|
| `empty.my_listings` | Нет объявлений | Сдайте вещи в аренду соседям и зарабатывайте | Создать объявление |
| `empty.chats` | Здесь будут ваши чаты | Начните переписку с соседями, арендуя или сдавая вещи | Перейти в каталог |
| `empty.rentals_renter` | Нет аренд | Арендуйте что-нибудь у соседа | Перейти в каталог |
| `empty.rentals_owner` | Нет заявок | Когда кто-то захочет арендовать вашу вещь, заявка появится здесь | — |
| `empty.reviews` | Пока нет отзывов | Отзывы появятся после первой аренды | — |
| `empty.favorites` | Нет избранного | Добавляйте понравившиеся вещи в избранное | Перейти в каталог |

---

## 8. Notifications

### 8.1 Push Notifications

| Key | Title | Body |
|-----|-------|------|
| `push.new_request` | Новая заявка | {user} хочет арендовать {item} |
| `push.booking_confirmed` | Бронирование подтверждено | {owner} подтвердил аренду {item} |
| `push.booking_rejected` | Заявка отклонена | К сожалению, {owner} отклонил заявку |
| `push.new_message` | Новое сообщение | {user}: {preview} |
| `push.return_reminder` | Напоминание | Не забудьте вернуть {item} завтра |
| `push.deposit_returned` | Залог возвращён | {amount} ₽ вернулись на вашу карту |
| `push.payout` | Выплата получена | {amount} ₽ за аренду {item} |
| `push.review_request` | Оставьте отзыв | Как прошла аренда {item}? |
| `push.dispute_update` | Обновление спора | По вашему спору принято решение |
| `push.listing_approved` | Объявление одобрено | {item} теперь видно в каталоге |
| `push.listing_rejected` | Объявление отклонено | {item} не прошло модерацию |

---

## 9. Tooltips & Hints

| Key | Text |
|-----|------|
| `hint.deposit` | Залог возвращается в течение 24 часов после подтверждения возврата |
| `hint.service_fee` | Сервисный сбор покрывает защиту платежей и поддержку 24/7 |
| `hint.price_suggestion` | Цена рассчитана на основе похожих объявлений в вашем ЖК |
| `hint.rating` | Рейтинг складывается из отзывов других пользователей |
| `hint.verified` | Адрес проживания подтверждён |
| `hint.pending_balance` | Средства за активные аренды. Станут доступны после возврата |
| `hint.cancellation_policy` | При отмене за {days}+ дней — возврат 100% |
| `hint.response_time` | Владелец обычно отвечает в течение {time} |

---

## 10. Confirmations

### 10.1 Dialogs

| Key | Title | Description | Primary | Secondary |
|-----|-------|-------------|---------|-----------|
| `confirm.delete_listing` | Удалить объявление? | Это действие нельзя отменить | Удалить | Отмена |
| `confirm.cancel_booking` | Отменить бронирование? | Вам вернётся {percent}% суммы | Отменить | Назад |
| `confirm.reject_request` | Отклонить заявку? | Арендатору вернутся все средства | Отклонить | Назад |
| `confirm.logout` | Выйти из аккаунта? | — | Выйти | Отмена |
| `confirm.discard_changes` | Отменить изменения? | Несохранённые данные будут потеряны | Отменить | Продолжить редактирование |

---

## 11. Loading States

| Key | Text |
|-----|------|
| `loading.default` | Загрузка... |
| `loading.publishing` | Публикуем... |
| `loading.sending` | Отправляем... |
| `loading.saving` | Сохраняем... |
| `loading.processing` | Обрабатываем... |
| `loading.payment` | Обрабатываем платёж... |
| `loading.uploading` | Загружаем фото... |
| `loading.searching` | Ищем... |

---

## 12. Misc

### 12.1 Time & Dates

| Key | Text |
|-----|------|
| `time.today` | Сегодня |
| `time.yesterday` | Вчера |
| `time.tomorrow` | Завтра |
| `time.just_now` | Только что |
| `time.minutes_ago` | {n} мин. назад |
| `time.hours_ago` | {n} ч. назад |
| `time.days_ago` | {n} дн. назад |

### 12.2 Pluralization

| Key | 1 | 2-4 | 5+ |
|-----|---|-----|-----|
| `plural.day` | день | дня | дней |
| `plural.review` | отзыв | отзыва | отзывов |
| `plural.listing` | объявление | объявления | объявлений |
| `plural.result` | результат | результата | результатов |

### 12.3 Units

| Key | Text |
|-----|------|
| `unit.per_day` | /день |
| `unit.days` | дн. |
| `unit.entrance` | п. (подъезд) |

---

*Документ создан: Content Agent | Дата: 2025-02-05*
