class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.clickQuestionTitle = this.clickQuestionTitle.bind(this)
  }

  clickQuestionTitle(e) {
    this.props.renderQuestionShowPage(e.target.dataset.id)
  }

  render() {
    const { questions } = this.props
    return (
      <div className="row">
        <div className="col-xs-12" id="questions-container">
          {
            questions.map((question) => {
              return(
                <div className="pmd-card pmd-card-default pmd-z-depth" key={ `question-${question.id}` }>
                  <div className="pmd-card-title">
                    <div className="media-left">
                      <a className="avatar-list-img" href="javascript:void(0);">
                        <img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" />
                      </a>
                    </div>
                    <div className="media-body media-middle">
                      <span className="pmd-card-subtitle-text">{ `Asked by ${question.user.first_name} ${moment(question.created_at).fromNow()}` }</span>
                      <h3 className="pmd-card-title-text clickable" data-id={ question.id } onClick={ this.clickQuestionTitle }>{ question.title }</h3>
                    </div>
                  </div>
                  <div className="pmd-card-actions">
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
                    <span className="comments-length"><span className="glyphicon glyphicon-comment" /> { question.answers.length === 1 ? `${question.answers.length} answer` : `${question.answers.length} answers` }</span>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}