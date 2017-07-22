class Answer < ApplicationRecord
  include Sentimentable

  belongs_to :question
  belongs_to :user
  has_many :comments
end
