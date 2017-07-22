class AddQuestionToAnswer < ActiveRecord::Migration[5.1]
  def change
    add_reference :answers, :question
  end
end
