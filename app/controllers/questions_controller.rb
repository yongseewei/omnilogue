class QuestionsController < ApplicationController
  prepend_before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  def index
    @questions = Question.all.map{ |question| question.to_json }
    @categories = Category.all.map{ |category| category.to_json}
  end

  def autocomplete
    @questions = Question.all.includes(:user).as_json(include: { user: { only: [:first_name] } })
  end

  def typeahead
    @search  = Question.search_by_question(params[:query])
              .map {|question| {title: question.title, value: question.id}}
    render json: @search
  end

  def search
    questions = if params[:query].present?
                  Question.search_by_question(params[:query])
                else
                  Question.all
                end
    render json: questions.map(&:to_json)
  end

  def new
    @question = current_user.questions.new
    @subcat = Category.all.map{ |c| [c.name, c.subcategories.map{ |s| [s.name,s.id]}]}.to_h

    if request.xhr?
      @search  = Question.search_by_question(params[:query])
    end
    respond_to do |format|
      format.js # index.js.erb
      format.html # index.html.erb
    end
  end

  def create
    @question = current_user.questions.new(question_params)
    if @question.save
      redirect_to @question
    else
      @subcat = Category.all.map{ |c| [c.name, c.subcategories.map{ |s| [s.name,s.id]}]}.to_h
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
      params.require(:question).permit(:title,:content, :subcategory_id)
    end
end
