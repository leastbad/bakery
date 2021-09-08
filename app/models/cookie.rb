class Cookie < ActiveRecord::Base
  belongs_to :storage, polymorphic: :true
  
  validates :storage, presence: true

  def ready?
    true
  end
end
