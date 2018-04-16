# Watch flash DRM on linux

This is an ugly, thrown together in 5 miniutes, electron application for watching flash DRM content on Linux. At the moment, neither Chromium or Firefox allow watching Flash DRM content on Linux. 

It is entirely based off the sample browser code here: https://github.com/hokein/electron-sample-apps/tree/master/webview/browser which itself is incredibly limited. 

## Installation

Pre-requisites:
1) Requires `npm` to be installed
2) Almost certainly only works on 64 bit Linux builds


## Running
```bash
git clone https://github.com/TomBZombie/Linux-Watch-Flash-DRM.git
cd Linux-Watch-Flash-DRM
npm install
npm start
```

Then use the browser to navigate to the DRM requiring website

## How Does This Work?

The version of pepperflash ( libpepflashplayer.so ) provided for Linux does not support flash DRM and this libpepflashplayer.so  doesn't work for DRM with native Linux Chromium and Google Chrome builds. The version of libpepflashplayer.so provided comes from ChromeOS as detailed here: https://ubuntu-mate.community/t/tutorial-extract-pepper-flash-plugin-v-20-0-0-228-r1-and-above-from-samsung-chromebook-2-13-recovery-image/3614

Unfortunately, you cannot just load this version of libpepflashplayer.so into the native Chromium or Google Chrome build. As mentioned in this post: https://github.com/i-rinat/freshplayerplugin/issues/355 the browser has to be compiled with DRM enabled. 

Note: I have no idea about the legality of distributing this version of libpepflashplayer.so, I'd rather Google just make a version that natively supports DRM on linux and avoid this workaround entirely.

### Known Issues

- The browser is incredibly limited
- If you fullscreen a video, it is drawn with window decoration (at least on KDE). I didn't manage to find a way to avoid this other than  fullscreening the window in the desktop environment itself.

