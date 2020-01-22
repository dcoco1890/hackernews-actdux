import axios from "axios";

export default {
  getHomePage: function() {
    return axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`);
  },
  getRecentPosts: function() {
    return axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story`);
  },
  searchQueryTerm: function(query) {
    return axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}&tags=story`
    );
  }
};
