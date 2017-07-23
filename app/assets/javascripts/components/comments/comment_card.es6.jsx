class CommentCard extends React.Component {

  render() {
    const { comment } = this.props
    return(
      <div className="pmd-card-body comment-container">
        <div className="pmd-card-subtitle-text">
          <img src="http://propeller.in/assets/images/avatar-icon-40x40.png" width="20" height="20" /> { `Commented by ${comment.user.username} ${moment(comment.created_at).fromNow()}` }
        </div>
        { comment.content }
        <SentimentBar score={ comment.sentiment_score } />
        { <VoteBox votable = { comment } modelName="Comment" /> }
      </div>
    )
  }
}