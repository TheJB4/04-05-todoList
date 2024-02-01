import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SearchTodos from './Components/SearchTodos';
import Todos from './Components/Todos';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
    <Container>
      <Row>
        <Col className='d-flex flex-column align-items-center' lg={12}>
          <h1>Bienvenido</h1>
          <p>Ingresa tus tareas</p>
        </Col>
        <Col className='d-flex flex-column align-items-center' lg={12}>
          <SearchTodos todos={todos} setTodos={setTodos}/>
        </Col>
        <Col className='d-flex flex-column align-items-center mt-3' lg={12}>
          <Todos todos={todos}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
