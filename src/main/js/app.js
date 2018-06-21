import GroceryList from './GroceryList';
import React from 'react';
import ReactDOM from 'react-dom';
import rest from 'rest';
import mime from 'rest/interceptor/mime';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {groceries: [], query: '', departmentQuery: '', descriptionQuery: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputDepartment = this.handleInputDepartment.bind(this);
		this.handleInputDescription = this.handleInputDescription.bind(this);
	}

	componentDidMount() {
        let client = rest.wrap(mime, { mime: 'application/json' });

		client({method: 'GET', path: '/groceries'}).done(response => {
			this.setState({groceries: response.entity._embedded.groceries});
		});
	}

	handleInputDescription(event) {
	    this.setState({descriptionQuery: event.target.value, departmentQuery: ''});
	}

	handleInputDepartment(event) {
	    this.setState({departmentQuery: event.target.value, descriptionQuery: ''});
	}

	handleSubmit(event) {
            event.preventDefault();

            let client = rest.wrap(mime, { mime: 'application/json' });

            if(this.state.descriptionQuery) {
                client({method: 'GET', path: `groceries/search/findByDescription?description=${this.state.descriptionQuery}`}).done(response => {
                    this.setState({groceries: response.entity._embedded.groceries});
                });
            }
            else if(this.state.departmentQuery) {
                 client({method: 'GET', path: `groceries/search/findByDepartment?department=${this.state.departmentQuery}`}).done(response => {
                     this.setState({groceries: response.entity._embedded.groceries});
                 });
             }
            else {
                client({method: 'GET', path: '/groceries'}).done(response => {
                    this.setState({groceries: response.entity._embedded.groceries});
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
                       value={this.state.descriptionQuery}
                       onChange={this.handleInputDescription}
                     />
                     <input
                        name="department"
                        placeholder="Search by department"
                        value={this.state.departmentQuery}
                        onChange={this.handleInputDepartment}
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