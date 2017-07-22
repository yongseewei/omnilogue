class Question < ApplicationRecord
	include PgSearch
  belongs_to :user
  has_many :answers
  belongs_to :subcategory

  pg_search_scope :search_by_question, 
                  :against => :title,
                  :using => {
                    :tsearch => {:any_word => true, :dictionary => "english"},
                    :trigram => {:threshold => 0.1}
                  }
end
