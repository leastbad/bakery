class AddQuantityToCookies < ActiveRecord::Migration[6.1]
  def change
    add_column :cookies, :quantity, :integer
  end
end
