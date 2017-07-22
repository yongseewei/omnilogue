class Answer < ApplicationRecord
  include Sentimentable
  include Taggable

  validate :no_other_correct_answer, on: :update

  belongs_to :question
  belongs_to :user
  has_many :comments
  has_many :votes, as: :votable
  has_many :taggings, as: :article
  has_many :tagged_users, through: :taggings, source: :user

  def to_json(options = {})
    new_comments = comments.map{ |comment| comment.to_json }
    return {
      id: id,
      content: content,
      sentiment_score: sentiment_score,
      correct_answer: correct_answer,
      question_id: question.id,
      user: {
        id: user.id,
        username: user.username
      },
      comments: new_comments,
      created_at: created_at
    }
  end

  private

  def no_other_correct_answer
    if question.has_correct_answer? && correct_answer_changed?
      errors.add(:correct_answer, "can't have more than one")
    end
  end
end
