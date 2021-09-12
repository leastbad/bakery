class CookiesBakeJob < ApplicationJob
  include CableReady::Broadcaster
  queue_as :default
  
  def perform(cookie)
    cookie.update_attribute :is_baked, true
    cable_ready["oven"].morph(
      selector: "#cookie-status",
      html: render(partial: "ovens/cookie_status", locals: {oven: cookie.storage})
    ).broadcast
  end
end