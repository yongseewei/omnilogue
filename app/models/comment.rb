class Comment < ApplicationRecord
  include Sentimentable
  include Taggable

  belongs_to :user
  belongs_to :answer
  has_many :votes, as: :votable
  has_many :taggings, as: :article
  has_many :tagged_users, through: :taggings, source: :user

  def to_json(options = {})
    return {
      id: id,
      content: content,
      sentiment_score: sentiment_score,
      user: {
        id: user.id,
        username: user.username
      },
      created_at: created_at
    }
  end
end
