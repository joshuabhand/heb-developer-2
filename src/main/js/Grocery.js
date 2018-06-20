import React from 'react';

export default class Grocery extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.grocery.id}</td>
				<td>{this.props.grocery.description}</td>
			</tr>
		)
	}
}