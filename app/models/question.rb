class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  belongs_to :subcategory

  def has_correct_answer?
    answers.pluck(:correct_answer).include?(true)
  end

  def to_json(options = {})
    return {
      id: id,
      title: title,
      content: content,
      user: {
        id: user.id,
        first_name: user.first_name
      },
      answers: answers,
      comments: Comment.where(answer_id: answers.pluck(:id))
    }
  end
end
