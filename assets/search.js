(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) {
      // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {
        // Iterate over the results
        var item = store[results[i].ref];
        appendString +=
          '<article class="post-list"><div class="post__meta">' +
          item.author +
          '&emsp;' +
          item.category +
          '&emsp;' +
          item.date +
          '</div><h2 class="post-list__title"><a href="' +
          item.url +
          '">' +
          item.title +
          '</a></h2>';
        appendString +=
          '<p class="post-list__excerpt">' +
          item.content.substring(0, 180) +
          '...<a class="post-list__more" href="' +
          item.url +
          '"><span class="caps">More</span></a></p></article>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li class="no-results">No results found.</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute('value', searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function() {
      this.field('id');
      this.field('title');
      this.field('author');
      this.field('content', { boost: 10 });
      this.field('category');
      for (var key in window.store) {
        this.add({
          id: key,
          title: window.store[key].title,
          category: window.store[key].category,
          author: window.store[key].author,
          content: window.store[key].content
        });
      }
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();
