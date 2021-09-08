# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :cookie, :class => 'Cookie' do
    association :storage, factory: :oven
    fillings "MyString"
  end
end
