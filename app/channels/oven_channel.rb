class OvenChannel < ApplicationCable::Channel
  def subscribed
    stream_from "oven"
  end

  def receive(data)
    puts data["message"]
    ActionCable.server.broadcast("test", "ActionCable is connected")
  end
end
