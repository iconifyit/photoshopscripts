// Toggle Layer Visibility - Adobe Photoshop Script
// Description: toggle the visibility of the current layer (on or off)
// Requirements: Adobe Photoshop CS, or higher
// Version: 1.1.0, 9/July/2009
// Author: Trevor Morris (trevor@morris-photographics.com)
// Website: http://morris-photographics.com/
// ============================================================================
// Traducción: Juan Manuel Díaz
// Sitio Web: www.retoquefactoria.com
// Contacto: contacto@retoquefactoria.com
// ============================================================================
// AYUDA: permite Permutar (Activar/Desactivar) la Visualización de una Capa del Documento.
// ============================================================================

// enable double-clicking from Mac Finder or Windows Explorer
// this command only works in Photoshop CS2 and higher
#target photoshop

// bring application forward for double-click events
app.bringToFront();

///////////////////////////////////////////////////////////////////////////////
// main - main function
///////////////////////////////////////////////////////////////////////////////
function main() {
	// declare local variables
	var doc = activeDocument;
	var layer = doc.activeLayer;

	// check for a single Background layer
	if (doc.layers.length == 1 && layer.isBackgroundLayer) {
		alert("La Capa de Fondo no puede esconderse cuando es la unica Capa de un Documento.", "Can't Hide Background", false);
	}
	// toggle visibility of active layer
	else {
		layer.visible = !layer.visible;
	}
}

///////////////////////////////////////////////////////////////////////////////
// isCorrectVersion - check for Adobe Photoshop CS2 (v9) or higher
///////////////////////////////////////////////////////////////////////////////
function isCorrectVersion() {
	if (parseInt(version, 10) >= 9) {
		return true;
	}
	else {
		alert('This script requires Adobe Photoshop CS2 or higher.', 'Wrong Version', false);
		return false;
	}
}

///////////////////////////////////////////////////////////////////////////////
// isOpenDocs - ensure at least one document is open
///////////////////////////////////////////////////////////////////////////////
function isOpenDocs() {
	if (documents.length) {
		return true;
	}
	else {
		alert('No hay Documentos abiertos.', 'No Documents Open', false);
		return false;
	}
}

///////////////////////////////////////////////////////////////////////////////
// showError - display error message if something goes wrong
///////////////////////////////////////////////////////////////////////////////
function showError(err) {
	if (confirm('An unknown error has occurred.\n' +
		'Would you like to see more information?', true, 'Unknown Error')) {
			alert(err + ': on line ' + err.line, 'Script Error', true);
	}
}


// test initial conditions prior to running main function
if (isCorrectVersion() && isOpenDocs()) {
	try {
		main();
	}
	catch(e) {
		// don't report error on user cancel
		if (e.number != 8007) {
			showError(e);
		}
	}
}
