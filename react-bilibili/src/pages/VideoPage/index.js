import React, {Component} from 'react';
import Video from "../../components/Video";

class VideoPage extends Component {
    render() {
        return (
            <Video location={this.props.location}/>
        );
    }
}

export default VideoPage;