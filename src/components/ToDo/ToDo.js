import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';

export default function ToDo(props) {
	return (
		<Container onClick={props.clicked}>
			<Row className='justify-content-md-center mt-4'>
				<Card bg='dark' key='' text='light' style={{ width: '18rem' }}>
					<Card.Header>Another To Do</Card.Header>
					<Card.Body>
						<Card.Text>{props.data}</Card.Text>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}
