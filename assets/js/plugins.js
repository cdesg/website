/*!
 * Revealing Module Pattern Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
var menu = (function () {

	'use strict';

	//
	// Variables
	//
	var menuContainer = null;
	var menuOpenButton = null;
	var menuCloseButton = null;
	var menuContainerFirstFocusable = null; 
	var menuContainerLastFocusable = null;
	var menuLinks = null;

	var settings = null;


	// Default settings
	var defaults = {
		selector: '#menu',
		menuOpenButtonId: 'menuOpenButton',
		menuCloseButtonId: 'menuCloseButton',
	};

	
	var publicAPIs = {};


	//
	// Methods
	//

	/**
	 * A private method
	 */
	var cacheAndBuildDom = function () {
		// Code goes here...

		if (settings.selector === "" ) {
			
		}

		menuContainer = document.querySelector(settings.selector);
		
		if(menuContainer != null) {
			
			console.log ("Found: " + settings.selector)

			// Add the Menu Open Button
			menuContainer.insertAdjacentHTML( 'afterend' , 
				`
				<div class="block lg:hidden">
					<button
						class="appearance-none flex items-center px-3 py-2 text-brand-accent hover:text-white hover:border-white hover:bg-brand-accent rounded-lg"
						id="`+ settings.menuOpenButtonId +`">
						<span class="mr-2 font-bold">Menu </span> 
						<svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				`);

			// Add the Menu Close Button 
			menuContainer.insertAdjacentHTML( 'beforeend' , 
				`
				<div class="mt-10 lg:hidden">
					<button
						class="appearance-none flex mx-auto items-center px-4 py-4 text-white text-1xl hover:text-white border border-white hover:bg-brand-accent rounded-lg focus:border-white focus:border"
						id="`+ settings.menuCloseButtonId +`">
						<span class="mr-2 font-bold">Close </span> 
						<svg class="fill-current h-4 w-4" viewBox="0 0 72.434 72.437" xmlns="http://www.w3.org/2000/svg">
							<title>Close</title>
							<path d="M36.22,0C16.212,0,0,16.215,0,36.223c0,19.999,16.212,36.214,36.22,36.214
								s36.214-16.215,36.214-36.214C72.434,16.215,56.228,0,36.22,0z M51.812,48.083l-4.565,4.565l-11.02-11.021L24.86,52.995
								l-4.565-4.565l11.367-11.367L20.639,26.04l4.568-4.565l11.02,11.02l11.349-11.343l4.565,4.565L40.792,37.063L51.812,48.083z"/>
						</svg>
					</button>
				</div>
				`);

			// Cache the menu open button 
			menuOpenButton = document.getElementById(settings.menuOpenButtonId);

			// Cache the menu close button 
			menuCloseButton = document.getElementById(settings.menuCloseButtonId);

			// Get all of the nodes in the menu container 
			var menuNodes = menuContainer.querySelectorAll("select, input, textarea, button, a");

			// Cache the first focusable item on the menu to control tabing behaviour 
			menuContainerFirstFocusable = menuNodes[0];

			console.log(menuNodes)

			// Cache the last focusable item on the menu to control tabing behaviour assuming there is 
			//  more than one item to cache
			if (menuNodes.length > 0) { 
				menuContainerLastFocusable = menuNodes[menuNodes.length- 1];
			}

			// Cache the menu links 
			menuLinks = menuContainer.querySelectorAll("a");

		}
		else { 
			throw("Menu Container ID was not found");
		}

	};


	/**
	 * A private method
	 */
	var bindEvents = function () {

		// Bind the menu open button 
		menuOpenButton.addEventListener('click', show.bind(this));

		// Bind the menu close button 
		menuCloseButton.addEventListener('click', hide.bind(this));

		// If the first focusable item is tabed on
		menuContainerFirstFocusable.addEventListener('keydown', tabKeyMenuFirstChildHandler.bind(this)); 

		// If the last focusable item is tabed on
		menuContainerLastFocusable.addEventListener('keydown', tabKeyMenuLastChildHandler.bind(this)); 

		// Add an escape key handler to the menu container
		menuContainer.addEventListener('keydown', escapeKeyHandler.bind(this)); 

		// Bind the links so we can close the menu if anyone clicks on an outbound link
		menuLinks.forEach(function (link, index) { 
			menuLinks[index].addEventListener('click', menuListClickHander.bind(this));
		}); 

	};


	/**
	 * A private method
	 */
	var show = function () {
		// Code goes here...

		// Remove the hidden class to show the menu
		menuContainer.classList.remove('hidden');

		// Set focus after a delay to allow for the annimation
		window.setTimeout(setFocusAfterOpen.bind(this), 300);

		console.log("Mobile Menu: Open");

	};

	/**
	 * A private method
	 */
	var hide = function () {
		// Code goes here...

		menuContainer.classList.add('hidden');


		console.log("Mobile Menu: Close");

	};


	/**
	 * A private method
	 */
	var tabKeyMenuFirstChildHandler = function (e) {

		
		if ( ( e.keyCode === 9 && e.shiftKey ) && (menuContainer.classList.contains('hidden') === false) ) {

			console.log("First Child Handler")

			e.preventDefault();

			menuContainerLastFocusable.focus();
		}
	};

	/**
	 * A private method
	 */
	var tabKeyMenuLastChildHandler = function (e) {

		
		if ( ( e.keyCode === 9 && !e.shiftKey ) && (menuContainer.classList.contains('hidden') === false) ) {

			console.log("Last Child Handler")

			e.preventDefault();

			menuContainerFirstFocusable.focus();

		}
	};

	/**
	 * A private method
	 */
	var escapeKeyHandler = function (e) {

		
		if ( ( e.keyCode === 27 && !e.shiftKey ) && (menuContainer.classList.contains('hidden') === false) ) {

			console.log("Escape Key Handler ")

			hide(); 

		}
	};

	/**
	 * A private method
	 */
	var menuListClickHander = function (e) {

		if ( menuContainer.classList.contains('hidden') === false) {

			console.log("Link clicked handler closing menu");

			hide(); 

		}
		
	};


	/**
	 * A private method
	 */
	var setFocusAfterOpen = function () {
		menuCloseButton.focus();
	};


	/**
	 * A public method
	 */
	publicAPIs.doSomething = function () {
		somePrivateMethod();
		// Code goes here...
	};

	/**
	 *  Main entry function 
	 *  init - needs to be provided with an id 
	 *  for the menu
	 */
	publicAPIs.init = function (options) {
		
		// Merge user options into defaults
		settings = Object.assign({}, defaults, options);

		try {

			// Cache the dom and other elements
			cacheAndBuildDom();

			// Bind the event handlers
			bindEvents();


		}
		catch(e) {
			// Send the error message to the console window
			console.log("Mobile Menu Plugin Error: " + e);
		}
		finally {
			//code that will run after a try/catch block regardless of the outcome
		}
	};


	//
	// Return the Public APIs
	//

	return publicAPIs;

})();