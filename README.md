# Запуск проекта (Docker)
```bash
docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
```


# Запуск проекта (Manually)
## Backend
### Перейти в директорию backend
```bash
cd backend
```

### Установить зависимости

```bash
npm install
```
### Запуск 
Открыть в терминале директорию `backend` и выполнить комманду:

```bash
npm run start:dev
```


## Frontend
### Перейти в директорию frontend
```bash
cd frontend
```

### Установить зависимости

```bash
npm install
```

### Запуск 
Открыть в терминале директорию `frontend` и выполнить комманду:

```bash
npm run start
```

## Фреймворки 
[Nest.js](https://nestjs.com/)
[React.js](https://ru.reactjs.org/)