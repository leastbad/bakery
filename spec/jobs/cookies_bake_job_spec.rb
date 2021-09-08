require 'rails_helper'

RSpec.describe CookiesBakeJob, type: :job do
  scenario 'job performs properly' do 
    cookie = FactoryGirl.create(:cookie)

    expect(cookie.is_baked).to eq nil

    cookie.ready?(cookie)

    expect(cookie.is_baked).to eq true
  end 
end
