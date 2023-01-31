Rails.application.routes.draw do
  resources :item_shop_dates
  resources :daily_items, only: [:index, :show, :create]
end
