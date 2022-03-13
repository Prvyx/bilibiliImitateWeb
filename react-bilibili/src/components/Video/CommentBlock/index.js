import React, {Component} from 'react';
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";

class CommentBlock extends Component {
    render() {
        return (
            <div style={{marginLeft:110,marginTop:20 ,width: 600}}>
                <AddComment/>
                <ShowComment/>
            </div>
        );
    }
}

export default CommentBlock;