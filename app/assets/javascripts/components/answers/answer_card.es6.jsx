class AnswerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCommentForm: false,
      comments: this.props.answer.comments
    }
    this.commentAdded = this.commentAdded.bind(this)
    this.clickAddCommentButton = this.clickAddCommentButton.bind(this)
    this.closeCommentForm = this.closeCommentForm.bind(this)
  }

  commentAdded(comments) {
    this.setState({ comments: comments })
  }

  clickAddCommentButton() {
    this.setState({ showCommentForm: !this.state.showCommentForm })
  }

  closeCommentForm() {
    this.setState({ showCommentForm: !this.state.showCommentForm })
  }

  render() {
    const { current_user, answer } = this.props
    let correctAnswer = ""
    if(answer.correct_answer) {
      correctAnswer = "correct-answer"
    }
    return (
      <div className={ `answer-card pmd-card pmd-card-default pmd-z-depth ${correctAnswer}` }>
        { answer.correct_answer
          ?
            <div className="correct-answer-badge">
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            </div>
          :
            null
        }
        <div className="pmd-card-title">
          <div className="media-left">
            <a className="avatar-list-img" href="javascript:void(0);">
              <img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" />
            </a>
          </div>
          <div className="media-body media-middle">
            <span className="pmd-card-subtitle-text">{ `Answered by ${answer.user.username} ${moment(answer.created_at).fromNow()}` }</span>
            <p className="pmd-card-title-text" >{ answer.content }</p>
            <div className="flex card-footer">
              <VoteBox votable = {answer} modelName="Answer" />
              <SentimentBar score={ answer.sentiment_score } />
            </div>
          </div>
        </div>
        <div className="pmd-card-body">
          {
            answer.comments.map((comment) => {
              return(
                <CommentCard comment={ comment } key={ `comment-${comment.id}` } />
              )
            })
          }
        </div>
        {
          current_user == null
          ?
            null
          :
            <div className="pmd-card-body">
              {
                this.state.showCommentForm
                ?
                  <CommentForm answer = { answer }
                               closeCommentForm = { this.closeCommentForm }
                               commentAdded = { this.commentAdded }
                               comments = { this.state.comments } />
                :
                  <button onClick={ this.clickAddCommentButton } className="btn pmd-btn-raised btn-sm pmd-ripple-effect btn-primary"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add comment</button>
              }
            </div>
        }
      </div>
    )
  }
}