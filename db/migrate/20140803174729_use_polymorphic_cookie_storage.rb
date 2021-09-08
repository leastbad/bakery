class UsePolymorphicCookieStorage < ActiveRecord::Migration[5.1]
  def up
    add_column :cookies, :storage_id, :integer
    add_column :cookies, :storage_type, :string

    Cookie.reset_column_information
    Cookie.find_each do |cookie|
      cookie.update_columns(storage_id: cookie.oven_id, storage_type: 'Oven')
    end

    remove_column :cookies, :oven_id
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
