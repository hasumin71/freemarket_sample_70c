json.array! @likes do |like|
  json.id like.id
  json.user_id like.user_id
  json.product_id like.product_id
end