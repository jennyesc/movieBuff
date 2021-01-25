// Page Not Found

import { Link } from 'react-router-dom';
import background from '../images/about-bg.jpg';

function PageNotFound () {
	return (
		 <main>
			<section>
				<div className="page-container">
						<div className="page-background">
							<div className="image" style={{ backgroundImage: `url(${background})`}}>
								<div className="page-container">
									<h2 className="align">404...Page Not Found</h2>
									<div className="p">
										<p>Please go to the <Link to={'/'}>home</Link> page.</p>
									</div>
								</div>	
							</div>
						</div>	
				</div>
				
		 	</section>
		 </main>

	);
}
export default PageNotFound;