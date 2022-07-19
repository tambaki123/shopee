var hearts = document.querySelectorAll('.home-product-item__heart');
console.log(hearts);
var check =true;
for(i=0; i<hearts.length; i++){
    var heart = hearts[i];
    heart.onclick = function(){
        if(check) {
            this.style.color = 'red';
            check=false;
        }else{
            this.style.color = '#757474';
            check=true;
        }
    };
}

var starts = document.querySelectorAll(".home-product-item__rate-gold-star");
console.log(starts);
for (var i=0; i<starts.length; i++){
    var start = starts[i];
    start.onclick = function(){
        if(check) {
            start.style.color = '#f8f80c';
            check=false;
        }else{
            start.style.color = '#d5d5d5';
            check=true;
        }
    };
}