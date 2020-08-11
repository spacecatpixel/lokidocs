
/* Gives Class:Home an ID */
var favicon = document.getElementsByClassName("md-logo")[0];
favicon.id="Home";

/* Adds link to ID Home */
var faviconlink = document.getElementById('Home');
faviconlink.href = 'https://www.loki.network';

/* Removes Loki Docs Title text and replaces with Menu Bar*/
var headers = document.getElementsByClassName("md-header-nav__topic");
for (var i = headers.length - 1; i >= 0; i--) {
	if (headers[i].innerText === 'Loki Docs') {
//		headers[i].innerHTML = '<a href="https://www.loki.network">Home </a><a href="https://loki-project.github.io/loki-docs/">Documentation </a><a href="https://loki.network/#team-section">Team </a><a href="https://loki.network/#papers">Papers </a> <a href="https://loki.network/blog/"">Blog</a>';
        headers[i].innerHTML = '';
	}
}
