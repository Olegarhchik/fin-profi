import { QUESTION_TYPE } from './names'

type QuestionType = typeof QUESTION_TYPE[keyof typeof QUESTION_TYPE]

type QuizzesQuestions = {
    id_question: number,
    id_quiz: number
}

type UsersQuizzes = {
    id_user: number,
    is_completed: boolean,
    id_quiz: number,
    created_at: string
}

type QuizDTO = {
    name: string,
    id_quiz: number,
    quizes_questions: QuizzesQuestions[],
    users_quizes: UsersQuizzes[]
}

type QuizResponseDTO = {
    quiz: QuizDTO
}

type AnswerDTO = {
    id_question: number,
    answer_text: string,
    id_answer: number,
    is_correct: boolean
}

type QuestionDTO = {
    id_question: number,
    question_text: string,
    question_type: QuestionType,
    answers: AnswerDTO[]
}

type ResultDetailDTO = {
    question: QuestionDTO,
    given_answers: AnswerDTO[],
    correct_answers?: AnswerDTO[]
}

type ResultDTO = {
    right: ResultDetailDTO[],
    wrong: ResultDetailDTO[]
}

type Answer = {
    id: number,
    text: string,
    isCorrect: boolean
}

type Question = {
    id: number,
    text: string,
    type: QuestionType,
    answers: Answer[]
}

type Quiz = {
    id: number,
    name: string,
    questions: ({ id: number } | Question)[],
    isCompleted?: boolean
}

type ResultDetail = {
    question: Question,
    givenAnswers: Answer[],
    correctAnswers?: Answer[]
}

type Result = {
    right: ResultDetail[],
    wrong: ResultDetail[]
}

export type {
    QuestionType,
    QuizResponseDTO,
    QuizDTO,
    Quiz,
    QuestionDTO,
    Question,
    AnswerDTO,
    Answer,
    ResultDetailDTO,
    ResultDetail,
    ResultDTO,
    Result
}