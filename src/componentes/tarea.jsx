import './tarea.css'

const Tarea = ({ tarea }) => {
    return (
        <li className='listaTareas' >{tarea.texto}</li>
    );
}

export default Tarea