class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "questionIndex",
      question: {},
      searchText: "All questions",
      showSearch: false
    }
    this.renderQuestionShowPage = this.renderQuestionShowPage.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  renderQuestionShowPage(id) {
    const { questions } = this.props
    let questionPos = questions.map((x) => {return x.id }).indexOf(id)
    let question = questions[questionPos]
    this.setState({
      currentPage: "questionShow",
      questionId: question
    })
  }

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch })
  }

  updateSearch(e) {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { questions } = this.props
    const { currentPage, question, searchText, showSearch } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12" id="category-dropdown">
            <div className="dropdown">
              <button className="btn btn-default btn-block dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                All Categories
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" id="search-container">
            <div className="search-box">
              {
                showSearch
                ?
                  <form className="flex">
                    <input className="form-control pmd-textfield pmd-textfield-floating-label" value={ searchText } onChange={ this.updateSearch } type="text" placeholder="Type here to search" />
                    <button type="button" className="btn pmd-btn-raised pmd-ripple-effect btn-primary">Search</button>
                    <button onClick={this.toggleSearch} type="button" className="btn pmd-btn-raised pmd-ripple-effect btn-default">Cancel</button>
                  </form>
                :
                  <span onClick={this.toggleSearch} className="clickable"><span className="glyphicon glyphicon-search"></span> { searchText }</span>
              }
            </div>
          </div>
        </div>

        { currentPage === "questionIndex"
          ?
            <QuestionsIndex questions={ questions } renderQuestionShowPage={ this.renderQuestionShowPage } />
          :
            <QuestionShow question={ question } />
        }

      </div>
    )
  }
}