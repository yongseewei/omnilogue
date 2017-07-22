class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.boolean :value
      t.integer :votable_id
      t.string :votable_type
      t.references :user
      t.timestamps
    end
  end
end
