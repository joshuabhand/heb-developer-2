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
						<th>Last Sold</th>
						<th>Shelf Life</th>
						<th>Department</th>
						<th>Price</th>
						<th>Unit</th>
						<th>xFor</th>
						<th>Cost</th>
					</tr>
					{groceries}
				</tbody>
			</table>
		)
	}
}