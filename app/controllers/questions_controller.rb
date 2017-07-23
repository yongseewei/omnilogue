class QuestionsController < ApplicationController
  def index
    @questions = Question.all.map{ |question| question.to_json }
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
    @subcat = get_categories

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
      @subcat = get_categories
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

    def get_categories
      subcat_hash = Hash.new
      Category.all.each do |cat|
        subcat_hash[cat.name] = []
        cat.subcategories.each do |subcat|
          subcat_hash[cat.name] << [subcat.name,subcat.id]
        end
      end
      subcat_hash
    end
end
