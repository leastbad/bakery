require 'support/helpers/controller_helpers'
RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.include ControllerHelpers, :type => :controller
end
