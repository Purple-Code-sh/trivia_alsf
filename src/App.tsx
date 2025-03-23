import { useState } from 'react'
import Trivia from './Trivia'
import heroPerson from './assets/heroPerson.png'

function App() {
  const [hasStarted, setHasStarted] = useState(false)

  return (
    <>
      {hasStarted ? (
        <Trivia />
      ) : (
        <section className=' w-screen relative overflow-hidden min-h-[100vh] flex flex-col items-center justify-center'>

          <div className="absolute bottom-32 -left-64 -z-10 w-md h-1/2 animate-pulse rounded-full bg-gradient-to-tr from-background via-pink-300 to-primary opacity-40 blur-3xl" />
          <div className="absolute top-28 -right-28 lg:right-28 xl:right-72 -z-10 w-80 h-80 animate-pulse rounded-full bg-gradient-to-tr from-background via-primary to-secondary opacity-40 blur-3xl" />

          <div className='container flex flex-col lg:flex-row py-6 mx-auto gap-8'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8 sm:gap-16'>
              <h1 className='text-secondary mb-2 lg:mb-4 xl:mb-6 text-center leading-20 lg:text-left font-playwrite font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl'>
                Ley del <span className='text-accent-orange'>Efecto</span>
              </h1>

              <h2 className='text-light-300 text-center lg:text-left font-semibold text-2xl md:text-3xl lg:text-4xl'>
                <span className='text-primary'>Facultad de Psicología <br /> UNAM <br /> Andrea Lizzet S. F.</span>
              </h2>

              <h2 className='max-w-[420px] text-center lg:text-left md:max-w-[500px] lg:max-w-[600px] text-base md:text-lg xl:text-xl self-center lg:self-start'>
                Este es un cuestionario en el que pones a prueba tus conocimientos sobre la ley del efecto.<br /> Tomalo con calma y no te preocupes por las respuestas correctas o incorrectas. Solo diviertete 😄
              </h2>

              <button
                className="bg-secondary w-full max-w-[460px] lg:max-w-full lg:w-1/2 text-white font-semibold underline-offset-4 cursor-pointer font-urbanist text-2xl p-4 rounded-4xl  hover:scale-105 transition-all duration-300 active:underline active:scale-105"
                onClick={() => setHasStarted(true)}
              >
                Comenzar
              </button>
            </div>

            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>

              <img src={heroPerson} alt="hero_bg" className=" w-full h-auto object-fit" />

            </div>

          </div>
        </section>

      )}
    </>
  )
}

export default App
