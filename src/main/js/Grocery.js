import React from 'react';

export default class Grocery extends React.Component{
	render() {
	    //getting id workaround
	    var str = this.props.grocery._links.self.href;
        let res = str.split("/");
        let result = res[res.length - 1];

		return (
			<tr>
				<td>{result}</td>
				<td>{this.props.grocery.description}</td>
				<td>{this.props.grocery.lastSold}</td>
				<td>{this.props.grocery.shelfLife}</td>
				<td>{this.props.grocery.department}</td>
				<td>{this.props.grocery.price}</td>
				<td>{this.props.grocery.unit}</td>
				<td>{this.props.grocery.xFor}</td>
				<td>{this.props.grocery.cost}</td>

			</tr>
		)
	}
}