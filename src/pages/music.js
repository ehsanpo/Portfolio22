import React from "react";
import Layout from "../components/layout";
import SeO from "../components/seo";
import SpotifyPlayer from "react-spotify-player";
import InViewMonitor from "react-inview-monitor";

const NotFoundPage = () => {

	const size = {
		width: "100%",
		height: 300,
	};
	const sizeSingel = {
		width: "100%",
		height: 80,
	};

	return (
		<Layout>
			<SeO title="Music Producent" />
			<div className="page-header">
				<h2 class="display">Music</h2>
				<br />
				<iframe
					src="https://open.spotify.com/follow/1/?uri=spotify:artist:079CRvThNlTupHjEQ6LCnw&size=detail&theme=dark"
					width="230"
					height="56"
					scrolling="no"
					frameborder="0"
					allowtransparency="true"
					title="Follow me on spotify"
				></iframe>
			</div>
			<section>
				<div className="wrapper">
					<div className="wrapper-m ">
						Music is a part of our DNA, and since childhood, I have
						loved music. So have you, it’s an essential part of us.
						Music takes us to another world. It heals our body and
						mind. It gets us through tough times and helps us be a
						better person. Music is magical. It has something
						exciting that affects millions of people around the
						world.
						<br />
						<br />
						I try to make music with a simple goal. I want to
						communicate with the world through this ideal means of
						communication. Through music, people connect and create
						better bonds. I produce music professionally, and I have
						created songs for various companies and artists. My
						music may not be on the top record list, but the music I
						produce is from the heart.
						<br />
						<br />
						Give it a listen, and I hope you enjoy what I create.
					</div>
				</div>
			</section>
			<section className="no-bg">
				<InViewMonitor
					intoViewMargin="6%"
					classNameNotInView="vis-hidden"
					classNameInView="animated titleIn"
					toggleClassNameOnInView
				>
					<h2 className="title red">Albums</h2>
				</InViewMonitor>
				<div className="wrapper">
					<div>
						<h3>2020 - 2020</h3>
						<SpotifyPlayer
							uri="spotify:album:5PUExiuXHdh71FCOME9eVA"
							size={size}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>Future - 2020</h3>
						<SpotifyPlayer
							uri="spotify:album:0AxIzHIcCeyu8z6JqidQtX"
							size={size}
							view="list"
							theme="black"
						/>
					</div>
				</div>

				<div className="wrapper">
					<div>
						<h3>Present - 2020</h3>
						<SpotifyPlayer
							uri="spotify:album:0e5MIP4vPxL2DtADJFD301"
							size={size}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>The Past - 2019</h3>
						<SpotifyPlayer
							uri="spotify:album:1ewlhbOoQAHakrgaEuXWry"
							size={size}
							view="list"
							theme="black"
						/>
					</div>
				</div>
				<div className="wrapper">
					<div>
						<h3>The Wind - 2019</h3>
						<SpotifyPlayer
							uri="spotify:album:5VIhDY0sy0rKd2z68T2yRD"
							size={size}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>Life Goes On - 2003</h3>
						<SpotifyPlayer
							uri="spotify:album:2nz5ZaS4XeSXO5D9jNP9cD"
							size={size}
							view="list"
							theme="black"
						/>
					</div>
				</div>
			</section>
			<section>
				<InViewMonitor
					intoViewMargin="6%"
					classNameNotInView="vis-hidden"
					classNameInView="animated titleIn"
					toggleClassNameOnInView
				>
					<h2 className="title red">Singels & EP</h2>
				</InViewMonitor>
				<div className="wrapper">
					<div>
						<h3>Divane - 2021</h3>
						<SpotifyPlayer
							uri="spotify:album:15gO287YrDb4sNHckk5wiJ"
							size={sizeSingel}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>Malmö Syndrome - 2021</h3>
						<SpotifyPlayer
							uri="spotify:album:1SVNdrRPEto1RXbmX9Oyy9"
							size={sizeSingel}
							view="list"
							theme="black"
						/>
					</div>
				</div>
				<div className="wrapper">
					<div>
						<h3>Infinity - 2021</h3>
						<SpotifyPlayer
							uri="spotify:album:04RmkiqoBN6VFU5XQvS0CE"
							size={sizeSingel}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>Spaced out - 2020</h3>
						<SpotifyPlayer
							uri="spotify:album:3i4AVKxg8Znjot9NlO6ie8"
							size={sizeSingel}
							view="list"
							theme="black"
						/>
					</div>
				</div>
				<div className="wrapper">
					<div>
						<h3>Fallen Angels - 2019</h3>
						<SpotifyPlayer
							uri="spotify:album:2nKd39bGTeA5MTq0z21c0I"
							size={sizeSingel}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>Getaway - 2019</h3>
						<SpotifyPlayer
							uri="spotify:album:5SuRJpmUEks2akEQx9qWAl"
							size={sizeSingel}
							view="list"
							theme="black"
						/>
					</div>
				</div>
				<div className="wrapper">
					<div>
						<h3>Hope - 2017</h3>
						<SpotifyPlayer
							uri="spotify:album:4etfZNUXJ0DljYEvpKIWxy"
							size={sizeSingel}
							view="coverart"
							theme="black"
						/>
					</div>
					<div>
						<h3>The Demo - 2010</h3>
						<SpotifyPlayer
							uri="spotify:album:1aDI4c4U1vQQy9mXbUIiIN"
							size={sizeSingel}
							view="list"
							theme="black"
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
