# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :cookie, :class => 'Cookie' do
    association :storage, factory: :oven
    fillings { "Chocolate Chip" }
  end
end
