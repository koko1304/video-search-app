const React = require("react");
const SearchBar = require("./SearchBar");
const VideosList = require("./VideosList");
const VideoDetail = require("./VideoDetail");
const KEY = "";
const axios = require("axios");

class App extends React.Component {
	state = { videos: [], video: null };

	onSearchSubmit = async searchTerm => {
		const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
			params: {
				part: "snippet",
				maxResults: 5,
				key: KEY,
				type: "video",
				q: searchTerm
			}
		});

		this.setState({ videos: res.data.items, video: res.data.items[0] });
	};

	onVideoClick = video => {
		this.setState({ video });
	};

	onVideoLoading() {
		if (!this.state.videos.length) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="row">
					<div className="col-8">
						<VideoDetail video={this.state.video} />
					</div>
					<div className="col-4">
						<VideosList videos={this.state.videos} onClick={this.onVideoClick} />
					</div>
				</div>
			);
		}
	}

	componentDidMount() {
		this.onSearchSubmit("fortnite");
	}

	render() {
		return (
			<div className="container">
				<h1>Videos Search App</h1>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{this.onVideoLoading()}
			</div>
		);
	}
}

module.exports = App;
