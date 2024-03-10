import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="bg-white shadow m-4 dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{" "}
					<Link
						to="https://flowbite.com/"
						target="_blank"
						className="hover:underline"
					>
						Cine Central™
					</Link>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<Link
							to="#"
							target="_blank"
							className="hover:underline me-4 md:me-6"
						>
							Instagram
						</Link>
					</li>
					<li>
						<Link
							to="#"
							target="_blank"
							className="hover:underline me-4 md:me-6"
						>
							Twitter
						</Link>
					</li>
					<li>
						<Link
							to="#"
							target="_blank"
							className="hover:underline me-4 md:me-6"
						>
							Facebook
						</Link>
					</li>
					<li>
						<Link
							to="#"
							target="_blank"
							className="hover:underline"
						>
							Youtube
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
