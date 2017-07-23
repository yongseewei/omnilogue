class Subcategory < ApplicationRecord
	belongs_to :category
	has_many :questions

	def to_json(options = {})
    return {
      id: id,
      name: name
    }
  end
end
