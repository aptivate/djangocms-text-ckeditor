/*##################################################|*/
/* #CMS.CKEDITOR# */
jQuery(document).ready(function ($) {
	/*!
	 * CKEditor
	 * @version: 1.0.0
	 * @description: Adds cms specific plugins to CKEditor
	 */
	CMS.CKEditor = {

		options: {
			// ckeditor default settings, will be overwritten by CKEDITOR_SETTINGS
			'language': 'en',
			'skin': 'moono',
			'toolbar': 'CMS',
			'toolbar_CMS': [
				['Undo', 'Redo'],
				['cmsplugins', '-', 'ShowBlocks'],
				['Format', 'FontSize'],
				['TextColor', 'BGColor', '-', 'PasteText', 'PasteFromWord'],
				['Maximize', ''],
				'/',
				['Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
				['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
				['Link', 'Unlink'],
				['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Table'],
				['Source']
			],
			'toolbarCanCollapse': false,
			'extraPlugins': 'cmsplugins'
		},

		init: function (container, options, settings) {
			this.container = $(container);
			this.settings = settings;
			this.options = $.extend(true, {}, this.options, options);
			this.options.cmsPage = this.settings.page;
			this.options.cmsPlugins = this.settings.plugins;
			this.options.cmsLang = this.settings.lang;

			// add additional plugins (autoloads plugins.js)
			CKEDITOR.plugins.addExternal('cmsplugins', this.settings.static_url + 'ckeditor_plugins/cmsplugins/');

			// render cckeditor
			CKEDITOR.replace(container, this.options);
		}

	};
});
