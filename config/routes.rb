Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "questions#index"

  resources :questions do
    resources :answers, only: [:new, :create, :update]
    collection do
      get :typeahead
      get :search
    end
  end

  resources :answers, only: [] do
    resources :comments, only: [:destroy, :create, :update]
  end

  resources :votes, only: [:create]
end
