import { useState } from 'react'
import { PiArrowFatLinesRight, PiUserCircleCheck } from "react-icons/pi";

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [hasSelected, setHasSelected] = useState('')
  const [optionSelected, setOptionSelected] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)

  const questions = [
    {

      question: 'Tú que eres un docente cuyos alumnos suelen entregar las tareas con atrasos, ¿cómo aplicarías la ley de efecto para incrementar la puntualidad de entrega?',
      answerA: 'Una charla de la puntualidad como virtud y establecer fechas y plazos de entrega más largos',
      answerB: 'Otorgar una pequeña calificación adicional o una mención positiva cada vez que sean puntuales',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B. La recompensa (consecuencia positiva) aumenta la probabilidad de que el alumno siga entregando la tarea a tiempo.'
    },
    {

      question: 'Tú eres un docente de Primaria que se ha dado cuenta de que muy pocos niños levantan la mano para participar o responder en clase. ¿Cómo aplicarías la ley de efecto para motivar la conducta de participar?',
      answerA: 'Preguntas directas a aquellos estudiantes que no participan y motivar las actividades del grupo para que todos puedan ser escuchados.',
      answerB: 'Motivar las actividades del grupo, elogiar la participación del niño y reconocer públicamente su esfuerzo.',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B. El elogio (consecuencia satisfactoria) fortalece la conducta, por lo que la estudiante tenderá a levantar la mano y participar un poco más en el futuro.'
    },
    {

      question: 'Pon tus conocimientos en práctica, Trabajas en recursos humanos y necesitas dar solución a la siguiente problemática: algunos empleados olvidan registrar sus horas diarias de trabajo. ¿Cómo aplicarías la ley de efecto para que cumplan con este proceso?',
      answerA: 'Otorgar mensualmente un reconocimiento simbólico (por ejemplo, “Registro Perfecto”)',
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
      answerA: 'Crear grupos para reconocer los logros semanales (por ejemplo, otorgar un “sello de constancia”).',
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


  return (
    <section className=' w-screen relative overflow-hidden py-8 md:py-12 lg:py-16 border min-h-[100vh] flex flex-col items-center'>
      <div className="container flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24">
        <h2 className='text-secondary text-center text-xl md:text-2xl xl:text-3xl font-urbanist font-semibold'>{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
        <div className='flex flex-wrap gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 w-full items-stretch  justify-center'>

          <button className={`bg-white px-8 py-12 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300  w-full max-w-[400px] xl:max-w-[500px] flex flex-col items-center justify-start gap-6 md:gap-8 lg:gap-12 ${optionSelected === questions[currentQuestion].correctAnswer ? ' outline-green-500' : ' outline-accent-red'} ${hasSelected === 'a' ? ' outline-4 ' : ' outline-0'} ${optionSelected === 'a' && hasSelected === '' ? ' outline-4 outline-primary' : ' outline-0'}`} onClick={() => setOptionSelected('a')}>
            <h3 className='text-primary text-6xl pt-6 lg:text-7xl font-black animate-[bounce_6s_infinite]'>A</h3>
            <p className='text-txt-200 text-center text-base md:text-lg xl:text-xl font-urbanist font-medium'>{questions[currentQuestion].answerA}</p>
          </button>

          <button className={`bg-white px-6 py-12 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300  w-full max-w-[400px] xl:max-w-[500px] flex flex-col items-center justify-start gap-6 md:gap-8 lg:gap-12 ${optionSelected === questions[currentQuestion].correctAnswer ? ' outline-green-500' : ' outline-accent-red'} ${hasSelected === 'b' ? ' outline-4' : ' outline-0'} ${optionSelected === 'b' && hasSelected === '' ? ' outline-4 outline-primary' : ' outline-0'}`} onClick={() => setOptionSelected('b')}>
            <h3 className='text-primary text-6xl pt-6 lg:text-7xl font-black animate-[bounce_6s_infinite]'>B</h3>
            <p className='text-txt-200 text-center text-base md:text-lg xl:text-xl font-urbanist font-medium'>{questions[currentQuestion].answerB}</p>
          </button>
        </div>
        {hasAnswered &&
          <p className='text-txt bg-primary/40 rounded-2xl font-bold p-6 text-center text-base md:text-lg xl:text-xl font-urbanist'>{questions[currentQuestion].note}</p>
        }
        {hasAnswered === false &&
          <button className={`bg-secondary py-4 px-12 flex gap-4 items-center justify-center hover:scale-110 active:underline transition-all duration-300 rounded-4xl underline-offset-4 cursor-pointer text-white font-semibold font-urbanist text-2xl ${optionSelected !== '' ? ' visible' : 'invisible'}`} onClick={() => {
            setHasSelected(optionSelected)
            setHasAnswered(true)
          }} >Responder <PiUserCircleCheck /></button>
        }

        {hasAnswered && <button className={`bg-accent-orange -mt-6 lg:-mt-12 py-4 px-12 hover:scale-110 flex gap-4 items-center justify-center active:underline transition-all duration-300 rounded-4xl underline-offset-4 cursor-pointer text-txt-200 font-semibold font-urbanist text-2xl`} onClick={() => {
          setCurrentQuestion(currentQuestion + 1)
          setHasAnswered(false)
          setHasSelected('')
          setOptionSelected('')
        }}>Siguiente <PiArrowFatLinesRight /></button>}
      </div>
    </section >

  )
}
