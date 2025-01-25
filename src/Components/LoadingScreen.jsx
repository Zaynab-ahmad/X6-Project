import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <DotLottieReact
        src="https://lottie.host/6fc6b390-0596-4c4e-9d92-204b4d5b7afb/xFTX0kGQ7k.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LoadingScreen;

