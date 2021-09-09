module ApplicationCable
  class Connection < ActionCable::Connection::Base

  indentified_by :session_id
    def connect 
      self.session_id = request.session.id
    end 
  end
end
