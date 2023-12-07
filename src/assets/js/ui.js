gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
AOS.init();

let mm = gsap.matchMedia();

//datepicker
let Common = {
    init: function () {
      this.common();
    },
    common: function () {
     document.addEventListener('DOMContentLoaded', function () {
      // 모든 inputField와 clearButton을 가져옴
      const inputFields = document.querySelectorAll('.form-control');
      const clearButtons = document.querySelectorAll('.clearButton');

      // 각각의 inputField에 대해 처리
      inputFields.forEach(function (inputField, index) {
        // input에 입력이 있을 때마다 이벤트를 처리
        inputField.addEventListener('input', function () {
          // 입력값이 있으면 지우기 버튼을 표시, 없으면 숨김
          clearButtons[index].style.display = inputField.value.length > 0 ? 'inline-block' : 'none';
        });

        // 지우기 버튼을 눌렀을 때 입력값을 초기화하고 버튼을 숨김
        clearButtons[index].addEventListener('click', function () {
          inputField.value = '';
          clearButtons[index].style.display = 'none';
        });
      });
    });
    $('.certification-content').hover(
      function () {
        $(this).addClass('active')
      },
      function () {
        $(this).removeClass('active')
      }
    );
     // selectbox 커스텀
    $(".select-btn").click(function () {
      $(".select-wrap").toggleClass("show");
    });

    $(".select-wrap .optionitem").click(function () {
      const text = $(this).html();

      $(".select-btn > span").html(text);
      $(".select-wrap").removeClass("show");
    });

  },
};

Common.init();

$(document).ready(function () {
  // 눈표시 클릭 시 패스워드 보이기
  $(".view-pw").on("click", function () {
    $(".form-password").toggleClass("active");

    if ($(".form-password").hasClass("active") == true) {
      $(this).find(".icon-eyes").attr("class", "icon-eyes-out").parents(".form-password").find(".form-control").attr("type", "text");
      // i 클래스                // 텍스트 보이기 i 클래스
    } else {
      $(this).find(".icon-eyes-out").attr("class", "icon-eyes").parents(".form-password").find(".form-control").attr("type", "password");
    }
  });

  // 버튼 탑 이동
  $("#top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

// 파트너스 롤링1
let rollerPartnersFirst = document.querySelector('.rolling-partners.first');
rollerPartnersFirst.id = 'partners1'; // 아이디 부여

let clonePartnersFirst = rollerPartnersFirst.cloneNode(true);
clonePartnersFirst.id = 'partners2';
document.querySelector('.rolling-partners-container.first-container').appendChild(clonePartnersFirst); // wrap 하위 자식으로 부착

document.querySelector('#partners1').style.left = '0px';
document.querySelector('#partners2').style.left = document.querySelector('.rolling-partners.first .img-wrap').offsetWidth + 'px';

rollerPartnersFirst.classList.add('original');
clonePartnersFirst.classList.add('clone');





// 파트너스 롤링2
let rollerPartnersSecond = document.querySelector('.rolling-partners.second');
rollerPartnersSecond.id = 'partners3'; // 아이디 부여

let clonePartnersSecond = rollerPartnersSecond.cloneNode(true);
clonePartnersSecond.id = 'partners4';
document.querySelector('.rolling-partners-container.second-container').appendChild(clonePartnersSecond); // wrap 하위 자식으로 부착

document.querySelector('#partners3').style.left = '0px';
document.querySelector('#partners4').style.left = document.querySelector('.rolling-partners.second .img-wrap').offsetWidth + 'px';

rollerPartnersSecond.classList.add('original');
clonePartnersSecond.classList.add('clone');






// 파트너스 롤링3
let rollerPartnersThird = document.querySelector('.rolling-partners.third');
rollerPartnersThird.id = 'partners5'; // 아이디 부여

let clonePartnersThird = rollerPartnersThird.cloneNode(true);
clonePartnersThird.id = 'partners6';
document.querySelector('.rolling-partners-container.third-container').appendChild(clonePartnersThird); // wrap 하위 자식으로 부착

document.querySelector('.rolling-partners-container.third-container').insertBefore(clonePartnersThird, document.querySelector('#partners5')); // 오리지날 앞에 클론 삽입

document.querySelector('#partners5').style.left = '0px';
document.querySelector('#partners6').style.left = document.querySelector('.rolling-partners.third .img-wrap').offsetWidth + 'px';

rollerPartnersThird.classList.add('original');
clonePartnersThird.classList.add('clone');


$('#viewMenu').click(function(){
  $('.full-screen-menu').show();
})
$('#closeMenu').click(function(){
  $('.full-screen-menu').hide();
})



