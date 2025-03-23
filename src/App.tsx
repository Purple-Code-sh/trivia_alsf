import { useState } from 'react'
import Trivia from './Trivia'
import heroPerson from './assets/heroPerson.png'

const GOOGLE_ENDPOINT = import.meta.env.VITE_GOOGLE_ENDPOINT;

function App() {
  const [hasStarted, setHasStarted] = useState(false)

  // Estado para el campo de nombre
  const [name, setName] = useState<string>('');

  // Estado para errores y mensajes generales
  const [errors, setErrors] = useState<{ name?: string }>({});
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Manejo del envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reiniciamos los errores
    const newErrors: { name?: string } = {};

    // Validación del nombre
    if (!name.trim()) {
      newErrors.name = "Introduce un nombre válido";
    }

    // Si hay errores, los mostramos y detenemos el envío
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Limpiamos errores y procedemos al envío
    setErrors({});
    setIsSubmitting(true);
    setStatusMessage('');

    // Preparamos los datos para enviar
    const formData = new URLSearchParams();
    formData.append('name', name);

    try {
      const response = await fetch(GOOGLE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        setStatusMessage("Formulario enviado correctamente");
        // Reiniciamos el formulario
        setName('');
      } else {
        setStatusMessage("Error al enviar el formulario");
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setStatusMessage("Error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
      setHasStarted(true)
    }
  };

  return (
    <>
      {hasStarted ? (
        <Trivia />
      ) : (
        <section className=' w-screen relative overflow-hidden min-h-[100vh] flex flex-col items-center justify-center'>

          <div className="absolute bottom-32 -left-64 -z-10 w-md h-1/2 animate-pulse rounded-full bg-gradient-to-tr from-background via-pink-300 to-primary opacity-40 blur-3xl" />
          <div className="absolute top-28 -right-28 lg:right-28 xl:right-72 -z-10 w-80 h-80 animate-pulse rounded-full bg-gradient-to-tr from-background via-primary to-secondary opacity-40 blur-3xl" />

          <div className='container flex flex-col lg:flex-row py-6 mx-auto gap-0'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8 sm:gap-16'>
              <h1 className='text-secondary mb-2 lg:mb-4 xl:mb-6 text-center leading-20 lg:text-left font-playwrite font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl'>
                Ley del <span className='text-accent-orange'>Efecto</span>
              </h1>

              <h2 className='text-light-300 text-center lg:text-left font-semibold text-2xl md:text-3xl lg:text-4xl'>
                <span className='text-primary'>UNAM. Facultad de Psicología<br /> Andrea Lizzet S. F.</span>
              </h2>

              <h2 className='max-w-[420px] text-center lg:text-left md:max-w-[500px] lg:max-w-[600px] text-base md:text-lg xl:text-xl self-center lg:self-start'>
                Este es un cuestionario en el que pones a prueba tus conocimientos sobre la ley del efecto.<br /> Tomalo con calma y no te preocupes por las respuestas correctas o incorrectas. Solo diviertete 😄
              </h2>

              <div className="w-full mx-auto   backdrop-blur-sm rounded-3xl">
                {statusMessage && <div className="mb-4 text-center">{statusMessage}</div>}
                <form onSubmit={handleSubmit} noValidate className='gap-4 lg:gap-6 w-full flex flex-col justify-center items-center lg:items-start'>
                  {/* Nombre */}
                  <div className='w-full max-w-[460px] lg:max-w-full lg:w-3/4'>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      placeholder="Introduce tu nombre"
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full p-3 bg-background inset-shadow-sm text-black focus:ring-0 focus:outline-2 outline-primary  inset-shadow-dark-300/70 border rounded-xl ${errors.name ? 'border-red-500' : 'border-zinc-400'}`}
                      required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary w-full max-w-[460px] lg:max-w-full lg:w-1/2 text-white font-bold underline-offset-4 cursor-pointer font-urbanist text-xl p-4 rounded-2xl  hover:scale-105 transition-all duration-300 active:underline active:scale-105 flex gap-2 items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Iniciando...
                      </>
                    ) : (
                      "Comenzar"
                    )}
                  </button>
                </form>
              </div>


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
