(function () {

	var converter     = new showdown.Converter(),
		pad           = document.getElementById("pad"),
		markdownArea  = document.getElementById("markdown");

	console.log('markdownArea : ', markdownArea.innerHTML);

	var convertTextAreaToMarkdown = function () {
		var markdownText           = pad.value,
			html                   = converter.makeHtml(markdownText);

		markdownArea.innerHTML = html;
	};

	pad.addEventListener("input", convertTextAreaToMarkdown);

	convertTextAreaToMarkdown();

}());