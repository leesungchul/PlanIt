require 'spec_helper'

feature "sign-in user" do
  Capybara.default_wait_time = 5
  Capybara.reset_sessions!

  before (:each) do
    visit '/'
    expect(page).to have_content "Welcome To The PlanIT"
    within("#my-nav") do
      fill_in 'username', :with => "Guest"
      fill_in 'password', :with => "111111"
      click_on 'Sign in'
    end
  end
  it "redirects to welcome page after sign-in" do
    expect(page).to have_content "Welcome Back"
  end

  it "shows username on the homepage after sign-in" do
    expect(page).to have_content "Guest"
  end
end

feature "sign-up user", :js => true do
  Capybara.default_wait_time = 5
  Capybara.reset_sessions!
  before do
    visit '/'
    click_on 'Sign Up'
    within('#sign-up-modal') do
      fill_in 'username', :with => 'TestUser4'
      fill_in 'email', :with => 'test4@test.com'
      fill_in 'password', :with => '111111'
      click_on 'SUBMIT FORM'
    end
  end
  it 'redirects to welcome page after sign-in with username displayed' do
    expect(page).to have_content 'Welcome Back'
    expect(page).to have_content 'TestUser4'
  end

end

