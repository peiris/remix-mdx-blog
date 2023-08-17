import Cta from "~/components/atoms/Cta";
import TechLogos from "~/components/atoms/TechLogos";
import Hero from "~/components/layouts/Hero";
import Services from "~/components/layouts/Services";
import WhySpiced from "~/components/layouts/WhySpiced";

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<Hero />
			<TechLogos />
			<WhySpiced />
			<Services />
			<Cta />
		</div>
	);
}
