let input, search, pr, result, result_arr, loc_HTML;

function func_convert() {
    loc_HTML = document.body.innerHTML;
}

setTimeout(func_convert, 5);

function FindOnPage(name, status) {

    input = document.getElementById(name).value;

    function FindOnPageGo() {
        search = '/' + input + '/g';
        pr = document.body.innerHTML;
        result = pr.match(/>(.*?)</g);
        result_arr = [];

        let warning = true;
        for (let elem = 0; elem < result.length; elem++) {
            if (result[elem].match(eval(search)) != null) {
                warning = false;
            }
        }

        function sleep(ms) {
            alert('Извините, но мы ничего не нашли(');
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        if (warning) {
            sleep(1)
            window.location.reload();
        }

        for (let elem = 0; elem < result.length; elem++) {
            result_arr[elem] = result[elem].replace(eval(search), '<span style="background-color:#48aee2;">' + input + '</span>');
        }
        for (let elem = 0; elem < result.length; elem++) {
            pr = pr.replace(result[elem], result_arr[elem])
        }
        document.body.innerHTML = pr;
    }

    function FindOnPageBack() {
        document.body.innerHTML = loc_HTML;
    }

    if (status) {
        FindOnPageBack();
        FindOnPageGo();
    }
    if (!status) {
        FindOnPageBack();
    }
}