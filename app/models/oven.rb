class Oven < ActiveRecord::Base
  include CableReady::Broadcaster

  belongs_to :user
  has_one :cookie, as: :storage

  validates :user, presence: true


  after_update do
    cable_ready["ovens"].morph(
      selector: ".cookie-info"
      html: ApplicationController.render(self)
    )
    cable_ready.broadcast
  end
end
