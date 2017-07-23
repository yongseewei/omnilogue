print "\nSeeding database..."

PASSWORD = "123456789"
User.create(
  email: "user@example.com",
  password: PASSWORD,
  password_confirmation: PASSWORD,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  username: "genericusername"
)

3.times do |i|
  c = Category.create(name: Faker::Company.catch_phrase)
  Subcategory.create(name: Faker::Company.catch_phrase, category: c)
end

20.times do |i|
  user = User.create!(
    email: "user-#{i}@example.com",
    password: PASSWORD,
    password_confirmation: PASSWORD,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.user_name
  )
end

50.times do |i|
  title = ""
  body = ""
  rand(1..2).times do
    title += Faker::Hacker.say_something_smart + " "
  end
  rand(1..5).times do
    body += Faker::Hacker.say_something_smart + " "
  end
  title.gsub!('!', '?')
  body.gsub!('!', '.')
  question = Question.create!(
    title: title,
    content: body,
    user_id: rand(20)+1,
    subcategory_id: rand(3)+1
  )
end

100.times do |i|
  body = ""
  rand(1..10).times do
    body += Faker::Hacker.say_something_smart + " "
  end
  answer = Answer.create!(
    content: body,
    question_id: rand(50)+1,
    user_id: rand(20)+1,
    sentiment_score: Random.rand(-1.00..1.00),
    skip_sentiment: true
  )
end

100.times do |i|
  body = ""
  rand(1..10).times do
    body += Faker::Hacker.say_something_smart + " "
  end
  comment = Comment.create(
    content: body,
    answer_id: rand(50)+1,
    user_id: rand(20)+1,
    sentiment_score: Random.rand(-1.00..1.00),
    skip_sentiment: true
  )
end

print " done!\n\n"
