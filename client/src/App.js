import './App.css';
import React, { useEffect, useState } from "react"
import Navbar from './Component/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import Allroutes from "../src/Allroutes"
import Drawersliderbar from '../src/Component/Leftsidebar/Drawersliderbar'
import Createeditchannel from './Pages/Channel/Createeditchannel';
import Videoupload from './Pages/Videoupload/Videoupload';
import { fetchallchannel } from './action/channeluser';
import { getallvideo } from './action/video';
import { getallcomment } from './action/comment';
import { getallhistory } from './action/history';
import { getalllikedvideo } from './action/likedvideo';
import { getallwatchlater } from './action/watchlater';

console.log("Process Env:", process.env);
console.log("Google Client ID:", process.env.REACT_APP_GOOGLE_CLIENT_ID);

function App() {
  const [toggledrawersidebar, settogledrawersidebar] = useState({
    display: "none"
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallchannel());
    dispatch(getallvideo());
    dispatch(getallcomment());
    dispatch(getallhistory());
    dispatch(getalllikedvideo());
    dispatch(getallwatchlater());
  }, [dispatch]);

  const toggledrawer = () => {
    settogledrawersidebar(prevState => ({
      display: prevState.display === "none" ? "flex" : "none",
    }));
  };

  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);

  return (
    <>
      {videouploadpage && <Videoupload setvideouploadpage={setvideouploadpage} />}
      {editcreatechanelbtn && (
        <Createeditchannel seteditcreatechanelbtn={seteditcreatechanelbtn} />
      )}
      <Navbar seteditcreatechanelbtn={seteditcreatechanelbtn} toggledrawer={toggledrawer} />
      <Drawersliderbar toggledraw={toggledrawer} toggledrawersidebar={toggledrawersidebar} />
      <Allroutes seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage} />
    </>
  );
}

export default App;
