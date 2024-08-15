import React from 'react';
import fs from 'fs';
import path from 'path';
import InteractiveContent from './InteractiveContent';

export default function HtmlContentLoader({ fileName }: { fileName: string }) {
	const filePath = path.join(process.cwd(), 'public', fileName);
	let htmlContent = fs.readFileSync(filePath, 'utf8');

	// Remove all script tags from the HTML content
	htmlContent = htmlContent.replace(
		/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		''
	);

	// Inject custom script for checkout button if the file is cart.htm
	if (fileName === 'cart.htm') {
		const cartScript = `
		    <script>
			    document.addEventListener('click', function(e) {
                    if (e.target && (e.target.classList.contains('checkoutButton') || e.target.closest('.checkoutButton'))) {
                        e.preventDefault();
                        console.log('checkout button clicked');
                        window.location.href = '/checkout';
                    }
			    });
			</script>
		`;

		// Append the custom script to the body
		htmlContent = htmlContent.replace('</body>', `${cartScript}</body>`);
	}

	// Inject custom script for place order button if the file is checkout.htm
	if (fileName === 'checkout.htm') {
		const checkoutScript = `
		    <script>
			    document.addEventListener('click', function(e) {
                    if (e.target && (e.target.classList.contains('placeOrderButton') || e.target.closest('.placeOrderButton'))) {
                        e.preventDefault();
                        console.log('place order button clicked');
                        window.location.href = '/return';
                    }
			    });
			</script>
		`;

		// Append the custom script to the body
		htmlContent = htmlContent.replace(
			'</body>',
			`${checkoutScript}</body>`
		);
	}

	return <InteractiveContent htmlContent={htmlContent} />;
}
