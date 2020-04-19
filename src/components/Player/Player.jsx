import React from 'react';
import { Howl } from 'howler';

export default function Player({ audioUrl }) {
  const sound = new Howl({ src: [audioUrl] });

  return (
    <div>
      <button
        onClick={() => {
          sound.play();
        }}
      >
        Play
      </button>
      <button onClick={() => sound.stop()}>Stop</button>
      <button
        onClick={() => {
          sound.pause();
        }}
      >
        Pause
      </button>
      <button onClick={() => sound.rate(2)}>x2</button>
      <button onClick={() => sound.rate(1)}>x1</button>
      <button onClick={() => sound.seek(sound.seek() + 10)}>10 sec fwd</button>
      <button onClick={() => sound.seek(sound.seek() - 10)}>10 sec back</button>
    </div>
  );
}
