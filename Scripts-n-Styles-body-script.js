//
// Paste this script into the <body> section of the Scripts tab of
// the Scripts-n-Styles plugin. This can be done on a per-post or per-page basis,
// or (untested at this time) can be applied at the Global level of Scripts-n-Styles.
//

function addScript(filename, onload) {
 var head = document.getElementsByTagName('head')[0];
 var script = document.createElement('script');
 script.src = filename;
 script.async = true;
 script.type = 'text/javascript';
 script.onload = onload;

 head.appendChild(script);
}

function addCSS(filename){
 var head = document.getElementsByTagName('head')[0];
 var style = document.createElement('link');
 style.href = filename;
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.appendChild(style);
}

var smartdownGistSourceTitle = 'Smartdown Gist Source';
var articles = Array.from(document.getElementsByTagName('article'));
var smartdownArticles = articles.filter(function(article) {
	var firstAnchor = document.querySelector('article#' + article.id + ' div.entry-content a');
	return firstAnchor && firstAnchor.innerText === smartdownGistSourceTitle;
});
var firstSmartdownArticle = smartdownArticles[0];

if (firstSmartdownArticle) {
	console.log('SMARTDOWN enabled', firstSmartdownArticle);
	var contentDivSelector = 'article#' + firstSmartdownArticle.id + ' div.entry-content';
	var contentDiv = document.querySelector(contentDivSelector);

	contentDiv.classList.add('smartdown-container');

	window.smartdownOutputDivSelector = contentDivSelector;

	addCSS('https://smartdown.site/lib/smartdown.css');
	addCSS('https://smartdown.site/lib/fonts.css');

	var starter = 'https://smartdown.site/lib/starter.js';

	addScript('https://smartdown.site/lib/smartdown.js', function() {
	  addScript(starter, function() {
		var sel = window.smartdownOutputDivSelector + ' a';
		var gistAnchor = document.querySelectorAll(sel)[0];

		if (gistAnchor.innerHTML === smartdownGistSourceTitle) {
			var gistPrefix = 'https://gist.github.com/';
			window.smartdownBaseURL = 'https://smartdown.site/';
			window.smartdownRawPrefix = gistAnchor.href;
			var baseHash = '#gist/' + window.smartdownRawPrefix.slice(gistPrefix.length);
			window.smartdownStarter(baseHash);
		}
	  });
	});
}

