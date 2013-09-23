$(window).load(function () {

    var currentProductClass;
    var currentProductInfoClass;

    var i = 1;

    function productSwitcher() {

        $(currentProductClass).fadeOut(500, "easeOutSine");

        currentProductClass = ".p" + i;
        currentProductInfoClass = ".pI" + i;

        $(currentProductClass).fadeIn(500, "easeInSine");
        $(currentProductInfoClass).fadeIn(500, "easeInSine");

        setTimeout(function () {

            $(currentProductInfoClass).fadeOut(500, "easeOutSine", function () {

                i++;

                if (i == 5) { // reset once all switch functions are done
                    i = 1;
                };

                productSwitcher();

            });

        }, 5000);

    };

    productSwitcher();

});