feature 'Oven' do
  scenario 'Creating an account' do
    sign_up_with('myemail@test.com', 'abcdefgh', 'abcdefgh')

    oven = User.last.ovens.first
    expect(oven).to_not be_nil
    expect(oven.name).to eq('My First Oven')
  end

  scenario 'Viewing an oven page' do
    user = create_and_signin
    oven = user.ovens.first

    visit root_path
    click_link "View your ovens"
    click_link oven.name

    expect(current_path).to eq(oven_path(oven))
    expect(page).to have_content oven.name
  end
end
