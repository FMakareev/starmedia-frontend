import React, {Fragment} from 'react'
import "../style/style.scss";
import SectionNews from '../pageTemplate/HomePage/SectionNews/SectionNews';
import SectionAboutUs from "../pageTemplate/HomePage/SectionAboutUs/SectionAboutUs";
import SectionProjects from '../pageTemplate/HomePage/SectionProjects/SectionProjects';
import SectionGetCatalog from '../pageTemplate/HomePage/SectionGetCatalog/SectionGetCatalog';
import SectionMain from '../pageTemplate/HomePage/SectionMain/SectionMain';
// import {withTranslation} from "react-i18next";

const Homepage = () => {

	return (
			<Fragment>
				<SectionMain/>
				<SectionNews/>
				<SectionAboutUs/>
				<SectionProjects/>
				<SectionGetCatalog/>
			</Fragment>
	);
};

Homepage.getInitialProps = async () => ({
	namespacesRequired: ['nav'],
});

export default Homepage;
