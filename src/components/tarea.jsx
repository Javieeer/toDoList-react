import '../styles/tarea.css';

const Tarea = ({ tarea, toggleCompletado, eliminarTarea }) => {
    return (
        <li className={tarea.completado ? 'completado' : ''}>
            <p>{tarea.texto}</p>
            <p><strong>Responsable:</strong> {tarea.responsable}</p>
            {tarea.link && (
                <p><a href={tarea.link} target="_blank" rel="noopener noreferrer">Ver enlace</a></p>
            )}
            <p><strong>Fecha de entrega:</strong> {tarea.fechaEntrega}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                    type="checkbox" 
                    checked={tarea.completado} 
                    onChange={() => toggleCompletado(tarea.id)} 
                />
                <span
                    title="Eliminar tarea"
                    style={{
                        cursor: 'pointer',
                        fontSize: '1.3em',
                        userSelect: 'none'
                    }}
                    onClick={() => eliminarTarea(tarea.id)}
                >
                    🗑️
                </span>
            </div>
        </li>
    );
};

export default Tarea;