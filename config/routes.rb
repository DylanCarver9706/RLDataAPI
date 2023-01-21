Rails.application.routes.draw do
  resources :daily_items, only: [:index, :show, :create]
end
