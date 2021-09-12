source 'https://rubygems.org'
ruby '2.7.3'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 6.1.4.1'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails'

gem 'jquery-rails'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'

# Use Redis adapter to run Action Cable in production
gem "redis", ">= 4.2.5"

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'devise'

gem 'figaro'

gem 'foundation-rails', '~> 5.3'

gem 'haml-rails'

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'

# Use Puma as the app server
gem 'puma', '~> 5.2'

gem 'delayed_job_active_record'

gem 'daemons'

gem 'factory_bot_rails'

group :development do
  gem 'selenium-webdriver'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # gem 'spring'
  # gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'html2haml'
  # gem 'spring-commands-rspec'
  gem "ruby_jard"
end

group :development, :test do
  gem 'dotenv-rails'

  gem 'rspec-rails'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'faker'
  gem 'shoulda-matchers', require: false
  gem 'rspec-collection_matchers'
  gem 'rspec_junit_formatter'
  gem 'rails-controller-testing'
end

gem "cable_ready", "5.0.0.pre3"
gem "bootsnap", ">= 1.4.4", require: false
gem "webpacker", "~> 5.4.2"