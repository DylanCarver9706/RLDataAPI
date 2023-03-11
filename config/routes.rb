Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :item_shop_dates
  resources :daily_items, only: [:index, :show, :create, :update, :destroy]

  # Defines the root path route ("/")
  # root "articles#index"
  root "rails/welcome#index"
end
