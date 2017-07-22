class QuestionsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' }
  }

  componentDidMount() {
    $("document:ready", function() {
      var bloodhound = new Bloodhound({
        datumTokenizer: function(d) {
          return Bloodhound.tokenizers.whitespace(d.title);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          url: "/questions/typeahead?query=%QUERY",
          wildcard: "%QUERY"
        },
        limit: 10
      });

      // initialize the bloodhound suggestion engine
      bloodhound.initialize();

      // instantiate the typeahead UI
      $('#question-query').typeahead(
        {
          hint: false,
          highlight: true,
          minLength: 1
        },
        {
          displayKey: 'title',
          source: bloodhound.ttAdapter()
        }
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
          <form>
            <div className="input-group">
              <input
                className="form-control input-lg typeahead"
                id="question-query"
                value={this.state.query}
                onChange={this.handleUpdateText.bind(this)}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default btn-lg"
                  onClick={this.handleButtonClick.bind(this)}
                >
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }

  handleUpdateText(event) {
    this.setState({ query: event.target.value });
  }

  handleButtonClick(event) {
    event.preventDefault();

    // Submits form
  }
}
