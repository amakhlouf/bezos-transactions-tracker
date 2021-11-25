import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import NavigationBar from './NavigationBar'
import TransactionsList from './TransactionsList'

const TRANSACTIONS_URL = 'https://oaosman84.github.io/statics/mock_transaction_data'

function App() {
	const [transactions, setTransactions] = useState([])
	const [bezosComp, setBezosComp] = useState(["Amazon", "Washington Post", "Whole Foods", "Blue Origin"])

	useEffect(() => {
		fetchTransactions()
	}, [])

	//fetchTransactions
	const fetchTransactions = async () => {
		const res = await fetch(TRANSACTIONS_URL)
		const data = await res.json()
		setTransactions(data)
	}

	//check if transaction is bezos related
	const isBezos = (transaction) => {
		return bezosComp.includes(transaction.merchant_name)
	}

	//add merchant to bezos related companies array
	const addBezos = (transaction) => {
		setBezosComp([...bezosComp, transaction.merchant_name])
	}

	//remove merchant from bezos related companies array
	const removeBezos = (transaction) => {
		setBezosComp(bezosComp.filter(mName => {
			return mName !== transaction.merchant_name
		}))
	}
	
	return (
		<>
			<NavigationBar />
			<TransactionsList 
					transactions={transactions} 
					isBezos={isBezos}
					addBezos={addBezos} 
					removeBezos={removeBezos} 
			/>
		</>
	)
}

export default App
