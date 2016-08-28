jQuery(document).ready(function($) {
	function refresh_loop_label($loop_row) {
		var $inputs = $loop_row.find('.cfs_text');
		if ($inputs.length) {
			var title = $loop_row.find('> .cfs_loop_body > .cfs_text').eq(0).find('input').val();
			if (title != '') {
				$loop_row.find('> .cfs_loop_head .label').html(title);
			};
		};
	}

	if ($('.cfs_loop').length) {
		var i, $label, label_text;
		$('.cfs_loop').each(function() {
			i = 1;
			$(this).find('> .loop_wrapper').each(function() {
				if ($(this).find('.cfs_text').length > 0) {
					refresh_loop_label($(this));
				} else {
					$label = $(this).find('> .cfs_loop_head .label');
					label_text = $label.text();
					$label.html(label_text+' '+i++);
				}
			});
		})

		$('.cfs_loop').on('change keyup paste', 'input[type="text"]', function() {
			refresh_loop_label($(this).closest('.loop_wrapper'));
		});
	};
});