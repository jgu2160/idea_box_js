1.upto(10) do |number|
  Idea.create(title: "Idea #{number}", body: "#{number} is the greatest number", quality: rand(3))
end
