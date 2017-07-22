module Sentimentable
  extend ActiveSupport::Concern
  require 'action_view'
  include ActionView::Helpers::SanitizeHelper

  included do
    before_save :apply_sentiment
    after_save :update_user_sentiment

    private

    def apply_sentiment
      self.sentiment_score = begin
                               sentiment.score
                             rescue
                               0
                             end
    end

    def update_user_sentiment
      new_score = self.user.sentiment_score += self.sentiment_score
      self.user.update_attributes(sentiment_score:new_score )
    end

    def stripped_content
      strip_tags(content)
    end

    def sentiment
      GoogleCloudLanguageService.new(stripped_content).sentiment
    end
  end
end
