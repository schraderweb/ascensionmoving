(function($) {
    "use strict";

    //---------------------------------------------
    //Nivo slider
    //---------------------------------------------

    if ($('#ensign-nivoslider-1').length) {
        $('#ensign-nivoslider-1').nivoSlider({
            effect: 'sliceDownLeft',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 1000,
            pauseTime: 9000,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: true,
            prevText: 'Prev',
            nextText: 'Next',
            randomStart: false
        });
    }

    if ($('#ensign-nivoslider-2').length) {
        $('#ensign-nivoslider-2').nivoSlider({
            effect: 'boxRainReverse',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 1000,
            pauseTime: 9000,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: true,
            prevText: 'Prev',
            nextText: 'Next',
            randomStart: false
        });
    }

    if ($('#ensign-nivoslider-3').length) {
        $('#ensign-nivoslider-3').nivoSlider({
            effect: 'fold',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 1000,
            pauseTime: 9000,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: true,
            prevText: 'Prev',
            nextText: 'Next',
            randomStart: false
        });
    }
    
    if ($('#ensign-nivoslider-4').length) {
        $('#ensign-nivoslider-4').nivoSlider({
            effect: 'boxRainGrowReverse',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 1000,
            pauseTime: 9000,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: true,
            prevText: 'Prev',
            nextText: 'Next',
            randomStart: false
        });
    }
    
    if ($('#ensign-nivoslider-5').length) {
        $('#ensign-nivoslider-5').nivoSlider({
            effect: 'boxRainGrow',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 1000,
            pauseTime: 9000,
            startSlide: 0,
            directionNav: true,
            controlNav: true,
            controlNavThumbs: false,
            pauseOnHover: false,
            manualAdvance: true,
            prevText: 'Prev',
            nextText: 'Next',
            randomStart: false
        });
    }

})(jQuery);
