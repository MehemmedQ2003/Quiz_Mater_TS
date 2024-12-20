import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { questions } from '../data/questions';
import type { QuizResult } from '../types';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(30);
  const [quizResult, setQuizResult] = React.useState<QuizResult | null>(null);
  const [startTime] = React.useState(Date.now());
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswer(-1); // Time's up, wrong answer
    }
  }, [timeLeft, isAnswered]);

  const handleAnswer = (selected: number) => {
    if (isAnswered) return;

    setSelectedAnswer(selected);
    setIsAnswered(true);
    const isCorrect = selected === questions[currentQuestion].correctAnswer;

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setTimeLeft(30);
      } else {
        // Quiz completed
        const endTime = Date.now();
        setQuizResult({
          totalQuestions: questions.length,
          correctAnswers: quizResult ? quizResult.correctAnswers + (isCorrect ? 1 : 0) : isCorrect ? 1 : 0,
          wrongAnswers: quizResult ? quizResult.wrongAnswers + (isCorrect ? 0 : 1) : isCorrect ? 0 : 1,
          timeSpent: Math.floor((endTime - startTime) / 1000),
          answers: []
        });
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(30);
    setQuizResult(null);
  };

  if (quizResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quiz Complete!</h2>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Correct Answers</p>
              <p className="text-2xl font-bold text-green-600">{quizResult.correctAnswers}</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Wrong Answers</p>
              <p className="text-2xl font-bold text-red-600">{quizResult.wrongAnswers}</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Time Spent: {Math.floor(quizResult.timeSpent / 60)}m {quizResult.timeSpent % 60}s
            </p>
            <p className="text-lg text-gray-600">
              Score: {Math.round((quizResult.correctAnswers / questions.length) * 100)}%
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={restartQuiz}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Try Again
            </button>
            <button
              onClick={() => navigate('/categories')}
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
            >
              Choose Another Quiz
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary-600" />
            <span className="text-lg font-medium">Time left: {timeLeft}s</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-1" />
              <span>{quizResult?.correctAnswers || 0}</span>
            </div>
            <div className="flex items-center text-red-600">
              <XCircle className="h-5 w-5 mr-1" />
              <span>{quizResult?.wrongAnswers || 0}</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {questions[currentQuestion].question}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`p-4 text-left rounded-lg border-2 transition-colors ${isAnswered
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'border-green-500 bg-green-50'
                        : index === selectedAnswer
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                      : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <p className="text-gray-700">
                  {questions[currentQuestion].explanation}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-primary-600 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      </div>
    </div>
  );
}