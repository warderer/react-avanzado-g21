import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

const FormHook = () => {
  // Paso #1: Crear un objeto con valores iniciales para cada input
  const datos = {
    nombre: '',
    apellido: '',
    color_favorito: '',
    otro: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  }

  // Paso #2: Voy a crear la función que se va a ejecutar cuando haga clic en el botón enviar
  const sendData = (data) => {
    console.log('Datos enviados', data)
  }

  // Paso #3: Uso mi custom Hook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' placeholder='Tu nombre' id='nombre' value={input.nombre} onChange={handleInputChange} />

          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu Apellido' id='apellido' value={input.apellido} onChange={handleInputChange} />

          <label htmlFor='color_favorito'>Color Favorito</label>
          <input type='text' name='color_favorito' placeholder='Tu Color Favorito' id='color_favorito' value={input.color_favorito} onChange={handleInputChange} />

          <label htmlFor='otro'>Otro</label>
          <input type='text' name='otro' placeholder='Tu Otro' id='otro' value={input.otro} onChange={handleInputChange} />

          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Tu edad' id='edad' value={input.edad} onChange={handleInputChange} />

          <label htmlFor='genero'>Genero</label>
          <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' value={input.email} onChange={handleInputChange} autoComplete='username' />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={input.password} onChange={handleInputChange} autoComplete='new-password' />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}
export default FormHook
