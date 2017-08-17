CKEDITOR.plugins.add( 'mdc-textfield', {
	requires: 'widget',
	icons: 'mdc-textfield',
	init: function( editor ) {
		CKEDITOR.dialog.add( 'mdc-textfield', this.path + 'dialogs/mdc-textfield.js' );
		editor.widgets.add( 'mdc-textfield', {
			requiredContent: 'div(mdc-textfield--container)',
			template: '<div class="mdc-textfield--container"></div>',
			button: 'Create a mdc-textfield',
			dialog: 'mdc-textfield',
			upcast: function( element ) {
				return element.name == 'div' && element.hasClass('mdc-textfield--container')
			},
			init: function() {
			},
			data: function() {
				this.element.$.innerHTML = `
					<div class="mdc-textfield" data-mdc-auto-init="MDCTextfield">
						<input type="text" name="${this.data.name}" id="${this.data.name}" class="mdc-textfield__input" aria-controls="${this.data.name}-helptext">
						<label for="${this.data.name}" class="mdc-textfield__label">${this.data.name}</label>
					</div>
					<p id="${this.data.name}-helptext" class="mdc-textfield-helptext" aria-hidden="true">
						This will be displayed on your public profile
					</p>
				`
				let textField = (this.element.$.querySelectorAll('div'))[0];
				mdc.textfield.MDCTextfield.attachTo(textField)
			}
		} );
	}
} );
