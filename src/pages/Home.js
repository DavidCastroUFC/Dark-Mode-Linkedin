import React from 'react';
import '../styles/reset.css';
import {Container} from './HomeStyled';
import MenuDesktop from '../components/HeaderDesktop/HeaderDesktop';
import CreatePost from '../components/CreatePost/CreatePost';
import Post from '../components/Post/Post';
import LeftProfile from '../components/LeftProfile/LeftProfile';
import News from '../components/News/News';
import Recent from '../components/Recent/Recent';
import Marketing from '../components/MarketingRight/MarketingRight';
import HMobile from '../components/HeaderMobile/HeaderMobile';
import Menu from '../components/MenuMobile/MenuMobile';
export default function Home({mudar}) {

  return (
    <Container>
        <MenuDesktop mudar={mudar}/>
        <HMobile  mudar={mudar}/>
      <div className="content">
        <div className="left">
          <LeftProfile></LeftProfile>
          <Recent></Recent>
        </div>
        <div className="center">
          <CreatePost/>
          <Post/>
          <Post/>
        </div>
        <div className="right">
          <News></News>
          <Marketing></Marketing>
        </div>
      </div>
      <Menu/>
      </Container>
  )
}
