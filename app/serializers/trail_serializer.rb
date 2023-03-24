class TrailSerializer < ActiveModel::Serializer
  attributes :id, :valid_status, :"boolean,", :"image_uri,", :"name,", :"rarity,", :"item_type,", :"color,", :"image_location,", :image
end
