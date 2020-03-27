$(function(){

  function addLike(like){
    let html = `<p>お気に入り ${like}</p>
                  <button class="delete-like-btn"></button>`
    $('.btn-test').append(html);
  }
  function decLike(like){
    let html = `<p>お気に入りを解除 ${like}</p>
                <button class="like-btn"></button>`
    $('.btn-test').append(html);
  }

  $('.like-btn').on('click',function(){
    var data = $(this).data('id');
    console.log(data);
    $.ajax({
      url: "/products/" + data + "/likes/like_create",
      type: "POST",
      data: {product_id: data},
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data.length);
      let like = data.length
      $(".btn-content").remove();
      $(".like-btn").remove();
      addLike(like);
    })
    .fail(function(){
    })
  });
  $('.delete-like-btn').on('click',function(){
  var data = $(this).data('id');
  console.log('hoge')
    $.ajax({
      url: "/products/" + data + "/likes/like_destroy",
      type: "POST",
      data: {product_id: data, "_method": "DELETE"},
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data.length);
    })
    // .done(function(data){
    //   console.log(data.length);
  //     let like = data.length
  //     $(".btn-content").remove();
  //     $(".delete-like-btn").remove();
  //     $(".btn-content").append();
  //     $(".like-btn").append();
  //     notLike(like);
  //   })
  // .fail(function(){
  // })

  });
});

