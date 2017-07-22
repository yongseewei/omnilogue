require 'google/cloud/language'

class GoogleCloudLanguageService
  def initialize(sentence)
    @content = sentence
    @language = Google::Cloud::Language.new(
      project: 'my-omnilogue',
      keyfile: "#{Rails.root}/app/services/my-omnilogue-03e09869f22f.json"
    )
  end

  def sentiment
    annotation.sentiment
  end

  private

  attr_reader :content, :language

  def document
    language.document content
  end

  def annotation
    document.annotate
  end
end
