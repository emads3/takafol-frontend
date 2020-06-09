import React from 'react';
import {Link} from 'react-router-dom';

export function PortoHeader(props) {
	return <header id="header" className="header-no-min-height header-mobile-nav-only header-flex"
				   data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 0, 'stickySetTop': '0'}">
		<div className="header-body">
			<div className="header-container container">
				<div className="header-row">
					<div className="header-column">
						<div className="header-logo">
							<a href="#">
								<img alt="Porto" width="82" height="40" src="/porto-assets/img/logo.png"/>
							</a>
						</div>
					</div>
					<div className="header-column">
						<div className="header-row">
							<div className="header-nav header-nav-stripe">
								<button className="btn header-btn-collapse-nav" data-toggle="collapse"
										data-target=".header-nav-main">
									<i className="fa fa-bars"></i>
								</button>
								<ul className="header-social-icons social-icons hidden-xs">
									<li className="social-icons-facebook"><a href="#"
																			 target="_blank" title="Facebook"><i
										className="fa fa-facebook"></i></a></li>
									<li className="social-icons-twitter"><a href="#"
																			target="_blank" title="Twitter"><i
										className="fa fa-twitter"></i></a></li>
									<li className="social-icons-linkedin"><a href="#"
																			 target="_blank" title="Linkedin"><i
										className="fa fa-linkedin"></i></a></li>
								</ul>
								<div
									className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
									<nav>
										<ul className="nav nav-pills" id="mainNav">
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													Home
												</a>
												<ul className="dropdown-menu">
													<li>
														<a href="#">
															Landing Page
														</a>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Classic</a>
														<ul className="dropdown-menu">
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-classic.jpg">Classic
																- Original</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-classic-color.jpg">Classic
																- Color</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-classic-light.jpg">Classic
																- Light</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-classic-video.jpg">Classic
																- Video</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-classic-video-light.jpg">Classic
																- Video - Light</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Corporate <span
															className="tip tip-dark">hot</span></a>
														<ul className="dropdown-menu">
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate.jpg">Corporate
																- Version 1</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version2.jpg">Corporate
																- Version 2</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version3.jpg">Corporate
																- Version 3</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version4.jpg">Corporate
																- Version 4</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version5.jpg">Corporate
																- Version 5</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version6.jpg">Corporate
																- Version 6</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version7.jpg">Corporate
																- Version 7</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-version8.jpg">Corporate
																- Version 8</a></li>
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-corporate-hosting.jpg">Corporate
																- Hosting</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">One Page</a>
														<ul className="dropdown-menu">
															<li><a href="#"
																   data-thumb-preview="/porto-assets/img/previews/preview-one-page.jpg">One
																Page Original</a></li>
														</ul>
													</li>
												</ul>
											</li>
											<li className="">
												<Link to='/footer'>Footer</Link>
											</li>
											<li className="dropdown dropdown-mega">
												<a className="dropdown-toggle" href="#">
													Shortcodes
												</a>
												<ul className="dropdown-menu">
													<li>
														<div className="dropdown-mega-content">
															<div className="row">
																<div className="col-md-3">
																	<span className="dropdown-mega-sub-title">Shortcodes 1</span>
																	<ul className="dropdown-mega-sub-nav">
																		<li><a
																			href="#">Accordions</a>
																		</li>
																		<li><a
																			href="#">Toggles</a>
																		</li>
																		<li><a href="#">Tabs</a></li>
																		<li><a href="#">Icons</a>
																		</li>
																		<li><a href="#">Icon
																			Boxes</a></li>
																		<li><a
																			href="#">Carousels</a>
																		</li>
																		<li><a href="#">Modals</a>
																		</li>
																		<li><a
																			href="#">Lightboxes</a>
																		</li>
																	</ul>
																</div>
																<div className="col-md-3">
																	<span className="dropdown-mega-sub-title">Shortcodes 2</span>
																	<ul className="dropdown-mega-sub-nav">
																		<li><a
																			href="#">Buttons</a>
																		</li>
																		<li><a href="#">Labels</a>
																		</li>
																		<li><a href="#">Lists</a>
																		</li>
																		<li><a href="#">Image
																			Gallery</a></li>
																		<li><a href="#">Image
																			Frames</a></li>
																		<li><a
																			href="#">Testimonials</a>
																		</li>
																		<li><a
																			href="#">Blockquotes</a>
																		</li>
																		<li><a href="#">Word
																			Rotator</a></li>
																	</ul>
																</div>
																<div className="col-md-3">
																	<span className="dropdown-mega-sub-title">Shortcodes 3</span>
																	<ul className="dropdown-mega-sub-nav">
																		<li><a href="#">Call
																			to Action</a></li>
																		<li><a href="#">Pricing
																			Tables</a></li>
																		<li><a href="#">Tables</a>
																		</li>
																		<li><a href="#">Progress
																			Bars</a></li>
																		<li><a
																			href="#">Counters</a>
																		</li>
																		<li><a
																			href="#">Sections &amp; Parallax</a>
																		</li>
																		<li><a
																			href="#">Tooltips &amp; Popovers</a>
																		</li>
																		<li><a href="#">Sticky
																			Elements</a></li>
																	</ul>
																</div>
																<div className="col-md-3">
																	<span className="dropdown-mega-sub-title">Shortcodes 4</span>
																	<ul className="dropdown-mega-sub-nav">
																		<li><a
																			href="#">Headings</a>
																		</li>
																		<li><a
																			href="#">Dividers</a>
																		</li>
																		<li><a
																			href="#">Animations</a>
																		</li>
																		<li><a href="#">Medias</a>
																		</li>
																		<li><a href="#">Maps</a></li>
																		<li><a href="#">Arrows</a>
																		</li>
																		<li><a href="#">Alerts</a>
																		</li>
																		<li><a href="#">Posts</a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</li>
											<li className="dropdown active">
												<a className="dropdown-toggle" href="#">
													Features
												</a>

												<ul className="dropdown-menu">
													<li className="dropdown-submenu">
														<a href="#">Headers</a>
														<ul className="dropdown-menu">
															<li className="dropdown-submenu">
																<a href="#">Default</a>
																<ul className="dropdown-menu">
																	<li><a href="#">Default</a></li>
																	<li><a href="#">Default
																		+ Language Dropdown</a></li>
																	<li><a href="#">Default +
																		Big Logo</a></li>
																</ul>
															</li>
															<li className="dropdown-submenu">
																<a href="#">Flat</a>
																<ul className="dropdown-menu">
																	<li><a href="#">Flat</a></li>
																	<li><a href="#">Flat +
																		Top Bar</a></li>
																	<li><a
																		href="#">Flat
																		+ Colored Top Bar</a></li>
																	<li><a href="#">Flat
																		+ Top Bar with Search</a></li>
																</ul>
															</li>
															<li><a href="#">Center</a></li>
															<li><a href="#">Below
																Slider</a></li>
															<li><a href="#">Full Video</a>
															</li>
															<li><a href="#">Narrow</a></li>
															<li><a href="#">Always
																Sticky</a></li>
															<li className="dropdown-submenu">
																<a href="#">Transparent</a>
																<ul className="dropdown-menu">
																	<li><a
																		href="#">Transparent</a>
																	</li>
																	<li><a
																		href="#">Transparent
																		- Bottom Border</a></li>
																	<li><a href="#">Semi
																		Transparent</a></li>
																	<li><a
																		href="#">Semi
																		Transparent - Light</a></li>
																</ul>
															</li>
															<li><a href="#">Full-Width</a>
															</li>
															<li className="dropdown-submenu">
																<a href="#">Navbar</a>
																<ul className="dropdown-menu">
																	<li><a href="#">Navbar</a>
																	</li>
																	<li><a href="#">Navbar
																		+ Extra Info</a></li>
																</ul>
															</li>
															<li className="dropdown-submenu">
																<a href="#">Side Header</a>
																<ul className="dropdown-menu">
																	<li><a href="#">Side
																		Header Left</a></li>
																	<li><a href="#">Side
																		Header Right</a></li>
																	<li><a
																		href="#">Side
																		Header Semi Transparent</a></li>
																</ul>
															</li>
															<li><a href="#">Sign In / Sign Up</a>
															</li>
															<li><a href="#">Logged</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Navigations</a>
														<ul className="dropdown-menu">
															<li><a href="#">Default</a></li>
															<li><a href="#">Stripe</a></li>
															<li><a href="#">Top Line</a>
															</li>
															<li><a href="#">Dark
																Dropdown</a></li>
															<li><a href="#">Colors</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Footers</a>
														<ul className="dropdown-menu">
															<li><a href="#">Default</a></li>
															<li><a href="#">Advanced</a>
															</li>
															<li><a href="#">Simple</a>
															</li>
															<li><a href="#">Light</a></li>
															<li><a href="#">Light
																Narrow</a></li>
															<li className="dropdown-submenu">
																<a href="#">Colors</a>
																<ul className="dropdown-menu">
																	<li><a
																		href="#">Primary
																		Color</a></li>
																	<li><a
																		href="#">Secondary
																		Color</a></li>
																	<li><a
																		href="#">Tertiary
																		Color</a></li>
																	<li><a
																		href="#">Quaternary
																		Color</a></li>
																</ul>
															</li>
															<li><a href="#">Latest
																Work</a></li>
															<li><a href="#">Contact
																Form</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Page Headers</a>
														<ul className="dropdown-menu">
															<li><a href="#">Default</a>
															</li>
															<li className="dropdown-submenu">
																<a href="#">Colors</a>
																<ul className="dropdown-menu">
																	<li><a href="#">Primary
																		Color</a></li>
																	<li><a
																		href="#">Secondary
																		Color</a></li>
																	<li><a href="#">Tertiary
																		Color</a></li>
																	<li><a
																		href="#">Quaternary
																		Color</a></li>
																</ul>
															</li>
															<li><a href="#">Light</a></li>
															<li><a href="#">Light -
																Reverse</a></li>
															<li><a href="#">Custom
																Background</a></li>
															<li><a href="#">Parallax</a>
															</li>
															<li><a href="#">Center</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Admin Extension <span
															className="tip tip-dark">hot</span> <em
															className="not-included">(Not Included)</em></a>
														<ul className="dropdown-menu">
															<li><a href="#">Forms Basic</a>
															</li>
															<li><a href="#">Forms
																Advanced</a></li>
															<li><a href="#">Forms
																Wizard</a></li>
															<li><a href="#">Code
																Editor</a></li>
															<li><a href="#">Tables
																Advanced</a></li>
															<li><a href="#">Tables
																Responsive</a></li>
															<li><a href="#">Tables
																Editable</a></li>
															<li><a href="#">Tables Ajax</a>
															</li>
															<li><a href="#">Charts</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Sliders</a>
														<ul className="dropdown-menu">
															<li><a href="#">Revolution Slider</a></li>
															<li><a href="#">Nivo Slider</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Layout Options</a>
														<ul className="dropdown-menu">
															<li><a href="#">Boxed</a></li>
															<li><a href="#">Dark</a></li>
															<li><a href="#">RTL</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Extra</a>
														<ul className="dropdown-menu">
															<li><a href="#">Typography</a></li>
															<li><a href="#">Grid System</a></li>
															<li><a href="#">Page Loading</a>
															</li>
															<li><a href="#">Lazy Load</a></li>
														</ul>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													Pages
												</a>
												<ul className="dropdown-menu">
													<li className="dropdown-submenu">
														<a href="#">About Us</a>
														<ul className="dropdown-menu">
															<li><a href="#">About Us</a></li>
															<li><a href="#">About Us - Basic</a></li>
															<li><a href="#">About Me</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Shop</a>
														<ul className="dropdown-menu">
															<li><a href="#">Shop - Full Width</a>
															</li>
															<li><a href="#">Shop - Sidebar</a></li>
															<li><a href="#">Shop - Product
																Full Width</a></li>
															<li><a href="#">Shop - Product
																Sidebar</a></li>
															<li><a href="#">Shop - Cart</a></li>
															<li><a href="#">Shop - Login</a></li>
															<li><a href="#">Shop - Checkout</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Blog</a>
														<ul className="dropdown-menu">
															<li><a href="#">Blog Full Width</a></li>
															<li><a href="#">Blog Large Image</a>
															</li>
															<li><a href="#">Blog Medium Image</a>
															</li>
															<li><a href="#">Blog Timeline</a></li>
															<li><a href="#">Single Post</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Layouts</a>
														<ul className="dropdown-menu">
															<li><a href="#">Full Width</a></li>
															<li><a href="#">Left Sidebar</a></li>
															<li><a href="#">Right Sidebar</a></li>
															<li><a href="#">Left and
																Right Sidebars</a></li>
															<li><a href="#">Sticky Sidebar</a>
															</li>
															<li><a href="#">Secondary
																Navbar</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Extra</a>
														<ul className="dropdown-menu">
															<li><a href="#">404 Error</a></li>
															<li><a href="#">Coming Soon</a></li>
															<li><a href="#">Maintenance
																Mode</a></li>
															<li><a href="#">Sitemap</a></li>
														</ul>
													</li>
													<li><a href="#">Custom Header</a></li>
													<li><a href="#">Team</a></li>
													<li><a href="#">Services</a></li>
													<li><a href="#">Careers</a></li>
													<li><a href="#">Our Office</a></li>
													<li><a href="#">FAQ</a></li>
													<li><a href="#">Login / Register</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													Portfolio
												</a>
												<ul className="dropdown-menu">
													<li className="dropdown-submenu">
														<a href="#">Single Project</a>
														<ul className="dropdown-menu">
															<li><a href="#">Small
																Slider</a></li>
															<li><a href="#">Wide
																Slider</a></li>
															<li><a href="#">Full
																Width Slider</a></li>
															<li><a href="#">Gallery</a></li>
															<li><a href="#">Carousel</a>
															</li>
															<li><a href="#">Medias</a></li>
															<li><a href="#">Full
																Width Video</a></li>
															<li><a href="#">Masonry
																Images</a></li>
															<li><a href="#">Left
																Sidebar</a></li>
															<li><a href="#">Right
																Sidebar</a></li>
															<li><a href="#">Left
																and Right Sidebars</a></li>
															<li><a href="#">Sticky
																Sidebar</a></li>
															<li><a href="#">Extended</a>
															</li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Grid Layouts</a>
														<ul className="dropdown-menu">
															<li><a href="#">1 Column</a></li>
															<li><a href="#">2 Columns</a>
															</li>
															<li><a href="#">3 Columns</a>
															</li>
															<li><a href="#">4 Columns</a>
															</li>
															<li><a href="#">5 Columns</a>
															</li>
															<li><a href="#">6 Columns</a>
															</li>
															<li><a href="#">No Margins</a>
															</li>
															<li><a href="#">Full Width</a>
															</li>
															<li><a href="#">Full
																Width No Margins</a></li>
															<li><a
																href="#">Title
																and Description</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Masonry Layouts</a>
														<ul className="dropdown-menu">
															<li><a href="#">2 Columns</a>
															</li>
															<li><a href="#">3 Columns</a>
															</li>
															<li><a href="#">4 Columns</a>
															</li>
															<li><a href="#">5 Columns</a>
															</li>
															<li><a href="#">6 Columns</a>
															</li>
															<li><a href="#">No
																Margins</a></li>
															<li><a href="#">Full
																Width</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Sidebar Layouts</a>
														<ul className="dropdown-menu">
															<li><a href="#">Left Sidebar</a>
															</li>
															<li><a href="#">Right Sidebar</a>
															</li>
															<li><a href="#">Left and
																Right Sidebars</a></li>
															<li><a href="#">Sticky
																Sidebar</a></li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Ajax</a>
														<ul className="dropdown-menu">
															<li><a href="#">Ajax on Page</a></li>
															<li><a href="#">Ajax on Modal</a>
															</li>
														</ul>
													</li>
													<li className="dropdown-submenu">
														<a href="#">Extra</a>
														<ul className="dropdown-menu">
															<li><a href="#">Timeline</a>
															</li>
															<li><a href="#">Lightbox</a>
															</li>
															<li><a href="#">Load More</a>
															</li>
															<li><a href="#">Infinite
																Scroll</a></li>
															<li><a href="#">Pagination</a>
															</li>
															<li><a href="#">Combination
																Filters</a></li>
														</ul>
													</li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" href="#">
													Contact Us
												</a>
												<ul className="dropdown-menu">
													<li><a href="#">Contact Us - Basic</a></li>
													<li><a href="#">Contact Us - Advanced</a></li>
												</ul>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
} // end function component


export function Footer() {
	return <footer id="footer">
		<div className="container">
			<div className="row">
				<div className="footer-ribbon">
					<span>Get in Touch</span>
				</div>
				<div className="col-md-3">
					<div className="newsletter">
						<h4>Newsletter</h4>
						<p>Keep up on our always evolving product features and technology. Enter your e-mail and
							subscribe to our newsletter.</p>

						<div className="alert alert-success hidden" id="newsletterSuccess">
							<strong>Success!</strong> You've been added to our email list.
						</div>

						<div className="alert alert-danger hidden" id="newsletterError"></div>

						<form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
							<div className="input-group">
								<input className="form-control" placeholder="Email Address" name="newsletterEmail"
									   id="newsletterEmail" type="text"/>
								<span className="input-group-btn">
											<button className="btn btn-default" type="submit">Go!</button>
										</span>
							</div>
						</form>
					</div>
				</div>
				<div className="col-md-3">
					<h4>Latest Tweets</h4>
					<div id="tweet" className="twitter" data-plugin-tweets
						 data-plugin-options="{'username': '', 'count': 2}">
						<p>Please wait...</p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="contact-details">
						<h4>Contact Us</h4>
						<ul className="contact">
							<li><p><i className="fa fa-map-marker"></i> <strong>Address:</strong> 1234 Street Name, City
								Name, United States</p></li>
							<li><p><i className="fa fa-phone"></i> <strong>Phone:</strong> (123) 456-789</p></li>
							<li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a
								href="#">mail@example.com</a></p></li>
						</ul>
					</div>
				</div>
				<div className="col-md-2">
					<h4>Follow Us</h4>
					<ul className="social-icons">
						<li className="social-icons-facebook"><a href="#" target="_blank"
																 title="Facebook"><i className="fa fa-facebook"></i></a>
						</li>
						<li className="social-icons-twitter"><a href="#" target="_blank"
																title="Twitter"><i className="fa fa-twitter"></i></a>
						</li>
						<li className="social-icons-linkedin"><a href="#" target="_blank"
																 title="Linkedin"><i className="fa fa-linkedin"></i></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer-copyright">
			<div className="container">
				<div className="row">
					<div className="col-md-1">
						<a href="#" className="logo">
							<img alt="Porto Website Template" className="img-responsive"
								 src="/porto-assets/img/logo-footer.png"/>
						</a>
					</div>
					<div className="col-md-7">
						<p>© Copyright 2017. All Rights Reserved.</p>
					</div>
					<div className="col-md-4">
						<nav id="sub-menu">
							<ul>
								<li><Link to="/">Test link</Link></li>
								<li><a href="#">Sitemap</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</footer>;
}


export function JustButtonByEmad() {
	return <button className="btn btn-primary">Hello This is Emad</button>
}
