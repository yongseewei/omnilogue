module Taggable
  extend ActiveSupport::Concern

  included do
    before_save :set_taggings

    private

    def set_taggings
      mentioned_users.each do |user|
        tagged_users << user
      end
    end

    def mentioned_users
      mentioned_usernames.map do |username|
        User.find_by_username(username)
      end.compact
    end

    def mentioned_usernames
      content.scan(/\B\@(\w+)/).flatten
    end
  end
end
