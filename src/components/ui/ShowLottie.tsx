'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!path) {
    return null;
  }

  return (
    <div className={`w-full ${className} relative`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
        </div>
      )}
      <Player
        autoplay
        loop
        src={path}
        style={{ width: '100%', height: 'auto' }}
        onEvent={(event: string) => {
          if (event === 'load') {
            setIsLoading(false);
          }
          if (event === 'error') {
            setHasError(true);
            setIsLoading(false);
          }
        }}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
      />
    </div>
  );
};

export default ShowLottie;
