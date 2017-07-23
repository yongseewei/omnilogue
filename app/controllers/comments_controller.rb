class CommentsController < ApplicationController
  def create
    @answer = Answer.find(params[:answer_id])
    @comment = current_user.comments.new(comment_params.merge({answer_id: @answer.id}))
    byebug
    if @comment.save
      respond_to do |format|
        format.json { render json: @comment.to_json }
      end
    end
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private
    def comment_params
      params.require(:comment).permit(:content,:answer_id)
    end
end
