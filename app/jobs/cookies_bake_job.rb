class CookiesBakeJob < ApplicationJob
  include CableReady::Broadcaster
    queue_as :default
  
   def self.perform(cookie)
     sleep 5 # perform some complex function here
     cookie.is_baked = true
     cable_ready["oven"].morph(
       selector: "#cookie-status",
       html: ApplicationController.render(partial: "ovens/cookie_status.html.haml", locals: {oven: cookie.storage})
     )
     cable_ready.broadcast
  
   end
  
   def self.cable_ready
    CableReady::Channels.instance
  end
  
  
  end