'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9a365674d97d8d2f94cbb28dbf57c34e",
".git/config": "d0a266f0714180f380aa0769e9a7b86e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db8927d11f3e2c4aee4c112e505d6602",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7af06eabcebc58849ce804b01e3cb6b",
".git/logs/refs/heads/main": "fa4bb0c3accc96ceee7e5bb6389236f9",
".git/logs/refs/remotes/origin/main": "03f908edc8a39848fd7a02cfdd6d4224",
".git/objects/01/ad9838aed1f628e581a16c216c2910b4e67132": "67a7b6ed53772bf4585bef016d6d92f8",
".git/objects/02/2500bbad1f3f19e2f18d58d0c40199829e1525": "3b4485aba74ed372c66f37fcc2ca3798",
".git/objects/05/5d5744a52370250fc5ab73b47d1f5f10845dbd": "cbc3de46c84c61c5f30fdad32cb2d265",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/6b4b6fe2d6b43c2563e6733531eb4dd54b1bef": "45ec704d72a634bc7e60a1f1fe783061",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/79cf0cb9befa30f5d428042f1ce9c22e10a257": "06770105fb6577ce7c8ac54ffb2af978",
".git/objects/09/1d68d375375a22052a537109ae397b238b890a": "259a40797bbcfcd683bf8508a43b4688",
".git/objects/09/ac106f99c313aba4855fa9011faba5d526f801": "ff9ffafc51f6873f66b1f29ab4d55061",
".git/objects/09/de9fdb7194606a6195590d2d6c20ae7ed015f8": "b6e7f79c098a8a8054b5e3ae6557717e",
".git/objects/0a/8f7453121667bfcd3996c8fe1f729d2c5e9ae1": "f24c26c706640803d5a3dece57f908e4",
".git/objects/0a/b25a1350eb84e62e9074eda79e7f14299fcdd6": "3286804f41af3cf32d27e7610c0afa88",
".git/objects/0e/c49484d44155fa97302e1a63759eafe76ba6b8": "92e704af8ebe387002af34af5172e731",
".git/objects/0f/81569e20ae94b8101c117b8ba547ae54333338": "1601f717f88e36c7824802f09b280f5e",
".git/objects/10/e123d218bae7a30359f23051c719a07470f34e": "4db1045f223676866eb72bc5c716b871",
".git/objects/13/771ecbc6dbffe147907bdcbdb0fac42132a701": "5a11ae41e4290dcc7de66d845b9ad760",
".git/objects/13/844bfe3746d86bafecabe21da8b0a81ea17e52": "c1f22eefe6a919559648a93c8f51e348",
".git/objects/14/533d4e382b65d127de829acc703f9885cab7fb": "f4cf21b787309580b51b1ef375493e31",
".git/objects/14/d03d6c8862fc093f17286ca01a9ab62749de3a": "0f11dc49685004c07ef4937037a31112",
".git/objects/15/51a69c0f9e63905774c731cc47f5706230f46d": "1d83d1fb9b68a5a1b5e8179e53f00ccb",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/111daeb7638301559cf9c1679dca536c1715e9": "da1e06cf3caf1b4c6e253aea83804139",
".git/objects/1b/1ae1caaf21f8235ed399045c3ad86b8b551616": "013032cf46b604c47839aca8685eddf3",
".git/objects/1c/262fd5a8317733f644a15d7d528144b5bffdba": "c1e2b6a250eeb5b489e4cafdf43887da",
".git/objects/1c/927a4f2f4ed48d50493ff0dd74f1cfdb6e44df": "4d4add3f0f2fd43f9a35096dc7329507",
".git/objects/1d/b11c54321b4b43d50c3a2225c7021977324ada": "99a4e04d1229fa21b2c3ba52aee648a0",
".git/objects/1e/f9399d07e937ca7debfaf433c035dc0fbc61cd": "8262b87a5fe492024a04e9c84a6aca54",
".git/objects/20/06247233667910724ca8ae28167571277dc2e0": "6056c88b51efdd10f9e2359ad40b02cd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/f8fbe12bca5d8ad5bea056b31227da8b3a76a0": "7399e95d363f6af0a7be51e60e845567",
".git/objects/26/06edf60b93af0c535e7ad815a7e9ed7d03d3c7": "179737e2babaaf618a6a30f76ec1200c",
".git/objects/27/326aa3396aa17d8f7c93819ec178c0354426a2": "78950d2d95c1195e6f9e956b2162d130",
".git/objects/28/3b5e5580d3a44c7ec3c6c4a927334f761b023c": "23491acf1934b68f23cfa9721f719910",
".git/objects/29/1451565b9aae4132cb8b3282b2687620fac177": "573f85413f3f99daa1826fbd5f99f8ff",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/7c7832e2d8853ecd1dfe05627c2b42178eb37f": "f5558f6d36d63e203c15457dd9126bd1",
".git/objects/32/7c5917fccf9b7fbb45adf27f23fc1d025649c4": "7de0103d888403b8b6fdf902fd68da6e",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/34/64884e8e5307aafa2b971095fe176ee75c7cec": "7a7961b0601e935a77e8010c7f58baaa",
".git/objects/34/cba5c06413e8e514bef4484253468bcac8387c": "f3efafef52e1d71419d0843d628e742a",
".git/objects/35/3ce937dd5662329abb6b02c1fd81645423b50f": "81967e17f8e806b8ca8a51e022771a45",
".git/objects/35/940b74dcd0bdb560e813214252d6523711a50d": "2eaea800481d3f2fd4e9ef508c91bd0e",
".git/objects/37/06795c6ff576b436dc8d9a81ee4a439e37b167": "09848a0b438da3419b6f50c0d0b4cec7",
".git/objects/37/ae6ec14a67ce75a694ef9aaf3752381aeaece2": "44bb8f019769c486369a37b83d193a7a",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/202d0017fbb44aedaa9af5b0a4e2a5089f3ffa": "34b2f28a54052f3097df3a0a80f6a240",
".git/objects/3c/ac535fe3f16d7539dba56a1c9de89dd92ab6bb": "edac1afb44f4b93202d10317d1085499",
".git/objects/40/44ae07217138e55307f6eeb0d65dd18094bee3": "6218ef150219ed9032fbc5b8d283b47d",
".git/objects/40/c51c1a70046cbcc69567dad0d72b55575560c9": "33242e07165118e9328cabb2fa37035c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/d1e0fb4192d05907077fe5af30dd95d14c1483": "9ac491350344c6523d909a4f1be8ff9b",
".git/objects/45/d22aec778e694671ce1db2eef3c74a8eb137a4": "88dd6df279bfd8b6ccbd00fae44afca6",
".git/objects/46/dbe2de54868cc8f24fbbc6f6ca3f35666d4d1b": "b8569759a3671bbeee1a1b65e6e20b42",
".git/objects/47/1d469d46e0307759796ca7baafa442ac169855": "e54924ddb24f5feeaf30a8d1b081021b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/8b0cd7508af5d16d591fa680dfacd221b14dcb": "a27dd309c021439b38059b414fca4891",
".git/objects/4b/7604d97fd4d1ac43e4e3d2a28830bc214f0f52": "8da35937af436afece52b3b6f66965a2",
".git/objects/4c/a6cc4634be4faabc9b82a0195e5ff407097174": "c9ab52f9df46949fd85099bb0338445f",
".git/objects/4d/fa0a20f37dd5df44834c117f52cc204ca5b807": "efdd2200aaaf8262abf2c5d5a2c45ae4",
".git/objects/50/2f5704f2b3304b6d111e3df0ecd3c207bb7ee6": "ffbc9b40ab9d74ccc342f2202c58042b",
".git/objects/51/341ae225438f11c12ac1c93351973a68f92d22": "549c8eaa26e1db2513b0d0eb1d934c80",
".git/objects/51/96ca4687953f37eacf7ccc2ab0aed13ed1ce13": "ba697a9d0b8752b7cdf4f50ec62b39d6",
".git/objects/52/28f5fa7530c8045343ae4c7b5cf6658c6c857e": "738ba8a1eba353ec1c37ab341184ecb5",
".git/objects/53/a9fbace7b6ee95b4b1f6a603476dcaf2248a89": "84098b524d920a60937fb47ae8ddbad1",
".git/objects/55/9a3be6b7a86b50d1bb58b816af33922b7b84d0": "8be43231931cde1814eb3a7659098a2f",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/d5791bf34076f334d0f4ae4109fe3cefafe6d0": "e1e21b1a01828d2c5d60589441e19137",
".git/objects/58/3a5909d9a32136c31cb10b34f5f122df345ba2": "901e9dfde01455d1f9fa27ff013ea462",
".git/objects/59/94614389e1afc6070fb69e9a85c652041c5956": "69604be5f89aaf78caba6aad3c433d05",
".git/objects/59/ad3573e0d7c2ca91aad92a2c30f73eb9d1d55b": "548191e81de8328c38fd9b0ae68f63ab",
".git/objects/5a/5f0f2fbf32749a62cae1bc1b064e49551f3755": "1717dcaf3244b9b4a25f93a356e8db1d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/56c14def3b917c743153a0e0d28ee3022032e0": "f8bf1497f64b32461a2b39ed6f5e6605",
".git/objects/5c/408d3e65041c27186966dac53bbc08b60cd6e9": "4c7919c1d628e9532c15e2b7050ad6be",
".git/objects/5e/1c4671569c4f1f2de3a8d654449b918766a2bf": "117ca0a9718f0409455bf77023258e95",
".git/objects/5e/790969b0e543135e0ff9b9584ae18e33a8a622": "295e9bb37ba098f6d3d4f5dd6bb59e27",
".git/objects/60/3c74fac01fc1b785f04782d6c85a9bd7a54a56": "e58143902f9f3a5cea29b87b8e8e1142",
".git/objects/64/df5ebccda78f3cac91e7b0d65779ed8a6b1185": "e805dc355d567b7469441666c2caa216",
".git/objects/66/7525d95af731ade148b3212a75300e668e625c": "df314b627a47b77f026799ba94a50b88",
".git/objects/66/b2c418dc28e43b5bfa75d23327df56c6fc5003": "c4d575a0fba311c5d5c9be1a585bf7b3",
".git/objects/67/5a44f770aeedc3b2cbaaec69a5515f7672d122": "e5beb2f39849f3696c1f878163cefe2c",
".git/objects/67/d246c7b32b735380b1c985d2d22f7fec9243ae": "f79f669f4b35b0d1e5e3039831b8328c",
".git/objects/6a/1cfd760b5a57177f3131fadf98275b0a3f7ed4": "b76fbe28d13f043a21bdec6b57f00c68",
".git/objects/6a/ac3d8f1fef73baadbb8ebb34a03e749fe78322": "0675955e91faec6ff6b003ce3fd426ac",
".git/objects/6a/ef287018b901111f6edd51d639ace95c5ea40d": "7191e8fc19eef678a6b197dda6520019",
".git/objects/6d/a5a201e8a4e07f2b117e9e97f88808a258661a": "6a55001769dc0a7468a4118411b1697b",
".git/objects/6d/c4cbbe688363f89d6c6723325c03adf9c68658": "32cc3bba73bca268aaaa11c3936fb133",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/9dc63dd0a5dbb38c0a5fcfeb174da0d6607b9a": "f82e8c32e98323a64308466e25f6f776",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/8081595ee557202531e05effde7134ea6832b9": "b4e8d2263f67f45d0f2c8b8fb87f0623",
".git/objects/74/9c40f8081888246a52cfc3ef3173a57cae5b7e": "d675d5891f78077a333bec8fb6fe4254",
".git/objects/75/694973d6d4d3a963185c8c0df6cbaaedace216": "2d112e81a1fe64a428f892902f95fd4f",
".git/objects/75/ac52182a38bbfb8fb33914756f28f5496f3d78": "274409657670a262d08198745e5a4612",
".git/objects/75/e7d856b2253ca0aeb33ad78c1435f76c181389": "926000333cf3ad3998cf3c286b4e633f",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/cbacbce7519c4b56e3d9bf5bc119f13acb5d9a": "4983ac376ca4a44e04c3331aa53def33",
".git/objects/78/0e63dcab28aecc6b25420ed968f9c5206a3293": "4fc292374436deddcb62ac7a9f884e60",
".git/objects/79/596e48c522f7005c1319849ae0d700d7e715f2": "9e7133b5cc0b2894831ce7411cd7cf93",
".git/objects/7d/a1085db395e5edc990f0780362d7845cdb52df": "bcb24e1df7acf2220d7b4be4e667fa2b",
".git/objects/7e/2b9a69382d762411599b0b6705f9a12043a23e": "39a3c498ff0d653eaafb2650e3ae17c8",
".git/objects/7e/caec605f30cb298b0a369fcb7d81ce477c972c": "331b63480831537ac13ccec28f06ec4d",
".git/objects/84/00409b338f935c0c8f83d9c79df8f7a17c4faf": "d9441582db09df643048008df8fae2db",
".git/objects/86/15ddaf9afc57ac11dc6d21cef17605982b05d8": "a91cd274589809b53218f8bf9360d62f",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/78bbdace9262f5dfaec7a2d9b032158f362388": "838c91de18bf823f32bc596faa7ca409",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/f304c934ae4b1e06a643d772783a4aa7e19a7a": "c8271bd28961b64f492b7bdf879b293e",
".git/objects/8e/7a0de201d26a784941276e257d9e11f53f12a7": "6f9ae3490e959ed4714e74534d2cee51",
".git/objects/8e/e0620883e97d777559f32b6db6da0b20c428b1": "8afc2d779e38b4c40cd72212be291ec8",
".git/objects/90/2f61129cf582ff5637d8c758e81eee8407bb4b": "3531db16ddcd552e834334dbd56d39eb",
".git/objects/91/cd171a86de9417cf5dcdca760c06d5150399db": "8d04c6595a2dd281c8de0bea03127da6",
".git/objects/91/dbcd6bea95244ccd2bbad605adb9ec2b828167": "2e15e1c061916240a663c7dc3805f9da",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c0b4be68dcc220be826a87ca6440cef2d5c6e4": "6e87710a00f83a9690c7acf2f8efa85a",
".git/objects/97/6a7e45b203158356227bdc68ad6c505104d1b8": "74c8a3cabdf14560e1f43cc3fd4bc9ef",
".git/objects/97/ae05c3e8c2f295d9f3ecfc7b8466767c2a3749": "26bf538440cbb09b5efe8b09c11d6adb",
".git/objects/97/ef531a4bf86c00beca7edac5524d6a30f706f2": "934a960973dae3220b6a61809d1cc227",
".git/objects/9b/326001675b54c73e90272b31026e0ff22d1c1e": "52d74831bab153f0002e7241fcc45627",
".git/objects/9e/f50625391622bc40d2040b590789e3202d1785": "7d90cf64789ecf7f6b9c770b38ba6a00",
".git/objects/9f/1a67916936fcfddc5e1e85d2185d8e5a0248c3": "650f057c59dda3f71882dccfbe881a15",
".git/objects/a0/95948ae1cd7b3343d2c5b006392859a84d4757": "d9b83866e7c9809dc8c1c365cb3bbb43",
".git/objects/a1/9d3e2def3fb09e3f8f6401dd3cea9c4f4ec2ef": "3e00717092de3857cfda49a06496cb1e",
".git/objects/a2/64ce0c75157b93429f24d20c006af0054cc6ec": "273461afb12de7a129e35c6cd7c56e4f",
".git/objects/a2/64d608f2abf66d6ea938a0cc7a856ba0789f38": "8c97798ef69b53bcfd93d712eb2f6d0b",
".git/objects/a3/c3b62396f358d67ee7a354d766047668a6096b": "367df2b0f3009f4949b6650e2beda700",
".git/objects/a4/259234a49d2c60c71c4604573089692f9e7e79": "fa9aa8a0a0eeb23e65c6c424fba86f15",
".git/objects/a5/35a35d4aabce5847693e14c383b44f11da5c0c": "0695306edeac58fd8ed14c7c57a7c69b",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a7/76d58c12978b555cb6b2a875a310a1aab41bb0": "266803a70334b13cd504c2cca9dd3adf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/65763e922c6b1bcca8da0f13245a79123384d2": "128e51f658e5b86cffeb5aa075ba8085",
".git/objects/aa/9296fb25fbf4db847bf81e74b9587f08b7e4aa": "c53f6f6c792d88bee487e52314be20c8",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/5c78ec04983d57983e284d58a0fdcebb7a8d28": "247e031e124f5d92fa5254b6fe59fd69",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/683657e858450c8adef0c4d3798e216fb2c444": "c05d452d73aa7c93e4174a21f618feee",
".git/objects/b2/8cecf0ff5c358395315d4c8795a77448bd9510": "7c1607167b69efcbf3996d6f087d9ff2",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/aafa3217c75331628c66511ed3e2414529acd9": "2a8746b28803968f188b411f83085f5d",
".git/objects/b6/341aa9615a4cc8c103d86d0029fd1ef7aec8ee": "69d98a24564185e1468369ec35eb9c36",
".git/objects/be/23b3e0c100aab83a055358f758c7efa9fe2532": "e52b85bc5ec78fbcfdd2bd38dfa6a688",
".git/objects/bf/edaa4f457a8e014935c9925ae796b01c9d4a7e": "fcc69d5e21a18b7814280d522495a1c2",
".git/objects/c0/3ff07407cb7265bac739e672d81c8bc5cf0aec": "48163b33b7eebd89b44e83fd0f5d31a1",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/6f6ea41147428c8fcc3c7b6501290c0b180f3d": "a5d1ce4638d4a12e14460c7fcef53b43",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/5434dbb55dc5123bf7b9982b974e4770b5546e": "957ec2988e4e191bf679bffc8cd9f66c",
".git/objects/c8/957b8b582985adac8d92671444c9020e465cd8": "be00ab9234dbbe5f8c10c548c53e5438",
".git/objects/ca/d73e20ead1f0d4f7a1fc23eb004a8a1c00832c": "76dbddca4cf861eef4e1f004fc2e8e37",
".git/objects/cb/3abe1b90fcaee204df326b80fc968f7ac5dd06": "54ec814935fdcfcf93e5f80424e7e783",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/42eb83365c1a296648659e2c378ec7b65a4aa7": "f7de01aed5edf51f1e86e4a1686eb54e",
".git/objects/cf/cdb2a0c227a88439d7905fcfeb5009e6a0bc17": "cbd5b92931c3af19ca298cbcebbc1e14",
".git/objects/d1/1cfa4b728607f39a391ff1633a106357393d4d": "06ab47bd6d3ec1f612ebe2c44bd289cf",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d3/92b0bbe9557ab5ad6d37dbd577a1ec500572d2": "053d45f59a62192096f9c188ff2a8af9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0c394bc890ccab2cfc95f45fc9b66c319c2c2c": "5117244a875b7bf9fc6d453d7a127d21",
".git/objects/d5/21d8273fa8d8f6487689633bb0d4752b074b9e": "93627c2f847169abd50ac0cda120aa03",
".git/objects/d5/59c83583f94dbde117302c3d66d73b16457daa": "7cd345ea2f00785382d03f686121e6af",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/8547c67d3c8ca835c4fd02771b713f44a2173e": "07bd366477424dec76a54646c720bdd7",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/153ee087e79c60ecbdbbef8ad798161fc80cf8": "75c729d5db42bb97532a01ee15b6597b",
".git/objects/d6/6c8f95491aac55e63f42abab1b3e1a11a31679": "ef7ac6c62322422466cc7203ab7f7103",
".git/objects/d8/fab443d99065fe36def57f7bd241aae2eab0bc": "d4037b73a538b06e36c8a76329645b61",
".git/objects/d9/aac7f7d28009fe2c1d072aa027dd814cb75318": "fa0a7c7a5ed4ec75d4359845ab596145",
".git/objects/dc/037740847a563122c28665773bbe9e3652eeb8": "338b962f1ef64d64cf1ee18f41df84c5",
".git/objects/de/cd921f1b5b5fd5f979de72b77255798c2980e8": "5f8912b0b62faf55522160b3fc6a2120",
".git/objects/df/00704f77da154063f3636ebab77bc196587fdc": "23814e3037409143c7ed2b45c24fc41e",
".git/objects/df/84a49b577a1eccd35cc534e5f9d1ddf6c2db29": "28638bd2de32d4927d7e0f21fa9ebf35",
".git/objects/e0/2ac107e6367dc69dbdb30012d8480f4b2d7752": "4455d71f6cea7c00f695f649d4ae3500",
".git/objects/e5/b87a9b1d527bf34adac8d26a0e23f8f23d8bc0": "6623488094fd218c63c643ecb49fab99",
".git/objects/e6/a6b859a6b4429870ae29ec45243e27bfca02bb": "5d7ce63b6b9289069726aa077dabfcf4",
".git/objects/e8/0bc89d97ae93b95a56771df24f938726b62f84": "8e64669752c47641805f5d6ad3b0e1e8",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/3035efbd05773ac4e82fd8e678a6541153ad82": "6ce3e436f7d58eedd0bff044307cae2f",
".git/objects/e9/344ec5bab092fd57b8a8a09b0d24f707c918ca": "98499acabfe442da1782dbe52869061f",
".git/objects/e9/efce4f66d68b160c44b417ff97047666aa868f": "161c2a14193c7d9efa2923859434debf",
".git/objects/ea/ca115b406b5a66e84e011a9cb6642a27c40576": "9ee19121e4ce7484d2a3888506a7de9d",
".git/objects/eb/0c28f99f2fdb1ca67e4bb3b1ddb67485139077": "2c85bdb53dfb4e44fedfda225ee3e2ae",
".git/objects/eb/e83cce7268a4164cd0a3eebe4a244be02199e3": "76bf404a2e17cc5b2a19753e1f001b50",
".git/objects/ec/4f5ff150fce0cc057635565fd51222b2b01b0d": "78b4df5c759f9aa3688d083ea81897db",
".git/objects/ed/5658054a3fb135a8e5cbcb7951ec53c43940aa": "325162c8e247477697b12fd3a0655ee1",
".git/objects/ed/708421778501875dbc62e7eb46b8c26750bf79": "ed84ab0306cb6593e0a4a97c4c000939",
".git/objects/ee/30c9c7053ead2722cc450a7530000c80490ef3": "0a8fe741ee4b0f6807a5cd5b1065d3b5",
".git/objects/ee/98c0d106c74628981d13f5372e617e43af232d": "09a39b980b8fe07621b92c7e86315f59",
".git/objects/ee/ff350db9efc2839f8991c4c6a3c6afb1d255e4": "5079d262e28977cf9e8be26bc89a813d",
".git/objects/ef/fe4eaeb93149a4fcef5ff42eda3f2b3c674aeb": "6af19168a77d6a8836cbace7d55661e8",
".git/objects/f1/2023b13b74a84525370aca6385ffad34a7cbaf": "88d68bf26ea91558b6c1ad278ca4e44d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ebff48f8254c9d79b3d8a83a7a657b188e9397": "f737c8cb8a6177057904d737627b6c32",
".git/objects/f4/8b879068fdbe325bb256c8e6c1346622bff563": "56e3c2ce69f3311be1e44a82b1e93c76",
".git/objects/f8/d9369fb8e3acc9d417cac04c1083cf1cbf3893": "801ea53a29bf13b087c771fe8a43fd6f",
".git/objects/f8/f75ba787771df38197f134d897fbce0b3e3203": "5e06d3fe1a30aac364ea10565c95bb11",
".git/objects/fb/3869e2867ebd352c8728f02a9aa6fd40e75225": "2409edaba59784ad06aab100bc4cc115",
".git/objects/fc/0702f0a46d029938b83ce344adfd48ed277c02": "717d8839773a1e0e2dab6e2f46ef6570",
".git/objects/ff/0c6bbb0632cc1eb067c1c48fb70de6536b255c": "29d25f44ebaf7684ada5cd9c90864dd0",
".git/refs/heads/main": "366eb1df145f8f80a6ba5bd0d15df93c",
".git/refs/remotes/origin/main": "366eb1df145f8f80a6ba5bd0d15df93c",
"assets/AssetManifest.bin": "322f8103e9cb3af90933fd58ffcfd527",
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
"index.html": "98662f0b332712f4dde3e2a65121c5e7",
"/": "98662f0b332712f4dde3e2a65121c5e7",
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
