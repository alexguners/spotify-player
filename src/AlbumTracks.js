import ConvertToHumanTime from "./ConvertToHumanTime";
export default function renderAlbumTracks(data, element) {
  const markup = data
    .map(
      data =>
        `
  <div class="music" data-track-preview="${data.preview_url}">
  <p class="music-number">${data.track_number}</p>
  <p class="music-title">${data.name}</p>
  <p class="music-duration">${ConvertToHumanTime(data.duration_ms)}</p>
  </div>`
    )
    .join("");

  element.innerHTML = markup;
}
