let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');

let people_index = 4;

people_less.addEventListener('click',()=>{
    people_index -= 1;

    if(people_index <= 0){
        people_index = 1;
        people.value = people_index + ' people ';
    }else{
        people.value = people_index + ' people ';
    }
})


people_more.addEventListener('click',()=>{
    people_index += 1;

    if(people_index >= 4){
        people_index = 4;
        people.value = people_index + ' people ';
    }else{
        people.value = people_index + ' people ';
    }
})

let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');
let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');


checkin.addEventListener('change',()=>{
    let checkin_value = checkin.value;
    // console.log(checkin_value); // 3 // to check it into browser console after clicking on date

    let dates = new Date(checkin_value);
    let dates2 = new Date();

    const week = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    let day = week[dates.getDay()];
    // console.log(day);  // day dikhyega i.e sun,mon,tue ....etc

    // let day = dates.getDay();
                    // day ki value milega-- 0,1,2,3,4,5,6
    // console.log(day);   // same checl on console of browser of website

    // let date = checkin_value.slice(8, 10);
    let date = dates.getDate();
    // console.log(date) ;   // date ki value milayega --
    // console.log(date);


    // for months

    var monts = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    let month = monts[dates.getMonth()];
    // console.log(month);

    if(dates < dates2){
        console.log('No Date');
    } else {
        checkin_data.innerText = day + ' , ' + date + ' ' + month ;
    }
})


// let checkout_data = document.getElementById('checkout_data');
// let checkout = document.getElementById('checkout_data');
// let checkin_data = document.getElementById('checkin_data');
// let checkin = document.getElementById('checkin');


checkout.addEventListener('change',()=>{
    let checkout_value = checkout.value;
    let checkin_value = checkin.value;
    // console.log(checkin_value); // 3 // to check it into browser console after clicking on date

    let dates = new Date(checkout_value);
    let dates2 = new Date(checkin_value);

    const week = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    let day = week[dates.getDay()];
    // console.log(day);  // day dikhyega i.e sun,mon,tue ....etc

    // let day = dates.getDay();
                    // day ki value milega-- 0,1,2,3,4,5,6
    // console.log(day);   // same checl on console of browser of website

    // let date = checkout_value.slice(8, 10); //OR
    let date = dates.getDate();
    // console.log(date);


    // for months

    var monts = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let month = monts[dates.getMonth()];
    // console.log(month);

    if(dates < dates2){
        console.log('No Date');
    } else {
        console.log( day + ' , ' + date + ' ' + month );
        checkout_data.innerText = day + ' , ' + date + ' ' + month ;
    }
})




// for less and more button 

let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');
let checkout_more = document.getElementById('checkout_more');
let checkout_less = document.getElementById('checkout_less');


checkin_more.addEventListener('click',()=>{
    const week = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    var monts = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1 ) ;

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = monts[tomorrow.getMonth()];

    checkin_data.innerText = day + ' , ' + date + ' ' + month ;
}) 



checkin_less.addEventListener('click',()=>{
    const week = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    var monts = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let today = new Date();
    // let tomorrow = new Date(today);

    // tomorrow.setDate(tomorrow.getDate() + 1 ) ;

    let day = week[today.getDay()];
    let date = today.getDate();
    let month = monts[today.getMonth()];

    checkin_data.innerText = day + ' , ' + date + ' ' + month ;
})


checkout_more.addEventListener('click',()=>{
    const week = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    var monts = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 2 ) ;

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = monts[tomorrow.getMonth()];

    checkout_data.outnerText = day + ' , ' + date + ' ' + month ;
}) 

checkout_less.addEventListener('click',()=>{
    const week = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    var monts = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1 ) ;

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = monts[tomorrow.getMonth()];

    checkout_data.innerText = day + ' , ' + date + ' ' + month ;
})

const images = [
    "url(img/three-dimensional-house-model.jpg)no-repeat center/cover",
    "url(img/3d-rendering-house-model (1).jpg)no-repeat center/cover",
    "url(img/3d-rendering-house-model (2).jpg)no-repeat center/cover"
]

let index = 1;


let h6 = document.getElementById('h6');

h6.innerText = "+" + images.length;

let btn_left = document.getElementById('btn_left');
btn_right = documnet.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click',()=>{
    index -= 1;
    if (index < 0 ){
        // index +=images.length;
        index = (images.length) -1 ;
    }

    style.setProperty('--background', images[index])
})
btn_right.addEventListener('click',()=>{
    index ++ 
    if (index > (images.length) -1 ){
        // index +=images.length;
        index = 0 ;
    }

    style.setProperty('--background', images[index])
})