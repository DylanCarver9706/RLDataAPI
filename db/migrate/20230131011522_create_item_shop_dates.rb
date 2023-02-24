class CreateItemShopDates < ActiveRecord::Migration[7.0]
  def change
    create_table :item_shop_dates do |t|
      t.datetime :date
      t.integer :cost
      t.timestamps
    end
  end
end
