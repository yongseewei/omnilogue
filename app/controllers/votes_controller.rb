class VotesController < ApplicationController
  def create
    class_name = params[:class_name].constantize
    votable = class_name.find(params[:class_id])
    vote = class_name.find_or_create_by(user: current_user, votable: votable, value: params[:value]).update(value: params[:value])
    recount_votes(votable, vote)
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
