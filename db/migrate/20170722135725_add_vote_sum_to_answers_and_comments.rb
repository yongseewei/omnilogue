class AddVoteSumToAnswersAndComments < ActiveRecord::Migration[5.1]
  def change
    add_column :answers, :vote_sum, :integer, default: 0
    add_column :comments, :vote_sum, :integer, default: 0
  end
end
