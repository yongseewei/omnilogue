class AddCorrectAnswerToAnswer < ActiveRecord::Migration[5.1]
  def change
    add_column :answers, :correct_answer, :boolean, default: false
  end
end
