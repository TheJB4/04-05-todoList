import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Todos({todos}){
    return(
        <ListGroup>
            {!todos || todos.length === 0 && <h2>No hay tareas asignadas</h2>}
            {todos && 
            <div className="ms-3">
                {todos.map((todo,i) => (
                   <>
                    <ListGroup.Item className="d-flex">
                        <p key={i}>{todo.todo}</p>
                        <p>{todo.completed ? '✔' : '❌'}</p>
                        <Button variant="secondary" size="sm" className="ms-4">Editar</Button>{' '}
                    </ListGroup.Item>
                   </>
                ))}
            </div>}
        </ListGroup>
    )
}