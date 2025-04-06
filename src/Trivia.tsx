import { useState, useEffect, useRef } from 'react'
import { PiArrowFatLinesRight, PiUserCircleCheck, PiTrophy } from "react-icons/pi";

export default function Trivia() {
  // State to track the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // State to store the confirmed selection by user
  const [hasSelected, setHasSelected] = useState('')
  // State to track the option user is considering before confirming
  const [optionSelected, setOptionSelected] = useState('')
  // State to determine if user has answered the current question
  const [hasAnswered, setHasAnswered] = useState(false)
  // State to track user's score
  const [score, setScore] = useState(0)
  // State to check if the quiz is completed
  const [isCompleted, setIsCompleted] = useState(false)

  // References for scrolling
  const questionRef = useRef(null);
  const answerButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Questions data array
  const questions = [
    {
      question: 'El aprendizaje experiencial tiene sus bases en....',
      answerA: 'El aprendizaje experiencial se basa principalmente en el conductismo',
      answerB: 'El aprendizaje experiencial se fundamenta en el constructivismo',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B) Desde la perspectiva constructivista, el conocimiento no se “transmite” de manera pasiva, sino que se va “construyendo” activamente a partir de la interacción con el entorno y la reflexión sobre la propia experiencia.'
    },
    {
      question: 'La experiencia concreta (Se vive una situación o se realiza una actividad específica) es el primer paso dentro del diagrama del aprendizaje experiencial de Kolb, si tú fueras docente universitario ¿cómo aplicarías la experiencia concreta?',
      answerA: 'Iniciando la clase con una lectura teórica detallada del tema, seguida de una explicación magistral para que los estudiantes comprendan bien los conceptos antes de tener cualquier tipo de experiencia',
      answerB: 'Simulaciones o role-playing, recrear situaciones profesionales, por ejemplo, una negociación en clase de negocios o un juicio simulado para estudiantes de Derecho',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B) El objetivo es que el estudiante “viva” de primera mano el contenido, no solo lo escuche o lea.'
    },
    {
      question: 'La observación y reflexión (analizas lo que sucedió en la experiencia, observas de cerca lo que hiciste, cómo te sentiste y qué resultados obtuviste) es el segundo paso dentro del diagrama del aprendizaje experiencial de Kolb, si tú fueras docente universitario ¿cómo aplicarías esta etapa?',
      answerA: 'Después de la experiencia, facilitar un espacio de discusión y preguntar “¿Qué notaron? ¿Qué problemas enfrentaron? ¿Cómo los solucionaron?”',
      answerB: 'Pidiendo a los estudiantes que repitan varias veces la misma actividad hasta que la hagan bien, sin necesidad de detenerse a analizar sus errores',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A) Sin reflexión, el aprendizaje experiencial pierde su profundidad y se vuelve meramente mecánico.'
    },
    {
      question: 'La conceptualización abstracta (Convertir esa observación en aprendizajes o conclusiones más generales) es el tercer paso dentro del diagrama del aprendizaje experiencial de Kolb, si tú fueras docente universitario ¿cómo aplicarías esta etapa?',
      answerA: 'Entregando a los estudiantes un resumen con las conclusiones ya elaboradas por expertos',
      answerB: 'Invitar a los estudiantes a analizar datos o resultados, identificando patrones y posibles explicaciones generales',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B) Aquí los estudiantes entienden “por qué” ocurrió lo que ocurrió, y vinculan la experiencia con conceptos más amplios o abstractos.'
    },
    {
      question: 'La experimentación activa (Poner en práctica lo que aprendiste) es el ultimo paso dentro del diagrama del aprendizaje experiencial de Kolb, si tú fueras docente universitario ¿cómo aplicarías esta etapa?',
      answerA: 'preguntar y reflexionar con el estudiante ¿cómo aplicarías estos conocimientos en tu vida diaria?',
      answerB: 'pedir un ensayo sobre lo que aprendieron, ya que escribir sobre el tema les permitirá demostrar su comprensión',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A)'
    },
    {
      question: 'En el modelo de aprendizaje experiencial de Kolb se proponen cuatro roles docentes (facilitador, experto, evaluador y coach) que el profesor puede asumir para guiar eficazmente el aprendizaje. Si tú fueras un docente y quisieras proporcionar una base teórica y conocimientos especializados a tus alumnos, para después crear un entorno propicio para que los estudiantes se comprometan con la experiencia y animarlos a la participación activa ¿qué roles desempeñarías?',
      answerA: 'El/la Experto(a) y El/la Facilitador(a)',
      answerB: 'El/la Evaluador(a) y El/la Coach',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A)'
    },
    {
      question: 'En el modelo de aprendizaje experiencial de Kolb se proponen cuatro roles docentes (facilitador, experto, evaluador y coach) que el profesor puede asumir para guiar eficazmente el aprendizaje. Si tú fueras un docente que busca establecer criterios claros de rendimiento y ofrecer retroalimentación, para orientar a los estudiantes a aplicar de manera activa lo que han aprendido ¿qué roles desempeñarías?',
      answerA: 'El/la Experto(a) y El/la Facilitador(a)',
      answerB: 'El/la Evaluador(a) y El/la Coach',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B)'
    }
  ];


  // Function to reload the page
  const handleNoThanks = () => {
    window.location.reload();
  };

  // Effect to scroll to question when it changes
  useEffect(() => {
    if (questionRef.current) {
      (questionRef.current as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [currentQuestion]);

  // Effect to scroll to answer button when an option is selected
  useEffect(() => {
    if (optionSelected !== '' && answerButtonRef.current) {
      setTimeout(() => {
        // Verificar nuevamente dentro del timeout
        if (answerButtonRef.current) {
          (answerButtonRef.current as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);
    }
  }, [optionSelected]);

  useEffect(() => {
    if (hasAnswered && nextButtonRef.current) {
      setTimeout(() => {
        if (nextButtonRef.current) {
          (nextButtonRef.current as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100);
    }
  }, [hasAnswered]);

  // Calculate if the current answer is correct
  const isCurrentAnswerCorrect = hasSelected === questions[currentQuestion].correctAnswer;

  // Function to handle answer submission
  const handleAnswer = () => {
    setHasSelected(optionSelected);
    setHasAnswered(true);

    // Update score if answer is correct
    if (optionSelected === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Function to move to next question or complete quiz
  const handleNext = () => {
    // Check if this was the last question
    if (currentQuestion === questions.length - 1) {
      setIsCompleted(true);
    } else {
      // Move to next question and reset states
      setCurrentQuestion(currentQuestion + 1);
      setHasAnswered(false);
      setHasSelected('');
      setOptionSelected('');
    }
  };

  // Function to restart the quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setHasAnswered(false);
    setHasSelected('');
    setOptionSelected('');
    setScore(0);
    setIsCompleted(false);
  };

  // Helper function to determine button style based on selection state
  const getButtonStyle = (option: string) => {
    // If user has not answered yet
    if (!hasAnswered) {
      return optionSelected === option ? 'outline-4 outline-primary' : 'outline-0';
    }

    // If user has answered
    if (hasSelected === option) {
      // Is the selected option correct?
      return option === questions[currentQuestion].correctAnswer
        ? 'outline-4 outline-green-500 bg-green-100'
        : 'outline-4 outline-accent-red bg-red-100';
    }

    // Highlight the correct answer even if not selected
    return option === questions[currentQuestion].correctAnswer
      ? 'outline-4 outline-green-500 bg-green-50'
      : 'outline-0';
  };

  // Render completion screen when quiz is finished
  if (isCompleted) {
    return (
      <section className='w-screen relative overflow-hidden py-8 md:py-12 lg:py-16 border min-h-[100vh] flex flex-col items-center'>
        <div className="container flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24">
          <div className="text-center">
            <PiTrophy className="text-yellow-500 text-8xl mx-auto mb-6 animate-bounce" />
            <h2 className='text-secondary text-center text-2xl md:text-3xl xl:text-4xl font-urbanist font-semibold mb-4'>¡Cuestionario completado!</h2>
            <h3 className='text-secondary text-center text-lg md:text-2xl xl:text-3xl font-urbanist mb-4'>Gracias por contestarlo</h3>
            <p className='text-txt-200 text-lg md:text-xl'>Tu puntuación final:</p>
            <p className='text-primary text-4xl md:text-5xl font-bold my-4'>{score} / {questions.length}</p>
            <p className='text-txt-200 text-lg md:text-xl mb-8'>
              {score === questions.length ? '¡Perfecto! Dominas el tema por completo.' :
                score >= questions.length * 0.7 ? '¡Muy bien! Tienes un buen entendimiento del tema.' :
                  score >= questions.length * 0.5 ? 'Buen intento. Hay algunos conceptos que podrías repasar.' :
                    'Recomendamos revisar los conceptos nuevamente para mejorar tu comprensión.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
              <button
                className="bg-secondary py-4 px-12 hover:scale-110 active:underline transition-all duration-300 rounded-4xl underline-offset-4 cursor-pointer text-white font-semibold font-urbanist text-xl"
                onClick={handleRestart}
              >
                Reintentar cuestionario
              </button>
              <button
                className="bg-gray-200 py-4 px-12 hover:scale-110 active:underline transition-all duration-300 rounded-4xl underline-offset-4 cursor-pointer text-txt-200/50 font-semibold font-urbanist text-xl flex items-center justify-center gap-2"
                onClick={handleNoThanks}
              >
                No, gracias
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='w-screen relative overflow-hidden py-8 md:py-12 lg:py-16 border min-h-[100vh] flex flex-col items-center'>
      <div ref={questionRef} className="container flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24">
        {/* Progress indicator */}
        <div className="w-full flex justify-between items-center px-4 md:px-8">
          <p className="text-txt-200/80 font-urbanist">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
          {/* Removed score display during the quiz */}
        </div>

        {/* Question text with ref for scrolling */}
        <h2
          className='text-secondary text-center text-xl md:text-2xl xl:text-3xl font-urbanist font-semibold'
        >
          {currentQuestion + 1}. {questions[currentQuestion].question}
        </h2>

        {/* Answer options */}
        <div className='flex flex-wrap gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 w-full items-stretch justify-center'>
          {/* Option A button */}
          <button
            className={`bg-white px-8 py-12 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-[400px] xl:max-w-[500px] flex flex-col items-center justify-start gap-6 md:gap-8 lg:gap-12 ${getButtonStyle('a')}`}
            onClick={() => !hasAnswered && setOptionSelected('a')}
            disabled={hasAnswered}
          >
            <h3 className='text-primary text-6xl pt-6 lg:text-7xl font-black animate-[bounce_6s_infinite]'>A</h3>
            <p className='text-txt-200 text-center text-base md:text-lg xl:text-xl font-urbanist font-medium'>
              {questions[currentQuestion].answerA}
            </p>
          </button>

          {/* Option B button */}
          <button
            className={`bg-white px-6 py-12 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-[400px] xl:max-w-[500px] flex flex-col items-center justify-start gap-6 md:gap-8 lg:gap-12 ${getButtonStyle('b')}`}
            onClick={() => !hasAnswered && setOptionSelected('b')}
            disabled={hasAnswered}
          >
            <h3 className='text-primary text-6xl pt-6 lg:text-7xl font-black animate-[bounce_6s_infinite]'>B</h3>
            <p className='text-txt-200 text-center text-base md:text-lg xl:text-xl font-urbanist font-medium'>
              {questions[currentQuestion].answerB}
            </p>
          </button>
        </div>

        {/* Feedback and explanation after answering */}
        {hasAnswered && (
          <div className={`text-txt rounded-2xl font-bold p-6 text-center text-base md:text-lg xl:text-xl font-urbanist ${isCurrentAnswerCorrect ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-accent-red'}`}>
            <p className="mb-2">{isCurrentAnswerCorrect ? '¡Correcto! 🎉' : '¡Incorrecto! 🤔'}</p>
            <p>{questions[currentQuestion].note}</p>
          </div>
        )}

        {/* Answer button with ref for scrolling */}
        {!hasAnswered && (
          <button
            ref={answerButtonRef}
            className={`bg-secondary py-4 px-16 flex gap-4 items-center justify-center hover:scale-110 active:underline transition-all duration-300 rounded-4xl underline-offset-4 cursor-pointer text-white font-bold font-urbanist text-xl ${optionSelected !== '' ? 'visible' : 'invisible'}`}
            onClick={handleAnswer}
          >
            Responder <PiUserCircleCheck />
          </button>
        )}

        {/* Next button */}
        {hasAnswered && (
          <button
            ref={nextButtonRef}
            className={`bg-accent-orange -mt-6 lg:-mt-12 py-4 px-16 hover:scale-110 flex gap-4 items-center justify-center active:underline transition-all duration-300 rounded-4xl underline-offset-4 cursor-pointer text-txt-200 font-bold font-urbanist text-xl`}
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1 ? 'Ver resultados' : 'Siguiente'} <PiArrowFatLinesRight />
          </button>
        )}
      </div>
    </section>
  )
}