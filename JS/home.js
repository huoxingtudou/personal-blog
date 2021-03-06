// 主页js
window.onload = function () {
  var father = document.querySelector('.nav').querySelector('ul');
  var first_tabs = document.querySelector('.nav_tab1')
  var url = location.search;
  // 看url里面是否有参数
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strArr = str.split("&");
    var request = {};
    for (var i = 0; i < strArr.length; i++) {
      var key = strArr[i].split("=")[0];
      var value = strArr[i].split("=")[1];
      request[key] = value;
    }
    var storage = window.localStorage;
    var str = storage.getItem(request.userName);
    var data = JSON.parse(str);
    createPnode(data.userName);
  } else {
    alert('当前未登录，请登录！3秒后返回登录页面！');
    setTimeout(function () {
      location.href = "index.html"
    }, 3000)
  }

  function createPnode(info) {
    var span = document.createElement('span');
    span.className = 'username';
    span.innerHTML = info;
    father.insertBefore(span, first_tabs);
  }
  // 监听导航栏，页面滚动就有背景颜色
  this.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    father.style.backgroundColor = "rgba(216, 191, 216, 0.5)";
    $('.icon').show('slow');
    if (scrollTop == 0) {
      father.style.backgroundColor = "";
      $('.icon').hide('normal');
    }
  });
  // 点击开始阅读，页面滚动
  // var a = document.querySelector('.a');
  // var icon = document.querySelector('.icon');
  // a.addEventListener('click', function () {
  //     var timer1 = setInterval(function () {
  //         document.documentElement.scrollTop = 902;
  //         if (document.documentElement.scrollTop = 902) {
  //             clearInterval(timer1)
  //         }
  //     }, 200)
  // });
  // // 点击向上箭头， 页面滚动到顶端
  // // 原生写法没有动画
  // icon.addEventListener('click', function () {
  //     var a = document.documentElement.scrollTop
  //     var timer2 = setInterval(function () {
  //         document.documentElement.scrollTop = 0;
  //         if (document.documentElement.scrollTop == 0) {
  //             clearInterval(timer2);
  //         }
  //     }, 30)
  // });
  // 点击开始阅读，页面滚动到指定位置
  $('.b').click(function () {
    $('html').animate({
      scrollTop: 720
    }, "slow");
  })
  // 点击向上箭头，页面滚动到顶端
  $('.icon').click(function () {
    $("html").animate({
      scrollTop: 0
    }, "slow");
  });

  // 传参数
  var a = document.querySelector('ul').querySelectorAll('a');
  var search = location.search;
  a[0].addEventListener('click', function () {
    location.href = "home.html" + search;
  });

  a[1].addEventListener('click', function () {
    location.href = "log.html" + search;
  });
  a[2].addEventListener('click', function () {
    location.href = "my.html" + search;
  });

  a[3].addEventListener('click', function () {
    location.href = "picture.html" + search;
  });

  a[4].addEventListener('click', function () {
    location.href = "message.html" + search;
  });
  a[5].addEventListener('click', function () {
    location.href = "index.html";
  });
  a[6].addEventListener('click', function () {
    location.href = "regseter.html";
  });
  // 文章也传参
  var article_a = this.document.querySelector('.article_list').querySelectorAll('a');
  article_a[0].addEventListener('click', function () {
    location.href = "articles/article1.html" + search;
  });
  article_a[1].addEventListener('click', function () {
    location.href = "articles/article2.html" + search;
  });
  article_a[2].addEventListener('click', function () {
    location.href = "articles/article3.html" + search;
  });
  article_a[3].addEventListener('click', function () {
    location.href = "articles/article4.html" + search;
  });
  article_a[4].addEventListener('click', function () {
    location.href = "articles/article5.html" + search;
  });
  article_a[5].addEventListener('click', function () {
    location.href = "articles/article6.html" + search;
  });
  // 相册页传参数
  var picture_a = this.document.querySelector('.album_list').querySelector('a');
  picture_a.addEventListener('click', function () {
    location.href = "pictures/picture1.html" + search;
  });
}