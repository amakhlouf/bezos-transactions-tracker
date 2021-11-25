import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavigationBar() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/"><h1>Bezos Transaction Tracker</h1></Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavigationBar
