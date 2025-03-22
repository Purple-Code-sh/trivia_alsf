import { useState, useEffect } from 'react'

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [hasSelected, setHasSelected] = useState(false)
  const [optionSelected, setOptionSelected] = useState(0)

  const questions = [
    {
      id: 1,
      question: 'Tú que eres un docente cuyos alumnos suelen entregar las tareas con atrasos, ¿cómo aplicarías la ley de efecto para incrementar la puntualidad de entrega?',
      answerA: 'Una charla de la puntualidad como virtud y establecer fechas y plazos de entrega más largos',
      answerB: 'Otorgar una pequeña calificación adicional o una mención positiva cada vez que sean puntuales',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B) La recompensa (consecuencia positiva) aumenta la probabilidad de que el alumno siga entregando la tarea a tiempo.'
    },
    {
      id: 2,
      question: 'Tú eres un docente de Primaria que se ha dado cuenta de que muy pocos niños levantan la mano para participar o responder en clase. ¿Cómo aplicarías la ley de efecto para motivar la conducta de participar?',
      answerA: 'Preguntas directas a aquellos estudiantes que no participan y motivar las actividades del grupo para que todos puedan ser escuchados.',
      answerB: 'Motivar las actividades del grupo, elogiar la participación del niño y reconocer públicamente su esfuerzo.',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B)El elogio (consecuencia satisfactoria) fortalece la conducta, por lo que la estudiante tenderá a levantar la mano y participar un poco más en el futuro.'
    },
    {
      id: 3,
      question: 'Pon tus conocimientos en práctica, Trabajas en recursos humanos y necesitas dar solución a la siguiente problemática: algunos empleados olvidan registrar sus horas diarias de trabajo. ¿Cómo aplicarías la ley de efecto para que cumplan con este proceso?',
      answerA: 'Otorgar mensualmente un reconocimiento simbólico (por ejemplo, “Registro Perfecto”)',
      answerB: 'Enviar recordatorios masivos',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A) Al recompensar de forma positiva, se fortalece la conducta de registrar puntualmente las horas de trabajo.'
    },
    {
      id: 4,
      question: 'Pon tus conocimientos en práctica, Tú eres un docente de Primaria cuyos alumnos están aumentando día con día el número de groserías que escuchas en clase. ¿Cómo aplicarías la ley de efecto para extinguir esta conducta?',
      answerA: 'Reforzar con atención y preguntas a los alumnos justo después de que digan una grosería, para entender su intención',
      answerB: 'Retirarle un privilegio cada vez que emplee un lenguaje ofensivo',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B) El castigo (pérdida de un privilegio) disminuye la probabilidad de que el niño siga usando expresiones ofensivas, al asociarse con una consecuencia negativa inmediata.'
    },
    {
      id: 5,
      question: 'Pon tus conocimientos en práctica, trabajas en un programa de salud en el que se busca que los adultos mayores realicen caminatas diarias. ¿Cómo usarías la ley de efecto para incrementar y mantener la rutina de ejercicio?',
      answerA: 'Crear grupos para reconocer los logros semanales (por ejemplo, otorgar un “sello de constancia”).',
      answerB: 'Concientización y psicoeducación acerca de los beneficios de las caminatas y enviarles recordatorios constantes sobre los peligros de no hacer ejercicio.',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A) Al otorgar una consecuencia agradable (compañía, reconocimiento público o personal), se incrementa la probabilidad de que el paciente continúe con la conducta de caminar diariamente.'
    },
    {
      id: 6,
      question: 'Pon tus conocimientos en práctica, eres una psicóloga organizacional que trabaja en capacitación de personal, durante un curso de capacitación en tu empresa, algunos participantes no participan en los debates grupales. ¿Cómo utilizar la ley de efecto para incrementar su participación?',
      answerA: 'Preguntarles directamente y otorgar retroalimentación positiva a quienes compartan sus ideas en el debate',
      answerB: 'Llamar la atención públicamente a quienes no participan para generar presión grupal.',
      correctAnswer: 'a',
      note: 'La respuesta correcta es A) Reconocer abiertamente las contribuciones valiosas fortalece el deseo de participar, pues recibir retroalimentación positiva actúa como refuerzo.'
    },
    {
      id: 7,
      question: 'Pon tus conocimientos en práctica, eres una profesora universitaria dando tu clase teórica en un día regular y un estudiante interrumpe constantemente la clase hablando sin permiso. ¿Cómo aplicarías la ley de efecto para extinguir esta conducta?',
      answerA: 'Reconocer de forma positiva a los alumnos que permanecen en silencio y siguen las reglas.',
      answerB: 'Aplicar una consecuencia negativa inmediata, como quitarle un punto de la calificación de conducta cada vez que interrumpa.',
      correctAnswer: 'b',
      note: 'La respuesta correcta es B) El retiro de puntos actúa como castigo y aumenta la posibilidad de reducir la conducta de interrumpir, pues se asocia a un efecto desfavorable.'
    }
  ];


  useEffect(() => {
    if (hasSelected) {
      setCurrentQuestion(currentQuestion + 1)
      setHasSelected(false)
    }
  }, [hasSelected, currentQuestion])

  return (


    <section className=' w-screen relative overflow-hidden py-12 md:py-16 lg:py-20 border min-h-[100vh] flex flex-col items-center'>
      <div className="container bg-zinc-200 ">
        trivia text
      </div>
    </section>

  )
}
