class CategoriesController < ApplicationController
	def search
		subcat = Category.find(params[:cat_id]).subcategories
		questions = []
		subcat.each do |sub|
			questions += sub.questions.where(id: params[:questions]).map(&:to_json)
		end
		render json: questions
	end
end
