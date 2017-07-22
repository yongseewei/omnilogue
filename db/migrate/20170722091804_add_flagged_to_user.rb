class AddFlaggedToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :is_flagged, :boolean, default: false
    add_column :users, :sentiment_score, :decimal, default: 0
  end
end
