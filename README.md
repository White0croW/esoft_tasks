# Проект: Решение трёх задач для ESOFT.

## Содержание
1. [Визуализация дома](#визуализация-дома)
2. [Глубокое копирование объекта](#глубокое-копирование-объекта)
3. [Проверка корректности скобок](#проверка-корректности-скобок)

---

## Визуализация дома
Создана веб-страница с домом с использованием HTML/CSS:
- Прямоугольное основание (`base`) с закруглёнными углами
- Треугольная крыша (`roof`) через CSS `border`
- Круглое окно (`window`) с `border-radius: 50%`
- Дымоход (`chimney`) и дверь (`door`) с детализацией

**Цветовая схема**:
- Основание: `#f5d742`
- Крыша: `#8b4513`
- Окно: `#87ceeb`

---

## Глубокое копирование объекта
Функция `deepCopy()` обрабатывает:
- Вложенные объекты/массивы
- Циклические ссылки через `WeakMap`
- Типы: Date, Map, Set, Symbol
- Сохранение прототипов

---

## Проверка корректности скобок
Алгоритм на основе стека:
- Время: O(n)
- Память: O(n)

Тест-кейсы:
- () ✅ true
- ([)] ❌ false
- {[]} ✅ true
