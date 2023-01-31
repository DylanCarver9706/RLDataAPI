require 'date'

puts "Seeding Items..."

puts "Seeding Item Shop Dates..."
date1 = ItemShopDate.create(date: DateTime.new(2023,1,30,4,5,6))

puts "Seeding Wheels..."
DailyItem.create(name: "Canister", type: "wheels", cost: "", rarity: "Rare", color: "", item_shop_date_id: date1.id, image_location: "https://rl.insider.gg/en/pc/wheels/canister", image: "")
DailyItem.create(name: "Hasher", type: "wheels", cost: "", rarity: "Very Rare", color: "", item_shop_date_id: date1.id, image_location: "https://rl.insider.gg/en/pc/wheels/hasher", image: "")
DailyItem.create(name: "Hasher: SE", type: "wheels", cost: "", rarity: "Very Rare", color: "", item_shop_date_id: date1.id, image_location: "https://rl.insider.gg/en/pc/wheels/hasher/inverted", image: "")
DailyItem.create(name: "Jak'd", type: "wheels", cost: "", rarity: "Very Rare", color: "", item_shop_date_id: date1.id, image_location: "https://rl.insider.gg/en/pc/wheels/jak_d", image: "")
DailyItem.create(name: "Jak'd: Obverse", type: "wheels", cost: "", rarity: "Exotic", color: "", item_shop_date_id: date1.id, image_location: "https://rl.insider.gg/en/pc/wheels/jak_d/obverse", image: "")
DailyItem.create(name: "Chakram: Holographic", type: "wheels", cost: "", rarity: "Import", color: "", item_shop_date_id: date1.id, image_location: "https://rl.insider.gg/en/pc/wheels/chakram/holographic", image: "")


