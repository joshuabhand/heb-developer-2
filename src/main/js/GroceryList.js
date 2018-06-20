import Grocery from './Grocery';
import React from 'react';

export default class GroceryList extends React.Component{
	render() {
		var groceries = this.props.groceries.map(grocery =>
			<Grocery key={grocery._links.self.href} grocery={grocery}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>ID</th>
						<th>Description</th>
					</tr>
					{groceries}
				</tbody>
			</table>
		)
	}
}