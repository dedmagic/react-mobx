# react-mobx

Используемые технологии:
- React
- MobX
- React-Bootstrap


## Техническое задание:
### Основные бизнес-сущности
* Сотрудник. Человек, использующий наше приложение с целью выдавать другим сотрудникам поручения согласно должностной иерархии и осуществляющий контроль над их исполнением согласно статусной модели. Сотрудник может либо создавать поручения сам, либо, если ему было назначено поручение, делегировать его дальше вниз по иерархии.
* Поручение. Некоторая команда, описанная на формальном языке. Их состав является просто контентом и как то дальше не детализируется в рамках нашей системы. У поручения есть статусная модель: 
    * В работе. Поручение создано и находится в работе.
    * Истекает срок. У поручения может быть задан срок предупреждения, например, за 2 дня, в рамках которого статус «в работе» переключается на «истекает срок». Данный статус может подсказать пользователю, что стоит на это поручение обратить внимание.
    * Просрочено. Поручение просрочено и теперь может быть исполнено только с нарушением срока.
    * Исполнено. Для того, что бы перейти в этот статус, должны быть «исполнены» все делегированные ниже поручения.
    * Исполнено с нарушением срока. Статус исполненных, но просроченных поручений.
	* Отменено.
* Иерархия должностей. Все пользователи приписаны каким-то должностям, сами должности выстроены в иерархию.

## Основные функциональные модули
* Работа с поручениями: просмотр (ограничено должностной иерархией), создание, делегирование и редактирование поручений.
* Аналитика: просмотр отчетов по исполнению поручений пользователями.
* Просмотр по пользователю количество поручений в разрезе статусов за период (анализ работы сотрудника пользователя).
* Просмотр по статусу количества поручений в разрезе пользователей (сравнение разных сотрудников между собой).
* Админка: добавление, редактирование, удаление пользователей и справочника должностей.

