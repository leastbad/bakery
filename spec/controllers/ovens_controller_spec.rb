require 'spec_helper'

describe OvensController do
  let(:user) { FactoryGirl.create(:user) }

  describe 'GET index' do
    let(:the_request) { get :index }

    context "when not authenticated" do
      before { sign_in nil }

      it "blocks access" do
        the_request
        expect(response).to redirect_to new_user_session_path
      end
    end

    context "when authenticated" do
      before { sign_in user }

      it "allows access" do
        the_request
        expect(response).to_not be_a_redirect
      end

      it "assigns the user's ovens" do
        the_request

        expect(assigns(:ovens)).to eq(user.ovens)
      end
    end
  end

  describe 'GET show' do
    let(:oven) { FactoryGirl.create(:oven, user: user) }
    let(:the_request) { get :show, params: { id: oven.id } }

    context "when not authenticated" do
      before { sign_in nil }

      it "blocks access" do
        the_request
        expect(response).to redirect_to new_user_session_path
      end
    end

    context "when authenticated" do
      before { sign_in user }

      it "allows access" do
        the_request
        expect(response).to_not be_a_redirect
      end

      it "assigns the @oven" do
        the_request
        expect(assigns(:oven)).to eq(oven)
      end

      context "when requesting someone else's oven" do
        let(:oven) { FactoryGirl.create(:oven) }

        it "blocks access" do
          expect {
            the_request
          }.to raise_error(ActiveRecord::RecordNotFound)
        end
      end
    end
  end

  describe 'POST empty' do
    let(:oven) { FactoryGirl.create(:oven, user: user) }
    let(:the_request) { post :empty, params: { id: oven.id } }

    context "when not authenticated" do
      before { sign_in nil }

      it "blocks access" do
        the_request
        expect(response).to redirect_to new_user_session_path
      end
    end

    context "when authenticated" do
      before { sign_in user }

      it "allows access" do
        expect {
          the_request
        }.to_not raise_error
      end

      it "assigns the @oven" do
        the_request
        expect(assigns(:oven)).to eq(oven)
      end

      it "moves the oven's cookie to the user" do
        cookie = FactoryGirl.create(:cookie, storage: oven)

        the_request

        expect(oven.cookie).to be_nil
        expect(user.stored_cookies.to_a).to match_array([cookie])
      end

      context "when requesting someone else's oven" do
        let(:oven) { FactoryGirl.create(:oven) }

        it "blocks access" do
          expect {
            the_request
          }.to raise_error(ActiveRecord::RecordNotFound)
        end
      end
    end

  end
end
