import "jsdom-global/register";
import { expect } from "chai";
import renderAlbumTracks from "../src/AlbumTracks";
import ConvertToHumanTime from "../src/ConvertToHumanTime";

describe("Album Tarcks", () => {
  it("should exist method renderAlbumTracks", () => {
    expect(renderAlbumTracks).to.be.exist;
  });

  const element = document.createElement("div");
  const element2 = document.createElement("div");
  const data2 = [
    {
      preview_url:
        "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      track_number: 1,
      name: "Around The World",
      duration_ms: 238733
    },
    {
      preview_url:
        "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      track_number: 1,
      name: "Around The World",
      duration_ms: 238733
    }
  ];

  const data = [
    {
      preview_url:
        "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      track_number: 1,
      name: "Around The World",
      duration_ms: 238733
    }
  ];

  const markup = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
  <p class="music-number">1</p>
  <p class="music-title">Around The World</p>
  <p class="music-duration">${ConvertToHumanTime(238733)}</p>
  </div>`;

  const markup2 = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
  <p class="music-number">1</p>
  <p class="music-title">Around The World</p>
  <p class="music-duration">${ConvertToHumanTime(238733)}</p>
  </div>
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
  <p class="music-number">1</p>
  <p class="music-title">Around The World</p>
  <p class="music-duration">${ConvertToHumanTime(238733)}</p>
  </div>`;

  it("should create and append the markup given a correct data", () => {
    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it("should create and append the markup when give more than 1 data", () => {
    renderAlbumTracks(data2, element2);
    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
