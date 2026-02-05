# Runbook: деплой Arenda-sosedi на VPS через MCP deploy-vps

Домен: **arenda-sosedi.ru**  
Фронтенд: Vite SPA в Docker, внутренний порт на сервере: **8092**.

## Предусловия

- Репозиторий запушен в remote (GitHub и т.п.).
- DNS для `arenda-sosedi.ru` и `www.arenda-sosedi.ru` указывает на IP VPS: `213.159.67.199`.
- MCP **user-deploy-vps** подключён к серверу (default).

## Шаги деплоя (только через Git)

### 1. Локально: коммит и пуш

```bash
git add .
git commit -m "chore: Docker + nginx + deploy runbook for arenda-sosedi.ru"
git push origin main
```

### 2. На VPS: клонирование или обновление репо

Если проект ещё не клонирован:

```bash
cd /opt && git clone <URL_РЕПОЗИТОРИЯ> arenda-sosedi && cd arenda-sosedi
```

Если уже есть:

```bash
cd /opt/arenda-sosedi && git pull origin main
```

### 3. Сборка и запуск контейнера

```bash
cd /opt/arenda-sosedi
docker compose up -d --build
docker ps
```

Ожидание: контейнер `arenda-sosedi-frontend` слушает `127.0.0.1:8092`.

### 4. Nginx: подключение конфига

```bash
sudo cp /opt/arenda-sosedi/deploy/nginx-arenda-sosedi.ru.conf /etc/nginx/sites-available/arenda-sosedi.ru
sudo ln -sf /etc/nginx/sites-available/arenda-sosedi.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 5. SSL (Let's Encrypt)

После того как DNS указывает на сервер:

```bash
sudo certbot --nginx -d arenda-sosedi.ru -d www.arenda-sosedi.ru
```

Certbot сам обновит конфиг nginx (listen 443, сертификаты). При необходимости перезагрузить nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 6. Проверка

- HTTP: `curl -sI http://arenda-sosedi.ru`
- HTTPS: `curl -sI https://arenda-sosedi.ru`
- В браузере: https://arenda-sosedi.ru

## Откат (rollback)

```bash
cd /opt/arenda-sosedi
git checkout <предыдущий_коммит>
docker compose up -d --build
sudo nginx -t && sudo systemctl reload nginx
```

## Использование MCP (execute-command)

Команды из runbook выполняются на сервере через MCP **user-deploy-vps** → **execute-command** с параметром `cmdString`. Примеры:

- Проверка портов: `ss -tuln | grep 8092`
- Логи контейнера: `docker logs arenda-sosedi-frontend --tail 50`
- Статус: `docker ps --filter name=arenda-sosedi`

---
*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
