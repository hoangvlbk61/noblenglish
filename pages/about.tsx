/** @format */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = (props: any) => {
	return (
		<div>
			<section
				id="novus-banner-mb-block-a9c829a1-3aec-4b9b-9904-81b6ac35db62"
				className="novus-banner "
			>
				<div className="container">
					<div className="novus-banner__body">
						{/* <h1 style="margin:0;color: var(--color-yellow);text-transform:uppercase">Introduction</h1> */}
						<h1
							style={{
								margin: 0,
								color: "#89D0CA",
								textTransform: "uppercase",
							}}
						>
							Introduction
						</h1>
						<Link href="/" className="custom-logo-link" rel="home">
							<Image
								loading="lazy"
								width="512"
								height="512"
								src="/logoColor2.png"
								className="custom-logo"
								alt="Noble English Center"
								decoding="async"
								sizes="(max-width: 512px) 100vw, 512px"
							/>
						</Link>
					</div>

					{/* <div className="scroll-down">
						<div className="chevron"></div>
						<div className="chevron"></div>
						<div className="chevron"></div>
						<p>scroll down</p>
					</div> */}
				</div>
			</section>
			<section className="intro">
				<div className="container container--big">
					<div className="grid grid-cols-2">
						<div className="relative mt-5 z-10 pr-5">
							<div className=" text-left">
								<h2 className=" ml-10">
									Không chỉ dừng lại ở tiếng Anh
								</h2>

								<p className="text-justify ml-10">
									Chúng tôi mang đến giải pháp hoàn toàn hiệu
									quả, không chỉ là tiếng Anh mà còn là tư duy
									tiếp cận vấn đề ngôn ngữ nói chung.
								</p>
							</div>
						</div>

						<div className="flex ">
							<Image
								alt=""
								src="/c_huong1.jpg"
								// fill
								height={400}
								width={400}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="numbers flex justify-center">
				<div className="container flex justify-center flex-col">
					<h2 className="text-center">SỐ LIỆU NỔI BẬT</h2>
					<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
						<div className="">
							<div className="content">
								<h2 className="clw countup">55</h2>
								<p className="bold">
									học viên đạt
									<br />
									8.0 - 8.5/ 9.0 IELTS
								</p>
								<Image
									src="/tiw/2021/03/ii1.png"
									alt=""
									width={100}
									height={100}
								/>
							</div>
						</div>

						<div className="">
							<div className="content">
								<h2 className="clw countup">500</h2>
								<p className="bold">
									học viên đạt điểm
									<br />
									6.5+/ 9.0 IELTS
								</p>
								<Image
									src="/tiw/2021/03/ii2.png"
									alt=""
									width={100}
									height={100}
								/>
							</div>
						</div>

						<div className="">
							<div className="content">
								<h2 className="clw countup">30000</h2>
								<p className="bold">
									học viên theo học tại trung tâm đạt được mục
									tiêu
								</p>
								<Image
									alt=""
									src="/tiw/2021/03/ii3.png"
									width={100}
									height={100}
								/>
							</div>
						</div>

						<div className="">
							<div className="content">
								<h2 className="clw countup">9</h2>
								<p className="bold">
									là mức độ hài lòng của học viên đối với
									trung tâm
								</p>
								<Image
									alt=""
									src="/tiw/2021/03/ii4.png"
									width={100}
									height={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="values">
				<div className="">
					<h2 className="flex flex-col text-center">
						<span className="light">05 GIÁ TRỊ</span>
						LÀM NÊN NOBLE ENGLISH
					</h2>
				</div>
				<div
					className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
					style={{ backgroundColor: "#f1ffff" }}
				>
					<div className="top">
						<h4>
							<b>Chủ động</b>
						</h4>
						<p className="text-justify">
							Chúng tôi luôn khuyến khích các bạn học viên hình
							thành khả năng nghiên cứu và sự chủ động trong học
							tập.
						</p>
					</div>
					<Image
						src="/tiw/2021/03/gt1.jpg"
						alt=""
						width={600}
						height={600}
					/>
					{/* <div className="item">
					</div> */}

					{/* <div className="item"> */}
					<div className="top">
						<h4>
							<b>Tôn trọng</b>
						</h4>
						<p className="text-justify">
							Tại Noble English Center, chúng tôi hướng đến xây
							dựng một môi trường doanh nghiệp tích cực, nơi mọi
							người đều được tôn trọng dù có sự khác biệt về suy
							nghĩ, giới tính, văn hóa hay tôn giáo.
						</p>
					</div>
					<Image
						src="/tiw/2021/03/gt2.jpg"
						alt=""
						width={600}
						height={600}
					/>
					{/* </div> */}

					{/* <div className="item"> */}
					<div className="top">
						<h4>
							<b>Uy tín</b>
						</h4>
						<p className="text-justify">
							Kết quả học viên là ưu tiên hàng đầu của Noble
							English Center. Chúng tôi luôn
							nỗ lực hết mình để đảm bảo đúng và cao hơn các cam
							kết với các bạn học viên cũng như khách hàng.
						</p>
					</div>
					<Image
						src="/tiw/2021/03/gt3.jpg"
						alt=""
						width={600}
						height={600}
					/>
					{/* </div> */}

					{/* <div className="item"> */}
					<div className="top">
						<h4>
							<b>Cộng đồng</b>
						</h4>
						<p className="text-justify">
							Thực hiện tốt nghĩa vụ của cộng đồng là trách nhiệm
							của chúng tôi để góp phần xây dựng một xã hội tốt
							đẹp hơn.
						</p>
					</div>
					<Image
						src="/tiw/2021/03/gt4.jpg"
						alt=""
						width={600}
						height={600}
					/>
					{/* </div> */}

					{/* <div className="item"> */}
					<div className="top">
						<h4>
							<b>Quan tâm</b>
						</h4>
						<p className="text-justify">
							Chúng tôi lấy các bạn học viên, nhân viên và cộng
							đồng làm trọng tâm trong mọi quyết định. Một môi
							trường cho các thành viên của Noble English có cơ
							hội khám phá và phát triển bản thân một cách toàn
							diện là điều là chúng tôi hướng đến.
						</p>
					</div>
					<Image
						src="/tiw/2021/03/gt5.jpg"
						alt=""
						width={600}
						height={600}
					/>
					{/* </div> */}
				</div>
			</section>
			{/* <section className="responsibility">
				<Image
					src="/tiw/2021/03/congdong.jpg"
					alt=""
					width={400}
					height={400}
				/>
				<div>
					<h2>Trách nhiệm cộng đồng</h2>

					<p>
						Với niềm tin &quot;Trẻ em là tài sản quý giá của quốc
						gia, và mỗi đứa trẻ đều có quyền được đi học&quot;, Noble
						IELTS Workshop cho ra đời Quỹ Khuyến học Hạc giấy -
						Orizuru Foundation Vietnam (OFV) nhằm trở thành chỗ dựa
						vững chắc cho các trẻ em có hoàn cảnh khó khăn.{" "}
					</p>
					<a className="tiw-button" href="#">
						See more
					</a>
				</div>
			</section> */}
		</div>
	);
};

AboutPage.propTypes = {};

export default AboutPage;
