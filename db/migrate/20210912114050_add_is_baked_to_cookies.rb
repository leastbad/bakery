class AddIsBakedToCookies < ActiveRecord::Migration[6.1]
  def change
    add_column :cookies, :is_baked, :boolean, default: false
  end
end
