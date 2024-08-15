'use client';

import React from 'react';

interface InteractiveContentProps {
	htmlContent: string;
}

export default function InteractiveContent({
	htmlContent,
}: InteractiveContentProps) {
	return (
		<>
			<style jsx global>{`
				a,
				button {
					cursor: pointer;
				}
			`}</style>
			<div
				dangerouslySetInnerHTML={{ __html: htmlContent }}
				onClick={(e) => {
					e.preventDefault();
					console.log('Element clicked:', e.target);
				}}
			/>
		</>
	);
}
