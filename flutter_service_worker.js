'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3371bfe9f2019dcbbeebd1c24a1cb87b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/02/e4b9ad903a4d787b89aa5ee6061aa1b01049d6": "06f420cde3e8bca50873ffe8156fc940",
".git/objects/0d/568a4b7e38567534f37bf863825b981f3b3149": "cdf49bf5e8c538570a913997b9c5c861",
".git/objects/19/2b2074588726ea1856305e7b3f09c774d9d1ff": "dbec7ff3fa30de6f5c606bcc1a051089",
".git/objects/30/f1ede11318d59a63b38d8ce19e3864851d0b63": "76f8a467e30d2d9e76596eee7282ebd6",
".git/objects/38/28dd2b78b774674f8ab0cb96480c6630deb6a7": "911983f1ff95f18c4a12609ba6301ab2",
".git/objects/3a/7e85bcb5bce54fe1e199c17a24bc923e12d69f": "38d69dc1f2f3d80838c46bf9b17f3810",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/635d1fdfdfb90372aa6ecdd202fe1bbe0b185a": "b1695be1999dff5ffeaa20acfe5f9bc3",
".git/objects/4f/7c41b88c5d8329ce73050a1b695afb8db0d587": "ec53ed0f932cd269c36ddcb4cfbb39be",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/59/3eb046715755b647b1c83141d9c865ba4e3d7a": "0fe0779f7abb98619fb93ace8c04f6ae",
".git/objects/64/8c138b2f5800d81de943cd00656473d80ccd6e": "427ebff3e730c162d69608a6b1223ce6",
".git/objects/67/3f32234ec3ffb7dae4ff38b03e90a51f1aef45": "60d3593d1067c5e5e26b427f4a0b35db",
".git/objects/79/9f7ba4abcc54c158c61234f0259848a53d8d5a": "e52f5cf2dd0dafb276c37cf511a4dd1d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/dabb257c45a3a02cab5a283cabb008d5b14d03": "81f6215359d4e2ad51de0ae05e0a6f75",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a4/d81ac6f0b60636634b8164ad4560f885a2d26c": "d833810e18f9c86f92e4a7aac7ee7250",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/453160b5f8b72ea92faeebead86dbd8392a9a4": "e5755a86a1274e5c23dd75eb36910f2d",
".git/objects/bc/1f80887526c9b6a0476f32c7344b7d4238b7e2": "d8e0ef46a1b901acc5b647f105dbfad7",
".git/objects/d2/a94604d1e5ae74bc8b01e769447ecd002bc6ae": "8ad31d5b86f5fd27ae06f1d5fff3ebf2",
".git/objects/d4/6eb9eaf887dea0a8dc06f86f326645a2877be2": "76dd681f9f8983c3af77a0cc11e6a023",
".git/objects/d5/b135af6273c0c6fb9f4c5b95f97b56ee8a4b1e": "8bccfe79965001da80f97f112851e60a",
".git/objects/d6/8ed1e0fbf7146b14ed6c2115471da737023e06": "de4f483c36df3039f309e254698ecc34",
".git/objects/f1/8220e4043ab00514145ddf2ee7a30627c67ec4": "2f16f4a61171a33d8accafb3f5f9b3a9",
".git/objects/f7/0ff0d8ae359a4725c29cfb5bc495386232b30d": "4ab9fa4952982a31d9db3bffddf1c72e",
"assets/AssetManifest.json": "5a27ecff37520e519703532d5618082a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/depo1.png": "643b59ed300e4d647e0c4e52d43c89ae",
"assets/images/gelir_gider.png": "97fc46ed9a228876fe7024ee55763a7d",
"assets/images/imageselect.png": "40a791aec08e778f6b58916053c7915b",
"assets/images/kisiler.png": "562e18c56de89be48164639140a1695c",
"assets/images/kisiler_640x640.jpg": "f3d7be51ff48a9e9c4caa5d16a34472b",
"assets/images/koltuk.jpg": "9210e710e4b7f4454530bb44706bb8dc",
"assets/images/kurlar2.png": "18245ebd4904b0593e288d2ec090083a",
"assets/images/lamba.jpg": "3a88bcecb93158fcecbba05ea9d34869",
"assets/images/masa.jpg": "442016b145902c50a5ae15dd10ed111f",
"assets/images/saat.jpg": "b25bb85d851315644cc8607434cfe223",
"assets/images/saksi.jpg": "23247fa1db5cc3a6e19e6417b4bd8df5",
"assets/images/sandalye.jpg": "47ddf6bc1f1938ae56a5d1450d7098f4",
"assets/images/satis_gecmisi.gif": "c3b4788d27756bf79eed9337a6270959",
"assets/images/settings.jpg": "2f676f7529aee1f0b883fef2d04ee477",
"assets/images/stok_gecmisi.png": "42f4659a0e42c706bc6f75634ebfd9c0",
"assets/images/unknown.jpg": "463da389612c61dce5ed03540514db7b",
"assets/images/yeni_urun.png": "6d95645aadce585c18be874ae6a628e7",
"assets/NOTICES": "69f48ab1c0028da340becdf55f32305c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4950eeb16603448a4ac85a541128498e",
"/": "4950eeb16603448a4ac85a541128498e",
"main.dart.js": "2a046627601b61b7b6be0fa7c32bd5f1",
"manifest.json": "62bc9d65eb88deefce845006de16e19c",
"version.json": "0b00e6646cb0beca5f6fed65384bc30d"
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
