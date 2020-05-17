import React, { useState, useEffect } from 'react';

export default function ReactPodcastPlayer(audioUrl) {
  const [podcast] = useState(new Audio(audioUrl.audioUrl));
  const [speed, setSpeed] = useState(podcast.playbackRate);
  const [currentPosition, setCurrentPosition] = useState(0);

  podcast.ontimeupdate = () => setCurrentPosition(podcast.currentTime);

  useEffect(() => {
    podcast.playbackRate = speed;
  });

  const forward = (currentTime, forwardSeconds) => currentTime + forwardSeconds;
  const backward = (currentTime, backwardSeconds) =>
    currentTime - backwardSeconds;

  const switchPlaybackRate = (playbackRate) => {
    switch (playbackRate) {
      case 1:
        return 1.5;
      case 1.5:
        return 1.75;
      case 1.75:
        return 2;
      default:
        return 1;
    }
  };

  const formatPodcastTime = (seconds) => {
    if (seconds) {
      return (
        <>
          {Math.floor(seconds / 60)}:
          {('0' + Math.floor(seconds % 60)).slice(-2)}
        </>
      );
    }
    return <>0:00</>;
  };

  return (
    <div>
      <input
        type='range'
        min={0}
        max={podcast.duration ? podcast.duration : 0}
        value={currentPosition}
        id='myRange'
        onChange={(e) => {
          podcast.currentTime = e.target.value;
        }}
      />
      <div>
        {formatPodcastTime(currentPosition)}/
        {formatPodcastTime(podcast.duration)}
      </div>
      <button type='button' onClick={() => podcast.play()}>
        Play
      </button>
      <button type='button' onClick={() => podcast.pause()}>
        ||
      </button>
      <button
        type='button'
        onClick={() => {
          podcast.currentTime = forward(podcast.currentTime, 10);
        }}
      >
        +10
      </button>
      <button
        type='button'
        onClick={() => {
          setSpeed(switchPlaybackRate(speed));
        }}
      >
        Speed x{speed}
      </button>
      <button
        type='button'
        onClick={() => {
          podcast.currentTime = backward(podcast.currentTime, 10);
        }}
      >
        -10
      </button>
      <button
        type='button'
        onClick={() => {
          podcast.pause();
          podcast.currentTime = 0;
        }}
      >
        Stop
      </button>
    </div>
  );
}
