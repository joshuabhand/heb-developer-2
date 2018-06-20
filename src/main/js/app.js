import GroceryList from './GroceryList';
import React from 'react';
import ReactDOM from 'react-dom';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import entity from 'rest/interceptor/entity';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {groceries: [], query: ''};
		this.handleSubmit = this.handleSubmit.bind(this);
//		this.getInfo = this.getInfo.bind(this);
	}

	componentDidMount() {
	    let client = rest
            .chain(mime, { mime: 'application/json' })
            .chain(entity);

		client({method: 'GET', path: '/groceries'}).done(response => {
			this.setState({groceries: response._embedded.groceries});
		});
	}

	handleSubmit(event) {
//            this.setState({
//                groceries: this.state.groceries,
//                query: event.currentTarget.item.value});
            event.preventDefault();

//            console.log("what: " + JSON.stringify(event.currentTarget.item.value));
//            console.log("handleSubmit query: " + JSON.stringify(event.current));
//            console.log("handleSubmit state.query: " + JSON.stringify(this.state.query));

            let client = rest
                  .chain(mime, { mime: 'application/json' })
                  .chain(entity);

            if(event.currentTarget.description.value) {
                client({method: 'GET', path: `groceries/search/findByDescription?description=${event.currentTarget.description.value}`}).done(response => {
                    this.setState({groceries: response._embedded.groceries});
                });
            }
            else {
                client({method: 'GET', path: '/groceries'}).done(response => {
                			this.setState({groceries: response._embedded.groceries});
                		});
            }
        }



	render() {
		return (
		    <div>
		        <form onSubmit={this.handleSubmit}>
                     <input
                       name="description"
                       placeholder="Search by description"
                       ref={input => this.search = input}
                     />
                    <input type="submit" value="Search" />
               </form>
			    <GroceryList groceries={this.state.groceries} />
            </div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('react')
)