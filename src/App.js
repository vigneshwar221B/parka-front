import React, { useEffect, useState } from 'react'

import Floor from './components/Floor'
import axios from 'axios'

export default function App() {
	const tot = 16
	var arr = []
	for (var i = 0; i < tot; i++) arr.push({ id: i, val: false })

	const [sarr, setSarr] = useState(arr)

	setInterval(()=>{
		axios
			.get('http://localhost:8080/api/check')
			.then(res => {
				let tempArr = res.data.arr
				console.log(res.data)
				const temp = [...arr]
				tempArr.forEach(e => {
					temp[e].val = true
				})
				setSarr(state => temp)
			})
			.catch(err => {})
	},500)

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/check')
			.then(res => {
				let tempArr = res.data.arr
				console.log(res.data)
				const temp = [...arr]
				tempArr.forEach(e => {
					temp[e].val = true
				})
				setSarr(state => temp)
			})
			.catch(err => {})
	}, [])

	return (
		<>
			<Floor data={sarr} num={1} />
			<Floor data={sarr} num={2} />
		</>
	)
}
