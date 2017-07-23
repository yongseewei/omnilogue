class Category < ApplicationRecord
	has_many :subcategories

	def to_json(options = {})
    sub_cat = subcategories.map{ |subcat| subcat.to_json }
    return {
      id: id,
      name: name,
      subcategories: sub_cat
    }
  end
end
