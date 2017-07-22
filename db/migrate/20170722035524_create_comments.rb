class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :content
      t.decimal :sentiment_score
      t.references :user
      t.references :answer
      t.timestamps
    end
  end
end
