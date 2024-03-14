import React from "react";

export const Footer = () => {
	return (
		<footer className="bg-white shadow p-4 dark:bg-gray-900">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{" "}
					<a
						href="/"
						target="_blank"
						className="hover:underline"
					>
						Cine Central™
					</a>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noreferrer"
							className="hover:underline me-4 md:me-6"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noreferrer"
							className="hover:underline me-4 md:me-6"
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noreferrer"
							className="hover:underline me-4 md:me-6"
						>
							Facebook
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com"
							target="_blank"
							rel="noreferrer"
							className="hover:underline"
						>
							Youtube
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
