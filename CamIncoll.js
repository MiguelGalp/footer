<script>
	window.onload = function() {
	
		/* COPYRIGHT INFO */
		const copyright = document.createElement('p')
		copyright.innerHTML = 'Your Super Site'
		copyright.style.textAlign = "center";
		copyright.style.marginTop = "20px";
		copyright.style.color = "#333";
		copyright.style.marginBottom = '50px';
	
		/* LEGAL NOTICE */
		const legal = document.createElement('p')
		legal.innerHTML = 'Your copyright notice'
		legal.style.textAlign = "center";
		legal.style.fontSize = "13px";
		legal.style.opacity = "50%";
		legal.style.color = "#333";
		
		/* LOGO */ 
		img = document.createElement("img");
		img.setAttribute('src', 'https://super.so/_next/image?url=%2Fimages%2Flogo.png&w=546&q=75');
		img.style.width = ('100px');
		img.style.margin = '30px auto';
		img.style.display = 'block';
	
		/* Set up the Footer */ 
		const footerContainer = document.createElement("div");
		footerContainer.style.maxWidth = "720px";
		footerContainer.style.margin = "0 auto"
		
		/* Style the footer background */
		const footer = document.createElement("div");
		footer.style.background = "#eee";
		footer.style.height = "auto";
		footer.style.padding = "50px";
		
		/* Assemble the extra HTML for the footer */
		footerContainer.appendChild(img)
		footerContainer.appendChild(copyright)
		footerContainer.appendChild(legal)
		
		footer.appendChild(footerContainer)
		
		/* Add the footer to the bottom of the body */
		document.body.appendChild(footer);
	}
</script>
