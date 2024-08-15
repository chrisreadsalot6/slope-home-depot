import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Slope Home Depot',
	description: 'Where Doers Get More Done',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Script
					src="https://checkout.slope.so/slope.min.js"
					strategy="afterInteractive"
				/>
				<Script id="slope-init" strategy="afterInteractive">
					{`
            function initializeSlope() {
              if (typeof window.Slope !== 'undefined') {
                window.Slope.initialize({
                  flow: 'checkout',
                  intentSecret: '1', // Replace this with actual secret or method to get it
                  onClose: function(payload) {
                    console.log('Slope popup closed', payload);
                  },
                  onSuccess: function(payload) {
                    console.log('Slope payment successful', payload);
                  },
                  onOrderOpen: function(payload) {
                    console.log('Slope order opened', payload);
                  },
                  onFailure: function(payload) {
                    console.log('Slope payment failed', payload);
                  },
                  onEvent: function(payload) {
                    console.log('Slope event', payload);
                  }
                });
                console.log('Slope initialized');
              } else {
                console.error('Slope SDK not loaded');
              }
            }

            // Initialize Slope when the script is loaded
            if (document.readyState === 'complete') {
              initializeSlope();
            } else {
              window.addEventListener('load', initializeSlope);
            }
          `}
				</Script>
			</body>
		</html>
	);
}
