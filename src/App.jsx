import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([]); //en pacientes se almacena la lista de los pacientes
  const [paciente, setPaciente] = useState({}) //su valor incial va a ser un objeto vacio, cada paciente es un objeto
  
  //Obtener lo que hay en el localstorage
  // useEffect( () => {
  //   const obtenerLS = ()=>{
  //     const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
  // }, []);

  useEffect( () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS)
  }, []);
  
  //agregando datos al localStorage
  useEffect( ()=> {
    localStorage.setItem("pacientes", JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          propPacientes={pacientes}
          setPaciente={setPaciente} 
          propEliminarPaciente={eliminarPaciente}
        /> 
      </div>
       
    </div>
  )
}
export default App
