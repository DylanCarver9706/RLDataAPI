Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :item_shop_dates
  resources :daily_items, only: [:index, :show, :create, :update, :destroy]
end
