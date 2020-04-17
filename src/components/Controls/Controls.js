import {
	Card,
	Button,
	Container,
	Row,
	InputGroup,
	FormControl,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import React, { Component } from 'react';
//
class Controls extends Component {
	render() {
		return (
			<Container>
				<Row className='justify-content-md-center '>
					<Card className='text-center mt-5' bg='dark' text='light'>
						<Card.Header>TO DO CONTROLS</Card.Header>
						<Card.Body>
							<Card.Title>Add a to do below!</Card.Title>
							<InputGroup size='lg'>
								<FormControl
									ref='input'
									onChange={() => this.props.changed(this.refs.input.value)}
									aria-label='Large'
									aria-describedby='inputGroup-sizing-sm'
									placeholder='Enter a to do'
									id='myInput'
								/>
							</InputGroup>
							<Button
								variant='primary'
								className='mt-3'
								onClick={this.props.onAddPost}
							>
								Post
							</Button>{' '}
						</Card.Body>
					</Card>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		text: state.text,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPost: () => dispatch({ type: actionTypes.ADD_POST }),
		changed: (input) =>
			dispatch({ type: actionTypes.INPUT_CHANGE, value: input }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
