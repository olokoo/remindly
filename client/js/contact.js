$(document).ready(function() {
	$('#subscribe-newsletter').on('change', function() {
		var $subscribeCheckbox = $('[for="subscribe-newsletter"]');
		var $yesUpdates = $subscribeCheckbox.find('.yes-updates');
		var $noUpdates = $subscribeCheckbox.find('.no-updates');

		if ($(this).is(':checked')) {
			$yesUpdates.show();
			$noUpdates.hide();
		} else {
			$noUpdates.show();
			$yesUpdates.hide();
		}
	});
});