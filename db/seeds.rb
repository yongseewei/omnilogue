print "\nSeeding database..."

PASSWORD = "123456789"
User.create(
  email: "user@example.com",
  password: PASSWORD,
  password_confirmation: PASSWORD,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name
)

3.times do |i|
  c = Category.create(name: Faker::Company.catch_phrase)
  Subcategory.create(name: Faker::Company.catch_phrase, category: c)
end

20.times do |i|
  user = User.create(
    username: Faker::Internet.user_name,
    email: "user-#{i}@example.com",
    password: PASSWORD,
    password_confirmation: PASSWORD,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end

50.times do |i|
  question = Question.create!(
    title: Faker::Company.catch_phrase,
    content: "#{Faker::Company.catch_phrase} #{Faker::Company.buzzword}",
    user_id: rand(20)+1,
    subcategory_id: rand(3)+1
  )
end

100.times do |i|
  answer = Answer.create!(
    content:  "#{Faker::Company.catch_phrase} #{Faker::Company.buzzword}",
    question_id: rand(50)+1,
    user_id: rand(20)+1,
    sentiment_score: Random.rand(-1.00..1.00)
  )
end

50.times do |i|
  comment = Comment.create(
    content: "#{Faker::Company.catch_phrase} #{Faker::Company.buzzword}",
    answer_id: rand(50)+1,
    user_id: rand(20)+1,
    sentiment_score: Random.rand(-1.00..1.00)
  )
end

print " done!\n\n"
