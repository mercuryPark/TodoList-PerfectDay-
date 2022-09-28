$(document).ready(function() {

    $(".choiceOne-one").click(function(){
		$(location).attr("href", "./calendar")
	})

    $('.backIndex').click(function(){
  
        window.history.back();
    })
    

// 변수 모음
// let step = 0;

// date
let today = new Date();
// var year = today.getFullYear();
var week_array = new Array('일', '월', '화', '수', '목', '금', '토');
var today_num = new Date().getDay();
var month = ('' + (today.getMonth() + 1)).slice(-2);
var day = ('' + today.getDate()).slice(-2);
var dateString = month  + '월 ' + day + '일 ' + week_array[today_num] + '';
$('#date').text(dateString)

$('.choiceModal').click(function(){
    $(location).attr("href", "./credit")
})



// step - 1 이름 적기
// $('input.clientName').keypress(function(i){
//     let clientName = $('.clientName').val();
//     if(i.keyCode == 13){
       
//     if($('.clientName').val().length == 0){
//         alert('이름을 입력해주세요.')
//     }
//     $('.stepOne').addClass('none')
//     $('.stepTwo').removeClass('none')
//     $('#name').text(clientName + '')
//     $('.clientName').val('')
// }
// })

// step - 2 캘린더, 투두리스트 선택 폼
$('.stepTwo .choice .choiceTwo').click(function(){
     
    $(location).attr("href", "./todolist")
})

// step - 3 할일 목록 리스트 생성
function todolist(){
    let setup = $('.detailList').val();
    if(setup.length > 0){
    $('.detailBox ul').append('<li class="listItem"><span class="delete"></span>' + setup + 
    '</li>')
    $('input.detailList').val('')
}
}
 // step - 3 뒤로가기
$('.backButton').click(function(){
    $(location).attr("href", "./")
 })
 
// step - 3 엔터 누르면 리스트 저장
$('input.detailList').keypress(function(e){
    if(e.keyCode == 13){
       todolist()
    }
})

// step - 3 버튼 클릭시 리스트 저장
 $('.stepThree .addList').click(function(){
    todolist()
 })

 // step - 3 리스트 전체 삭제
 $('.stepThree .allDelete').click(function(){
     $('.listItem').remove()
 })

 // step - 3 리스트 클릭시 글자에 줄 긋기
 $(document).on('click','.listItem', function(){
    $(this).toggleClass('toggleLine')
    console.log(this)
 })

// step - 3 리스트 개별 삭제
 $(document).on('click','.delete', function(){
    $(this).parent().remove()
    console.log(this)
 })
 $(document).on('mouseover','.delete', function(){
    $(this).addClass('mouseOver')
    console.log(this)
 })
 $(document).on('mouseout','.delete', function(){
    $(this).removeClass('mouseOver')
    console.log(this)
 })


// $('.stepFour').hide()
// step - 4 캘린더
// $('.stepTwo .choice .choiceOne').click(function(){
//     $('.stepTwo').addClass('none');
//     $('.stepThree').addClass('none')
// $('.stepFour').show()



// })

// 글자 나타나는 효과

var typingBool = false; 
var typingIdx=0; 

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".stepOne .question span").text(); 

typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

if(typingBool==false){ 
  // 타이핑이 진행되지 않았다면 
   typingBool=true;     
   var tyInt = setInterval(typing,100); // 반복동작 
   
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
    $(".typing").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다. 
    typingIdx++; 
   } else{ 
     //끝나면 반복종료 
    clearInterval(tyInt); 
   } 
}  




})