/* Greek keyboard layout
 * contains layout: 'greek-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/greek.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'greek-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* from http://ascii-table.com/keyboard.php/129 */
$.keyboard.layouts['greek-qwerty'] = {
	'default' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} ; \u03c2 \u03b5 \u03c1 \u03c4 \u03c5 \u03b8 \u03b9 \u03bf \u03c0 [ ] \\",
		"\u03b1 \u03c3 \u03b4 \u03c6 \u03b3 \u03b7 \u03be \u03ba \u03bb ' \" {enter}",
		"{shift} \u03b6 \u03c7 \u03c8 \u03c9 \u03b2 \u03bd \u03bc , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00b0 ! " \u00a7 $ % & / ( ) = ? \u0300 {bksp}',
		"{tab} : Σ Ε Ρ Τ Υ Θ Ι Ο Π { } \\",
		"Α Σ Δ Φ Γ Η Ξ Κ Λ \' \" {enter}",
		"{shift} Ζ Χ Ψ Ω Β Ν Μ < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u0302 1 \u00b2 \u00b3 4 5 6 { [ ] } \\ \u0301 {bksp}',
		"{tab} @ w \u20ac r t z u i o p \u00fc \u0303",
		"a s d f g h j k l \u00f6 \u00e4 # {enter}",
		"{shift} \u007c y x c v b n \u00b5 , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.greek = {
	display : {
		'a'      : '\u2714:Εντάξει (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Εντάξει:Εντάξει (Shift-Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Διαγραφή',    // Left arrow (same as &larr;)
		'bksp'   : 'Δγρ:Διαγραφή',
		'c'      : '\u2716:Ακύρωση (Esc)', // big X, close - same action as cancel
		'cancel' : 'Ακύρωση:Ακύρωση (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
};

$.keyboard.defaultOptions.combos = {
	'\'' : { α:"ά", ε:"έ", η:"ή", ι:"ί", ο:"ό", υ:"ύ", ω:"ώ", Α:"Ά", Ε:"Έ", Η:"Ή", Ι:"Ί", Ο:"Ό", Υ:"Ύ", Ω:"Ώ" }
}

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.greek);

// Update regex for the combos above
$.keyboard.comboRegex = /([\'])([α-ω])/gim;
