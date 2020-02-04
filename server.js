/*
|--------------------------------------------------------------------------
| APP Setup
|--------------------------------------------------------------------------
*/
	// Node Modules
	const Express = require( 'express' );
	const BodyParser = require( 'body-parser' );

	// Primary Variable
	const app = Express();

/*
|--------------------------------------------------------------------------
| APP Init
|--------------------------------------------------------------------------
*/
	// Parse request of content-type - application/x-www-form-urlencoded
	app.use( BodyParser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	app.use( BodyParser.json() );

	// Server Running Message
	app.listen( 4001, () => {
		console.log( 'Run on Port 4001'  );
	} );

	// Index Route
	app.get( '/', function( req, res ) {
		return res.json( {
			message: "OK"
		} );
	} );

	app.get( '/goodgame', function( req, res ) {
		return res.json( {
			message: "OK"
		} );
	} );