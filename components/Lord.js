import Image from 'next/image';

const Lord = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-12 mx-auto max-w-full'>
			<Image
				src='/assets/Lord-Prayer.jpeg'
				alt="Lord's Prayer"
				width={180}
				height={180}
				className='rounded-full object-contain  relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
			/>
			<h3 className='text-xl mt-4'>주님의 기도</h3>
			<p className='p-2'>하늘에 계신 우리 아버지,</p>
			<p className='p-2'>아버지의 이름이 거룩히 빛나시며,</p>
			<p className='p-2'>아버지의 나라가 오시며,</p>
			<p className='p-2'>아버지의 뜻이 하늘에서와 같이,</p>
			<p className='p-2'>땅에서도 이루어 지소서.</p>
			<p className='p-2'>오늘 저희에게 일용할 양식을 주시고,</p>
			<p className='p-2'>저희에게 잘못한 이를 저희가 용서하오니,</p>
			<p className='p-2'>저희 죄를 용서하시고,</p>
			<p className='p-2'>저희를 유혹에 빠지지 않게 하시고,</p>
			<p className='p-2'>악에서 구하소서.</p>
			<p className='p-2'>아멘.</p>
		</main>
	);
};

export default Lord;
