class OvenChannel < ApplicationCable::Channel
  def subscribed
    stream_from "ovens"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
