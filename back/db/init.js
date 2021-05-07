var mongoose = require( 'mongoose' )
    , _ = require( 'lodash' )
	,Data = require( './db/person.json' );
const jeux = require('./schema/jeux');
exports.reset = function( req, res ) {
    console.info("init db start");
	jeux.find().remove();
	for( var i = 0; i < Data.length; i++ ) {
		new jeux( Data[ i ] ).save();
	}
	res.redirect( "/" );
};