class Cookie < ActiveRecord::Base
  belongs_to :storage, polymorphic: :true
  
  validates :storage, presence: true

  attr_accessor :is_baked

  def ready?(oven)
    if !oven.cookie.is_baked
      CookiesBakeJob.delay.perform(oven)
    end
    oven.cookie.is_baked  

  end 

end