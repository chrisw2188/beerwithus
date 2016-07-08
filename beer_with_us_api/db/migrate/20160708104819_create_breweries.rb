class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :name
      t.integer :lat
      t.integer :lng
      t.string :style
      t.text :description

      t.timestamps null: false
    end
  end
end
