class QuestionsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.closeSearchBox = this.closeSearchBox.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this)
    this.handleUpdateText = this.handleUpdateText.bind(this)
  }

  closeSearchBox() {
    this.props.toggleShowSearchBox()
  }

  componentDidMount() {
    $("document:ready", function() {
      var bloodhound = new Bloodhound({
        datumTokenizer: function(d) {
          return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          url: "/questions/typeahead?query=%QUERY",
          wildcard: "%QUERY"
        },
        limit: 10
      })

      // initialize the bloodhound suggestion engine
      bloodhound.initialize()

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
      )
    })

    $('.tt-dropdown-menu').on('click', this.handleDropdownSelect)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <form className="flex">
            <input
              className="form-control typeahead"
              id="question-query"
              value={ this.state.query }
              onChange={ this.handleUpdateText }
            />
            <button
              className="btn pmd-btn-raised pmd-ripple-effect btn-primary"
              onClick={ this.handleButtonClick }>
              <span className="glyphicon glyphicon-search"></span>
            </button>
            <button
              onClick={ this.closeSearchBox }
              type="button"
              className="btn pmd-btn-raised pmd-ripple-effect btn-default">
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  }

  handleDropdownSelect(event) {
    this.setState({ query: event.target.innerText })
  }

  handleUpdateText(event) {
    this.setState({ query: event.target.value })
  }

  handleButtonClick(event) {
    event.preventDefault()

    // Submits form
    var component = this
    $.ajax({
      url: '/questions/search',
      type: 'get',
      dataType: 'JSON',
      data: {
        query: this.state.query
      }
    }).success(function(data){
      component.props.updateQuestions(data, component.state.query)
    })
  }
}
