class OvenChannel < ApplicationCable::Channel
  def subscribed
    stream_from "oven"
  end

end
