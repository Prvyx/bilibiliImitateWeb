import logo from './logo.svg';
import React,{ useState } from "react";
import './App.less';
import 'antd/dist/antd.less';
import { Layout ,Affix,Button} from 'antd';
import {Redirect, Route, Switch} from "react-router-dom";

// 自定义一般组件
import TopMenu from "./components/TopMenu";
import Catalog from "./components/Catalog";

// 自定义路由组件
import Index from './pages/Index'
import Anime from "./pages/Section/Anime";
import Live from "./pages/Section/Live";
import Game from "./pages/Section/Game";
import Cartoon from "./pages/Section/Cartoon";
import Competition from "./pages/Section/Competition";
import Vip_purchase from "./pages/Section/Vip_purchase";
import Vip from "./pages/Section/Vip";
import Message from "./pages/Section/Message";
import Dynamic from "./pages/Section/Dynamic";
import Favorite from "./pages/Section/Favorite";
import History from "./pages/Section/History";
import Writing_center from "./pages/Section/Writing_center";
import Upload from "./pages/Section/Upload";
import Guochuang from "./pages/Section/CatalogSection/Guochuang";
import Variety from "./pages/Section/CatalogSection/Variety";
import Documentary from "./pages/Section/CatalogSection/Documentary";
import Ent from './pages/Section/CatalogSection/Ent'
import Tech from "./pages/Section/CatalogSection/Tech";
import Foods from "./pages/Section/Foods";
import Movie from "./pages/Section/CatalogSection/Documentary/Movie";
import Music from "./pages/Section/Music";
import Kichiku from "./pages/Section/Kichiku";
import Tv from "./pages/Section/CatalogSection/Tv";
import Cinephile from './pages/Section/CatalogSection/Cinephile'
import Knowledge from "./pages/Section/Knowledge";
import Information from "./pages/Section/CatalogSection/Information";
import More from "./pages/Section/CatalogSection/More";
import Dance from './pages/Section/Dance'
import VideoPage from "./pages/VideoPage";
import SpacePage from "./pages/SpacePage";
const { Footer } = Layout;


function App() {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <div>
        <TopMenu/>

        {/*注册路由*/}
        <Switch>
            <Route path={`/anime`} component={Anime}/>
            <Route path={`/live`} component={Live}/>
            <Route path={`/game`} component={Game}/>
            <Route path={`/cartoon`} component={Cartoon}/>
            <Route path={`/competition`} component={Competition}/>
            <Route path={`/vip_purchase`} component={Vip_purchase}/>
            <Route path={`/vip`} component={Vip}/>
            <Route path={`/message`} component={Message}/>
            <Route path={`/dynamic`} component={Dynamic}/>
            <Route path={`/favorite`} component={Favorite}/>
            <Route path={`/history`} component={History}/>
            <Route path={`/writing_center`} component={Writing_center}/>
            <Route path={`/upload`} component={Upload}/>

            <Route path={`/guochuang`} component={Guochuang}/>
            <Route path={`/variety`} component={Variety}/>
            <Route path={`/documentary`} component={Documentary}/>
            <Route path={`/ent`} component={Ent}/>
            <Route path={`/dance`} component={Dance}/>
            <Route path={`/tech`} component={Tech}/>
            <Route path={`/movie`} component={Movie}/>
            <Route path={`/music`} component={Music}/>
            <Route path={`/kichiku`} component={Kichiku}/>
            <Route path={`/tv`} component={Tv}/>
            <Route path={`/cinephile`} component={Cinephile}/>
            <Route path={`/knowledge`} component={Knowledge}/>
            <Route path={`/information`} component={Information}/>
            <Route path={`/more`} component={More}/>
            <Route path={`/foods`} component={Foods}/>
            <Route path={`/video`} component={VideoPage} />

            {/*个人空间*/}
            <Route path={`/space/:user_id`} component={SpacePage}/>
            <Route path={`/`} component={Index}/>
            <Redirect to={`/`}/>
        </Switch>

        <Footer>本站点是简易版小破站</Footer>
    </div>
  );
}

export default App;