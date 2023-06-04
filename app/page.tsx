import Image from 'next/image';
import { Inter } from 'next/font/google';
import Content from './message.mdx';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`${inter.className}`}>
			<div>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					By{' '}
					<Image
						src='/vercel.svg'
						alt='Vercel Logo'
						width={100}
						height={24}
						priority
					/>
				</a>
			</div>

			<div>
				<Content />
			</div>
		</main>
	);
}
