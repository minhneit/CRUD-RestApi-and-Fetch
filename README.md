# Getting started


Install JSON Server</br>
<pre>npm install -g json-server</pre>

Create a db.json file with some data</br>

<pre>{
  {
  "courses": [
    {
      "name": "Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản cho người mới",
      "description": "Với hơn 100 videos trong khoá học evondev sẽ dạy các bạn đi từ kiến thức cơ bản nhất cho đến nâng cao thông qua các videos kèm bài tập mỗi chương. Ngoài ra evondev còn chia sẻ thêm cho các bạn những kiến thức liên quan bổ sung như cách tư duy, định hướng, phân tích giao diện, cách dùng phần mềm code hiệu quả, cách cải thiện mắt thẩm mỹ UI UX...Từ đó các bạn có thể tự tay code các giao diện từ A-Z với kiến thức về HTML CSS đã học mà không cần phải dùng bất kỳ thư viện nào.",
      "id": 3
    },
    {
      "name": "Khóa học ReactJS cơ bản đến nâng cao dành cho người mới bắt đầu",
      "description": "ReactJS đang là một thư viện phổ biến hiện nay đang được rất nhiều người dùng, và các nhà tuyển dụng cũng đang cần. Việc nắm vững kiến thức về ReactJS sẽ giúp các bạn có cơ hội có được việc làm cao hơn cũng như giúp bạn mau chóng trở thành 1 Frontend Developer thực thụ hơn. Với hàng trăm videos trong khóa học mình tin rằng khóa học sẽ cung cấp đủ kiến thức để giúp bạn đạt được những thành quả đó",
      "id": 4
    },
    {
      "name": "Khoá học Javascript từ cơ bản đến nâng cao dành cho người mới",
      "description": "Với hơn hàng trăm videos được xây dựng kỹ càng và tỉ mỉ, trau chuốt nội dung. Mình tin rằng nội dung mà mình truyền đạt cho các bạn trong khoá học này sẽ giúp các bạn học được Javascript một cách hiệu quả và dễ dàng hơn bao giờ hết. Sau thành công 2 khoá về HTML CSS mình tiếp tục làm ra khoá Javascript này, là ngôn ngữ tiếp theo mà các bạn cần phải học để trở thành một Frontend Developer thực thụ. Còn chờ gì nữa mà không sở hữu ngay khoá học chất lượng này nào.",
      "id": 5
    }
  ]
}
}</pre>

Start JSON Server</br>

<pre>json-server --watch db.json</pre>
