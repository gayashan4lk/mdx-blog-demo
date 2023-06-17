'use client';
import './globals.css';
import Link from 'next/link';
import ThemeSwitch from '../components/ThemeSwitch';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
					<div className='flex h-screen flex-col justify-between'>
						<header className='flex items-center justify-between py-10'>
							<div>
								<Link href='/' aria-label='Test site'>
									<div className='flex items-center justify-between'>
										<div className='mr-3'>Logo</div>
										<div className='hidden h-6 text-2xl font-semibold sm:block'>
											Test Site
										</div>
									</div>
								</Link>
							</div>
							<div className='flex items-center text-base leading-5'>
								<div className='hidden sm:block'>
									<Link
										href='/test-link'
										className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
									>
										Test Link
									</Link>
								</div>
								<ThemeSwitch />
								{/* <MobileNav /> */}
							</div>
						</header>
						<main className='mb-auto'>{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
