class Question < ApplicationRecord
  belongs_to :user
  has_many :answers
  belongs_to :subcategory

  def has_correct_answer?
    answers.pluck(:correct_answer).include?(true)
  end
end
