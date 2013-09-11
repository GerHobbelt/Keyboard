/* Italian keyboard layouts
 * contains layouts: 'italian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/italian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'italian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 *
 * Italian layouts by Mirko Sacripanti (http://www.nextware.it)
 */
$.keyboard.layouts['italian-qwerty'] = {
	'default' : [
		"\\ 1 2 3 4 5 6 7 8 9 0 \' \u00EC {bksp}",
		"{tab} q w e r t y u i o p \u00E8 +",
		"a s d f g h j k l \u00F2 \u00E0 \u00F9 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"| ! \" \u00A3 $ % & / ( ) = ? ^ {bksp}",
		"{tab} Q W E R T Y U I O P \u00E9 *",
		"A S D F G H J K L \u00E7 \u00B0 \u00A7 {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\\ 1 2 3 4 5 6 7 8 9 0 \' \u00EC {bksp}",
		"{tab} q w \u20AC r t y u i o p [ ]",
		"a s d f g h j k l @ # \u00F9 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\\ 1 2 3 4 5 6 7 8 9 0 \' \u00EC {bksp}",
		"{tab} q w \u20AC r t y u i o p { }",
		"a s d f g h j k l @ # \u00F9 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.italian = {
	display : {
		'a'      : '\u2714:Conferma (Shift-Invio)', // check mark - same action as accept
		'accept' : 'Conferma:Conferma (Shift-Invio)',
		'alt'    : 'AltGr:Grafemi alternativi',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Annulla (Esc)', // big X, close - same action as cancel
		'cancel' : 'Annulla:Annulla (Esc)',
		'clear'  : 'C:Pulisci',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Invio',        // down, then left arrow - enter symbol
		'enter'  : 'Invio:Invio',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Cambio segno',  // +/- sign for num pad
		'space'  : '&nbsp;:Spazio',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	wheelMessage : 'Utilizza la rotellina del mouse per vedere gli altri tasti', 
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.italian);
