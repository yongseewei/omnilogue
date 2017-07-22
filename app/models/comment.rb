class Comment < ApplicationRecord
  include Sentimentable

  belongs_to :user
  belongs_to :answer
end
