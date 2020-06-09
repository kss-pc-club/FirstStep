const $ = require('jquery')

/**
 * @description Wait t[ms]
 * @param {Number} t Time
 * @returns {Promise}
 */
const sleep = t => new Promise(r=>setTimeout(r,t));

/**
 * @description Animation
 * @param {JQuery} $b Container showed before animation
 * @param {JQuery} $a Container showed after animation
 * @param {Boolean} back If go back (default: false)
 * @returns {void}
 */
const animation = async ($b,$a,back=false)=>{
  const outH = (back?(window.outerHeight):-(window.outerHeight));
	$('.arrow').fadeOut(300);
	await sleep(200)
	$b.animate({ top: outH }, 700)
	$a.addClass("showing").css({top: -outH}).animate({top: 0},700);
	const $cont = $('.container').not('#loader')
	$('#scrollbar_thumb').animate({top: (window.innerHeight - 16) * $cont.index($a) / $cont.length + 8}, 700)
	await sleep(700);
	$('.arrow').fadeIn(300).removeAttr("style");
	$b.removeClass("showing");
	await sleep(100)
	$b.removeAttr("style")
	$a.removeAttr("style")
}

export {sleep, animation}