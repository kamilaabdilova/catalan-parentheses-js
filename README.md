# Catalan Parentheses (JavaScript)

![Build](https://github.com/kamilaabdilova/catalan-parentheses-js/actions/workflows/ci.yml/badge.svg)

---

## 📚 Описание

Реализация функции `countWellFormedParenthesis(n)` для подсчёта числа правильных скобочных комбинаций (числа Каталана).  
Используется формула: `C(n) = (2n)! / ((n + 1)! * n!)` — производительная и точная для `n = 1..15`.

---

## 🚀 Как запустить

Установите зависимости и выполните команды:

```bash
npm install
npm test
npm run perf