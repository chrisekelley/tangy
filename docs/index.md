# Using Tangy

Welcome to Tangy. Here are some examples of using Tangy tags.

## tangy-eftouch

include `<link rel="import" href="/src/tangy-eftouch/tangy-eftouch.html">` in index.html.

```
<form method="get">
    <tangy-eftouch statusMessage="Select an new picture." display_sound_url="src/tangy-eftouch/assets/swish.mp3" transition_sound_url="src/tangy-eftouch/assets/pop.mp3">
      <img src="src/tangy-eftouch/assets/apple.png" height="425" width="250" id="apple"/>
      <img src="src/tangy-eftouch/assets/dog.png" height="425" width="250" id="dog"/>
      <img src="src/tangy-eftouch/assets/cat.png" height="425" width="250" id="cat"/>
      <input type=text" name="foo" id="foo"/>
    </tangy-eftouch>
  <input type="submit" value="submit"/>
</form>
```

