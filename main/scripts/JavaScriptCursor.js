$(document).ready(function(){
    let $cursorX = 0, $cursorY = 0, $top = 0, $left = 0, $leftd = 0, $topd = 0;

    $(document).mousemove(e => {
        $cursorX = e.clientX;
        $cursorY = e.clientY;
    });

    setInterval(() =>{
        $leftd += ($cursorX - $leftd);
        $topd += ($cursorY - $topd);
        $('.dot').css({left: $leftd + 'px', top: $topd + 'px'});
    }, 1);

    setInterval(() =>{
        $left += ($cursorX - $left) / 15;
        $top += ($cursorY - $top) / 15;
        $('.cursor').css({left: $left + 'px', top: $top + 'px'});
    }, 5);
});