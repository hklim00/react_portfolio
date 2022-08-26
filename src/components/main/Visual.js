import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function Visual() {
	const banners = [
		{
			title: 'MODERN HOTEL IN LONDON 1',
			content:
				'mordern hotel in the architecture of new generation, a building that exist not only in the dimension of space, but also in the dimension of time and communication',
			img: 'banner01.jpg',
			link: '/',
		},
		{
			title: 'MODERN HOTEL IN LONDON 2',
			content:
				'mordern hotel in the architecture of new generation, a building that exist not only in the dimension of space, but also in the dimension of time and communication',
			img: 'banner02.jpg',
			link: '/',
		},
	];

	const prev = useRef(null);
	const next = useRef(null);

	return (
		<section id='visual'>
			<Swiper
				modules={[Pagination, Navigation, Autoplay, EffectFade]}
				autoplay={{ delay: 10000, disableOnInteraction: true }}
				pagination={{
					type: 'fraction',
				}}
				navigation={{
					prevEl: prev.current,
					nextEl: next.current,
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prev.current;
					swiper.params.navigation.nextEl = next.current;
				}}
				loop={true}
				effect='fade'>
				{banners.map((banner, idx) => {
					return (
						<SwiperSlide key={idx}>
							<div className='inner'>
								<img
									src={`${process.env.PUBLIC_URL}/img/${banner.img}`}
									alt=''
								/>
								<div className='txt'>
									<h2>{banner.title}</h2>
									<p>{banner.content}</p>
									<button>LOOK MORE</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				<div ref={prev} className='swiper-navi prev'>
					PREV
				</div>
				<div ref={next} className='swiper-navi next'>
					NEXT
				</div>
			</Swiper>
		</section>
	);
}

export default Visual;
