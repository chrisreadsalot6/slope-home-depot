export default function Return() {
	return (
		<div className="font-sans text-gray-800">
			<nav className="bg-[rgb(51,51,51)] px-4 py-3 flex justify-between items-center">
				<div className="flex items-center">
					<img
						src="/checkout_files/HomeDepotLogo.svg"
						alt="Home Depot Logo"
						className="h-10"
					/>
				</div>
				<div className="flex gap-6">
					<a
						href="#"
						className="text-white font-bold hover:text-gray-200"
					>
						My Account
					</a>
					<a
						href="#"
						className="text-white font-bold hover:text-gray-200"
					>
						Orders
					</a>
					<a
						href="#"
						className="text-white font-bold hover:text-gray-200"
					>
						Lists
					</a>
					<a
						href="#"
						className="text-white font-bold hover:text-gray-200"
					>
						Cart
					</a>
				</div>
			</nav>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="text-center mb-12 bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
					<h1 className="text-4xl font-bold text-[#f96302] mb-4">
						Order Complete
					</h1>
					<p className="text-xl mb-6">
						Thank you for your purchase! We&apos;re working on your
						order now.
					</p>
					<a
						href="/cart"
						className="inline-block bg-[#f96302] text-white font-bold py-3 px-6 rounded hover:bg-[#e55d00] transition-colors duration-300"
					>
						Return Home
					</a>
				</div>
			</main>
		</div>
	);
}
