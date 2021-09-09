class CookiesBakeJob < ApplicationJob
  include CableReady::Broadcaster
  queue_as :default

 def self.perform(oven)
   sleep 5 # perform function here
   oven.cookie.is_baked = true

   cable_ready["oven"].morph(
    selector: "#cookie-status",
    html: render(partial: "app/views/ovens/_cookie_status.html.haml", locals: {oven: @oven})
  )
  cable_ready.broadcast
 end

end
