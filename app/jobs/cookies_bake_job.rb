class CookiesBakeJob < ApplicationJob
  queue_as :default

 def self.perform(cookie)
   sleep 5
   cookie.is_baked = true
 end

end
