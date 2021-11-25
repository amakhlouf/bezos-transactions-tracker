import React from 'react'
import { Table, Button, Badge, Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'


function TransactionsList({ transactions, isBezos, addBezos, removeBezos }) {
	var total = 0
	var totalToBezos = 0

	const addToTotal = (transaction) => {
		total+=transaction.amount
		if(isBezos(transaction))
			totalToBezos+=transaction.amount
	}

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Merchant</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Category</th>
						<th>Bezos Free</th>
					</tr>
				</thead>
				<tbody>{transactions.map(transaction => (
					<tr>
						{addToTotal(transaction)}
						<td>{transaction.id}</td>
						<td>{transaction.merchant_name}</td>
						<td>${transaction.amount}</td>
						<td>{transaction.date}</td>
						<td>{transaction.category.map((category) => (
							<>
								<Badge>{category}</Badge>{' '}
							</>
						))}</td>
						<td>{
							isBezos(transaction) ? 
								<Container>
									<Row>
										<Col>
											<h5><Badge bg='danger' >No</Badge></h5>
										</Col>
										<Col>
											<Button size='sm' variant='dark' onClick={(e) => {removeBezos(transaction)}} >Remove</Button>
										</Col>
									</Row>
								</Container> : 
								<Container>
									<Row>
										<Col>
											<h5><Badge bg='success' >Yes</Badge></h5>
										</Col>
										<Col>
											<Button size='sm' variant='dark' onClick={(e) => {addBezos(transaction)}}>Add</Button>
										</Col>
									</Row>
								</Container>
						}</td>
					</tr>
				))}</tbody>
			</Table>
			<div className='bg-dark text-white'>
				<Container>
					<Row><p>{' '}</p></Row>
					<ProgressBar 
						now={(totalToBezos*100/total).toFixed(2)}
						label={`${(totalToBezos*100/total).toFixed(2)}%`}
						variant='danger'
					/>
					<Row>
						<Col><h2>Bezos Related Transactions: ${totalToBezos.toFixed(2)}</h2></Col>
						<Col><h1>Total Transactions: ${total.toFixed(2)}</h1></Col>
					</Row>
				</Container>
			</div>
			
		</>
	)
}

export default TransactionsList
