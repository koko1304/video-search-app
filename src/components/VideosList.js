const React = require("react");
const VideosListItem = require("./VideosListItem");

const VideosList = props => {
	const loopVideosListItem = props.videos.map(video => {
		return <VideosListItem onClick={props.onClick} video={video} key={video.id.videoId} />;
	});

	return <ul className="list-group list-group-flush">{loopVideosListItem}</ul>;
};

module.exports = VideosList;
