export const questions = [
  {
    id: 1,
    question: "Что такое операционная система?",
    answers: [
      {
        id: "q1-a1",
        text: "Это просто программа на компьютере, как и другие - Word или Chrome.",
      },
      {
        id: "q1-a2",
        text: "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
      },
      {
        id: "q1-a3",
        text: "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
        isCorrect: true,
      },
      {
        id: "q1-a4",
        text: "Нет такого понятия, есть понятие 'файловая система'",
      },
    ],
  },
  {
    id: 2,
    question: "Является ли Android операционной системой?",
    answers: [
      {
        id: "q2-a1",
        text: "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
        isCorrect: true,
      },
      {
        id: "q2-a2",
        text: "Нет, операционные системы бывают только для ПК",
      },
      {
        id: "q2-a3",
        text: "Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные",
      },
      {
        id: "q2-a4",
        text: "Это домашняя страничка в настройках вашего браузера",
      },
    ],
  },
  {
    id: 3,
    question: "Что такое процессор компьютера?",
    answers: [
      {
        id: "q3-a1",
        text: "Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки",
      },
      {
        id: "q3-a2",
        text: "Это общее название всех комплектующих компьютера",
      },
      {
        id: "q3-a3",
        text: "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
        isCorrect: true,
      },
      {
        id: "q3-a4",
        text: "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
      },
    ],
  },
  {
    id: 4,
    question: "Какие бывают разрядности у современных процессоров?",
    answers: [
      { id: "q4-a1", text: "32 и 64 бита", isCorrect: true },
      { id: "q4-a2", text: "12 и 32 бита" },
      { id: "q4-a3", text: "15 и 32 бита" },
      { id: "q4-a4", text: "86 и 64 бита" },
    ],
  },
  {
    id: 5,
    question: "Какой тип процессора чаще всего используют мобильные девайсы?",
    answers: [
      {
        id: "q5-a1",
        text: "iOS использует Intel, остальные используют AMD",
      },
      { id: "q5-a2", text: "Чаще всего используют Intel" },
      { id: "q5-a3", text: "Чаще всего используют AMD" },
      { id: "q5-a4", text: "Чаще всего используют ARM", isCorrect: true },
    ],
  },
  {
    id: 6,
    question: "Для чего компьютеру нужна RAM?",
    answers: [
      { id: "q6-a1", text: "Для быстрого доступа к данным", isCorrect: true },
      { id: "q6-a2", text: "Для долгосрочного хранения данных" },
      { id: "q6-a3", text: "Для правильной фрагментации памяти" },
      { id: "q6-a4", text: "Для дефрагментации данных" },
    ],
  },
  {
    id: 7,
    question: "Чем отличается HDD от SSD?",
    answers: [
      {
        id: "q7-a1",
        text: "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее",
      },
      {
        id: "q7-a2",
        text: "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
      },
      {
        id: "q7-a3",
        text: "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
      },
      {
        id: "q7-a4",
        text: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
        isCorrect: true,
      },
    ],
  },
  {
    id: 8,
    question: "Как отличаются между собой USB?",
    answers: [
      { id: "q8-a1", text: "Бывают только USB 2.0 и 3.2" },
      { id: "q8-a2", text: "Бывают только micro-USB и mini-USB" },
      {
        id: "q8-a3",
        text: "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).",
      },
      {
        id: "q8-a4",
        text: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
        isCorrect: true,
      },
    ],
  },
  {
    id: 9,
    question: "Какой файловой системы не существует?",
    answers: [
      { id: "q9-a1", text: "Fat" },
      { id: "q9-a2", text: "NTFS" },
      { id: "q9-a3", text: "APFS" },
      { id: "q9-a4", text: "BolSFS", isCorrect: true },
    ],
  },
];
