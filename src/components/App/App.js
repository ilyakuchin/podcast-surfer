import React from "react";
import "./App.css";
import EpisodePlayer from "../EpisodePlayer/EpisodePlayer";

function App() {
  return (
    <div className="App">
      <EpisodePlayer
        pictureSrc="http://i1.sndcdn.com/avatars-000317750782-4p9exx-original.jpg"
        title="#117 Садись за стол, Братишка!"
        description="Вступление (0:35)
        Ищем евангелистов (16:33)
        Удаление интервью (21:23)
        ​​Google отказался от обучения нейросетей на бездомных темнокожих (25:04)
        Твиттер временно приостановил планы по удалению неактивных аккаунтов (28:10)
        VR (30:43)
        WASM-polyglot (34:06)
        Firefox Time Traveling (36:42)
        Боль с NestJS (39:31)
        Чему дальше учиться (55:39)
        
        Подать доклад на HolyJS https://holyjs-piter.ru/callforpapers/
        JSUnderhood https://twitter.com/jsunderhood
        ​​Google отказался от обучения нейросетей на бездомных темнокожих https://t.me/tprogerlive/5124
        Twitter delays deleting inactive accounts to decide how to respect dead users https://thenextweb.com/twitter/2019/11/27/twitter-delays-deleting-inactive-accounts-to-decide-how-to-respect-dead-users/
        Burning Lead https://burning-lead.timepad.ru/events/
        Сайт о туризме в США https://www.recreation.gov/
        How to create polyglot HTML/JS/WebAssembly module https://webassembly-security.com/polyglot-webassembly-module-html-js-wasm/
        Firefox Time Traveling https://firefox-replay.com/
        NestJS https://nestjs.com/
        Официальный сайт RxJS https://rxjs-dev.firebaseapp.com/
        Полезные демки с RxJS https://www.learnrxjs.io/
        Магазин с оборудованием https://www.musik-produktiv.com/
        Производство мебели https://www.instagram.com/levinart.spb/"
        audioSrc="http://feeds.soundcloud.com/stream/721823038-frontend_u-e117.m4a"
      ></EpisodePlayer>
    </div>
  );
}

export default App;
