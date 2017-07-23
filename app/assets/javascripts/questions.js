$("document:ready", function() {
  var bloodhound = new Bloodhound({
    datumTokenizer: function(d) { 
            return Bloodhound.tokenizers.whitespace(d.title); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {url: "/questions/typeahead?query=%QUERY",
      wildcard: "%QUERY"},
    limit: 10
  });

  // initialize the bloodhound suggestion engine

  bloodhound.initialize();


  // instantiate the typeahead UI
  // $('#question-query').typeahead({
  //   hint: false,
  //   highlight: true,
  //   minLength: 1
  // }, {
  //   displayKey: 'title',
  //   source: bloodhound.ttAdapter()
  // });

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // This will apply the debounce effect on the keyup event
  // And it only fires 500ms or half a second after the user stopped typing
  $('#question-query').on('keyup', debounce(function () {
    alert('typing occurred');
    $('.content').text($(this).val());
  }, 1000));
});
