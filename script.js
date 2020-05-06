$(document).ready(function(){

var rand_num = Math.floor(Math.random() * 100); 
console.log(rand_num);


var hints = '';

var clicks = 0;
var player1click = 0;
var player2click = 0;




$("#input_num").click(function() {
    var num = $('#you_num').val();
    var pl1 = $('#player1_name').val();
    var pl2 = $('#player2_name').val();
    clicks += 1;
    if (clicks%2){
        if (num == rand_num) {
            rand_num = Math.floor(Math.random() * 100);
            console.log(rand_num);

            hints += pl1 + ' вгадав' + '<br>' ;
            hints += 'Game over' + '<br>' ;
            var result1 = player1click;
            player2click = 0;
            alert("Переможець: " + pl1 + ". " + "Кількість спроб: " + (result1+1));
            player1click = 0;
            
        } else if (num > 100 || num < 0){
            hints += pl1 + ' неправильний ввід числа' + '<br>';
        }
        else {
            hints += pl1 + ' неправильно' + '<br>' ;
        
        if(num>rand_num){
                hints += pl1 + ' загадане число менше за ' + num + '<br>';
            }
            else if(num<rand_num){
                hints += pl1 + ' загадане число більше за ' + num + '<br>';
            }
        }
        player1click +=1;
        $('#rez').html(hints);
    }
    else{
        if (num == rand_num) {
            rand_num = Math.floor(Math.random() * 100);
            console.log(rand_num);

            hints += pl2 + ' вгадав' + '<br>' ;
            hints += 'Game over' + '<br>' ;
            var result2 = player2click;
            player1click = 0;
            
            alert("Переможець: " + pl2 + ". " + "Кількість спроб: " + (result2+1));
            player2click = 0;
            
            
        
        } else if (num > 100 || num < 0){
            hints += pl2 + ' неправильний ввід числа' + '<br>';
        }
        else {
            hints += pl2 + ' неправильно' + '<br>' ;
        
        if(num>rand_num){
                hints += pl2 + ' загадане число менше за ' + num + '<br>';
            }
            else if(num<rand_num){
                hints += pl2 + ' загадане число більше за ' + num + '<br>';
            }
        }
        player2click +=1;
        $('#rez').html(hints);
    }
    console.log(player1click, player2click);
       
});
$("#restart").click(function() {
    rand_num = Math.floor(Math.random() * 100);
    console.log(rand_num);
});
})