class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: this.props.question.answers
    }
    this.answerAdded = this.answerAdded.bind(this)
    this.clickQuestionTitle = this.clickQuestionTitle.bind(this)
    this.sortByVotes = this.sortByVotes.bind(this)
  }

  clickQuestionTitle() {
    this.props.renderQuestionShowPage()
  }

  answerAdded(answers) {
    this.setState({ answers: answers })
    this.sortByVotes()
  }

  sortByVotes() {
    let sortedAnswers = this.state.answers.sort((a, b) => {
      return a.total_votes < b.total_votes ? -1 : 1
    })
    // move correct answer to first position
    this.setState({
      answers: sortedAnswers
    })
  }

  componentWillMount() {
    console.log(this.state.answers)
    this.sortByVotes()
  }

  render() {
    console.log(this.state.answers)
    const { current_user, question } = this.props

    return (
      <div className="row">
        <div className="col-xs-12" id="question-container">
          <div className="pmd-card pmd-card-default pmd-z-depth" key={ `question-${question.id}` }>
            <div className="pmd-card-title">
              <span className="pmd-card-subtitle-text">Question:</span>
              <h2 className="pmd-card-title-text">{ question.title }</h2>
              <span className="pmd-card-subtitle-text"><img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="20" height="20" /> { `Asked by ${question.user.first_name} ${moment(question.created_at).fromNow()}` }</span>
            </div>
            <div className="pmd-card-body">
              <p>{ question.content }</p>
            </div>
            <div className="pmd-card-body">
              <SentimentBar score={ question.sentiment_score } />
            </div>
          </div>
        </div>
        <div className="col-xs-12" id="answers-container">
          {
            question.answers.map((answer) => {
              return(
                <AnswerCard answer={ answer } key={ `answer-${answer.id}` } current_user={ current_user } />
              )
            }
          )}
        </div>
        <div className="col-xs-12" id="question-container">
          <div className="pmd-card pmd-card-default pmd-z-depth" key={ `question-${question.id}` }>
            <div className="pmd-card-body">
            {
              current_user == null
              ?
                <p>Please <a href="/users/sign_in">sign in</a> or <a href="/users/sign_up">sign up</a> to add comments</p>
              :
                <AnswerForm question = { question }
                            answerAdded = { this.answerAdded }
                            answers = { this.state.answers} />
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}