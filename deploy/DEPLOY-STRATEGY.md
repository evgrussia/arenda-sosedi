# Стратегия деплоя Arenda-sosedi на VPS

## Результаты разведки сервера (2026-02-05)

- **Сервер:** default (213.159.67.199), hostname vm4652062.example.com, пользователь root.
- **Занятые порты (публичные):** 22, 80, 443, 5432, 18080, 8082–8091, 8001, 8010; локально: 3000, 8000, 8088, 6379, 10000.
- **Выбранный порт для фронтенда:** **8092** (свободен, в одном диапазоне с 8082–8091).
- **Nginx:** установлен, конфиги в `/etc/nginx/sites-available/`, симлинки в `sites-enabled/`.
- **Certbot:** установлен (`/usr/bin/certbot`), используется для SSL (Let's Encrypt).
- **Проекты:** в `/opt/` (например roditel-pro, dark_chef). Деплой только через Git (pull в `/opt/arenda-sosedi`).

## Конфигурация

| Параметр        | Значение |
|-----------------|----------|
| Домен           | arenda-sosedi.ru, www.arenda-sosedi.ru |
| Внутренний порт| 8092 (127.0.0.1:8092 → контейнер:80) |
| Контейнер       | arenda-sosedi-frontend |
| Образ           | arenda-sosedi-frontend:latest |
| Путь на VPS     | /opt/arenda-sosedi |

## SSL

1. Сначала поднять nginx с конфигом для домена (порт 80, `server_name arenda-sosedi.ru www.arenda-sosedi.ru`).
2. Убедиться, что DNS A-записи указывают на 213.159.67.199.
3. Выполнить: `sudo certbot --nginx -d arenda-sosedi.ru -d www.arenda-sosedi.ru`.
4. Certbot добавит `listen 443 ssl` и пути к сертификатам, при необходимости перезагрузить nginx.

## Чеклист перед деплоем

- [ ] Код в репозитории, push выполнен.
- [ ] DNS arenda-sosedi.ru и www.arenda-sosedi.ru → 213.159.67.199.
- [ ] MCP user-deploy-vps подключён к серверу.

## Чеклист после деплоя

- [ ] `docker ps` — контейнер arenda-sosedi-frontend в состоянии Up.
- [ ] `curl -sI http://127.0.0.1:8092` на сервере — 200.
- [ ] `sudo nginx -t` — синтаксис OK.
- [ ] После certbot: https://arenda-sosedi.ru открывается, сертификат валиден.

---
*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
