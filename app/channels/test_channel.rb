app/channels/test_channel.rb
class TestChannel < ApplicationCable::Channel
  def subscribed
    stream_from "test"
  end
​
  def receive(data)
    puts data["message"]
    ActionCable.server.broadcast("test", "ActionCable is connected")
  end
end