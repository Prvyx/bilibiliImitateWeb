import React, {Component} from 'react';
import ReactPlayer from "react-player/lazy";
import qs from 'querystring'

class PlayerBlock extends Component {
    render() {
        const {search}=this.props
        let params=(search!==undefined)?search.slice(1):this.props.location.search.slice(1)
        if(params===''){
            params='p=1'
        }
        const p=qs.parse(params).p

        const {pathname}=this.props.location

        // const search=this.props.search.slice(1)
        // const p=search!==''?qs.parse(search).p:'1'
        // const {search}=this.props.location||null
        // console.log(search)
        // const {p}=qs.parse(search.slice(1))
        let url=`/static/video/${pathname.slice(7)}/${p}.mp4`
        // console.log('url:',url)
        // console.log(qs.parse(this.props.location.search))
        return (
            <ReactPlayer
                width={`97%`}
                height={380}
                url={url}
                controls={true}
            />
        );
    }
}

export default PlayerBlock;