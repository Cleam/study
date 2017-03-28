$(function(){
	$('a[data-hasbranch="true"]').on('click', function(){
		var $this = $(this);
		if(!$this.hasClass('active')){
			$this.addClass('active');
			$this.children('em').html('-');
			$this.removeClass('has-branch');
		} else {
			$this.removeClass('active');
			$this.children('em').html('+');
			$this.addClass('has-branch');
		}
	});

	$('a[data-hasbranch="false"]').on('click', function(){
		var $this = $(this);
		$('a[data-hasbranch="false"]').removeClass('hover');
		$this.addClass('hover');
	});
});