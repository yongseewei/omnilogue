class Question < ApplicationRecord
	include PgSearch
  include Taggable

  belongs_to :user
  has_many :answers
  has_many :comments, through: :answers
  belongs_to :subcategory
  has_many :taggings, as: :article
  has_many :tagged_users, through: :taggings, source: :user

  pg_search_scope :search_by_question,
                  :against => :title,
                  :using => {
                    :tsearch => {:any_word => true, :dictionary => "english"},
                    :trigram => {:threshold => 0.1}
                  }

  def has_correct_answer?
    answers.pluck(:correct_answer).include?(true)
  end

  def total_answers
    answers.length
  end

  def sentiment_score
    answers.pluck(:sentiment_score).inject(:+).to_i + comments.pluck(:sentiment_score).inject(:+).to_i
  end

  def to_json(options = {})
    new_answers = answers.map{ |answer| answer.to_json }
    return {
      id: id,
      title: title,
      content: content,
      sentiment_score: sentiment_score,
      total_answers: total_answers,
      user: {
        id: user.id,
        first_name: user.username
      },
      answers: new_answers,
      created_at: created_at
    }
  end
end
