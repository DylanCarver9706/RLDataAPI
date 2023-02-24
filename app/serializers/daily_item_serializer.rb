class DailyItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :item_type, :rarity, :color, :item_shop_date_id, :image_uri, :valid_status, :image_location, :image
end
