import GroceryList from './GroceryList';
import React from 'react';
import ReactDOM from 'react-dom';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import entity from 'rest/interceptor/entity';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {groceries: []};
	}

	componentDidMount() {
	console.log('componentDidMount()');
	    let client = rest
            .chain(mime, { mime: 'application/json' })
            .chain(entity);

		client({method: 'GET', path: '/groceries'}).done(response => {
		    console.log(JSON.stringify(response));
			this.setState({groceries: response._embedded.groceries});
		});
	}

	render() {
	    console.log('render()');
		return (
			<GroceryList groceries={this.state.groceries}/>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)