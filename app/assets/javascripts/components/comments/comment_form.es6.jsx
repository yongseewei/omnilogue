class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.clickCloseButton = this.clickCloseButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  clickCloseButton() {
    this.props.closeCommentForm()
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  handleSubmit(e) {
    var component = this
    e.preventDefault()
    debugger
    $.ajax ({
      url: e.target.action,
      type: 'post',
      dataType: 'JSON',
      data:
        { comment: { content: component.state.content }
      }
    }).success(function(data){
      component.setState({ content: "" })
      component.props.comments.push(data)
      component.props.commentAdded(component.props.comments)
    })
  }

  render() {
    const { answer } = this.props

    return (
      <form className="form-horizontal comment-form" action={"/answers/" + this.props.answer.id + "/comments"}  method="post" id="commentForm" onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label className="col-xs-12 control-label flex">
            <span>Add a comment:</span>
            <button className="btn pmd-ripple-effect btn-link close-button" onClick={ this.clickCloseButton }>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </label>
          <div className="col-xs-12">
            <input required className="form-control" type="text" name='comment[content]' onChange={ this.handleChange } value={ this.state.content }/>
            <input className="btn btn-block pmd-btn-raised pmd-ripple-effect btn-primary" type="submit" value="Submit Comment" />
          </div>
        </div>
      </form>
    )
  }
}