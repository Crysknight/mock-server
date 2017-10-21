module.exports = (req, res) => {
	console.log(req.query);
	setTimeout(() => {
		// res.status(500).send('error');
		res.send(`
			<div class="row aste-popup-row">
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="aste-popup-photo-wrapper" data-src-full="img/slider-bg-3.jpg">
                <img src="img/bottom-slide-1.jpg" alt="" class="aste-popup-photo">
            </div>
        </div>
    	</div>
		`);
	}, 1000);
};