count = {
    t: 0,
    s: 0,
    speed: function(data = this.t, data2 = this.s){
        let result = data/data2;
        return result;
    }
}
count2 = {
    iv: 0,
    fv: 0,
    t: 0,
    aceleration: function(data1 = this.fv, data2 = this.iv, data3 = this.t){
        let result2 = (data1 - data2)/data3
        return result2;
    }
}
force = {
    a: 0,
    m: 0,
    force: function(data = this.a, data2 = this.m){
        let result3 = data*data2;
        return result3;
    }
}
document.getElementById("count").addEventListener("click", function(){
    count.t = document.getElementById("distance").value;
    count.s = document.getElementById("time").value;
    document.getElementById("answer").value = count.speed().toFixed(2) + " m/s";
});
document.getElementById("aceleration").addEventListener("click", function(){
    count2.iv = document.getElementById("velocity").value;
    count2.fv = document.getElementById("velocity2").value;
    count2.t = document.getElementById("time2").value;
    document.getElementById("answer").value = count2.aceleration().toFixed(2) + " m/s²";
});
document.getElementById("calculate").addEventListener("click", function(){
    force.a = document.getElementById("acel").value;
    force.m = document.getElementById("mass").value;
    document.getElementById("answer").value = force.force().toFixed(2) + " N"
});