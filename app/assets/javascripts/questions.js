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
  $('#question-query').typeahead({
    hint: false,
    highlight: true,
    minLength: 1
  }, {
    displayKey: 'title',
    source: bloodhound.ttAdapter()
  });
});
