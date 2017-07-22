class AnswersController < ApplicationController
    def new
      @question = Question.find(params[:question_id ])
      @answer = current_user.answers.new
    end

    def create
      @question = Question.find(params[:question_id ])
      @answer = current_user.answers.new(answer_params.merge({question_id: @question.id}))
      if @answer.save
        redirect_to @question
      else
        render 'new'
      end
    end

    def edit
      @question = Question.find(params[:id])
    end

    private
      def answer_params
        params.require(:answer).permit(:content)
      end
end
