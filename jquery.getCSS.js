
(function($, doc, undefined) {
	$.extend({
		getCSS: function (url, media) {
			// everyone loves IE
			if (doc.createStyleSheet) {
				doc.createStyleSheet(url);
			} else {
				$('<link/>', {
					href: url,
					media: media || 'screen',
					type: 'text/css',
					rel: 'stylesheet'
				}).appendTo(doc.head);
			}
		}
	});
})(jQuery, document);