require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validate' do
    let(:user) { build(:user) }
    it { expect(user).to be_valid }
  end
end
