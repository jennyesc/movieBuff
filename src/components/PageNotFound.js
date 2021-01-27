// Page Not Found

import { Link } from 'react-router-dom';
import background from '../images/404-bg.jpg';

function PageNotFound () {
	return (
		 <main>
			<section>
				<div className="page-container">
					<div className="page-background">
						<div className="image" style={{ backgroundImage: `url(${background})`}}>
							<div className="text-container">
								<h2 className="align">404</h2>
									<div className="p">
										<p>I guess you aren't ready for that page yet...</p>
										<p>but your kids are gonna love it. </p>
										<p className="homelink"><Link to={'/'}>back home</Link></p>
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