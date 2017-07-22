class Answer < ApplicationRecord
  include Sentimentable

  validate :no_other_correct_answer, :on => :update

  belongs_to :question
  belongs_to :user
  has_many :comments
  has_many :votes, as: :votable

  private
    def no_other_correct_answer
      if question.has_correct_answer? && correct_answer_changed?
        errors.add(:correct_answer, "can't have more than one")
      end
    end
end
