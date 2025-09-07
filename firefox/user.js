// user.js - Custom Firefox configuration


// my own settings

// Increases max parallel downloads
user_pref("security.remote_settings.intermediates.parallel_downloads", 16);

user_pref("network.http.max-persistent-connections-per-server", 20); // increase download connections

// Disable AI features
// Ref: https://www.youtube.com/watch?v=tQLH8c697gs&t=17s
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);

// Enable automatic autofill
user_pref("browser.urlbar.autoFill", true);

// Adaptive history autofill
// Learns full URLs associated with certain letters/strings
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);
user_pref("browser.urlbar.autoFill.adaptiveHistory.minCharsThreshold", 3);

// Remove the Firefox sidebar revamp
user_pref("sidebar.revamp", false);

// Anti-popup tweaks
// Force popups to open in a new tab instead
user_pref("browser.link.open_newwindow.restriction", 0);

// Prevent new tabs from stealing focus
user_pref("browser.tabs.loadDivertedInBackground", true);

user_pref("privacy.firstparty.isolate", true)


// speed tweaks FastFox.js

user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)
user_pref("gfx.webrender.all", true); // enables WR + additional features
user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
user_pref("gfx.webrender.compositor.force-enabled", true); // enforce

user_pref("gfx.canvas.accelerated", true); // [DEFAULT FF133+]
user_pref("gfx.canvas.accelerated.cache-items", 8192); // DEFAULT FF135+; Chrome=4096
user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512
user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20

user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
user_pref("layers.gpu-process.force-enabled", true); // enforce
user_pref("layers.mlgpu.enabled", true); // LINUX
user_pref("media.hardware-video-decoding.enabled", true); // DEFAULT WINDOWS macOS
user_pref("media.hardware-video-decoding.force-enabled", true); // enforce
user_pref("media.gpu-process-decoder", true); // DEFAULT WINDOWS
user_pref("media.ffmpeg.vaapi.enabled", true); // LINUX

user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true); // DEFAULT
user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true); // enforce
user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true); // DEFAULT
user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true); // enforce

// using profile sync deamon. no need for on diskcache!
user_pref("browser.cache.disk.enable", false);

// do i need to force cache first or net work first? true can lower net usage
//user_pref("network.http.rcwn.enabled", false);

user_pref("browser.cache.disk.metadata_memory_limit", 500);

// memory cache settings

user_pref("browser.cache.memory.capacity", 131072); // (128 MB)
user_pref("browser.cache.memory.max_entry_size", 20480); // (20 MB); default=5120 (5 MB)
user_pref("browser.sessionhistory.max_total_viewers", 4);

user_pref("media.memory_cache_max_size", 65536);

user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

// image cache

user_pref("image.mem.decode_bytes_at_a_time", 32768);

// net settings


user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3

user_pref("network.http.pacing.requests.enabled", false);

user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)

// net dns prefetching 
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [FF127+ false]

user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);

user_pref("network.prefetch-next", false);

user_pref("network.predictor.enabled", false);



// PeskyFox.js

// PREF: Mozilla VPN
// [1] https://github.com/yokoffing/Betterfox/issues/169
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.vpn_promo.enabled", false);

// PREF: disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN

// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Personalized Extension Recommendations in about:addons and AMO
// [NOTE] This pref has no effect when Health Reports are disabled.
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// PREF: disable Fakespot integration [FF116+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1840156#c0
// [2] https://github.com/arkenfox/user.js/issues/1730
// [3] https://www.fakespot.com/
// [4] https://www.ghacks.net/2023/10/12/firefox-will-soon-tell-you-if-product-reviews-are-reliable/
user_pref("browser.shopping.experience2023.enabled", false); // DEFAULT
user_pref("browser.shopping.experience2023.ads.exposure", false); // DEFAULT [FF121+]

// PREF: disable Firefox from asking to set as the default browser
// [1] https://github.com/yokoffing/Betterfox/issues/166
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: tab and about:config warnings
//user_pref("browser.tabs.warnOnClose", false); // DEFAULT [FF94+]
//user_pref("browser.tabs.warnOnCloseOtherTabs", true); // DEFAULT
//user_pref("browser.tabs.warnOnOpen", true); // DEFAULT
user_pref("browser.aboutConfig.showWarning", false);


// PREF: disable welcome notices
user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
//user_pref("startup.homepage_welcome_url", "");
//user_pref("startup.homepage_welcome_url.additional", "");
//user_pref("startup.homepage_override_url", ""); // What's New page after updates

// PREF: disable "What's New" toolbar icon [FF69+]
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// PREF: new profile switcher
user_pref("browser.profiles.enabled", true);


// PREF: use native title bar buttons [LINUX]
// [1] https://github.com/yokoffing/Betterfox/issues/320
user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);

// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: preferred color scheme for websites
// [SETTING] General>Language and Appearance>Website appearance
// By default, color scheme matches the theme of your browser toolbar (3).
// Set this pref to choose Dark on sites that support it (0) or Light (1).
// Before FF95, the pref was 2, which determined site color based on OS theme.
// Dark (0), Light (1), System (2), Browser (3) [DEFAULT FF95+]
// [1] https://www.reddit.com/r/firefox/comments/rfj6yc/how_to_stop_firefoxs_dark_theme_from_overriding/hoe82i5/?context=3
user_pref("layout.css.prefers-color-scheme.content-override", 2);


// PREF: new tab page wallpapers
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true); // [DEFAULT FF132+]

// PREF: Cookie Banner handling
// [DEPRECIATED] Future of the project is unclear. See [5] and [6].
// [NOTE] Feature still enforces Total Cookie Protection to limit 3rd-party cookie tracking [1]
// [1] https://github.com/mozilla/cookie-banner-rules-list/issues/33#issuecomment-1318460084
// [2] https://phabricator.services.mozilla.com/D153642
// [3] https://winaero.com/make-firefox-automatically-click-on-reject-all-in-cookie-banner-consent/
// [4] https://docs.google.com/spreadsheets/d/1Nb4gVlGadyxix4i4FBDnOeT_eJp2Zcv69o-KfHtK-aA/edit#gid=0
// [5] https://bugzilla.mozilla.org/show_bug.cgi?id=1940418
// [6] https://github.com/mozilla/cookie-banner-rules-list/issues/544
// 2: reject banners if it is a one-click option; otherwise, fall back to the accept button to remove banner
// 1: reject banners if it is a one-click option; otherwise, keep banners on screen
// 0: disable all cookie banner handling
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

// PREF: Firefox Translations [FF118+]
// Automated translation of web content is done locally in Firefox, so that
// the text being translated does not leave your machine.
// [ABOUT] Visit about:translations to translate your own text as well.
// [1] https://blog.mozilla.org/en/mozilla/local-translation-add-on-project-bergamot/
// [2] https://blog.nightly.mozilla.org/2023/06/01/firefox-translations-and-other-innovations-these-weeks-in-firefox-issue-139/
// [3] https://www.ghacks.net/2023/08/02/mozilla-firefox-117-beta-brings-an-automatic-language-translator-for-websites-and-it-works-offline/
user_pref("browser.translations.enable", true); // DEFAULT
user_pref("browser.translations.autoTranslate", false);

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

// PREF: smoother font
// [1] https://reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.unitConversion.enabled", true);

user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.suggest.trending", false);

user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.fakespot.featureGate", false); // [FF130+] [DEFAULT: false]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", true); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", true); // [FF108+] [DEFAULT: false]
user_pref("browser.urlbar.clipboard.featureGate", false); // [FF118+] [DEFAULT: true FF125+]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]

user_pref("browser.urlbar.suggest.engines", false);

// PREF: do not autoplay media audio
// [NOTE] You can set exceptions under site permissions
// [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
user_pref("media.autoplay.default", 1); // DEFAULT
//user_pref("media.block-autoplay-until-in-foreground", true); // DEFAULT

// PREF: startup / new tab page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
// [NOTE] Session Restore is cleared with history and not used in Private Browsing mode
// [SETTING] General>Startup>Open previous windows and tabs
user_pref("browser.startup.page", 0);

// PREF: set HOME+NEW WINDOW page to blank tab
// about:home=Activity Stream, custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
// [Custom URLs] Set two or more websites in Home Page Field – delimited by |
// [1] https://support.mozilla.org/en-US/questions/1271888#answer-1262899
user_pref("browser.startup.homepage", "about:blank");


// PREF: Bookmarks Toolbar visibility
// always, never, or newtab
user_pref("browser.toolbars.bookmarks.visibility", "always"); // DEFAULT

user_pref("extensions.pocket.enabled", false);

// PREF: always ask how to handle new mimetypes [FF101+]
// Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Applications>What should Firefox do with other files?
// false=Save files
// true=Ask whether to open or save files
user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: always ask where to download
// [OPTIONAL HARDENING] Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Downloads>Always ask you where to save files
// [DIALOGUE] "Ask whether to open or save files"
// true=direct download (default)
// false=the user is asked what to do
// [1] https://github.com/yokoffing/Betterfox/issues/267
user_pref("browser.download.useDownloadDir", false);
//user_pref("browser.download.dir", "C:\Users\<YOUR_USERNAME>\AppData\Local\Temp"); // [WINDOWS]

// PREF: autohide the downloads button
user_pref("browser.download.autohideButton", false); // true =  DEFAULT

// PREF: disable download panel opening on every download [non-functional?]
// Controls whether to open the download panel every time a download begins.
// [NOTE] The first download ever ran in a new profile will still open the panel.
user_pref("browser.download.alwaysOpenPanel", false);

// PREF: disable adding downloads to the system's "recent documents" list 
user_pref("browser.download.manager.addToRecentDocs", false); // idk if this works on linux...

// PREF: search query opens in a new tab (instead of the current tab)
user_pref("browser.search.openintab", true); // SEARCH BOX
user_pref("browser.urlbar.openintab", true); // URL BAR


// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have
// specific values set (how large the window should be, whether it
// should have a status bar, etc.) 
// 1 = let all windows opened by JavaScript open in new windows
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set
// [1] https://kb.mozillazine.org/About:config_entries
user_pref("browser.link.open_newwindow.restriction", 0);


// PREF: focus behavior for new tabs from links
// Determine whether a link opens in the foreground or background on left-click
// [SETTINGS] Settings>General>Tabs>"When you open a link, image or media in a new tab, switch to it immediately"
// true(default) = opens new tabs by left-click in the background, leaving focus on the current tab
// false = opens new tabs by left-click in the foreground, putting focus on the new tab
// [NOTE] CTRL+SHIFT+CLICK will open new tabs in foreground (default); switching PREF to false will reverse this behavior
// [1] https://kb.mozillazine.org/About:config_entries
user_pref("browser.tabs.loadInBackground", true); // DEFAULT

// PREF: force bookmarks to open in a new tab, not the current tab
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.tabs.loadBookmarksInBackground", true); // load bookmarks in background

// PREF: leave Bookmarks Menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: restore "View image info" on right-click
user_pref("browser.menu.showViewImageInfo", true);

// PREF: show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// PREF: stop websites from reloading pages automatically
// [WARNING] Breaks some sites.
// [1] https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
user_pref("accessibility.blockautorefresh", true);
user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: do not select the space next to a word when selecting a word
user_pref("layout.word_select.eat_space_to_next_word", false);

// PREF: do not hide the pointer while typing [LINUX]
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// PREF: limit events that can cause a pop-up
// Firefox provides an option to provide exceptions for sites, remembered in your Site Settings.
// (default) "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
// (alternate) user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("dom.popup_allowed_events", "click dblclick");
user_pref("dom.disable_open_during_load", true); // DEFAULT
user_pref("privacy.popups.showBrowserMessage", true); // DEFAULT

// PREF: enable Tab Previews [FF122+, FF128+]
// [1] https://github.com/yokoffing/Betterfox/issues/309
user_pref("browser.tabs.hoverPreview.enabled", true);
user_pref("browser.tabs.hoverPreview.showThumbnails", true); // DEFAULT

// PREF: adjust the minimum tab width
// Can be overridden by userChrome.css
//user_pref("browser.tabs.tabMinWidth", 120); // default=76

// PREF: always underline links [FF120+]
//user_pref("layout.css.always_underline_links", false); // DEFAULT

// show user agent styles in the inspector
user_pref("devtools.inspector.showUserAgentStyles", true);

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: Enhanced Tracking Protection (ETP)
// Tracking Content blocking will strip cookies and block all resource requests to domains listed in Disconnect.me.
// Firefox deletes all stored site data (incl. cookies, browser storage) if the site is a known tracker and hasn’t
// been interacted with in the last 30 days.
// [ALLOWLIST] https://disconnect.me/trackerprotection/unblocked
// [NOTE] FF86: "Strict" tracking protection enables dFPI.
// [1] https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
// [2] https://www.reddit.com/r/firefox/comments/l7xetb/network_priority_for_firefoxs_enhanced_tracking/gle2mqn/?web2x&context=3
user_pref("browser.contentblocking.category", "strict"); // [HIDDEN]
//user_pref("privacy.trackingprotection.enabled", true); // enabled with "Strict"
//user_pref("privacy.trackingprotection.pbmode.enabled", true); // DEFAULT
//user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false); // DEFAULT
//user_pref("privacy.trackingprotection.socialtracking.enabled", true); // enabled with "Strict"
    //user_pref("privacy.socialtracking.block_cookies.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.cryptomining.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.emailtracking.enabled", true); // enabled with "Strict"
//user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // enabled with "Strict"
//user_pref("privacy.annotate_channels.strict_list.enabled", true); // enabled with "Strict"
    //user_pref("privacy.annotate_channels.strict_list.pbmode.enabled", true); // DEFAULT
//user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+] enabled with "Strict"
    //user_pref("privacy.fingerprintingProtection.pbmode", true); // DEFAULT
//user_pref("privacy.bounceTrackingProtection.mode", 1); // [FF131+] [ETP FF133+]
// [1] https://searchfox.org/mozilla-central/source/toolkit/components/antitracking/bouncetrackingprotection/nsIBounceTrackingProtection.idl#11-23

// PREF: query stripping
// Currently uses a small list [1]
// We set the same query stripping list that Brave and LibreWolf uses [2]
// If using uBlock Origin or AdGuard, use filter lists as well [3]
// Query parameters stripped [5]
// [1] https://www.eyerys.com/articles/news/how-mozilla-firefox-improves-privacy-using-query-parameter-stripping-feature
// [2] https://github.com/brave/brave-core/blob/f337a47cf84211807035581a9f609853752a32fb/browser/net/brave_site_hacks_network_delegate_helper.cc
// [3] https://github.com/yokoffing/filterlists#url-tracking-parameters
// [4] https://bugzilla.mozilla.org/show_bug.cgi?id=1706607
// [5] https://firefox.settings.services.mozilla.com/v1/buckets/main/collections/query-stripping/records
user_pref("privacy.query_stripping.enabled", true); // enabled with "Strict"
user_pref("privacy.query_stripping.enabled.pbmode", true); // enabled with "Strict"
user_pref("privacy.query_stripping.strip_list", ""); // DEFAULT
user_pref("privacy.query_stripping.strip_on_share.enabled", true);

// PREF: allow embedded tweets and reddit posts [FF136+]
// [TEST - reddit embed] https://www.pcgamer.com/amazing-halo-infinite-bugs-are-already-rolling-in/
// [TEST - instagram embed] https://www.ndtv.com/entertainment/bharti-singh-and-husband-haarsh-limbachiyaa-announce-pregnancy-see-trending-post-2646359
// [TEST - tweet embed] https://www.newsweek.com/cryptic-tweet-britney-spears-shows-elton-john-collab-may-date-back-2015-1728036
// [TEST - tiktok embed] https://www.vulture.com/article/snl-adds-four-new-cast-members-for-season-48.html
// [TEST - truthsocial embed] https://www.newsweek.com/donald-trump-congratulates-patrick-brittany-mahomes-new-baby-2027097
// [1] https://www.reddit.com/r/firefox/comments/l79nxy/firefox_dev_is_ignoring_social_tracking_preference/gl84ukk
// [2] https://www.reddit.com/r/firefox/comments/pvds9m/reddit_embeds_not_loading/
// [3] https://github.com/yokoffing/Betterfox/issues/413
user_pref("urlclassifier.trackingSkipURLs", "embed.reddit.com, *.twitter.com, *.twimg.com"); // MANUAL [FF136+]
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.twitter.com, *.twimg.com"); // MANUAL [FF136+]

// PREF: Hyperlink Auditing (click tracking)
user_pref("browser.send_pings", false); // DEFAULT

// PREF: Beacon API
// Allows websites to asynchronously transmit small amounts of data to servers
// without impacting page load performance. This allows things like activity tracking
// to be done reliably in the background. Other tracking methods like form submissions
// and XHR requests already allow similar capabilities but hurt performance.
// Disabling the Beacon API wouldn't make the data unavailable - sites could still
// collect it synchronously instead.
// [NOTE] Disabling this API sometimes causes site breakage.
// [TEST] https://vercel.com/
// [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon
// [2] https://github.com/arkenfox/user.js/issues/1586
user_pref("beacon.enabled", false);

// PREF: battery status tracking
// [NOTE] Pref remains, but API is depreciated.
// [1] https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API#browser_compatibility
user_pref("dom.battery.enabled", false);

// PREF: remove temp files opened from non-PB windows with an external application
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=302433,1738574
// [2] https://github.com/arkenfox/user.js/issues/1732
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// PREF: disable UITour backend
// This way, there is no chance that a remote page can use it.
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// PREF: disable remote debugging
// [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/16222
user_pref("devtools.debugger.remote-enabled", false); // DEFAULT

// PREF: Global Privacy Control (GPC) [FF118+]
// A privacy signal that tells the websites that the user
// doesn’t want to be tracked and doesn’t want their data to be sold.
// Honored by many highly ranked sites [3].
// [SETTING] Privacy & Security > Website Privacy Preferences > Tell websites not to sell or share my data
// [TEST] https://global-privacy-control.glitch.me/
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1830623
// [2] https://globalprivacycontrol.org/press-release/20201007.html
// [3] https://github.com/arkenfox/user.js/issues/1542#issuecomment-1279823954
// [4] https://blog.mozilla.org/netpolicy/2021/10/28/implementing-global-privacy-control/
// [5] https://help.duckduckgo.com/duckduckgo-help-pages/privacy/gpc/
// [6] https://brave.com/web-standards-at-brave/4-global-privacy-control/
// [7] https://www.eff.org/gpc-privacy-badger
// [8] https://www.eff.org/issues/do-not-track
user_pref("privacy.globalprivacycontrol.enabled", true);
    //user_pref("privacy.globalprivacycontrol.functionality.enabled", true); // [FF120+]
//user_pref("privacy.globalprivacycontrol.pbmode.enabled", true); // [FF120+]

/****************************************************************************
 * SECTION: OSCP & CERTS / HPKP (HTTP Public Key Pinning)                   *
****************************************************************************/

// Online Certificate Status Protocol (OCSP)
// OCSP leaks your IP and domains you visit to the CA when OCSP Stapling is not available on visited host.
// OCSP is vulnerable to replay attacks when nonce is not configured on the OCSP responder.
// Short-lived certificates are not checked for revocation (security.pki.cert_short_lifetime_in_days, default:10).
// Firefox falls back on plain OCSP when must-staple is not configured on the host certificate.
// [1] https://scotthelme.co.uk/revocation-is-broken/
// [2] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
// [3] https://github.com/arkenfox/user.js/issues/1576#issuecomment-1304590235

// PREF: disable OCSP fetching to confirm current validity of certificates
// OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority).
// It's a trade-off between security (checking) and privacy (leaking info to the CA).
// Unlike Chrome, Firefox’s default settings also query OCSP responders to confirm the validity
// of SSL/TLS certificates. However, because OCSP query failures are so common, Firefox
// (like other browsers) implements a “soft-fail” policy.
// [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
// [SETTING] Privacy & Security>Security>Certificates>Query OCSP responder servers...
// [1] https://en.wikipedia.org/wiki/Ocsp
// [2] https://www.ssl.com/blogs/how-do-browsers-handle-revoked-ssl-tls-certificates/#ftoc-heading-3
// 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
user_pref("security.OCSP.enabled", 0);

// PREF: CRLite
// CRLite covers valid certs, and it doesn't fall back to OCSP in mode 2 [FF84+].
// CRLite is faster and more private than OCSP [2].
// 0 = disabled
// 1 = consult CRLite but only collect telemetry
// 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
// 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" [FF99+, default FF100+]
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1429800,1670985,1753071
// [2] https://blog.mozilla.org/security/tag/crlite/
//user_pref("security.remote_settings.crlite_filters.enabled", true); // [DEFAULT: true FF137+]
user_pref("security.pki.crlite_mode", 2);


// PREF: do not trust installed third-party root certificates [FF120+]
// Disable Enterprise Root Certificates of the operating system. 
// For users trying to get intranet sites on managed networks,
// or who have security software configured to analyze web traffic.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1848815
user_pref("security.enterprise_roots.enabled", false);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);


// PREF: disable content analysis by Data Loss Prevention (DLP) agents [FF124+]
// DLP agents are background processes on managed computers that
// allow enterprises to monitor locally running applications for
// data exfiltration events, which they can allow/block based on
// customer-defined DLP policies.
// [1] https://github.com/chromium/content_analysis_sdk
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1880314
user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT]

// PREF: display warning on the padlock for "broken security"
// [NOTE] Warning padlock not indicated for subresources on a secure page! [2]
// [1] https://wiki.mozilla.org/Security:Renegotiation
// [2] https://bugzilla.mozilla.org/1353705
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// PREF: require safe negotiation
// [ERROR] SSL_ERROR_UNSAFE_NEGOTIATION
// [WARNING] Breaks ea.com login (Sep 2023).
// Blocks connections to servers that don't support RFC 5746 [2]
// as they're potentially vulnerable to a MiTM attack [3].
// A server without RFC 5746 can be safe from the attack if it
// disables renegotiations but the problem is that the browser can't
// know that. Setting this pref to true is the only way for the
// browser to ensure there will be no unsafe renegotiations on
// the channel between the browser and the server.
// [STATS] SSL Labs > Renegotiation Support (May 2024) reports over 99.7% of top sites have secure renegotiation [4].
// [1] https://wiki.mozilla.org/Security:Renegotiation
// [2] https://datatracker.ietf.org/doc/html/rfc5746
// [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555
// [4] https://www.ssllabs.com/ssl-pulse/
user_pref("security.ssl.require_safe_negotiation", true);

// PREF: display advanced information on Insecure Connection warning pages
// [TEST] https://expired.badssl.com/
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// PREF: disable 0-RTT (round-trip time) to improve TLS 1.3 security [FF51+]
// This data is not forward secret, as it is encrypted solely under keys derived using
// the offered PSK. There are no guarantees of non-replay between connections.
// [1] https://github.com/tlswg/tls13-spec/issues/1001
// [2] https://www.rfc-editor.org/rfc/rfc9001.html#name-replay-attacks-with-0-rtt
// [3] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/
user_pref("security.tls.enable_0rtt_data", false);

// PREF: enable hybrid post-quantum key exchange
// [1] https://pq.cloudflareresearch.com
// [2] https://github.com/zen-browser/desktop/pull/2275
user_pref("security.tls.enable_kyber", true);
user_pref("network.http.http3.enable_kyber", true);

/****************************************************************************
 * SECTION: FINGERPRINT PROTECTION (FPP)                                    *
****************************************************************************/

// PREF: enable FingerPrint Protection (FPP) [WiP]
// [1] https://github.com/arkenfox/user.js/issues/1661
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1816064
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);


/****************************************************************************
 * SECTION: DISK AVOIDANCE                                                  *
****************************************************************************/

// PREF: minimum interval (in ms) between session save operations
// Firefox periodically saves the user's session so it can restore
// their most recent tabs and windows if the browser crashes or restarts.
// The value sets the minimum time between these session save operations.
// Firefox only saves session data when the state has changed since the last save [2].
// Work has been done to mitigate potential performance drawbacks of frequent session saving [3].
// [1] https://kb.mozillazine.org/Browser.sessionstore.interval
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1304389#c64
// [3] https://bugzilla.mozilla.org/show_bug.cgi?id=1304389#c66
user_pref("browser.sessionstore.interval", 60000); // 1 minute; default=15000 (15s); 900000=15 min; 1800000=30 min

/******************************************************************************
 * SECTION: SHUTDOWN & SANITIZING                                             *
******************************************************************************/

// PREF: set History section to show all options
// Settings>Privacy>History>Use custom settings for history
// [INFOGRAPHIC] https://bugzilla.mozilla.org/show_bug.cgi?id=1765533#c1
user_pref("privacy.history.custom", true);

/******************************************************************************
 * SECTION: SEARCH / URL BAR                                                 *
******************************************************************************/

// PREF: darken certain parts of the URL [FF75+]
// Makes the domain name more prominent by graying out other parts of the URL.
// Also hidse https:// and www parts from the suggestion URL.
// [1] https://udn.realityripple.com/docs/Mozilla/Preferences/Preference_reference/browser.urlbar.trimURLs
// [2] https://winaero.com/firefox-75-strips-https-and-www-from-address-bar-results/
user_pref("browser.urlbar.trimURLs", false); // DEFAULT

// PREF: trim HTTPS from the URL bar [FF119+]
// Firefox will hide https:// from the address bar, but not subdomains like www.
// It saves some space. Betterfox already uses HTTPS-by-Default and insecure sites
// get a padlock with a red stripe. Copying the URL still copies the scheme,
// so it's not like we need to see https. It's not a privacy issue, so you can add to your overrides.
// [TEST] http://www.http2demo.io/
// [1] https://www.ghacks.net/2023/09/19/firefox-119-will-launch-with-an-important-address-bar-change/
user_pref("browser.urlbar.trimHttps", false);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", false);

// PREF: display "Not Secure" text on HTTP sites
// Needed with HTTPS-First Policy; not needed with HTTPS-Only Mode.
//user_pref("security.insecure_connection_text.enabled", true); // [DEFAULT FF136+]
//user_pref("security.insecure_connection_text.pbmode.enabled", true); // [DEFAULT FF136+]

// PREF: enable option to add custom search engine
// Before FF140, this pref was hidden.
// [SETTINGS] Settings -> Search -> Search Shortcuts -> Add
// [EXAMPLE] https://search.brave.com/search?q=%s
// [EXAMPLE] https://lite.duckduckgo.com/lite/?q=%s
// [1] https://reddit.com/r/firefox/comments/xkzswb/adding_firefox_search_engine_manually/
// [2] https://www.mozilla.org/en-US/firefox/140.0/releasenotes/
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // [DEFAULT FF140+]

// PREF: disable live search suggestions (Google, Bing, etc.)
// [WARNING] Search engines keylog every character you type from the URL bar.
// Override these if you trust and use a privacy respecting search engine.
// [NOTE] Both prefs must be true for live search to work in the location bar.
// [SETTING] Search>Provide search suggestions > Show search suggestions in address bar result
user_pref("browser.search.suggest.enabled", true);
//user_pref("browser.search.suggest.enabled.private", false); // DEFAULT

// PREF: disable Firefox Suggest
// [1] https://github.com/arkenfox/user.js/issues/1257
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+] 
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
// hide Firefox Suggest label in URL dropdown box
user_pref("browser.urlbar.groupLabels.enabled", false);

// PREF: disable search and form history
// Be aware that autocomplete form data can be read by third parties [1][2].
// Form data can easily be stolen by third parties.
// [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
// [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
// [2] https://bugzilla.mozilla.org/381681
user_pref("browser.formfill.enable", false);

// PREF: enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
// Firefox has some protections, but it is better to be safe than sorry.
// [!] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded.
// [EXAMPLE] https://www.techspot.com/news/100555-malvertising-attack-uses-punycode-character-spread-malware-through.html
// [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
// [1] https://wiki.mozilla.org/IDN_Display_Algorithm
// [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
// [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
// [4] https://www.xudongz.com/blog/2017/idn-phishing/
user_pref("network.IDN_show_punycode", true);

/******************************************************************************
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/

// abosolutly disable this. i use pi hole and i do not trust some big corpos with my dns queries!


// PREF: DNS-over-HTTPS (DoH) implementation
// [NOTE] Mode 3 has site exceptions with a nice UI on the error page.
// [SETTINGS] Privacy & Security > DNS over HTTPS > Enable secure DNS using:
// [NOTE] Mode 3 has site-exceptions with a nice UI on the error page.
// [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
// [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
// [3] https://support.mozilla.org/en-US/kb/dns-over-https#w_protection-levels-explained
// 0= Default Protection: Firefox decides when to use secure DNS (default)
// 2= Increased Protection: use DoH and fall back to native DNS if necessary
// 3= Max Protection: only use DoH; do not fall back to native DNS
// 5= Off: disable DoH
user_pref("network.trr.mode", 5); // DEFAULT

/******************************************************************************
 * SECTION: PROXY / SOCKS / IPv6                           *
******************************************************************************/

// ANOTE: def disable ipv6 since it is terible and i dont use it on my network
user_pref("network.dns.disableIPv6", true);

/******************************************************************************
 * SECTION: PASSWORDS                                                        *
******************************************************************************/

// ANOTE: saving passwords either on linux or windows can be easy decrypted by malware!

// PREF: disable password manager
// [NOTE] This does not clear any passwords already saved.
// [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites
user_pref("signon.rememberSignons", false);
//user_pref("signon.schemeUpgrades", true); // DEFAULT
//user_pref("signon.showAutoCompleteFooter", true); // DEFAULT
//user_pref("signon.autologin.proxy", false); // DEFAULT

// PREF: disable formless login capture for Password Manager [FF51+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled", false);

// PREF: disable Firefox built-in password generator
// Create passwords with random characters and numbers.
// [NOTE] Doesn't work with Lockwise disabled!
// [1] https://wiki.mozilla.org/Toolkit:Password_Manager/Password_Generation
user_pref("signon.generation.enabled", false);

// PREF: disable Firefox Lockwise (about:logins)
// [NOTE] No usernames or passwords are sent to third-party sites.
// [1] https://lockwise.firefox.com/
// [2] https://support.mozilla.org/en-US/kb/firefox-lockwise-managing-account-data
user_pref("signon.management.page.breach-alerts.enabled", false); 
user_pref("signon.management.page.breachAlertUrl", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");

// PREF: disable Firefox Relay
// Privacy & Security > Passwords > Suggest Firefox Relay email masks to protect your email address
user_pref("signon.firefoxRelay.feature", "");


// PREF: disable websites autocomplete
// Don't let sites dictate use of saved logins and passwords.
user_pref("signon.storeWhenAutocompleteOff", false);
// PREF: limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
// Hardens against potential credentials phishing.
// [WARNING] Hardening this pref may prevent you from subscribing to SoGo calendars in Thunderbird 138
// 0=don't allow sub-resources to open HTTP authentication credentials dialogs
// 1=don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2=allow sub-resources to open HTTP authentication credentials dialogs (default)
// [1] https://web.archive.org/web/20181123134351/https://www.fxsitecompat.com/en-CA/docs/2015/http-auth-dialog-can-no-longer-be-triggered-by-cross-origin-resources/
user_pref("network.auth.subresource-http-auth-allow", 1);

// PREF: prevent password truncation when submitting form data
// [1] https://www.ghacks.net/2020/05/18/firefox-77-wont-truncate-text-exceeding-max-length-to-address-password-pasting-issues/
user_pref("editor.truncate_user_pastes", false);

/****************************************************************************
 * SECTION: ADDRESS + CREDIT CARD MANAGER                                   *
****************************************************************************/

// ANOTE: decrpyt key can be easyly obtained, and that is used to decode the encrypted vallues from a json file!

// PREF: disable form autofill
// [NOTE] stored data is not secure (uses a JSON file)
// [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
// [2] https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/******************************************************************************
 * SECTION: MIXED CONTENT + CROSS-SITE                                       *
******************************************************************************/

// PREF: allow PDFs to load javascript
// https://www.reddit.com/r/uBlockOrigin/comments/mulc86/firefox_88_now_supports_javascript_in_pdf_files/
user_pref("pdfjs.enableScripting", false);

// PREF: disable middle click on new tab button opening URLs or searches using clipboard [FF115+]
// Enable if you're using LINUX.
user_pref("browser.tabs.searchclipboardfor.middleclick", true); // DEFAULT WINDOWS macOS


/****************************************************************************
 * SECTION: EXTENSIONS                                                      *
****************************************************************************/

// PREF: limit allowed extension directories
// 1=profile, 2=user, 4=application, 8=system, 16=temporary, 31=all
// The pref value represents the sum: e.g. 5 would be profile and application directories.
// [WARNING] Breaks usage of files which are installed outside allowed directories.
// [1] https://archive.is/DYjAM
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
    //user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]


/******************************************************************************
 * SECTION: HEADERS / REFERERS                                               *
******************************************************************************/


// PREF: control the amount of cross-origin information to send
// Controls how much referrer to send across origins (different domains).
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
// [1] https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/
// [2] https://web.dev/referrer-best-practices/
// [3] https://www.reddit.com/r/waterfox/comments/16px8yq/comment/k29r6bu/?context=3
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/******************************************************************************
 * SECTION: WEBRTC                                                           *
******************************************************************************/

// PREF: disable WebRTC (Web Real-Time Communication)
// Firefox desktop uses mDNS hostname obfuscation and the private IP is never exposed until
// required in TRUSTED scenarios; i.e. after you grant device (microphone or camera) access.
// [TEST] https://browserleaks.com/webrtc
// [1] https://groups.google.com/g/discuss-webrtc/c/6stQXi72BEU/m/2FwZd24UAQAJ
// [2] https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-mdns-ice-candidates#section-3.1.1
user_pref("media.peerconnection.enabled", false);

/******************************************************************************
 * SECTION: PLUGINS                                                          *
******************************************************************************/

// PREF: disable widevine CDM (Content Decryption Module)
// [NOTE] This is covered by the EME master switch.
user_pref("media.gmp-widevinecdm.enabled", false);

// PREF: disable all DRM content (EME: Encryption Media Extension)
// EME is a JavaScript API for playing DRMed (not free) video content in HTML.
// A DRM component called a Content Decryption Module (CDM) decrypts,
// decodes, and displays the video.
// e.g. Netflix, Amazon Prime, Hulu, HBO, Disney+, Showtime, Starz, DirectTV
// DRM is a propriety and closed source, but disabling is overkill.
// [SETTING] General>DRM Content>Play DRM-controlled content
// [TEST] https://bitmovin.com/demos/drm
// [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next
// [2] https://www.reddit.com/r/firefox/comments/10gvplf/comment/j55htc7
user_pref("media.eme.enabled", false);
// Optionally, hide the setting which also disables the DRM prompt:
user_pref("browser.eme.ui.enabled", false);

// PREF: CSP reporting
// [1] https://github.com/yokoffing/Betterfox/issues/415
user_pref("security.csp.reporting.enabled", false);

/******************************************************************************
 * SECTION: SAFE BROWSING (SB)                                               *
******************************************************************************/

// PREF: Safe Browsing
// [WARNING] Be sure to have alternate security measures if you disable SB! Adblockers do not count!
// [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content
// [ALTERNATIVE] Enable local checks only: https://github.com/yokoffing/Betterfox/issues/87
// [1] https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work#w_what-information-is-sent-to-mozilla-or-its-partners-when-phishing-and-malware-protection-is-enabled
// [2] https://wiki.mozilla.org/Security/Safe_Browsing
// [3] https://developers.google.com/safe-browsing/v4
// [4] https://github.com/privacyguides/privacyguides.org/discussions/423#discussioncomment-1752006
// [5] https://github.com/privacyguides/privacyguides.org/discussions/423#discussioncomment-1767546
// [6] https://wiki.mozilla.org/Security/Safe_Browsing
// [7] https://ashkansoltani.org/2012/02/25/cookies-from-nowhere (outdated)
// [8] https://blog.cryptographyengineering.com/2019/10/13/dear-apple-safe-browsing-might-not-be-that-safe/ (outdated)
// [9] https://the8-bit.com/apple-proxies-google-safe-browsing-privacy/
// [10] https://github.com/brave/brave-browser/wiki/Deviations-from-Chromium-(features-we-disable-or-remove)#services-we-proxy-through-brave-servers
user_pref("browser.safebrowsing.malware.enabled", false); // all checks happen locally
user_pref("browser.safebrowsing.phishing.enabled", false); // all checks happen locally
user_pref("browser.safebrowsing.blockedURIs.enabled", false); // all checks happen locally
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");

// PREF: disable SB checks for downloads
// This is the master switch for the safebrowsing.downloads prefs (both local lookups + remote).
// [NOTE] Still enable this for checks to happen locally.
// [SETTING] Privacy & Security>Security>... "Block dangerous downloads"
user_pref("browser.safebrowsing.downloads.enabled", false); // all checks happen locally

// PREF: disable SB checks for downloads (remote)
// To verify the safety of certain executable files, Firefox may submit some information about the
// file, including the name, origin, size and a cryptographic hash of the contents, to the Google
// Safe Browsing service which helps Firefox determine whether or not the file should be blocked.
// [NOTE] If you do not understand the consequences, override this.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
      //user_pref("browser.safebrowsing.downloads.remote.url", "");
// disable SB checks for unwanted software
// [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software"
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// PREF: allow user to "ignore this warning" on SB warnings
// If clicked, it bypasses the block for that session. This is a means for admins to enforce SB.
// Report false positives to [2]
// [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
// [1] https://bugzilla.mozilla.org/1226490
// [2] https://safebrowsing.google.com/safebrowsing/report_general/
user_pref("browser.safebrowsing.allowOverride", true); // DEFAULT

/******************************************************************************
 * SECTION: MOZILLA                                                   *
******************************************************************************/

// PREF: prevent accessibility services from accessing your browser [RESTART]
// Accessibility Service may negatively impact Firefox browsing performance.
// Disable it if you’re not using any type of physical impairment assistive software.
// [1] https://support.mozilla.org/kb/accessibility-services
// [2] https://www.ghacks.net/2021/08/25/firefox-tip-turn-off-accessibility-services-to-improve-performance/
// [3] https://www.reddit.com/r/firefox/comments/p8g5zd/why_does_disabling_accessibility_services_improve
// [4] https://winaero.com/firefox-has-accessibility-service-memory-leak-you-should-disable-it/
// [5] https://www.ghacks.net/2022/12/26/firefoxs-accessibility-performance-is-getting-a-huge-boost/
user_pref("accessibility.force_disabled", 1);
user_pref("devtools.accessibility.enabled", false);

// PREF: disable Firefox Sync
// [ALTERNATIVE] Use xBrowserSync [1]
// [1] https://addons.mozilla.org/en-US/firefox/addon/xbs
// [2] https://github.com/arkenfox/user.js/issues/1175
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.autoconfig.uri", "");

// PREF: disable Firefox View [FF106+]
// You can no longer disable Firefox View as of [FF127+].
// To hide the icon from view, see [2].
// [1] https://support.mozilla.org/en-US/kb/how-set-tab-pickup-firefox-view#w_what-is-firefox-view
// [2] https://support.mozilla.org/en-US/kb/how-set-tab-pickup-firefox-view#w_how-do-i-remove-firefox-view-from-the-tabs-bar
// PREF: disable the Firefox View tour from popping up
//user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");


// PREF: disable Push Notifications API [FF44+]
// [WHY] Website "push" requires subscription, and the API is required for CRLite.
// Push is an API that allows websites to send you (subscribed) messages even when the site
// isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server.
// You shouldn't need to disable this.
// [NOTE] To remove all subscriptions, reset "dom.push.userAgentID"
// [1] https://support.mozilla.org/en-US/kb/push-notifications-firefox
// [2] https://developer.mozilla.org/en-US/docs/Web/API/Push_API
// [3] https://www.reddit.com/r/firefox/comments/fbyzd4/the_most_private_browser_isnot_firefox/
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// PREF: default permission for Web Notifications
// To add site exceptions: Page Info>Permissions>Receive Notifications
// To manage site exceptions: Options>Privacy & Security>Permissions>Notifications>Settings
// 0=always ask (default), 1=allow, 2=block
// [1] https://easylinuxtipsproject.blogspot.com/p/security.html#ID5
// [2] https://github.com/yokoffing/Betterfox/wiki/Common-Overrides#site-notifications
user_pref("permissions.default.desktop-notification", 2);

// PREF: default permission for Location Requests
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.geo", 2);

// PREF: use alternative geolocation service instead of Google
// [NOTE] Mozilla's geolocation service was discontinued in June 2024 [1].
// BeaconDB is its replacement.
// [1] https://github.com/mozilla/ichnaea/issues/2065
// [2] https://codeberg.org/beacondb/beacondb
// [3] https://github.com/yokoffing/Betterfox/issues/378
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

// PREF: disable using the OS's geolocation service
//user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
//user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

// PREF: disable region updates
// [1] https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/Region.html
user_pref("browser.region.update.enabled", false);
user_pref("browser.region.network.url", "");

// PREF: disable region updates
// [1] https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/Region.html
user_pref("browser.region.update.enabled", false);
user_pref("browser.region.network.url", "");

// PREF: remove special permissions for certain mozilla domains [FF35+]
// default = resource://app/defaults/permissions
user_pref("permissions.manager.defaultsUrl", "");

// PREF: disable metadata caching for installed add-ons by default
// [1] https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled", false);

/******************************************************************************
 * SECTION: TELEMETRY                                                   *
******************************************************************************/

// PREF: disable new data submission [FF41+]
// If disabled, no policy is shown or upload takes place, ever.
// [1] https://bugzilla.mozilla.org/1195552
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// PREF: disable Health Reports
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical data.
user_pref("datareporting.healthreport.uploadEnabled", false);


// PREF: disable telemetry
// - If "unified" is false then "enabled" controls the telemetry module
// - If "unified" is true then "enabled" only controls whether to record extended data
// [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
// [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
// [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
//user_pref("toolkit.telemetry.dap_enabled", false); // DEFAULT [FF108]

// PREF: disable Telemetry Coverage
// [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");

// PREF: disable Firefox Home (Activity Stream) telemetry 
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// PREF: disable daily active users [FF136+]
user_pref("datareporting.usage.uploadEnabled", false);

/******************************************************************************
 * SECTION: EXPERIMENTS                                                      *
******************************************************************************/

// PREF: disable Studies
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);

// PREF: disable Normandy/Shield [FF60+]
// Shield is an telemetry system (including Heartbeat) that can also push and test "recipes".
// [1] https://mozilla.github.io/normandy/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/******************************************************************************
 * SECTION: CRASH REPORTS                                                    *
******************************************************************************/

// PREF: disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // DEFAULT

// PREF: enforce no submission of backlogged crash reports
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT FF132+]

/******************************************************************************
 * SECTION: DETECTION                                                        *
******************************************************************************/

// PREF: disable Captive Portal detection
// [WARNING] Do NOT use for mobile devices. May NOT be able to use Firefox on public wifi (hotels, coffee shops, etc).
// [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy
// [2] https://wiki.mozilla.org/Necko/CaptivePortal
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// PREF: disable Network Connectivity checks
// [WARNING] Do NOT use for mobile devices. May NOT be able to use Firefox on public wifi (hotels, coffee shops, etc).
// [1] https://bugzilla.mozilla.org/1460537
user_pref("network.connectivity-service.enabled", false);

// PREF: disable Privacy-Preserving Attribution [FF128+]
// [NOTE] PPA disabled if main telemetry switches are disabled.
// [SETTING] Privacy & Security>Website Advertising Preferences>Allow websites to perform privacy-preserving ad measurement
// [1] https://support.mozilla.org/kb/privacy-preserving-attribution
// [2] https://searchfox.org/mozilla-central/rev/f3e4b33a6122ce63bf81ae8c30cc5ac37458864b/dom/privateattribution/PrivateAttributionService.sys.mjs#267
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("toolkit.telemetry.dap_helper", ""); // [OPTIONAL HARDENING]
user_pref("toolkit.telemetry.dap_leader", ""); // [OPTIONAL HARDENING]


// PREF: SERP Telemetry [FF125+]
// [1] https://blog.mozilla.org/en/products/firefox/firefox-search-update/
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);

// PREF: assorted telemetry
// [NOTE] Shouldn't be needed for user.js, but browser forks may want to disable these prefs.
user_pref("doh-rollout.disable-heuristics", true); // ensure DoH doesn't get enabled automatically
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.mitm.priming.enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("signon.recipes.remoteRecipes.enabled", false);
user_pref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
user_pref("messaging-system.askForFeedback", true); // DEFAULT [FF120+]




/****************************************************************************************
 * Smoothfox                                                                            *
 * "Faber est suae quisque fortunae"                                                    *
 * priority: better scrolling                                                           *
 * version: 137                                                                       *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/

// Use only one option at a time!
// Reset prefs if you decide to use different option.

/****************************************************************************************
 * OPTION: SHARPEN SCROLLING                                                           *
****************************************************************************************/
// credit: https://github.com/black7375/Firefox-UI-Fix
// only sharpen scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
// Firefox Nightly only:
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]

/****************************************************************************************
 * OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]                                      *
****************************************************************************************/
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
