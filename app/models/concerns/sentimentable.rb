module Sentimentable
  extend ActiveSupport::Concern

  included do
    before_save :apply_sentiment

    private

    def apply_sentiment
      self.sentiment_score = sentiment.score
    end

    def sentiment
      GoogleCloudLanguageService.new(content).sentiment
    end
  end
end
