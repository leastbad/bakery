class Cookie < ActiveRecord::Base
  belongs_to :storage, polymorphic: :true
  
  validates :storage, presence: true

  def ready?(cookie)
    if !cookie.is_baked
      CookiesBakeJob.delay.perform(cookie)
    end
    cookie.is_baked  

  end 

end