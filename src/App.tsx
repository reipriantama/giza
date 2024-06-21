import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Lottie from 'lottie-react';
import circleMeteor from './assets/lottie/circleMeteor.json';
import ctaParticle from './assets/lottie/ctaParticle.json';
import door from './assets/lottie/door.json';
import lineAccent from './assets/lottie/lineAccent.json';
import preload from './assets/lottie/Preload.json';

function App() {
  return (
    <>
      <div>test Lottie</div>
      <Lottie animationData={preload} />
      <Lottie animationData={ctaParticle} />
      <Lottie animationData={circleMeteor} />
      <Lottie animationData={door} />
      <Lottie animationData={lineAccent} />
    </>
  );
}

export default App;
