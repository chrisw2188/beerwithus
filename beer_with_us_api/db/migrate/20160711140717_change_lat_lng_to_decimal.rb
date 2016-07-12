class ChangeLatLngToDecimal < ActiveRecord::Migration
  def change
    change_column :breweries, :lat, :decimal
    change_column :breweries, :lng, :decimal
  end
end
