// ✅ Bài 5 & 6 – Quiz trắc nghiệm sử dụng useReducer
// Tính năng: làm bài trắc nghiệm, tính điểm, phản hồi đúng/sai, đếm giờ, tiến trình, lưu điểm cao

import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Trạng thái khởi tạo
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null, // ✅ Phản hồi đúng/sai
  highScore: 0,    // ✅ Điểm cao lưu localStorage
};

// Reducer xử lý các hành động của quiz
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, feedback: null };

    case "NEXT_QUESTION": {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;

      const updatedScore = isCorrect ? state.score + 1 : state.score;

      const isLast = state.currentQuestion + 1 === state.questions.length;

      // Cập nhật điểm cao nếu cao hơn
      const updatedHighScore =
        updatedScore > state.highScore ? updatedScore : state.highScore;
      if (updatedScore > state.highScore) {
        localStorage.setItem("highScore", updatedScore.toString());
      }

      return {
        ...state,
        score: updatedScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: isLast,
        feedback: null,
        highScore: updatedHighScore,
      };
    }

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore, // giữ điểm cao
      };

    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload };

    case "SET_HIGHSCORE":
      return { ...state, highScore: action.payload };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    highScore,
  } = state;

  const [timer, setTimer] = useState(10); // ⏳ Đếm ngược mỗi câu 10s

  // Load điểm cao từ localStorage lúc khởi động
  useEffect(() => {
    const savedHighScore = parseInt(localStorage.getItem("highScore")) || 0;
    dispatch({ type: "SET_HIGHSCORE", payload: savedHighScore });
  }, []);

  // ⏱ Đếm ngược thời gian mỗi câu
  useEffect(() => {
    if (showScore) return;

    if (timer === 0) {
      // Nếu hết giờ mà chưa chọn đáp án => sai
      dispatch({
        type: "SET_FEEDBACK",
        payload: { correct: false, correctAnswer: questions[currentQuestion].answer },
      });

      setTimeout(() => {
        dispatch({ type: "NEXT_QUESTION" });
        setTimer(10);
      }, 1500);

      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, showScore, currentQuestion, questions]);

  // Khi chọn đáp án
  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });

    const correct = option === questions[currentQuestion].answer;

    dispatch({
      type: "SET_FEEDBACK",
      payload: { correct, correctAnswer: questions[currentQuestion].answer },
    });

    setTimeout(() => {
      dispatch({ type: "NEXT_QUESTION" });
      setTimer(10);
    }, 1500);
  };

  // Bắt đầu lại
  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimer(10);
  };

  const progress =
    ((currentQuestion + (showScore ? 1 : 0)) / questions.length) * 100;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        {showScore ? (
          <div className="text-center">
            <h2>
              🎉 Kết quả: {score} / {questions.length}
            </h2>
            <h4>🏆 Điểm cao nhất: {highScore}</h4>
            <Button onClick={handleRestartQuiz} className="mt-3">
              Chơi lại
            </Button>
          </div>
        ) : (
          <div>
            {/* Tiến trình */}
            <div className="mb-2">
              <strong>
                Câu {currentQuestion + 1}/{questions.length}
              </strong>
              <ProgressBar now={progress} className="mt-1" />
            </div>

            {/* Câu hỏi */}
            <h5>{questions[currentQuestion].question}</h5>

            {/* Các lựa chọn */}
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  disabled={!!selectedOption}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Phản hồi đúng/sai */}
            {feedback && (
              <div className="mt-3">
                {feedback.correct ? (
                  <p className="text-success">
                    <FaCheckCircle /> Đúng rồi! 🎉
                  </p>
                ) : (
                  <p className="text-danger">
                    <FaTimesCircle /> Sai rồi! Đáp án đúng là:{" "}
                    <strong>{feedback.correctAnswer}</strong>
                  </p>
                )}
              </div>
            )}

            {/* Đồng hồ đếm ngược */}
            <div className="mt-3">
              <p className={timer <= 5 ? "text-danger fw-bold" : ""}>
                ⏳ Thời gian còn lại: {timer}s
              </p>
            </div>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
