class Cookie < ActiveRecord::Base
  belongs_to :storage, polymorphic: :true
  validates :storage, presence: true
  after_commit :bake_job, on: :create
  
  private

  def bake_job
    CookiesBakeJob.set(wait: 5.seconds).perform_later(self)
  end
end