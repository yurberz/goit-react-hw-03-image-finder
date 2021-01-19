import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

const apiKey = "19945096-307dadd9492513dc28d99de19";

export const fetchImagesWithQuery = (query, page) => {
  return axios
    .get(
      `/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits);
};
