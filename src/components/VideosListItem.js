const React = require("react");

const VideosListItem = ({ video, onClick }) => {
	return (
		<li onClick={() => onClick(video)} className="list-group-item list-group-item-action" style={{ cursor: "pointer" }}>
			<div className="media">
				<img src={video.snippet.thumbnails.default.url} className="mr-3" alt={video.snippet.title} />
				<div className="media-body">
					<h5 className="mt-0">{video.snippet.title}</h5>
				</div>
			</div>
		</li>
	);
};

module.exports = VideosListItem;
