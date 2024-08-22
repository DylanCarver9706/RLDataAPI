class PaintFinishSerializer < ActiveModel::Serializer
  attributes :id, :valid_status, :image_uri, :name, :rarity, :item_type, :color, :image_location, :image
end
