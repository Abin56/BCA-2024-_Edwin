'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "322f8103e9cb3af90933fd58ffcfd527",
"assets/AssetManifest.bin.json": "5cae6b10b88aea499607c66433df162d",
"assets/AssetManifest.json": "c5a99a1fb7585cf6baa996f945ec2467",
"assets/assets/images/blue_background.jpg": "18fac657389861a9f2dee371669267d3",
"assets/assets/images/car.jpg": "06412f50e24c025b47570c1b54833acc",
"assets/assets/images/car1.jpg": "0880077f2dbb6982632f82a8d421e7b1",
"assets/assets/images/car_drive.jpg": "e41cdd9396183d95bfbf6e85ab1b0975",
"assets/assets/images/car_interior.jpg": "7a0184d8d2386bf3ba9d3080caeef9bc",
"assets/assets/images/fb.png": "724e75d08aac433826640416509c5054",
"assets/assets/images/insta.png": "5dc3415d34a19c328284a886cc026269",
"assets/assets/images/leptonlogo.png": "5939dfbe4f4d3391aca29aef16a248b2",
"assets/assets/images/twit.png": "3572c54a11db920178dd004683dda9de",
"assets/assets/images/utbe.png": "33f1434531a41b1664eb1759b80853ba",
"assets/assets/images/utube.png": "010a540e3f72a5bbecd37f0d71248bb7",
"assets/assets/images/x.png": "7eb57922b9ac9c7a5f1d1c490fcac6d8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4e057ea08a5ebbd8c4eb92db506d79b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/webassets/excel_karror/excel_karoor_logo.png": "82694b2f31a5338e7b5a3ce0780529ad",
"assets/webassets/excel_karror/exl%2520(1).JPG": "977fe67d68df33586bd7b5de1560f485",
"assets/webassets/excel_karror/exl%2520(2).JPG": "8bd445c397385463516c7549c877cfbd",
"assets/webassets/excel_karror/exl%2520(3).JPG": "4c356299801945e7a11b82b7e86b81bb",
"assets/webassets/excel_karror/exl%2520(4).JPG": "b3133ef8bcb103b42496f37e087d865c",
"assets/webassets/excel_karror/frdd.png": "8263727b53acd980fea58e71f03c9c62",
"assets/webassets/excel_karror/girl_with_book.jpg": "f291d2f543149e350c8ba60a22760de4",
"assets/webassets/excel_karror/instag.png": "2ead3d3f83e6800302e0aa9c5e68d883",
"assets/webassets/excel_karror/tution_center3.jpg": "fbb9c5ed33946013add716fc260b7b1e",
"assets/webassets/excel_karror/utube.png": "5ab10d09edfc613913b822e23317a13e",
"assets/webassets/flact_png/icons8-admin-100.png": "9c683b1a207ee3ab35647a231a6c97f1",
"assets/webassets/flact_png/icons8-fingerprint-100.png": "4b86d560fe0fb1f28c820fd6e38efcab",
"assets/webassets/flact_png/icons8-parent-100.png": "ee03add8903d101a93ace3ed5594786a",
"assets/webassets/flact_png/icons8-student-100.png": "abe25a5c7b154a46b0746ecc94f61978",
"assets/webassets/flact_png/icons8-teacher-100.png": "eb9eddaba9797837a0f7cff439fd4116",
"assets/webassets/flact_png/upcoming_.png": "77307f3e7b3e74db8d62a7c883356ccb",
"assets/webassets/images/achievements.jpg": "d5f81ab3966466dcf03a6babcdd0258d",
"assets/webassets/images/achievements1.jpg": "0987fb47a1b2ff5deb7f457d0d7274ff",
"assets/webassets/images/add-group.png": "c229ac62a1368a6595c808e6ae55695a",
"assets/webassets/images/admin_add_attendance.jpg": "d6a5838a8570f1c15259ae940ec37db6",
"assets/webassets/images/admin_png.png": "022b2b25d3359560fbb9557b2ed3a40c",
"assets/webassets/images/application.png": "ec321ddee3848ec03fda939bfa25145f",
"assets/webassets/images/arrangement-different-olympics-removebg-preview.png": "295ca2c75399cc15e17a85a8fbac3e9a",
"assets/webassets/images/bg.png": "b3aacb52bd933099fc6405a8f9d3c615",
"assets/webassets/images/blackboard.png": "827fbebf6b6ed48d820778d2a32c64a3",
"assets/webassets/images/book-removebg-preview.png": "0101e40fd6083dac4bced6c992f1a811",
"assets/webassets/images/books.png": "dcc66dcfdbf423b66e0133b00711364b",
"assets/webassets/images/classteacher_png.png": "a31ba31f67d0829434a868c6461b38ba",
"assets/webassets/images/computer.png": "6c40fdbde2ad1f31200afc53ed3db4a7",
"assets/webassets/images/cup.jpg": "3cce03b0216b1af5c2d74997af6c45d4",
"assets/webassets/images/cup.removed.png": "3988f22cefab649c0c3f7d038b6fedbe",
"assets/webassets/images/leptonlogo.png": "5939dfbe4f4d3391aca29aef16a248b2",
"assets/webassets/images/login-bg.jpg": "209c7473a84c9e16d32ecd89ba29b0a7",
"assets/webassets/images/loginscreen.jpg": "c8999c51df8bb4b955d8c685193866b6",
"assets/webassets/images/logo5.png": "1f4b443a193959b21703890e0365b87b",
"assets/webassets/images/month.png": "143c2ec07a909b2841f2b9e5846688a9",
"assets/webassets/images/next-week.png": "09c8151c74158bdc30dd6a070c795b31",
"assets/webassets/images/parent_png.png": "bca5005383449ad3365ab2f7baee214e",
"assets/webassets/images/period.png": "2928c7461b4cf304557431d56412dfa8",
"assets/webassets/images/registrationpage.jpg": "1156aead2ad78e8d3fa103fcff97624f",
"assets/webassets/images/students.png": "4fd6beb2b17ea8305a5623e8bd1baf29",
"assets/webassets/images/teachers.png": "fed5406220aab84b818c704cc7dd8d4b",
"assets/webassets/images/vidyaveechi_logo.png": "1f4b443a193959b21703890e0365b87b",
"assets/webassets/lottie_files/22462-campus-library-school-building-maison-mocca-animation.json": "4456723eb5b1e8470948e470577a6dd7",
"assets/webassets/lottie_files/Animation%2520-%25201725522744224.json": "6b4dff97a4f2f206b51eca6e7a1701db",
"assets/webassets/lottie_files/Animation%2520-%25201725617166634.json": "43a23905fd1090c528267d0bccebfc59",
"assets/webassets/lottie_files/network_connection.json": "c513ce51e6bf5882d5c910cc434131bc",
"assets/webassets/png/3d-house.png": "6bdd64087c1541b432eb2cdee600ae85",
"assets/webassets/png/achive.png": "7cc9b2bf6d5d0332732114f53ffec035",
"assets/webassets/png/active.png": "7589ebd497b7286c457c6155cba40f79",
"assets/webassets/png/add.png": "443e58cdaa9c2909468e8592f83bc859",
"assets/webassets/png/ai.png": "c696c33003c1dc1d7c2dc32d1a8c5a60",
"assets/webassets/png/attendance.png": "e0c3419307e715d6684358a049ab1f3d",
"assets/webassets/png/avathar.png": "055a91979264664a1ee12b9453610d82",
"assets/webassets/png/banner.png": "f35529a7ffe825bce27e7f1e79f73033",
"assets/webassets/png/batchhistory.png": "949e3adc607c3e4ce69e684c04532ee9",
"assets/webassets/png/blackboard.png": "0e1f487c632ebff8cff73a254a32f050",
"assets/webassets/png/books.png": "9a4a809cc0c0aee26dc0293eb0700b0c",
"assets/webassets/png/bunk-bed.png": "2ab7461549736b95b8d78c0d6902e1b8",
"assets/webassets/png/calendar.png": "91c676d857c3ae8e2984870bbef6c2cb",
"assets/webassets/png/chat.png": "1561e3752db0369fc11e68c4b7bd6be3",
"assets/webassets/png/classpromotion.png": "e5fa5d99cebf03665ec7cb9fd392c8bd",
"assets/webassets/png/cone.png": "9178c3df44d5fe8cdf2d6c6389ff9d93",
"assets/webassets/png/createadmin.png": "301cd643e102e4a200aa33537e61499e",
"assets/webassets/png/dashboard.png": "4a41d63f4202b26b11b5c74b4f11c53a",
"assets/webassets/png/digital-identity.png": "b2596d5f90509b2e0119b9614c42b640",
"assets/webassets/png/driving-lessons.png": "2cf459394a2f49fac3c560c91dfeae27",
"assets/webassets/png/email.png": "0d63ed9e7e85b0a88c17e7e30bad989e",
"assets/webassets/png/exam.png": "b33f743ecf0bf79b115272a4cce12fe8",
"assets/webassets/png/exam_studenttest.png": "363c304823aa396d4b89bb9fec9b705f",
"assets/webassets/png/fees&bills.png": "3145b200498a91a0bc5e67094b51040a",
"assets/webassets/png/file.png": "73c975db109a0d750f1ac677314d2353",
"assets/webassets/png/generalinstruction.png": "8a43788267346b746c135537b3211f48",
"assets/webassets/png/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/webassets/png/graduate.png": "9b4124a181245ce9077cbe66b5a3b96e",
"assets/webassets/png/graduating-student.png": "d1785807165c51839553e189db6d9b1f",
"assets/webassets/png/hand.png": "b457fae807812f40b0385274571090c7",
"assets/webassets/png/ink.png": "376ff617b10a8ce4a5e054df7a659b4c",
"assets/webassets/png/learners.png": "32becda8a596f0d1e1c3df2550b69623",
"assets/webassets/png/login.png": "e0bb5358c77e9fe6af56b93f9bce426c",
"assets/webassets/png/logout.png": "1b5229c5760d3f0cad9fa75ff9b70507",
"assets/webassets/png/logout.t.png": "0760524d57d1b8ddf2502521c1f334dc",
"assets/webassets/png/meetings.png": "9e23821a323ad0b9f242eec2e92b8fa5",
"assets/webassets/png/monitoring.png": "44b2b89b92ff4c57c59c1db6b5e1e456",
"assets/webassets/png/notice.png": "8cfbf924902bcbab496186d901886352",
"assets/webassets/png/notice_02.png": "1a2be79d419fc74f9c0bf5e4e7cd0413",
"assets/webassets/png/notification.png": "ac9c48a1f18675c83550293cc39a11f3",
"assets/webassets/png/not_active.png": "4f5ffd8778fb3a5a37af0b82c9d006b0",
"assets/webassets/png/online-learning.png": "2650391d15f9103448e4405b0dcb12b0",
"assets/webassets/png/paper.png": "22372980ab214ec7c4bf9a3d8e2714ad",
"assets/webassets/png/parent.png": "a1dbb68d6dcfe62e5d819abf267409d5",
"assets/webassets/png/parents.png": "1ef1b4dfbd91012390c0511ca77b231a",
"assets/webassets/png/pdf.png": "9a85752042ae270b88114895b82da2c1",
"assets/webassets/png/registation_setting.png": "1c82447e197427b80e6ffca54a0d060a",
"assets/webassets/png/register.png": "366829877bc003156f1998a902a9f8ea",
"assets/webassets/png/results.png": "2ada41958f2c5c731e46400cbfd2f0c6",
"assets/webassets/png/road-trip.png": "fee555a6e624d74ee0651bd57a62e1d6",
"assets/webassets/png/roll-call.png": "dce782bce457f61a4228353796bc9fd2",
"assets/webassets/png/shape.png": "4de5308e88211395b5e456e6793ca274",
"assets/webassets/png/student.png": "d1785807165c51839553e189db6d9b1f",
"assets/webassets/png/students.png": "be9ac50aa2d3cce73e8940505739d158",
"assets/webassets/png/teacher.png": "1cabff5ef1e1daadc6719ccbdca3edda",
"assets/webassets/png/teachers.png": "1cabff5ef1e1daadc6719ccbdca3edda",
"assets/webassets/png/teacher_1.png": "19469aed7f222d6009f48158a682bb9c",
"assets/webassets/png/telephone.png": "ce5c1960c29e2b02ce398f3340c68066",
"assets/webassets/png/tick.png": "f1759509fc3f20a9547664e54a78441d",
"assets/webassets/png/timetable.png": "d4e5827e1d4760f33d13d98718e88732",
"assets/webassets/png/tracking-app.png": "6d4a69fd88d3b82f5844733060a138b8",
"assets/webassets/png/turnofficon.png": "6bdf3d15505b70832fe5e84bda837405",
"assets/webassets/png/users.png": "1c5b346426e9014ee2bbd0bed10cc891",
"assets/webassets/png/video-call.png": "b261efcd541f37cc409a8f8bad81a309",
"assets/webassets/png/video.png": "017ee06484ed052aa3887aeb09121cd7",
"assets/webassets/school_image/book-student.jpg": "eb57c592ff5c2b94d0be56ee2383e201",
"assets/webassets/school_image/idcard.jpg": "910c8b5a6a7b271dc5cb0ec89d92e7c8",
"assets/webassets/school_image/kids-classroom.jpg": "98e31297438526c469cbcf338eeaa059",
"assets/webassets/school_image/notebook.jpg": "c4338000490ca148d61fb9129e67b9f0",
"assets/webassets/school_image/schl.jpg": "5e694280f25fafcce94e89c66f6e3d5b",
"assets/webassets/school_image/school-desk.jpg": "0395de29c56f913fb2e85c31757387a4",
"assets/webassets/school_image/signals.jpg": "f9297b06f647f9358c8fad0455a1146b",
"assets/webassets/school_image/vehicles.jpg": "39ef174f35d47eb27a404c0f5d8b3999",
"assets/webassets/stickers/delete.png": "de28c91956dbcbec1b6a1db8e081fff6",
"assets/webassets/stickers/icons8-class-100.png": "e5013e153be99605ba24dd2f7d3151dc",
"assets/webassets/stickers/icons8-school-director-100.png": "e21fe677c9a4cb46b8450d7a5e1b7e82",
"assets/webassets/stickers/icons8-student-100%2520(1).png": "abe25a5c7b154a46b0746ecc94f61978",
"assets/webassets/stickers/pencil.png": "f2ea6775ca169d2bff2fc6ff4433098e",
"assets/webassets/svg/check-svgrepo-com.svg": "9b47809eb95c139834eae8f1e51618df",
"assets/webassets/svg/class-svgrepo-com.svg": "2a2e032f98b63ae11294f83745525108",
"assets/webassets/svg/mail-svgrepo-com.svg": "d367ced0490d92d9285a783a5e70932e",
"assets/webassets/svg/phone-android-svgrepo-com.svg": "6884e631d33875b7291e30fe3fa37353",
"assets/webassets/svg/student-beans-svgrepo-com.svg": "947198d3fb535f83f76745030d1609c0",
"assets/webassets/svg/teacher-svgrepo-com.svg": "4dccd9b59d6a3f638a1088ab4e9685b1",
"assets/webassets/svg/wrong-delete-remove-trash-minus-cancel-close-svgrepo-com.svg": "7e44280a14e6368a9236e7a588eadefa",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "899ce5d2993e5ad0e2c0d4665e9254a5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "9b594b09f350542249ee8bdbef1eb05a",
"icons/android-chrome-512x512%20copy.png": "41780dbee0ed9b5caa89f79f7dc16899",
"icons/android-chrome-512x512.png": "41780dbee0ed9b5caa89f79f7dc16899",
"icons/apple-touch-icon.png": "e17211c55f9d7492896af72650454a95",
"index.html": "33100f726b60e9ecdd82350e941ee8cd",
"/": "33100f726b60e9ecdd82350e941ee8cd",
"main.dart.js": "1fd071b1e99fc334ce824cb2483bd031",
"manifest.json": "d38f599cc7240e37bf9d8510c5394e8b",
"version.json": "3a7b2414e9129ed3a8cee75fab020d86"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
