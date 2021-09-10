# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryBot.define do
  factory :oven do
    user
    name { "My Oven" } 
  end
end
