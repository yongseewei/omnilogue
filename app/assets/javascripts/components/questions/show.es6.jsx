class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: this.props.question.answers
    }
    this.answerAdded = this.answerAdded.bind(this)
    this.clickQuestionTitle = this.clickQuestionTitle.bind(this)
  }

  clickQuestionTitle() {
    this.props.renderQuestionShowPage()
  }

  answerAdded(answers) {
    this.setState({ answers: answers })
  }

  render() {
    const { question } = this.props

    return (
      <div className="row">
        <div className="col-xs-12" id="question-container">
          <div className="pmd-card pmd-card-default pmd-z-depth" key={ `question-${question.id}` }>
            <div className="pmd-card-title">
              <h2 className="pmd-card-title-text">{ question.title }</h2>
              <span className="pmd-card-subtitle-text"><img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="20" height="20" /> { `Asked by ${question.user.first_name} ${moment(question.created_at).fromNow()}` }</span>
            </div>
            <div className="pmd-card-body">
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
            </div>
          </div>
        </div>
        <div className="col-xs-12" id="answers-container">
          {
            question.answers.map((answer) => {
              return(
                <AnswerCard answer={ answer } key={ `answer-${answer.id}` } />
              )
            }
          )}
        </div>
        <div className="col-xs-12" id="question-container">
          <div className="pmd-card pmd-card-default pmd-z-depth" key={ `question-${question.id}` }>
            <div className="pmd-card-body">
              <AnswerForm question = { question }
                          answerAdded = { this.answerAdded }
                          answers = { this.state.answers} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}