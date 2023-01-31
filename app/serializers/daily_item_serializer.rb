class DailyItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :item_type, :cost, :rarity, :color, :item_shop_date_id, :image_location, :image
end
