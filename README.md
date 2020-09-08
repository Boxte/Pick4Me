# What is this?

[Pick4Me Demo on Youtube](https://youtu.be/LvxFzQkAFh8)
<br />
[Pick4Me Project](https://levane.github.io/Pick4Me/)

I can't decide where to eat so let's have the Mr. Wit decide!

I'm feeling like eating japanese.... Or korean... Maybe I want sushi... Or Bibimbap...

Help Mr. Wit!

# How to Use Project

Please use desktop Chrome.

Location can either be set manually with textbox with label 'Manually set location:' or location can be provided at the time the query is given. Location in query is given priority over manual set location.

To use voice:  
Select voice at the bottom of the page. Hit the red microphone button in the center of the page to start recording. An animation occurs while recording audio. Animation stops when recording is over. Hit 'Pick' button when you are satisfied with your recording. A restaurant result loads up and you can head over there to eat :). Or click 'I don't want this one' to retry again with the same query.

To use text:  
Select text at the bottom of the page. Type in what you're feeling in the text box in the center of the page. Hit 'Pick' button when you are good with what to tell Wit. A restaurant result loads up and you can head over there to eat :). Or click 'I don't want this one' to retry again with the same query.

To enter a new query:  
Hit either the voice or text button at the bottom of the page.

# Screenshots

[Audio Query for Chicago](./screenshots/audio_chicago.png)
[Result for Chicago](./screenshots/audio_chicago_result.png)
[Text Query for Boston](./screenshots/text_boston.png)
[Result for Boston](./screenshots/text_boston_result.png)

# Tech Used

- React
- wit.ai
- Yelp Fusion API

# Limitations

- This application works well on bigger screens such as desktop.
- I only tested this in the United States.
- The application gives proper options if there are enough restaurants in the city to supply the search query.

Voice support is limited to certain browsers:

- Chrome (desktop): this is by far the smoothest experience
- Microsoft Edge
- Chrome (Android): a word of warning about this platform, which is that there can be an annoying beeping sound when turning the microphone on. This is part of the Android OS and cannot be controlled from the browser
- Android webview
- Samsung Internet
