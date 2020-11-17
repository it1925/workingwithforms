count = {
    t: 0,
    s: 0,
    speed: function(data = this.t, data2 = this.s){
        let result = data/data2;
        return result;
    }
}

document.getElementById("count").addEventListener("click", function(){
    count.t = document.getElementById("distance").value;
    count.s = document.getElementById("time").value;
    document.getElementById("answer").value = count.speed().toFixed(2) + "m/s";
});