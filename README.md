# macOS Font Smoothing

You have probably noticed how the font smoothing differs from Safari to Chrome.

I like the Safari one better. Don't believe me? Check the before and after:

**Before:**

![before-font-smoothing](screenshots/before.png)

**After:**

![after-font-smoothing](screenshots/after.png)

## How it works

This is one of the most simple extensions ever. Literally one js file which
checks if the website has already set the `-webkit-font-smoothing` property. If
not, it sets it to `antialiased`.

This is done to respect any stylistic options by the developers of the website.
If they insist on having a different font rendering, let them have it.

## Wait, aren't there similar extensions?

Well, yes. But they were not open source and required funky permissions. I'm
paranoid and suspicious of that, so I'd rather have my own open source
extension.

Feel free to use them if they suit you better.


## Installing

Click [here]() to download the latest version.

Chrome Webstore link soon.

## Contributing

Feel free to jump in and open pull requests. This was literally done in 10
minutes so the standards for contributing are not very high.

There is however a TODO list if you want to lend a hand:

### Roadmap

- [] Add an icon
- [] Allow a "force" mode which *always* sets the `font-smoothing`, regardless
  of the previous website setting.
- [] Allow users to whitelist websites.
