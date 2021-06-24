'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5456f7721f2a53c2ab6acf468ac5e772",
"assets/assets/images/profile_photo.jpeg": "b9a9157afb7910adfd7c3404ed1b338d",
"assets/assets/CV_Victor_Fonseca_Prog.pdf": "a8b264e5c5397fc3cbc92532487f76b1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/NOTICES": "320e2d493ce84f75eb73e146552921b8",
"main.dart.js": "71b8b470613804378a52370a806a8d86",
".git/COMMIT_EDITMSG": "c92c9065fb2d66a024022086feefc81a",
".git/logs/refs/remotes/origin/main": "9bbef9738d5f3433fefce0cff8fc7ee0",
".git/logs/refs/heads/main": "0f58ba20897951a1fb217e933967bc9a",
".git/logs/HEAD": "9cebfb78d55f63a027ef22eafda4fb87",
".git/index": "71e544f6b58841d662ca06dd0657e81f",
".git/refs/remotes/origin/main": "235e841b6039fb4256103bc022a1b813",
".git/refs/heads/main": "235e841b6039fb4256103bc022a1b813",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/config": "e0252cb010598005add6c47f442e09ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/a7/998544710e94a47f8ac5b7f017ca0c9b469151": "18fde2f3bae0cb2dea22076f643bae6d",
".git/objects/d9/bda1b4be77435c867f3069eb7443daca9c4429": "02bea4819223724524a26b0985ea81f7",
".git/objects/af/5a274c1840da705cd21b50876359420dbc5d66": "47d11474a3dcdf6063cb7d4f424f583d",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/fc/7087068598bb1cdf4dcee9cbadc300b996fe3e": "c1b4b939ef3e5d7b9ea4afda9730a5f8",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fb/2f9cd0da593322336c3ed3b1fabc2c9c7accd1": "5c654e1412de440dfd8b5001a3a88061",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/42/2d5e48e6a781d596868c9c03a4c0098ecb1d61": "f4d74337a661b212050bed0143927717",
".git/objects/07/ee7fb6dc9c0ce17668d80b91aa4a6481a52291": "787fdbfa328066ca3c789a3b0fe4a0ff",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/1f8eaf6ef2ae57a31e76bdb2d7df3564fd088c": "8e03353be26c76a13d8081db8cfe8f4d",
".git/objects/e2/48d05f1d6fc277abc132cdf7d1ff0be2702c80": "a60af1d117857346885a7f32918f6a50",
".git/objects/40/bd00e44efe6af0b3f256e1dd47b1806ba34d34": "4ae2aeb109ab978eede6bb8845a011da",
".git/objects/8d/6e6a4a3a871be0b35ffc166bf7d58d993f9b1f": "a656301f42d91c307dfbf4db642c4542",
".git/objects/04/3cd302575cb857057ec0c6f324e28557a8c200": "500cf46a3c052de411d7d7752141f6dc",
".git/objects/6b/e71c91c996ad51dce10536b193036cf9972c09": "1dc63c39cf78b0553c03705cd983166b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ad/68a36d896006799ca73146343fa655321ed753": "07a6b6372c238126fc3171e9178de621",
".git/objects/31/ea93cf918e2feb617f5563bcf734fed5b15571": "91ce51bc769f226a179ed509d9fc624c",
".git/objects/3c/1baf1215deda03456581b19825404f4900cb2f": "42b8d7652d58fe2e0ca40b505da9fbaa",
".git/objects/df/3a7ba91928c31cf1cdd06c37941b81c1872578": "c15b5783dd0fcbdad18969828c3ce628",
".git/objects/b0/ef25f19d6dac1fea7022613e7e92db269bc2f7": "433779ea94773a06c2bfad1998c29b21",
".git/objects/59/63b91fc6f0b7db0759907b98924e967749f3aa": "8c117728ef68b88b3f847a8bcd18fe29",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a6/2136fa7c186b19a9e69ec4bb54cb2837fcabf1": "f325e2ea0a00454fc3a68da80949b7b9",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/4f/88243d697486d924cddd74aa08e207c05d3b06": "69f4d16d3bbe2286a3b3a50db4fcabe1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/33/d543b8085260a9e81908b4e1ff26d2aeb38069": "bcc2f2ca94a0c2693d5faa50e0a458b3",
".git/objects/ac/4b1de69a2b7a08412ca75debe3b004e6a3188e": "fe8d49890d48677aca9c7556471e2cf2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/3f/a1a05cf922b86d62e35334d2ee2439168a73b0": "10239c1a75374096b11eb985bb306188",
"manifest.json": "b369bae5a63b81eff80f888d01aadeb5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "cc6b8f9da69e5c524a4d743bb8bfe13f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "d057d877a9b3110845cd66daf6ae0077",
"/": "d057d877a9b3110845cd66daf6ae0077"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
