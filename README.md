# URL analizator: тестовое задание

SPA-приложение на Vue.js + Vuex, предоставляющее пользователю два типа информации о сайте:
- данные о хостинге
- список используемых технологий

## Использованные фреймворки и библиотеки

* [Vue 2](https://v2.vuejs.org) - JavaScript фреймворк
* [Vuetify](https://v2.vuetifyjs.com) - UI фреймворк
* [Vuex](https://vuex.vuejs.org) - организация стора
* [axios](https://axios-http.com) - реализация асинхронных запросов
* [Who Hosts This Site?](https://www.who-hosts-this.com) - внешний API

## Демонстрация

[Ссылка на демонстрацию](https://julia-marta.github.io/url-analizator/)

## Запуск приложения

Установка зависимостей:

```
npm install
```

Запуск приложения в режиме development на [http://localhost:8080](http://localhost:8080):

```
npm run serve
```

Сборка приложения для production. Оптимизирует, минифицирует и собирает бандлы в папку `dist`:

```
npm run build
```

Проверка на ошибки линтером:

```
npm run lint
```
