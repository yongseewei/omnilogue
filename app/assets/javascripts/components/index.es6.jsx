class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "questionIndex",
      question: {},
      questions: this.props.questions,
      searchText: "All questions",
      showSearch: false
    }
    this.renderQuestionShowPage = this.renderQuestionShowPage.bind(this)
    this.toggleShowSearchBox = this.toggleShowSearchBox.bind(this)
    this.updateQuestions = this.updateQuestions.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  renderQuestionShowPage(id) {
    const { questions } = this.props
    let questionPos = questions.map((x) => {return x.id }).indexOf(parseInt(id))
    let question = questions[questionPos]

    this.setState({
      currentPage: "questionShow",
      question: question
    })
  }

  toggleShowSearchBox() {
    this.setState({ showSearch: !this.state.showSearch })
  }

  updateSearch(e) {
    this.setState({ searchText: e.target.value })
  }

  updateQuestions(newQuestions, queryText) {
    this.setState({
      currentPage: "questionIndex",
      questions: newQuestions,
      searchText: queryText,
      showSearch: false
    })
  }

  render() {

    const { currentPage, question, questions, searchText, showSearch } = this.state
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
                  <QuestionsForm
                    updateQuestions={ this.updateQuestions }
                    toggleShowSearchBox={ this.toggleShowSearchBox } />
                :
                  <span onClick={this.toggleShowSearchBox} className="clickable"><span className="glyphicon glyphicon-search"></span> { searchText }</span>
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