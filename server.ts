// import core modules
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as modRewrite from 'connect-modrewrite';
import { join } from 'path';

// define express application
const app = express();

// express config
// set DIST_FOLDER and PORT
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// express application middleware
// activate body-parser for request from x-www-form-urlencoded or json
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json());

// activate cookies
app.use(cookieParser());

// activate gzip
app.use(compression({level: 9}));

/*
** CORS Origins settings
** @return next()
*/
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Max-Age', '3600');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	return next();
});

app.get([
	'*.js'
], (req, res, next) => {
	req.url = `${req.url}.gz`;
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/javascript');

	next();
});

// serve static file from 'dist/browser'
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
	maxAge: '1y'
}));

// serve static file for /dist
app.use('/dist', express.static(join(DIST_FOLDER, 'browser'),  {
	index: false,
	maxAge: '1y'
}));

// serve static file for /assets
app.use('/assets', express.static(__dirname+'/dist/browser/assets', {
	index: false,
	maxAge: '1y'
}));

// public dir
app.use(express.static(join(DIST_FOLDER, 'browser')));

// startup express
// node.js process
app.listen(PORT, () => {
	console.log(`[START.OK]: Starting server on localhost at port ${PORT} / ${new Date()}`);
});
