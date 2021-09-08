class Cookie < ActiveRecord::Base
  belongs_to :storage, polymorphic: :true
  
  validates :storage, presence: true

  attr_accessor :is_baked

  def ready?(cookie)
    if !cookie.is_baked
      CookiesBakeJob.delay.perform(cookie)
    end
    cookie.is_baked  

  end 

end