Rails.application.routes.draw do
  resources :avatar_borders
  resources :banners
  resources :engine_sounds
  resources :trails
  resources :goal_explosions
  resources :antennas
  resources :toppers
  resources :boosts
  resources :paint_finishes
  resources :decals
  resources :cars
  resources :crates
  resources :avatars
  resources :wheels
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :item_shop_dates
  resources :daily_items, only: [:index, :show, :create, :update, :destroy]

  # Defines the root path route ("/")
  # root "articles#index"
  root "rails/welcome#index"
end
