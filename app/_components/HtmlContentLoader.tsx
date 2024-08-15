import React from 'react';
import fs from 'fs';
import path from 'path';
import InteractiveContent from './InteractiveContent';

export default function HtmlContentLoader({fileName}) {
	const filePath = path.join(process.cwd(), 'public', fileName);
	let htmlContent = fs.readFileSync(filePath, 'utf8');

	// Remove all script tags from the HTML content
	htmlContent = htmlContent.replace(
		/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		''
	);

	return <InteractiveContent htmlContent={htmlContent} />;
}