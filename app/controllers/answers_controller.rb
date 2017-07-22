class AnswersController < ApplicationController
    def new
      @question = Question.find(params[:question_id ])
      @answer = current_user.answers.new
    end

    def create
      @question = Question.find(params[:question_id ])
      @answer = current_user.answers.new(answer_params.merge({question_id: @question.id}))
      if @answer.save
        respond_to do |format|
          format.json { render json: @answer.to_json }
        end
      end
    end

    def update
      @answer = Answer.find(params[:id])
      @answer.update(answer_params)
    end

    def correct
      @answer = Answer.find(params[:id])
      @answer.update(correct_answer: true)
    end

    private
      def answer_params
        params.require(:answer).permit(:content)
      end
end
