Rails.application.routes.draw do
  resources :daily_items
  resources :campers, only: [:index, :show, :create]
end
