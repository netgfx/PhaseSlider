# PhaseSlider
A slider UI component for Phaser.io Javascript library

<h3>Initialize the slider in your preload function</h3>
```
slider = new phaseSlider(game); //make sure to have slider publicly available
```
And then simply construct your slider in the main function of your game or anywhere else

```
slider.createSlider({
    customSliderBG: false,
    mode: "horizontal",
    sliderBGAlpha: 0.8,
    width: 500,
    height: 400,
    x: game.width / 2 - 500 / 2,
    y: game.height / 2 - 400 / 2,
    objects:[block1, block2, block3, block4, block5]
  });
  ```

<img src="http://i221.photobucket.com/albums/dd22/djmid71/phaseslider_zpspiwz98ly.gif"/>  
  
><strong>View examples:</strong>
<a href="http://www.netgfx.com/trunk/games/libs/phaseslider/examples/example1.html">Advanced example</a> | 
<a href="http://www.netgfx.com/trunk/games/libs/phaseslider/examples/index.html">Simple example</a>
  
  <hr>
  
<strong>General Options:</strong>

<ul>
	<li><strong>mode:</strong> Type of movement for the slides (default horizontal, vertical-from-bottom, vertical-from-top)</li>
	<li><strong>width:</strong> The width of the slider (default 500 pixels)</li>
  <li><strong>height:</strong> The height of the slider (default 400 pixels)</li>
  <li><strong>x</strong> The x position of the slider (default 0)</li>
	<li><strong>y</strong> The y position of the slider (default 0)</li>
	<li><strong>objects</strong> An array of sprites or groups that will be the slides (added as they appear on the array left->right)</li>
	<li><strong>animationDuration: </strong> This sets the speed of the animation while sliding (default: 600ms)</li>
	<li><strong>animationEasing:</strong> The easing applied to the sliding animation (default Phaser.Easing.Cubic.Out)</li>
	<li><strong>sliderBG</strong> A single color to paint the background of the slider (default #35d2e0)</li>
	<li><strong>customSliderBG</strong> A cache value to serve as a background for the slider (default false)</li>
	<li><strong>sliderBGAlpha</strong> The alpha value for the slider background (default 1)</li>
	<li><strong>customHandleNext</strong> A cache value for the the right arrow (if omited the liv has a build-in image to place)</li>
	<li><strong>customHandlePrev</strong> A cache value for the the left arrow (if omited the liv has a build-in image to place)</li>
	<li><strong>showHandles</strong> Whether or not to show arrows for slider navigation (default true)</li>
	<li><strong>onNextCallback</strong> A callback function to be called when the slider navigates forward (default false)</li>
	<li><strong>onPrevCallback</strong> A callback function to be called when the slider navigates backwards (default false)</li>
	<li><strong>autoAnimate</strong> If we want the slider to aumatically rotate the slider (default false)</li>
	<li><strong>animationDelay</strong> The delay between slide change when autoAnimate is set to true (default 2s)</li>
	<li><strong>modal</strong> Add a black modal behind the slider (default false)</li>
	<li><strong>modalAlpha</strong> The amount of alpha (opacity) for the slider modal (default 0.7)</li>
	<li><strong>staticElements</strong> The static elements that need to be added but not move (default [])</li>
</ul>

<strong>API Functions</strong>

<ul>
	<li><strong>createSlider</strong> | Creates the slider object and the slides</li>
	<li><strong>startSlider</strong> | Starts the automatic rotation of the slider if autoAnimate is set to true</li>
	<li><strong>stopSlider</strong> | Stops the automatic rotation of slides</li>
	<li><strong>moveToSlide</strong> | Navigate to specific slide index (args: index:Number, animated:Boolean)</li>
	<li><strong>goToNext</strong> | Navigate to the next slide</li>
	<li><strong>goToPrev</strong> | Navigate to the previous slide</li>	
	<li><strong>getCurrentIndex</strong> | Receive the current slide index</li>	
	<li><strong>hideSlider</strong> | Render the slider not visible (the slider will not be able to receive input events)</li>
	<li><strong>showSlider</strong> | Render the slider visible</li>
</ul>

<i>
*Note: When automatic rotation has started, navigating from the control arrows (next, prev) will stop the auto animation
</i>

<hr>

>Please let me know if you come across some bug or have something to contribute





