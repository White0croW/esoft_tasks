task1
Задача: Создать веб-страницу с визуализацией дома, используя HTML и CSS. Дом должен состоять из прямоугольной основы, треугольной крыши и круглого окна. Также необходимо добавить дымоходную трубу. Для создания форм дома, крыши, окна и дымохода следует использовать только CSS стили.

Требования:
Основание дома: Создать прямоугольник, который будет служить основанием дома. Используйте соответствующие CSS свойства для задания размеров и цвета.

Крыша: Над основанием дома разместить треугольную крышу. Крышу необходимо создать с помощью CSS, используя техники для формирования треугольника (например, с использованием свойств border).

Окно: На основании дома необходимо разместить окно в виде круга. Используйте CSS свойства для создания круглой формы (например, border-radius).

Дымоход: На крыше дома разместить прямоугольную дымоходную трубу. Используйте CSS для задания размеров, положения и цвета дымохода.

Цвета и расположение: Выберите подходящие цвета для всех элементов дома (основание, крыша, окно, дымоход). Разместите элементы таким образом, чтобы они визуально формировали единую картину дома.

HTML структура: Используйте HTML для создания структуры дома, разделяя его на логические блоки (например, контейнер дома, крыша, окно, дымоход).

Можно добавить другие свои элементы к дому пожеланию (например: наличник, дверь).

task2
Задача: Разработать функцию для выполнения глубокого копирования объекта в JavaScript или TypeScript. Глубокое копирование означает создание нового объекта, который в точности повторяет структуру исходного объекта, включая все вложенные объекты, массивы и другие структуры данных. При этом изменения в копии не должны отражаться на исходном объекте и наоборот.

Требования:
Общие условия: Функция должна принимать один аргумент — объект, который необходимо скопировать. Функция должна возвращать новый объект, являющийся глубокой копией исходного.

Вложенные объекты и массивы: Функция должна корректно обрабатывать вложенные объекты и массивы, создавая их глубокие копии.

Циклические ссылки: Функция должна учитывать возможность наличия циклических ссылок внутри объекта и корректно обрабатывать такие случаи, чтобы избежать бесконечной рекурсии.

Типы данных: Функция должна корректно обрабатывать различные типы данных, включая Object, Array, Date, Map, Set, примитивные типы и т.д.

Функции и символы: Функция должна уметь копировать свойства объекта, которые являются функциями или символами.

task3
Описание задачи:
Необходимо разработать алгоритм, который будет принимать на вход строку, состоящую из символов скобок трёх типов: круглых (), квадратных [] и фигурных {}. Задача алгоритма — определить, является ли данная строка "правильной" последовательностью скобок.

Критерии "правильности" последовательности:Для каждой открывающей скобки в строке должна быть соответствующая закрывающая скобка того же типа.Скобки должны закрываться в правильном порядке. Это означает, что закрывающая скобка каждого типа должна соответствовать ближайшей непосредственно предшествующей ей открывающей скобке того же типа.Пустая строка считается правильной.Требования к алгоритму:Входные данные: Строка, содержащая символы скобок: (, ), {, }, [, ]. Длина строки может быть от 0 до 10^4 символов.Выходные данные: Булево значение — true, если строка является правильной последовательностью скобок, и false в противном случае.Примеры:
Входная строка: () Вывод: true

Входная строка: ()[]{} Вывод: true

Входная строка: (] Вывод: false

Входная строка: ([)] Вывод: false

Входная строка: {[]} Вывод: true

Замечания:Необходимо учитывать вложенность скобок.Эффективность алгоритма будет оцениваться по времени выполнения и использованию памяти.Рекомендуется использовать стек для реализации алгоритма проверки корректности последовательности.
Цель задачи — разработать алгоритм, способный эффективно проверять большие последовательности скобок на соответствие критериям "правильности". Это задание поможет улучшить навыки работы со структурами данных и алгоритмами, а также понимание принципов программирования.
