class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.references :user, foreign_key: true
      t.references :article, polymorphic: true

      t.timestamps
    end
  end
end
