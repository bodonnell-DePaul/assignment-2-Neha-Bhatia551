import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TodoList.css'
import ItemCreator from './ItemCreator';
import ItemDisplay from './ItemDisplay';

function TodoList() {
    return (
        <Container>
            <Row>
                <Col><h1 className='header'>Assignment 2: Neha's ToDo List</h1></Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
                <Col sm={4}><ItemCreator/></Col>
                <Col sm={8}><ItemDisplay/></Col>
                
            </Row>
        </Container>
    );

}

export default TodoList;