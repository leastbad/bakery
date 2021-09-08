Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_for :users

  authenticated :user do
    root to: 'store#index', as: :store_root
  end

  root to: 'visitors#index'

  resources :ovens do
    resource :cookies
    member do
      post :empty
    end
  end
end
