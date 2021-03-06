import spotify from "./Spotify";
import renderAlbum from "./AlbumList";

const albumList = document.getElementById("album-list");

const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

export default function searchEnterTrigger() {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    spotify.search.albums(searchInput.value).then(data => {
      renderAlbum(data.albums.items, albumList);
    });
  });
}
