class SubcategoriesController < ApplicationController
	def search
		questions = Subcategory.find(params[:subcat_id]).questions.where(id: params[:questions])
		render json: questions.map(&:to_json)
	end
end
