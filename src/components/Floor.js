import React from 'react'
import Paper from '@material-ui/core/Paper'

const Floor = props => {
	const { data, num } = props

	let start = 8 * (num - 1)
	let end = 8 * num

	let arr = [...data]

	arr = arr.slice(start, end)
	console.log(arr)
	return (
		<div {...props.style} style={{ borderWidth: '4pt', borderColor: 'blue' }}>
			<Paper>
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{arr.map((e, i) => (
						<Paper
							id={e.id}
							style={{
								width: '24%',
								marginRight: '0 1%',
								color: 'white',
								backgroundColor: e.val === false ? 'green' : 'red',
								textAlign: 'center',
							}}
							key={e.id}
						>
						<p>{e.id}</p>
         
						</Paper>
					))}
				</div>
			</Paper>
		</div>
	)
}
export default Floor
