import './tarea.css'

const Tarea = ({ tarea, toggleCompletado }) => {
    return (
        <li className={tarea.completado ? 'completado' : ''}>
            <input 
                type="checkbox" 
                checked={tarea.completado} 
                onChange={() => toggleCompletado(tarea.id)} 
            />
            {tarea.texto}
        </li>
    );
};

export default Tarea