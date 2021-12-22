document.querySelectorAll('img').forEach(el => 
	el.ondragstart = () => false
)