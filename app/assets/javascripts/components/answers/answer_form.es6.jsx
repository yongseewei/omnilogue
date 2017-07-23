class AnswerForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  handleSubmit(e) {
    var component = this
    e.preventDefault()
    $.ajax ({
      url: $('#answerForm').attr('action'),
      type: 'post',
      dataType: 'JSON',
      data:
        { answer: { content: component.state.content }
      }
    }).success(function(data){
      component.setState({ content: "" })
      component.props.answers.push(data)
      component.props.answerAdded(component.props.answers)
    })
  }

  render() {
    const { question } = this.props

    return (
      <form action={"/questions/" + this.props.question.id + "/answers"}  method="post" id="answerForm" onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label className="control-label">
            Answer this question:
          </label>
          <textarea required className="form-control" name='answer[content]' onChange={ this.handleChange } value={ this.state.content } />
        </div>
        <div className="form-group">
          <input className="btn pmd-btn-raised pmd-ripple-effect btn-primary" type="submit" value="Submit answer" />
        </div>
      </form>
    )
  }
}