var btn_next = document.querySelector('.btn-next');
btn_next.addEventListener('click', ()=>{


    for(var i = 1; i < 6; i++) {
    
    var taking_for = document.querySelector(`.btn-${i}`);
    var attribute_value = Number(taking_for.getAttribute('for'))
   var increasing_att_value= attribute_value + 5;
    taking_for.setAttribute('for', increasing_att_value);
    taking_for.innerText = increasing_att_value;

    }
})
var btn_previous = document.querySelector('.btn-previous');
btn_previous.addEventListener('click', ()=>{
var button_no = document.querySelector('.btn-1').innerText;
    if(button_no != 1){
    for(var i = 1; i < 6; i++) {
    
    var taking_for = document.querySelector(`.btn-${i}`);
    var attribute_value = Number(taking_for.getAttribute('for'))
   var increasing_att_value= attribute_value - 5;
    taking_for.setAttribute('for', increasing_att_value);
    taking_for.innerText = increasing_att_value;

    }
}
})
var btn_link = document.querySelector('.btn-1');
btn_link.addEventListener('click', ()=>{
    var tag_creaion = document.createElement('a')
tag_creaion.setAttribute('href',"https//www.guvi.in")
})