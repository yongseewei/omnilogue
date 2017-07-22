class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :content
      t.decimal :sentiment_score
      t.references :user
      t.timestamps
    end
  end
end
