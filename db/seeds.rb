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

['Open Innovation', 'Automation', 'Artificial Intelligence', 'AR/VR', 'UI/UX',
  'Block Chain'].map do |category_name|
  Category.create!(name: category_name)
end.map do |category|
  5.times { category.subcategories.create!(name: Faker::Company.catch_phrase) }
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
  body = ""
  rand(10..20).times do
    body += Faker::Hacker.say_something_smart.gsub!('!', '.') + " "
  end
  question = Question.create!(
    title: "#{['What is', 'How do I fix', 'Do I need', 'How fast is'].sample} "\
      "the #{Faker::Hacker.adjective} #{Faker::Hacker.noun}?",
    content: body,
    user_id: rand(20)+1,
    subcategory_id: rand(3)+1
  )
end

100.times do |i|
  body = ""
  rand(10..20).times do
    body += Faker::Hacker.say_something_smart.gsub!('!', '.') + " "
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
    body += Faker::Hacker.say_something_smart.gsub!('!', '.') + " "
  end
  comment = Comment.create(
    content: body,
    answer_id: rand(50)+1,
    user_id: rand(20)+1,
    sentiment_score: Random.rand(-1.00..1.00),
    skip_sentiment: true
  )
end

50.times do |i|
  comment = Comment.create(
    content: Faker::MostInterestingManInTheWorld.quote,
    answer_id: rand(50)+1,
    user_id: rand(20)+1,
    sentiment_score: Random.rand(-1.00..1.00),
    skip_sentiment: true
  )
end

print " done!\n\n"
