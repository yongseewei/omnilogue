class Comment < ApplicationRecord
  include Sentimentable
  include Taggable

  belongs_to :user
  belongs_to :answer
  has_many :votes, as: :votable
  has_many :taggings, as: :article
  has_many :tagged_users, through: :taggings, source: :user
end
