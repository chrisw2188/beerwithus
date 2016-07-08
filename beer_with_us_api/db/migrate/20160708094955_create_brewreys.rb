class CreateBrewreys < ActiveRecord::Migration
  def change
    create_table :brewreys do |t|
      t.string :name
      t.integer :lat
      t.integer :lng
      t.text :description

      t.timestamps null: false
    end
  end
end
