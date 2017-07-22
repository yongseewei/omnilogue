class AnswerForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {content: ""}
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }
  handleSubmit(e) {
    var component = this
    e.preventDefault();
    $.ajax ({
      url: $('#answerForm').attr('action'),
      type: 'post',
      dataType: 'JSON',
      data:
        { answer: { content: component.state.content } }

    }).success(function(data){
      component.setState({content: ""})
      component.props.answers.push(data);
      component.props.answerAdded(component.props.answers)
    });
  }

  render() {
    const { question } = this.props

    return (

      <form action={"/questions/" + this.props.question.id + "/answers"}  method="post" id="answerForm" onSubmit={this.handleSubmit.bind(this)}>
        <label>
           Content:
           <input type="text" name='answer[content]' onChange={this.handleChange.bind(this)} value={this.state.content}/>
         </label>
         <input type="submit" value="Submit" />
      </form>
    )
  }
}