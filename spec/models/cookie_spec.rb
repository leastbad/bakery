require 'rails_helper'

describe Cookie do
  subject { Cookie.new }

  describe "associations" do
    it { is_expected.to belong_to(:storage) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:storage) }
  end
end
