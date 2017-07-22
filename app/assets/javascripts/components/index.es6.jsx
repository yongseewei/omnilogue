class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "questionIndex",
      searchText: "All questions",
      showSearch: false
    }
    this.renderQuestionShowPage = this.renderQuestionShowPage.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  renderQuestionShowPage() {
    this.setState({ currentPage: "questionShow" })
  }

  toggleSearch() {
    this.setState({ showSearch: !this.state.showSearch })
  }

  updateSearch(e) {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { currentPage, searchText, showSearch } = this.state
    if(currentPage === "questionIndex") {
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
          <div className="row">
            <div className="col-xs-12" id="questions-container">
              {
                this.props.questions.map((question) => {
                  return(
                    <div className="pmd-card pmd-card-default pmd-z-depth" key={ `question-${question.id}` }>
                      <div className="pmd-card-title">
                        <div className="media-left">
                          <a className="avatar-list-img" href="javascript:void(0);">
                            <img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" />
                          </a>
                        </div>
                        <div className="media-body media-middle">
                          <span className="pmd-card-subtitle-text">{ `${moment(question.created_at).fromNow()}, ${question.user.first_name} asked` }</span>
                          <h3 className="pmd-card-title-text clickable" onClick={ this.renderQuestionShowPage }>{question.title}</h3>
                        </div>
                      </div>
                      <div className="pmd-card-actions flex">
                        <span className="meter-bar">
                          <span className="meter-minus-5" />
                          <span className="meter-minus-4" />
                          <span className="meter-minus-3" />
                          <span className="meter-minus-2" />
                          <span className="meter-minus-1" />
                          <span className="meter-neutral active" />
                          <span className="meter-plus-1 active" />
                          <span className="meter-plus-2 active" />
                          <span className="meter-plus-3" />
                          <span className="meter-plus-4" />
                          <span className="meter-plus-5" />
                        </span>
                        <span>32 answers | active 2 minutes ago</span>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
      )
    } else if(currentPage === "questionShow") {
      return(
        <div>Question Show Page</div>
      )
    }
  }
}