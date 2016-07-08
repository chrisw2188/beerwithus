class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name
      t.string :avb
      t.string :type
      t.text :description
      t.references :brewery, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
