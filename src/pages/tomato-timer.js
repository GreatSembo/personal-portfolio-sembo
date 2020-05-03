import React, { Component, useState, useEffect } from "react";
import Img from "gatsby-image";
import { graphql, withPrefix } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tomato from "../images/tomato.png"
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import ParticleComponent from "../components/particles";
import Zoom from 'react-reveal/Zoom';
import { AnimateOnChange } from 'react-animation'
const TomatoTime = (props) => {
  const [pomodoroOpen, setpomodoroOpen] = useState(true)
  const [shortBreakOpen, setShortBreakOpen] = useState(false)
  const [seconds, setSeconds] = useState("00");
  const [value, setValue] = useState(25)
  const [intervalTimer, setintervalTimer] = useState()
  let secondsRemaining
  var intervalHandle;

  function tick() {
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    if(value!=min)setValue(min)
    if(seconds!=sec)setSeconds(sec)
    if (sec < 10) {
      if (sec == 0) setSeconds("00")
      else setSeconds("0" + sec)
    }

    if (min < 10) {
      setValue("0" + min)
    }

    if (min === 0 & sec === 0) {
      clearInterval(intervalHandle);
      addNotification({
        title: 'Pomodoro Timer Ended',
        subtitle: "Time For a Break!",
        theme: 'black',
        native: true
      });
    }
    secondsRemaining--
  }
  function pomodoroClick() {
    if (!pomodoroOpen) resetCountDown(25)
    setShortBreakOpen(false)
    setpomodoroOpen(true)
  }
  function shortBreakClick() {
    if (!shortBreakOpen) resetCountDown(5)
    setShortBreakOpen(true)
    setpomodoroOpen(false)
  }
  const startCountDown = () => {
    intervalHandle = setInterval(tick, 1000);
    setintervalTimer(intervalHandle)
    let time = value;
    secondsRemaining = time * 60;
    addNotification({
      title: 'Timer Started ',
      subtitle: "You will receive a notifinication when it'll end",
      message: "You will receive a notifinication when it'll end",
      theme: 'black',
      native: true
    });
    // this.setState({
    //   isClicked : true
    // })
  }
  const resetCountDown = (time) => {
    clearInterval(intervalTimer);
    setValue(time)
    setSeconds("00")

  }
  const buttonClick = () => {

  };
  return (
    <Layout header="Tomato Timer">
      {/* <Helmet>
        <script src={withPrefix('particles.js')} type="text/javascript" />
    </Helmet> */}
      <Notifications />
      <SEO
        title="Tomato Timer"
        keywords={[`Luca Sembolini`, `Frontend Developer`, `Developer`, `Tomato`, `timer`, `Tomato Timer`, `metodo pomodoro`, `Pomodoro Timer`]}
      />
      <div className="site-container blogs-page" id="Blogs">
        <div className="container">
          <div className="section-head font-mono">
            <h1 className="line-heading h2">Tomato Timer</h1>
            <div className="md:flex font-mono">
              <div className="md:flex-shrink-0 mx-auto my-auto ">
                <img className=" mt-0 md:w-56" src={Tomato} />
              </div>
            </div>
            <div className="flex items-center h-24">
              <button onClick={() => pomodoroClick()} className={` hover:bg-red-600 text-black text-lg border border-red-600 font-bold py-2 px-4 ml-auto mr-8 text-center ${pomodoroOpen ? "bg-red-600" : 'bg-white'}`}>
                Pomodoro
                </button>
              <button onClick={() => shortBreakClick()} className={`${shortBreakOpen ? "bg-red-600" : 'bg-white'} hover:bg-red-600 border border-red-600 text-lg text-black font-bold py-2 px-4 mr-auto text-center`}>
                Short Break
                </button>
            </div>
            <Zoom >
              <div className="flex flex-col items-center bg-gray-300">

                <div>
                  <h1 className="text-6xl">
                    <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    {value}
                  </AnimateOnChange>:
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                  {seconds}
                  </AnimateOnChange></h1>
                </div>
                {pomodoroOpen &&
                  <div className='mb-8'>
                    <button onClick={() => startCountDown()} className="bg-red-600 hover:bg-red-700 text-black text-lg  font-bold py-2 px-4 ml-auto mr-8 text-center">
                      Start Pomodoro Timer
                </button>
                    <button onClick={() => resetCountDown(25)} className="bg-green-600 hover:bg-green-700 text-lg text-black font-bold py-2 px-4 mr-auto text-center">
                      Reset
                </button>
                  </div>
                }
                {shortBreakOpen &&

                  <div className='mb-8'>
                    <button onClick={() => startCountDown()} className="bg-red-600 hover:bg-red-700 text-black text-lg  font-bold py-2 px-4 ml-auto mr-8 text-center">
                      Start Your Break
                </button>
                    <button onClick={() => resetCountDown(25)} className="bg-green-600 hover:bg-green-700 text-lg text-black font-bold py-2 px-4 mr-auto text-center">
                      Reset
                </button>
                  </div>

                }
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default TomatoTime
