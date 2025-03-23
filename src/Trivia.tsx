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
      question: 'Pon tus conocimientos en práctica, Tú que eres un docente cuyos alumnos suelen entregar las tareas con atrasos, ¿cómo aplicarías la ley de efecto para incrementar la puntualidad de entrega?',
      answerA: 'Una charla de la puntualidad como virtud y establecer fechas y plazos de entrega más largos',
      answerB: 'Otorgar una pequeña calificación adicional o una mención positiva cada vez que sean puntuales',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B. La recompensa (consecuencia positiva) aumenta la probabilidad de que el alumno siga entregando la tarea a tiempo.'
    },
    {
      question: 'Pon tus conocimientos en práctica, Tú eres un docente de Primaria que se ha dado cuenta de que muy pocos niños levantan la mano para participar o responder en clase. ¿Cómo aplicarías la ley de efecto para motivar la conducta de participar?',
      answerA: 'Preguntas directas a aquellos estudiantes que no participan y motivar las actividades del grupo para que todos puedan ser escuchados.',
      answerB: 'Motivar las actividades del grupo, elogiar la participación del niño y reconocer públicamente su esfuerzo.',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B. El elogio (consecuencia satisfactoria) fortalece la conducta, por lo que la estudiante tenderá a levantar la mano y participar un poco más en el futuro.'
    },
    {
      question: 'Pon tus conocimientos en práctica, Trabajas en recursos humanos y necesitas dar solución a la siguiente problemática: algunos empleados olvidan registrar sus horas diarias de trabajo. ¿Cómo aplicarías la ley de efecto para que cumplan con este proceso?',
      answerA: 'Otorgar mensualmente un reconocimiento simbólico (por ejemplo, "Registro Perfecto")',
      answerB: 'Enviar recordatorios masivos',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A. Al recompensar de forma positiva, se fortalece la conducta de registrar puntualmente las horas de trabajo.'
    },
    {
      question: 'Pon tus conocimientos en práctica, Tú eres un docente de Primaria cuyos alumnos están aumentando día con día el número de groserías que escuchas en clase. ¿Cómo aplicarías la ley de efecto para extinguir esta conducta?',
      answerA: 'Reforzar con atención y preguntas a los alumnos justo después de que digan una grosería, para entender su intención',
      answerB: 'Retirarle un privilegio cada vez que emplee un lenguaje ofensivo',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B. El castigo (pérdida de un privilegio) disminuye la probabilidad de que el niño siga usando expresiones ofensivas, al asociarse con una consecuencia negativa inmediata.'
    },
    {
      question: 'Pon tus conocimientos en práctica, trabajas en un programa de salud en el que se busca que los adultos mayores realicen caminatas diarias. ¿Cómo usarías la ley de efecto para incrementar y mantener la rutina de ejercicio?',
      answerA: 'Crear grupos para reconocer los logros semanales (por ejemplo, otorgar un "sello de constancia").',
      answerB: 'Concientización y psicoeducación acerca de los beneficios de las caminatas y enviarles recordatorios constantes sobre los peligros de no hacer ejercicio.',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A. Al otorgar una consecuencia agradable (compañía, reconocimiento público o personal), se incrementa la probabilidad de que el paciente continúe con la conducta de caminar diariamente.'
    },
    {
      question: 'Pon tus conocimientos en práctica, eres una psicóloga organizacional que trabaja en capacitación de personal, durante un curso de capacitación en tu empresa, algunos participantes no participan en los debates grupales. ¿Cómo utilizar la ley de efecto para incrementar su participación?',
      answerA: 'Preguntarles directamente y otorgar retroalimentación positiva a quienes compartan sus ideas en el debate',
      answerB: 'Llamar la atención públicamente a quienes no participan para generar presión grupal.',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A. Reconocer abiertamente las contribuciones valiosas fortalece el deseo de participar, pues recibir retroalimentación positiva actúa como refuerzo.'
    },
    {
      question: 'Pon tus conocimientos en práctica, eres una profesora universitaria dando tu clase teórica en un día regular y un estudiante interrumpe constantemente la clase hablando sin permiso. ¿Cómo aplicarías la ley de efecto para extinguir esta conducta?',
      answerA: 'Reconocer de forma positiva a los alumnos que permanecen en silencio y siguen las reglas.',
      answerB: 'Aplicar una consecuencia negativa inmediata, como quitarle un punto de la calificación de conducta cada vez que interrumpa.',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B. El retiro de puntos actúa como castigo y aumenta la posibilidad de reducir la conducta de interrumpir, pues se asocia a un efecto desfavorable.'
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