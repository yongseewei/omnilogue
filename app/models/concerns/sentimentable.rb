module Sentimentable
  extend ActiveSupport::Concern
  require 'action_view'
  include ActionView::Helpers::SanitizeHelper

  included do
    before_save :apply_sentiment

    private

    def apply_sentiment
      self.sentiment_score = begin
                               sentiment.score
                             rescue
                               nil
                             end
    end

    def stripped_content
      strip_tags(content)
    end

    def sentiment
      GoogleCloudLanguageService.new(stripped_content).sentiment
    end
  end
end
