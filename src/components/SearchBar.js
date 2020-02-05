const React = require("react");

class SearchBar extends React.Component {
	state = { searchTerm: "" };

	onSearchSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<form onSubmit={this.onSearchSubmit}>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Search..." onChange={e => this.setState({ searchTerm: e.target.value })} value={this.state.searchTerm} />
					<div className="input-group-append">
						<span className="input-group-text">
							<i className="fa fa-search" />
						</span>
					</div>
				</div>
			</form>
		);
	}
}

module.exports = SearchBar;
