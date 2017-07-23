class User < ApplicationRecord
  #, if: ->(obj){ obj.status_id.present? and obj.status_id_changed? }
  before_update :flag, if: :sentiment_score_changed?

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook]

  has_many :questions
  has_many :answers
  has_many :comments
  has_many :users
  has_many :votes
  has_many :taggings
  has_many :tagged_questions, through: :taggings,
           source: :article, source_type: 'Question'
  has_many :tagged_answers, through: :taggings,
           source: :article, source_type: 'Answer'
  has_many :tagged_comments, through: :taggings,
           source: :article, source_type: 'Comment'

  validates :username, presence: true, uniqueness: true

  def self.from_omniauth(auth)
	  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
	    user.email = auth.info.email
	    user.password = Devise.friendly_token[0,20]
	    user.first_name = auth.info.first_name   # assuming the user model has a name
	    user.last_name = auth.info.last_name   # assuming the user model has a name
	    # user.image = auth.info.image # assuming the user model has an image
	    # If you are using confirmable and the provider(s) you use validate emails,
	    # uncomment the line below to skip the confirmation emails.
	    # user.skip_confirmation!
	  end
	end

	 def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def rating
    comments.pluck(:vote_sum).inject(:+) + answers.pluck(:vote_sum).inject(:+)
  end

  private

  def need_to_flag?
    sentiment_score < -3
  end

  def flag
    update_column(:is_flagged, true) if need_to_flag?
  end
end
