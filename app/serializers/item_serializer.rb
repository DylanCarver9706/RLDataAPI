class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :rarity, :item_type, :color, :valid_status, :image_uri, :image_location, :image
end
