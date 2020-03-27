class LikesController < ApplicationController
  def like_create
    # binding.pry
    @product = Product.find(params[:product_id])
    #お気に入りを押すとuser_id,product_idがlikeテーブルに反映される
    Like.create(user_id: current_user.id, product_id: @product.id)

    @likes = Like.where(product_id: @product.id)
    #   respond_to do |format|
    #   format.json
    # redirect_back(fallback_location: root_path)
    #お気に入りの数をすぐに反映させる。
  end 

  def like_destroy
    @product = Product.find(params[:product_id],)
    Like.destroy(user_id: current_user.id, product_id: @product.id)
    @likes = Like.where(product_id: @product.id)
  end



end
