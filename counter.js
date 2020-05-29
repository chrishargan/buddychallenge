window.onload = startCounter;
function startCounter(){
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        var current = start;
        var range = end - start;
        var increment = end > start ? 1 : -1;
        var step = Math.abs(Math.floor(duration / range));
        var timer = setInterval(() => {
                current += increment;
                obj.innerHTML = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("guests", 0, 300, 3000);



}

