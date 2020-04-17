import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.svg';

export default function Header() {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>
					<img
						alt=''
						src={logo}
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					TO DO APP
				</Navbar.Brand>
			</Navbar>
		</div>
	);
}
