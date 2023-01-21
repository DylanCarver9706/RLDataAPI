class DailyItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :cost, :rarity, :color, :date
end
