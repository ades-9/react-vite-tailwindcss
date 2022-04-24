import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  

  const [nombre, setNombre] = useState(''); //'nombre' es nombre de la variable, lo que esta en los parentesis es el valor inicial y setNombre es la funcion que modifica la variable 'nombre'
  const [propietario, setPropietario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [sintomas, setSintomas] = useState(''); 

  const [error, setError] = useState(false);

  //useEffect sirve para revisar los cambios en los state para ver si algo cambio o el componente esta listo
  useEffect(()=>{
    if(Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre) 
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = ()=> {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    const customId = random + fecha
    return customId
  }
  
  //Los hooks deben ir antes del return y despues de la funcion que la declara, osea en este sitio que esta el comentario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando form')
  

  //Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    }     
    setError(false)
    // construir un objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id){
      //editando registro
      objetoPaciente.id = paciente.id
      const pacientesactualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesactualizados)
      //limpiar el State
      setPaciente({}) 
      
    }else{
      //nuevo registro
      //console.log(objetoPaciente);
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente]);  
      }
    
    

    //reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }  
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-1 text-center mb-5">Añade Pacientes y <span className="text-indigo-600 font-bold"> Administralos</span></p>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
           {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre mascota</label>
            <input 
              id="mascota"
              type="text" 
              placeholder="Nombre de la mascota"
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400" 
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre del propietario</label>
            <input 
              id="propietario"
              type="text" 
              placeholder="Nombre del propietario"
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400" 
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-bold uppercase">email</label>
            <input 
              id="email"
              type="text" 
              placeholder="Ingrese email"
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400"
              value={email}
              onChange={ (e) => setEmail(e.target.value) } 
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">alta</label>
            <input 
              id="alta"
              type="date" 
              className="border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400" 
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">sintomas</label>
            <textarea 
              id="sintomas"
              placeholder="Describe los sintomas" 
              className="w-full border-2 rounded-md p-2 mt-2 placeholder-gray-400" 
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>
          <div>
            <input 
              type="submit" 
              className={ paciente.id ? "w-full p-3 text-white font-bold bg-green-600 uppercase hover:bg-indigo-800 cursor-pointer transition-colors" : "w-full p-3 text-white font-bold bg-indigo-600 uppercase hover:bg-indigo-800 cursor-pointer transition-colors"}
              value= { paciente.id ? 'Editar paciente' : 'Agregar paciente'} 
            />
          </div>
        </form>
    </div>
  )
}

export default Formulario