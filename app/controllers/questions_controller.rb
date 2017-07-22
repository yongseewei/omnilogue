class QuestionsController < ApplicationController
  def index
    # byebug
  end

  def autocomplete
    @questions = Question.all.includes(:user).as_json(include: { user: { only: [:first_name] } })
  end

  def typeahead
    @search  = Question.search_by_question(params[:query])
              .map {|question| {title: question.title, value: question.id}}
    render json: @search
  end

  def new
    @question = current_user.questions.new
  end

  def create
    @question = current_user.questions.new(question_params)
    if @question.save
      redirect_to @question
    else
      render 'new'
    end
  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      redirect_to @question
    else
      render 'edit'
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    redirect_to root_page
  end

  private
    def question_params
      params.require(:question).permit(:title,:content)
    end
end
