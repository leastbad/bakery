class CreateOvens < ActiveRecord::Migration[5.1]
  def change
    create_table :ovens do |t|
      t.references :user, index: true
      t.string :name

      t.timestamps
    end
  end
end
