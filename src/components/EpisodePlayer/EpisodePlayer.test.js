import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import EpisodePlayer from "./EpisodePlayer";
import EpisodeDescription from "./EpisodeDescription/EpisodeDescription";
import EpisodeTitle from "./EpisodeTitle/EpisodeTitle";
import EpisodePicture from "./EpisodePicture/EpisodePicture";
import EpisodeAudio from "./EpisodeAudio/EpisodeAudio";

configure({ adapter: new Adapter() });

describe("Episode player", () => {
  test("should return picture, title, description and audio (order sensitive)", () => {
    const wrap = shallow(<EpisodePlayer />);
    wrap.setState({
      pictureSrc: "test",
      title: "test",
      description: "test",
      audioSrc: "test"
    });
    expect(
      wrap.contains(
        <div>
          <EpisodePicture src={wrap.state("pictureSrc")} />
          <EpisodeTitle title={wrap.state("title")} />
          <EpisodeDescription description={wrap.state("description")} />
          <EpisodeAudio src={wrap.state("audioSrc")} />
        </div>
      )
    ).toBe(true);
  });
});
