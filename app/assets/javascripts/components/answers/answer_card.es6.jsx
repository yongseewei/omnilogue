class AnswerCard extends React.Component {

  render() {
    const { answer } = this.props

    return (
      <div className="pmd-card pmd-card-default pmd-z-depth">
        <div className="pmd-card-title">
          <div className="media-left">
            <a className="avatar-list-img" href="javascript:void(0);">
              <img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" />
            </a>
          </div>
          <div className="media-body media-middle">
            <span className="pmd-card-subtitle-text">{ `Answered by ${answer.user.username} ${moment(answer.created_at).fromNow()}` }</span>
            <p className="pmd-card-title-text" >{ answer.content }</p>
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
        </div>

        {
          answer.comments.map((comment) => {
            return(
              <CommentCard comment={ comment } key={ `comment-${comment.id}` } />
            )
          })
        }
      </div>
    )
  }
}