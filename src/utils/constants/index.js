export const QUESTIONS = [
  {
    questionText: "What is the capital of France?",

    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText:
      "Каким образом в React можно передавать данные от родительского компонента к дочернему?",

    answerOptions: [
      { answerText: "Через метод setState()", isCorrect: false },
      { answerText: "Через глобальную переменную window.", isCorrect: false },
      { answerText: "Через контекст (context) React", isCorrect: false },
      { answerText: "Через свойство (prop)", isCorrect: true },
    ],
  },
  {
    questionText: "Почему необходимо использовать key в списках?",

    answerOptions: [
      {
        answerText:
          "Определение изменений, добавлений и удалений элементов списка для оптимизации рендеринга.",
        isCorrect: true,
      },
      {
        answerText: "Обозначение уровня вложенности элементов списка.",
        isCorrect: false,
      },
      {
        answerText: "Задание стилей для элементов списка.",
        isCorrect: false,
      },
      {
        answerText: " Установка порядка отображения элементов в списке.",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Какой хук React используется для добавления состояния в функциональные компоненты?",

    answerOptions: [
      { answerText: "useReducer()", isCorrect: false },
      { answerText: "useEffect()", isCorrect: false },
      { answerText: "useContext()", isCorrect: false },
      { answerText: "useState()", isCorrect: true },
    ],
  },
];
