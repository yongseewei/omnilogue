class VotesController < ApplicationController
  def create
    class_name = params[:class_name].constantize
    votable = class_name.find(params[:class_id])
    vote = votable.votes.find_or_create_by(user: current_user, votable: votable, value: params[:value])
    vote.update(value: params[:value])
    recount_votes(votable, vote)
    respond_to do |format|
      format.json { render json: votable.to_json }
    end
  end

  private
    def recount_votes(votable, vote)
      if vote.value
        votable.increment!(:vote_sum)
      else
        votable.decrement!(:vote_sum)
      end
    end
end
