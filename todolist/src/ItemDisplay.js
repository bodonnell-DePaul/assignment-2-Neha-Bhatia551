import ListGroup from 'react-bootstrap/ListGroup';
import './ItemDisplay.css'
import itemData from './data.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useState } from 'react';

function ItemDisplay() {

  const [selectedItem, setSelectedItem] = useState(itemData[0]);

  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = Math.abs(dueDateObj - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 7) return 'primary';
    if (diffDays <= 7 && diffDays > 4) return 'success';
    if (diffDays <= 4 && diffDays > 2) return 'warning';
    return 'danger';
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="0">
      <Row>
        <Col sm={4}>
          <ListGroup className="itemdisplay" as="ul">
            {
              itemData.map((data, index) => (
                <ListGroup>
                  <ListGroup.Item key={index} eventKey={data.title}  active={selectedItem.title === data.title} variant={getVariant(data.dueDate)} onClick={() => setSelectedItem(data)}>{data.title}</ListGroup.Item>
                </ListGroup>
              ))
            }
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey={selectedItem.title}>
              <p contentEditable>{selectedItem.description}</p>
              <p><input type="date" value={selectedItem.dueDate} contentEditable /></p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ItemDisplay;