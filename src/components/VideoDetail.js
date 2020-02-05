const React = require("react");

const VideoDetail = ({ video }) => {
	return (
		<div className="card">
			<iframe
				style={{ width: "100%", height: "350px" }}
				src={`https://www.youtube.com/embed/${video.id.videoId}`}
				frameBorder="0"
				allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={video.snippet.title}
			/>
			<div className="card-body">
				<h5 className="card-title">{video.snippet.title}</h5>
				<p className="card-text">{video.snippet.description}</p>
			</div>
		</div>
	);
};

module.exports = VideoDetail;
