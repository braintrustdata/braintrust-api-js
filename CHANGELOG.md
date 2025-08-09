# Changelog

## 0.6.0 (2025-08-09)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/braintrustdata/braintrust-api-js/compare/v0.5.0...v0.6.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#114](https://github.com/braintrustdata/braintrust-api-js/issues/114)) ([643c000](https://github.com/braintrustdata/braintrust-api-js/commit/643c0001d7eaaf40268b7ed67ae4a0859b1748ec))
* **api:** api update ([#73](https://github.com/braintrustdata/braintrust-api-js/issues/73)) ([93e6197](https://github.com/braintrustdata/braintrust-api-js/commit/93e6197d63e8b6dca633bfefb3a7384af0385132))
* **api:** api update ([#75](https://github.com/braintrustdata/braintrust-api-js/issues/75)) ([2515590](https://github.com/braintrustdata/braintrust-api-js/commit/25155904a46f3ae3f7e4576fc92577799e1ec787))
* **api:** manual updates ([#118](https://github.com/braintrustdata/braintrust-api-js/issues/118)) ([d506652](https://github.com/braintrustdata/braintrust-api-js/commit/d506652c19067999e68be4ee2666a898af2bc5b2))
* **api:** manual updates ([#119](https://github.com/braintrustdata/braintrust-api-js/issues/119)) ([91dae90](https://github.com/braintrustdata/braintrust-api-js/commit/91dae90da18ded77db8a9abe24377511ea0f981b))
* **api:** manual updates ([#120](https://github.com/braintrustdata/braintrust-api-js/issues/120)) ([7f65e00](https://github.com/braintrustdata/braintrust-api-js/commit/7f65e00b43b094624a94238be52c4c91fdae404b))
* **api:** manual updates ([#85](https://github.com/braintrustdata/braintrust-api-js/issues/85)) ([17b38db](https://github.com/braintrustdata/braintrust-api-js/commit/17b38dba0c814b7c887cf2cb853983524d4d6f5b))
* **api:** manual updates ([#88](https://github.com/braintrustdata/braintrust-api-js/issues/88)) ([2bdb09d](https://github.com/braintrustdata/braintrust-api-js/commit/2bdb09d67ef00c54a7edd2fed7853e03017e22b0))
* **api:** manual updates ([#90](https://github.com/braintrustdata/braintrust-api-js/issues/90)) ([6a98150](https://github.com/braintrustdata/braintrust-api-js/commit/6a981509d9483090584a90263cb419f5709a21af))
* **api:** manual updates ([#91](https://github.com/braintrustdata/braintrust-api-js/issues/91)) ([753586c](https://github.com/braintrustdata/braintrust-api-js/commit/753586c4b704b1589119b2bac3521c5d20e6f20c))
* **api:** manual updates ([#92](https://github.com/braintrustdata/braintrust-api-js/issues/92)) ([76db2e0](https://github.com/braintrustdata/braintrust-api-js/commit/76db2e092f290430cf316b21052f9795c3ad16ae))
* **api:** manual updates ([#93](https://github.com/braintrustdata/braintrust-api-js/issues/93)) ([2052b2a](https://github.com/braintrustdata/braintrust-api-js/commit/2052b2a9638101fe44fd542ff48cf657f51d481e))
* **api:** manual updates ([#94](https://github.com/braintrustdata/braintrust-api-js/issues/94)) ([404dff8](https://github.com/braintrustdata/braintrust-api-js/commit/404dff8b5987073de20a733896c90336e678db64))
* **api:** manual updates ([#95](https://github.com/braintrustdata/braintrust-api-js/issues/95)) ([eb40edc](https://github.com/braintrustdata/braintrust-api-js/commit/eb40edc6c6de1cd1c4ebb84b7249fcf1236b9d23))
* **client:** add support for endpoint-specific base URLs ([4533649](https://github.com/braintrustdata/braintrust-api-js/commit/45336499183b0bea4491b30484f23d38425b2111))
* **client:** send `X-Stainless-Timeout` header ([#110](https://github.com/braintrustdata/braintrust-api-js/issues/110)) ([98530d7](https://github.com/braintrustdata/braintrust-api-js/commit/98530d79da1be4d9aca6460f69b0040ceb08e91c))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#127](https://github.com/braintrustdata/braintrust-api-js/issues/127)) ([f607429](https://github.com/braintrustdata/braintrust-api-js/commit/f607429422debc489c7646d69f6c5b2b3207b14a))
* avoid type error in certain environments ([#123](https://github.com/braintrustdata/braintrust-api-js/issues/123)) ([ddf9c1a](https://github.com/braintrustdata/braintrust-api-js/commit/ddf9c1a1843c06661dda840aa6b191a2ffd9bfe1))
* **ci:** release-doctor — report correct token name ([0ddb252](https://github.com/braintrustdata/braintrust-api-js/commit/0ddb25222fdbfb449871912bd2111a14a7ce5b95))
* **client:** don't send `Content-Type` for bodyless methods ([287b6a9](https://github.com/braintrustdata/braintrust-api-js/commit/287b6a9f6b717be42217e89edca0786a7f71bbd7))
* **client:** fix export map for index exports ([#111](https://github.com/braintrustdata/braintrust-api-js/issues/111)) ([fdb7aeb](https://github.com/braintrustdata/braintrust-api-js/commit/fdb7aeba38d55f8451642e3c0dc14a028a522e76))
* **client:** normalize method ([#103](https://github.com/braintrustdata/braintrust-api-js/issues/103)) ([a2adcb6](https://github.com/braintrustdata/braintrust-api-js/commit/a2adcb636543f13d6186a239bbb68fd610c7ef86))
* **client:** send `X-Stainless-Timeout` in seconds ([#125](https://github.com/braintrustdata/braintrust-api-js/issues/125)) ([eee3031](https://github.com/braintrustdata/braintrust-api-js/commit/eee303108a2d8dd3cf4b9a1921cd2a3e0c00a3ac))
* **exports:** ensure resource imports don't require /index ([#117](https://github.com/braintrustdata/braintrust-api-js/issues/117)) ([88007da](https://github.com/braintrustdata/braintrust-api-js/commit/88007da59078f90e7e8e5146f2000685cdd7cc0c))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#124](https://github.com/braintrustdata/braintrust-api-js/issues/124)) ([237e357](https://github.com/braintrustdata/braintrust-api-js/commit/237e357d27b10a03c543b10f48d14eac50678f8e))
* **mcp:** remove unused tools.ts ([#129](https://github.com/braintrustdata/braintrust-api-js/issues/129)) ([a727b16](https://github.com/braintrustdata/braintrust-api-js/commit/a727b168dc3d7295c8afeb7f5741897604a1b82a))
* publish script — handle NPM errors correctly ([883071d](https://github.com/braintrustdata/braintrust-api-js/commit/883071d2ace0224aa002b49853359e108a103c50))


### Chores

* **api:** manual updates ([#78](https://github.com/braintrustdata/braintrust-api-js/issues/78)) ([977f402](https://github.com/braintrustdata/braintrust-api-js/commit/977f402b22cd4beff625caca58ef12e3b17ea42b))
* **ci:** add timeout thresholds for CI jobs ([b3cb5c5](https://github.com/braintrustdata/braintrust-api-js/commit/b3cb5c5a427fc9461b74c5f5aa034a359feaa351))
* **ci:** bump node version for release workflows ([505d32b](https://github.com/braintrustdata/braintrust-api-js/commit/505d32ba3503a8d78505845fed5e93f8a44d2fc9))
* **ci:** enable for pull requests ([0ef3ed3](https://github.com/braintrustdata/braintrust-api-js/commit/0ef3ed35398917092dfd92a7302c2f865f15c787))
* **ci:** only run for pushes and fork pull requests ([6fe19c9](https://github.com/braintrustdata/braintrust-api-js/commit/6fe19c928243d43983cd47b724a2691397a6c96c))
* **ci:** only use depot for staging repos ([376b5c0](https://github.com/braintrustdata/braintrust-api-js/commit/376b5c07b0a908e847291c5ae7e34bbe2edcb1c4))
* **client:** minor internal fixes ([ac388a4](https://github.com/braintrustdata/braintrust-api-js/commit/ac388a456cfb706505c638bbe4dc5426fafd67ab))
* **client:** simplify `unknown | null` to just `unknown` ([#106](https://github.com/braintrustdata/braintrust-api-js/issues/106)) ([6bc93da](https://github.com/braintrustdata/braintrust-api-js/commit/6bc93dad03b02e583d37b9c8f3252144b9b9c462))
* **docs:** grammar improvements ([6af5c54](https://github.com/braintrustdata/braintrust-api-js/commit/6af5c541ff0ab98cbf5c0c081aac43a6cc420a23))
* **docs:** use top-level-await in example snippets ([ac307a8](https://github.com/braintrustdata/braintrust-api-js/commit/ac307a8eebbe316e849e0944371ed881eee9247c))
* **exports:** cleaner resource index imports ([#121](https://github.com/braintrustdata/braintrust-api-js/issues/121)) ([8211c2d](https://github.com/braintrustdata/braintrust-api-js/commit/8211c2d7fa33cb6df6d34b68452b7b36ac8aea0f))
* **exports:** stop using path fallbacks ([#122](https://github.com/braintrustdata/braintrust-api-js/issues/122)) ([e0a6ac0](https://github.com/braintrustdata/braintrust-api-js/commit/e0a6ac0cc802cdac460736610a1809d14971bc12))
* improve publish-npm script --latest tag logic ([9b319ed](https://github.com/braintrustdata/braintrust-api-js/commit/9b319ed2420d0f61eeabd9eddbb481f68ac0b1f4))
* **internal:** add aliases for Record and Array ([#126](https://github.com/braintrustdata/braintrust-api-js/issues/126)) ([c884211](https://github.com/braintrustdata/braintrust-api-js/commit/c88421129d2d19d8728e37e5853423b5cbd1f208))
* **internal:** bump cross-spawn to v7.0.6 ([#99](https://github.com/braintrustdata/braintrust-api-js/issues/99)) ([b187960](https://github.com/braintrustdata/braintrust-api-js/commit/b187960ddc735595df49f21d1dee407048683b5c))
* **internal:** codegen related update ([30e1c8c](https://github.com/braintrustdata/braintrust-api-js/commit/30e1c8c5017226e7b6f26aae958fd38599644ac4))
* **internal:** codegen related update ([#104](https://github.com/braintrustdata/braintrust-api-js/issues/104)) ([0f5b5ef](https://github.com/braintrustdata/braintrust-api-js/commit/0f5b5ef52708f972518b63d53818ea2e81a4511d))
* **internal:** codegen related update ([#105](https://github.com/braintrustdata/braintrust-api-js/issues/105)) ([922a37f](https://github.com/braintrustdata/braintrust-api-js/commit/922a37f8cf72145b8dd2806946c2983c10f89846))
* **internal:** codegen related update ([#107](https://github.com/braintrustdata/braintrust-api-js/issues/107)) ([67050b7](https://github.com/braintrustdata/braintrust-api-js/commit/67050b79b4629fdcd559a6dfcf4ef189a0e7d89c))
* **internal:** codegen related update ([#108](https://github.com/braintrustdata/braintrust-api-js/issues/108)) ([b6bac5b](https://github.com/braintrustdata/braintrust-api-js/commit/b6bac5b5af98680a38f7a0121ad7ffddf6041d49))
* **internal:** codegen related update ([#109](https://github.com/braintrustdata/braintrust-api-js/issues/109)) ([8b116b7](https://github.com/braintrustdata/braintrust-api-js/commit/8b116b7a5958cc464032ec71277e127cced528ef))
* **internal:** codegen related update ([#115](https://github.com/braintrustdata/braintrust-api-js/issues/115)) ([2d3be96](https://github.com/braintrustdata/braintrust-api-js/commit/2d3be96d6dea97967f93de587a3f544880b5b84c))
* **internal:** codegen related update ([#96](https://github.com/braintrustdata/braintrust-api-js/issues/96)) ([ba8ce2c](https://github.com/braintrustdata/braintrust-api-js/commit/ba8ce2c3fbe8a6245b29979b62e865c360bf67fe))
* **internal:** codegen related update ([#97](https://github.com/braintrustdata/braintrust-api-js/issues/97)) ([d046e45](https://github.com/braintrustdata/braintrust-api-js/commit/d046e455d64a2db7186a05f5fa3914cca20764d3))
* **internal:** fix devcontainers setup ([#112](https://github.com/braintrustdata/braintrust-api-js/issues/112)) ([0fae5c6](https://github.com/braintrustdata/braintrust-api-js/commit/0fae5c6735b9eaf5cb7a1ea7f041d3192743f36a))
* **internal:** fix some typos ([#102](https://github.com/braintrustdata/braintrust-api-js/issues/102)) ([55891d9](https://github.com/braintrustdata/braintrust-api-js/commit/55891d99a41bdd2a96eaac33e3880483eaee238c))
* **internal:** improve index signature formatting ([#128](https://github.com/braintrustdata/braintrust-api-js/issues/128)) ([3720134](https://github.com/braintrustdata/braintrust-api-js/commit/3720134bfa029fb50571f86af372d5f291438fbc))
* **internal:** make base APIResource abstract ([e4e71aa](https://github.com/braintrustdata/braintrust-api-js/commit/e4e71aa456e656c8dfa26e899d410abd6b64fe86))
* **internal:** move publish config ([780fa93](https://github.com/braintrustdata/braintrust-api-js/commit/780fa9363cb7e37a4e41c95604675ccb5f460b87))
* **internal:** reduce CI branch coverage ([a2ab360](https://github.com/braintrustdata/braintrust-api-js/commit/a2ab360e064d95f8ddef79c920a7f4c56619cafd))
* **internal:** remove extra empty newlines ([#116](https://github.com/braintrustdata/braintrust-api-js/issues/116)) ([499bc0a](https://github.com/braintrustdata/braintrust-api-js/commit/499bc0aff446ab9ccb26a4a33c70c957d869dfb4))
* **internal:** remove redundant imports config ([b54f172](https://github.com/braintrustdata/braintrust-api-js/commit/b54f172f010584c6501cd9f00dba51a94a0187e0))
* **internal:** remove unnecessary getRequestClient function ([#98](https://github.com/braintrustdata/braintrust-api-js/issues/98)) ([1b9a5c0](https://github.com/braintrustdata/braintrust-api-js/commit/1b9a5c05abe7dccf8af375efa31b16bb94279683))
* **internal:** update isAbsoluteURL ([#101](https://github.com/braintrustdata/braintrust-api-js/issues/101)) ([88fd824](https://github.com/braintrustdata/braintrust-api-js/commit/88fd8240989953d806669bc6d4f8e62579ff8bbd))
* **internal:** upload builds and expand CI branch coverage ([8ae7f54](https://github.com/braintrustdata/braintrust-api-js/commit/8ae7f54b5bb23dc68862802744107a3f0131ceb7))
* make some internal functions async ([9e768ad](https://github.com/braintrustdata/braintrust-api-js/commit/9e768ad28817d1f49f9e64ce5cdfaf0a7c41f349))
* mention unit type in timeout docs ([f283cea](https://github.com/braintrustdata/braintrust-api-js/commit/f283ceae5133eae45752ca6d6a04f89ea24635a2))
* rebuild project due to codegen change ([#76](https://github.com/braintrustdata/braintrust-api-js/issues/76)) ([dfefba2](https://github.com/braintrustdata/braintrust-api-js/commit/dfefba2d00b3e7dc7b6e76b522a0d398fcccf313))
* rebuild project due to codegen change ([#77](https://github.com/braintrustdata/braintrust-api-js/issues/77)) ([7c07e4e](https://github.com/braintrustdata/braintrust-api-js/commit/7c07e4ee7475b4eebae4bebb2ff937676431232e))
* rebuild project due to codegen change ([#79](https://github.com/braintrustdata/braintrust-api-js/issues/79)) ([978fdc9](https://github.com/braintrustdata/braintrust-api-js/commit/978fdc9d09151aab25b5c51153f286af1254bbf5))
* rebuild project due to codegen change ([#80](https://github.com/braintrustdata/braintrust-api-js/issues/80)) ([69cc4ae](https://github.com/braintrustdata/braintrust-api-js/commit/69cc4ae1077dfc6871e72d7c82ddedff249c9222))
* rebuild project due to codegen change ([#81](https://github.com/braintrustdata/braintrust-api-js/issues/81)) ([8bde1e7](https://github.com/braintrustdata/braintrust-api-js/commit/8bde1e71a879a4ced7567d71d45abae995482526))
* rebuild project due to codegen change ([#82](https://github.com/braintrustdata/braintrust-api-js/issues/82)) ([a7e4a5f](https://github.com/braintrustdata/braintrust-api-js/commit/a7e4a5f1cbfacf4470e53e776f3cbbf8be468868))
* rebuild project due to codegen change ([#83](https://github.com/braintrustdata/braintrust-api-js/issues/83)) ([42eb17f](https://github.com/braintrustdata/braintrust-api-js/commit/42eb17ff646ab32a674f983dcc4f933658d1fce8))
* rebuild project due to codegen change ([#84](https://github.com/braintrustdata/braintrust-api-js/issues/84)) ([33b0126](https://github.com/braintrustdata/braintrust-api-js/commit/33b01263b5b5e8dad1eabf77d22720f8c3d88bc7))
* rebuild project due to codegen change ([#86](https://github.com/braintrustdata/braintrust-api-js/issues/86)) ([4731ce7](https://github.com/braintrustdata/braintrust-api-js/commit/4731ce7b9147894d8a0047ef07388337f1a56fec))
* rebuild project due to codegen change ([#87](https://github.com/braintrustdata/braintrust-api-js/issues/87)) ([2fc74f7](https://github.com/braintrustdata/braintrust-api-js/commit/2fc74f743787290e92366f941c482b89574cceb4))
* rebuild project due to codegen change ([#89](https://github.com/braintrustdata/braintrust-api-js/issues/89)) ([efe445a](https://github.com/braintrustdata/braintrust-api-js/commit/efe445acc87618fb3d11c0912ddf4c5320920110))
* **types:** nicer error class types + jsdocs ([#100](https://github.com/braintrustdata/braintrust-api-js/issues/100)) ([ca84692](https://github.com/braintrustdata/braintrust-api-js/commit/ca8469204c0a7666d8c296390325127ce2aae433))
* update @stainless-api/prism-cli to v5.15.0 ([66f1617](https://github.com/braintrustdata/braintrust-api-js/commit/66f16172b9109d79df7497ea25ab5ea6de5821df))


### Documentation

* **readme:** fix typo ([023b27c](https://github.com/braintrustdata/braintrust-api-js/commit/023b27c0bbef0dc5944165a9ac304548d239105a))
* update URLs from stainlessapi.com to stainless.com ([#113](https://github.com/braintrustdata/braintrust-api-js/issues/113)) ([842a484](https://github.com/braintrustdata/braintrust-api-js/commit/842a4840c1add146ab440d399fb027860a95d793))


### Refactors

* **types:** replace Record with mapped types ([e4c07d7](https://github.com/braintrustdata/braintrust-api-js/commit/e4c07d7634a540fa2e3b94295bf966f1c1088efe))


### Build System

* **deps:** bump form-data from 3.0.1 to 3.0.4 ([cc5760f](https://github.com/braintrustdata/braintrust-api-js/commit/cc5760f19b4ee7fe3d6ce0500c3a353fa6ae1723))

## 0.5.0 (2024-10-01)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/braintrustdata/braintrust-api-js/compare/v0.4.0...v0.5.0)

### Features

* **api:** deduplication ([#68](https://github.com/braintrustdata/braintrust-api-js/issues/68)) ([57555b3](https://github.com/braintrustdata/braintrust-api-js/commit/57555b3f058f2dc62f37dd7a2f99dae353b1e7ea))
* **api:** manual updates ([#69](https://github.com/braintrustdata/braintrust-api-js/issues/69)) ([347bafb](https://github.com/braintrustdata/braintrust-api-js/commit/347bafbbef26addb89fcedbe55a2e466411e9699))
* **api:** manual updates ([#70](https://github.com/braintrustdata/braintrust-api-js/issues/70)) ([bf2ad3a](https://github.com/braintrustdata/braintrust-api-js/commit/bf2ad3ae8bb87e1733d0304e49a5b668fa83fa99))
* **api:** manual updates ([#71](https://github.com/braintrustdata/braintrust-api-js/issues/71)) ([89d9e42](https://github.com/braintrustdata/braintrust-api-js/commit/89d9e42668dc222f4d413014ac61c16e7276b6aa))
* **api:** update via SDK Studio ([#54](https://github.com/braintrustdata/braintrust-api-js/issues/54)) ([fcbef4d](https://github.com/braintrustdata/braintrust-api-js/commit/fcbef4d36595f895ff0423c7628aa8c5c0bcf661))
* **api:** update via SDK Studio ([#59](https://github.com/braintrustdata/braintrust-api-js/issues/59)) ([bc0e2be](https://github.com/braintrustdata/braintrust-api-js/commit/bc0e2bef743b5ba594c26bccdda0570d7987f247))
* **api:** update via SDK Studio ([#60](https://github.com/braintrustdata/braintrust-api-js/issues/60)) ([5458341](https://github.com/braintrustdata/braintrust-api-js/commit/5458341006d1e7f5b074ac73bbc466688b263cee))
* **api:** update via SDK Studio ([#61](https://github.com/braintrustdata/braintrust-api-js/issues/61)) ([a90315c](https://github.com/braintrustdata/braintrust-api-js/commit/a90315c6e8400bdbb9abb990327cdd0b3e1b7f14))
* **api:** update via SDK Studio ([#62](https://github.com/braintrustdata/braintrust-api-js/issues/62)) ([bc4442d](https://github.com/braintrustdata/braintrust-api-js/commit/bc4442d4ba932076e72531b3d70e24d1f2b72d10))
* **api:** update via SDK Studio ([#63](https://github.com/braintrustdata/braintrust-api-js/issues/63)) ([992d962](https://github.com/braintrustdata/braintrust-api-js/commit/992d9625a0e8b343a550a2e2b0ba40537b7194a0))
* **api:** update via SDK Studio ([#64](https://github.com/braintrustdata/braintrust-api-js/issues/64)) ([6b0a7f0](https://github.com/braintrustdata/braintrust-api-js/commit/6b0a7f07666d268f9a61ed0b68594b060ab39810))
* **api:** update via SDK Studio ([#65](https://github.com/braintrustdata/braintrust-api-js/issues/65)) ([fb5b686](https://github.com/braintrustdata/braintrust-api-js/commit/fb5b6869ac65fb42feb98d0cf2cc2976f55f4e0f))
* **client:** send retry count header ([#58](https://github.com/braintrustdata/braintrust-api-js/issues/58)) ([54fb8fa](https://github.com/braintrustdata/braintrust-api-js/commit/54fb8fac2acc52c0c96d624a38b65bf1c7fd822f))


### Bug Fixes

* **api:** fix go build ([#66](https://github.com/braintrustdata/braintrust-api-js/issues/66)) ([2c82511](https://github.com/braintrustdata/braintrust-api-js/commit/2c82511928741533a53d113120c0fa07253d8d28))
* **types:** remove leftover polyfill usage ([#57](https://github.com/braintrustdata/braintrust-api-js/issues/57)) ([738960d](https://github.com/braintrustdata/braintrust-api-js/commit/738960dec3ed75528f6cfad2f9ae30a2b36a199b))


### Chores

* **internal:** codegen related update ([#55](https://github.com/braintrustdata/braintrust-api-js/issues/55)) ([aee9dc5](https://github.com/braintrustdata/braintrust-api-js/commit/aee9dc5817e8fa04a7e96db15b5d76f420c40c36))
* **internal:** codegen related update ([#67](https://github.com/braintrustdata/braintrust-api-js/issues/67)) ([a714164](https://github.com/braintrustdata/braintrust-api-js/commit/a7141646cdf72ed7e8972e364d40d3c89432c338))

## 0.4.0 (2024-08-09)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/braintrustdata/braintrust-api-js/compare/v0.3.0...v0.4.0)

### Features

* **api:** update via SDK Studio ([#51](https://github.com/braintrustdata/braintrust-api-js/issues/51)) ([efa5aaf](https://github.com/braintrustdata/braintrust-api-js/commit/efa5aaf6ff3c1cbc88163e8ceb37a600453a42a0))

## 0.3.0 (2024-08-09)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/braintrustdata/braintrust-api-js/compare/v0.2.0...v0.3.0)

### Features

* add model ProjectScoreCategory ([#41](https://github.com/braintrustdata/braintrust-api-js/issues/41)) ([e7d90f1](https://github.com/braintrustdata/braintrust-api-js/commit/e7d90f11b9b43fd720e183a76360c926ce17f794))
* **api:** manual updates ([#42](https://github.com/braintrustdata/braintrust-api-js/issues/42)) ([e29065d](https://github.com/braintrustdata/braintrust-api-js/commit/e29065d349585ab30d015ba3a35cdfc8603e209a))
* **api:** manual updates ([#46](https://github.com/braintrustdata/braintrust-api-js/issues/46)) ([35b3754](https://github.com/braintrustdata/braintrust-api-js/commit/35b37541580be60f308a09d25a7ebe8f7e97d360))
* **api:** manual updates ([#47](https://github.com/braintrustdata/braintrust-api-js/issues/47)) ([8877485](https://github.com/braintrustdata/braintrust-api-js/commit/88774851303d9576079c19d7cefaaf888516ac36))
* **api:** update via SDK Studio ([#18](https://github.com/braintrustdata/braintrust-api-js/issues/18)) ([d6e9d8c](https://github.com/braintrustdata/braintrust-api-js/commit/d6e9d8c2f02fe24d71c2ebc3cf1b10e9b9835d51))
* **api:** update via SDK Studio ([#22](https://github.com/braintrustdata/braintrust-api-js/issues/22)) ([5fa9746](https://github.com/braintrustdata/braintrust-api-js/commit/5fa974630cecb0a158b5e9d31aeefe9bfc570bc9))
* **api:** update via SDK Studio ([#23](https://github.com/braintrustdata/braintrust-api-js/issues/23)) ([d3e158c](https://github.com/braintrustdata/braintrust-api-js/commit/d3e158c121fee28ad59da641b31dadc73e875733))
* **api:** update via SDK Studio ([#24](https://github.com/braintrustdata/braintrust-api-js/issues/24)) ([294a500](https://github.com/braintrustdata/braintrust-api-js/commit/294a500315413d08ef7609e0363b266c885cbb90))
* **api:** update via SDK Studio ([#25](https://github.com/braintrustdata/braintrust-api-js/issues/25)) ([acbd4d8](https://github.com/braintrustdata/braintrust-api-js/commit/acbd4d81ebfe4f0d367f631909cb6d62bd66415a))
* **api:** update via SDK Studio ([#26](https://github.com/braintrustdata/braintrust-api-js/issues/26)) ([4c07ad5](https://github.com/braintrustdata/braintrust-api-js/commit/4c07ad54831a885854471be5c1e63069ee2f4ccc))
* **api:** update via SDK Studio ([#27](https://github.com/braintrustdata/braintrust-api-js/issues/27)) ([8da85ad](https://github.com/braintrustdata/braintrust-api-js/commit/8da85ad6ed293841c676b7a9845588f6ac17eaee))
* **api:** update via SDK Studio ([#28](https://github.com/braintrustdata/braintrust-api-js/issues/28)) ([305b6ba](https://github.com/braintrustdata/braintrust-api-js/commit/305b6bac40626f8eb0508316d314e4acb683e2b0))
* **api:** update via SDK Studio ([#29](https://github.com/braintrustdata/braintrust-api-js/issues/29)) ([83423f9](https://github.com/braintrustdata/braintrust-api-js/commit/83423f9a31a7c7b11ce1470fc98f189551f0832e))
* **api:** update via SDK Studio ([#30](https://github.com/braintrustdata/braintrust-api-js/issues/30)) ([da24bce](https://github.com/braintrustdata/braintrust-api-js/commit/da24bcecff82611da956cdc8fbb7168eb15fcb8b))
* **api:** update via SDK Studio ([#31](https://github.com/braintrustdata/braintrust-api-js/issues/31)) ([d294539](https://github.com/braintrustdata/braintrust-api-js/commit/d294539b047a2b4824f5ae7fdecd529c9505f934))
* **api:** update via SDK Studio ([#32](https://github.com/braintrustdata/braintrust-api-js/issues/32)) ([d30cc27](https://github.com/braintrustdata/braintrust-api-js/commit/d30cc27ea74dde83d97f91acb6f74d5aa2211b27))
* **api:** update via SDK Studio ([#33](https://github.com/braintrustdata/braintrust-api-js/issues/33)) ([cc4ec08](https://github.com/braintrustdata/braintrust-api-js/commit/cc4ec087d81287a830228f5918be1a118d619a86))
* **api:** update via SDK Studio ([#34](https://github.com/braintrustdata/braintrust-api-js/issues/34)) ([6f5440a](https://github.com/braintrustdata/braintrust-api-js/commit/6f5440a6d6f62969a9dc65003bf9d20bf241712b))
* **api:** update via SDK Studio ([#35](https://github.com/braintrustdata/braintrust-api-js/issues/35)) ([9be28e9](https://github.com/braintrustdata/braintrust-api-js/commit/9be28e92a84fc6bade86f628ba84c84929196793))
* **api:** update via SDK Studio ([#36](https://github.com/braintrustdata/braintrust-api-js/issues/36)) ([1ce960d](https://github.com/braintrustdata/braintrust-api-js/commit/1ce960d8c76ce059d724ea29280ffdd353b4d172))
* **api:** update via SDK Studio ([#37](https://github.com/braintrustdata/braintrust-api-js/issues/37)) ([d9ffa2a](https://github.com/braintrustdata/braintrust-api-js/commit/d9ffa2ad7b0f592439e6f75b9308046497b3ea4b))
* **api:** update via SDK Studio ([#39](https://github.com/braintrustdata/braintrust-api-js/issues/39)) ([6ab9dfe](https://github.com/braintrustdata/braintrust-api-js/commit/6ab9dfec88c3f62059f6799e76676cfde24ac2ea))
* **api:** update via SDK Studio ([#40](https://github.com/braintrustdata/braintrust-api-js/issues/40)) ([d78b045](https://github.com/braintrustdata/braintrust-api-js/commit/d78b045e1fcacca64f488af83951fc74d00eaad5))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#15](https://github.com/braintrustdata/braintrust-api-js/issues/15)) ([94392c7](https://github.com/braintrustdata/braintrust-api-js/commit/94392c78666c8585cbaa70a23b5786b09c1b60e4))


### Chores

* **ci:** bump prism mock server version ([#49](https://github.com/braintrustdata/braintrust-api-js/issues/49)) ([1d33ca1](https://github.com/braintrustdata/braintrust-api-js/commit/1d33ca1adf7ca8780091e1a9b220a30f9f07e3e0))
* **ci:** correctly tag pre-release npm packages ([#38](https://github.com/braintrustdata/braintrust-api-js/issues/38)) ([c53ece4](https://github.com/braintrustdata/braintrust-api-js/commit/c53ece496e172065aa87fb197aef8348431def11))
* **ci:** minor changes ([#48](https://github.com/braintrustdata/braintrust-api-js/issues/48)) ([8eb4357](https://github.com/braintrustdata/braintrust-api-js/commit/8eb4357348470e37f03660c8ae37e906a9e94099))
* **docs:** fix incorrect client var names ([#17](https://github.com/braintrustdata/braintrust-api-js/issues/17)) ([f66b837](https://github.com/braintrustdata/braintrust-api-js/commit/f66b837370bf3e61c59220752d166594ef69ecdd))
* force eslint to use non flat config ([#45](https://github.com/braintrustdata/braintrust-api-js/issues/45)) ([af8fcb8](https://github.com/braintrustdata/braintrust-api-js/commit/af8fcb8230871d1768f377e9e778e46ddd74b71a))
* **internal:** add constant for default timeout ([#21](https://github.com/braintrustdata/braintrust-api-js/issues/21)) ([3adac4e](https://github.com/braintrustdata/braintrust-api-js/commit/3adac4efca9fd88a35f75ca7ae20d914e7f942a7))
* **internal:** codegen related update ([#19](https://github.com/braintrustdata/braintrust-api-js/issues/19)) ([19bee0d](https://github.com/braintrustdata/braintrust-api-js/commit/19bee0d0895712d555b9625c0fe9ebba977cc5c3))
* **internal:** codegen related update ([#20](https://github.com/braintrustdata/braintrust-api-js/issues/20)) ([97ff8a6](https://github.com/braintrustdata/braintrust-api-js/commit/97ff8a62cfdca133d7b973fc7f7ef09071b26f01))
* **internal:** codegen related update ([#43](https://github.com/braintrustdata/braintrust-api-js/issues/43)) ([0e5482c](https://github.com/braintrustdata/braintrust-api-js/commit/0e5482cb87597b853d8f43219233cd6b3b1f2d59))
* update SDK settings ([#44](https://github.com/braintrustdata/braintrust-api-js/issues/44)) ([4310916](https://github.com/braintrustdata/braintrust-api-js/commit/4310916cd70c072fa2cdd25c4043de897a0a216b))

## 0.2.0 (2024-07-23)

Full Changelog: [v0.1.1...v0.2.0](https://github.com/braintrustdata/braintrust-api-js/compare/v0.1.1...v0.2.0)

### Features

* **api:** update via SDK Studio ([#4](https://github.com/braintrustdata/braintrust-api-js/issues/4)) ([b2c686d](https://github.com/braintrustdata/braintrust-api-js/commit/b2c686d7ff7b2e5f0660a0caeb3ea1c2d1cce49e))


### Bug Fixes

* use relative paths ([#13](https://github.com/braintrustdata/braintrust-api-js/issues/13)) ([953d3f6](https://github.com/braintrustdata/braintrust-api-js/commit/953d3f6113ebdfa4cc1520ded1abb5f91e931848))


### Chores

* **ci:** limit release doctor target branches ([#10](https://github.com/braintrustdata/braintrust-api-js/issues/10)) ([2e519b8](https://github.com/braintrustdata/braintrust-api-js/commit/2e519b841262ce8687f501e0c30f0b0bc125de96))
* **docs:** mention support of web browser runtimes ([#8](https://github.com/braintrustdata/braintrust-api-js/issues/8)) ([edaac4c](https://github.com/braintrustdata/braintrust-api-js/commit/edaac4c4834af2141eb16bb7f0b4104c63a61352))
* **docs:** minor update to formatting of API link in README ([#7](https://github.com/braintrustdata/braintrust-api-js/issues/7)) ([ec8a13c](https://github.com/braintrustdata/braintrust-api-js/commit/ec8a13ced7642484d444713d1509e50a61750322))
* **docs:** use client instead of package name in Node examples ([#9](https://github.com/braintrustdata/braintrust-api-js/issues/9)) ([93d5fcf](https://github.com/braintrustdata/braintrust-api-js/commit/93d5fcf9edb31e8cede03919c24ffacdf77a92d5))
* **internal:** codegen related update ([#6](https://github.com/braintrustdata/braintrust-api-js/issues/6)) ([42398c8](https://github.com/braintrustdata/braintrust-api-js/commit/42398c8a00a050884465efd4fa2fed74621a7529))
* **tests:** update prism version ([#11](https://github.com/braintrustdata/braintrust-api-js/issues/11)) ([2471ebe](https://github.com/braintrustdata/braintrust-api-js/commit/2471ebe15c73825f03f800f3c236c4f3cd51c17a))
* update SDK settings ([#12](https://github.com/braintrustdata/braintrust-api-js/issues/12)) ([ae72cca](https://github.com/braintrustdata/braintrust-api-js/commit/ae72cca49452da41930741ee323860cc909f18d9))

## 0.1.1 (2024-07-09)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/braintrustdata/braintrust-api-js/compare/v0.1.0...v0.1.1)

### Chores

* go live ([#2](https://github.com/braintrustdata/braintrust-api-js/issues/2)) ([fe36441](https://github.com/braintrustdata/braintrust-api-js/commit/fe364416c6e05e2f1e730117a85daa9d489ed5f2))
* go live ([#2](https://github.com/braintrustdata/braintrust-api-js/issues/2)) ([a588455](https://github.com/braintrustdata/braintrust-api-js/commit/a58845510c1f4af5b7416f2adf8a1445279ddbbc))

## 0.1.0 (2024-07-09)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/braintrustdata/braintrust-node/compare/v0.0.1...v0.1.0)

### Features

* **api:** OpenAPI spec update ([cafe38a](https://github.com/braintrustdata/braintrust-node/commit/cafe38a62b038d5436323f3db8bff7841421af6b))
* **api:** OpenAPI spec update ([9c923c2](https://github.com/braintrustdata/braintrust-node/commit/9c923c21230ddaa4be4ac7801c70d37002872e9a))
* **api:** OpenAPI spec update ([e6f9bb2](https://github.com/braintrustdata/braintrust-node/commit/e6f9bb287b07c2833e24e63055a53aeeed7fa6cd))
* **api:** OpenAPI spec update ([3c55a9b](https://github.com/braintrustdata/braintrust-node/commit/3c55a9b5b7b38c056a78c565a20582706740b8ee))
* **api:** OpenAPI spec update ([01d8628](https://github.com/braintrustdata/braintrust-node/commit/01d86282afe1bc58ebb987ae65a96669b24d3247))
* **api:** OpenAPI spec update ([c4d38cd](https://github.com/braintrustdata/braintrust-node/commit/c4d38cd695821c19aa8148f1f36cb15ee6c608eb))
* **api:** OpenAPI spec update ([598e971](https://github.com/braintrustdata/braintrust-node/commit/598e971c6dcf4cca31e6bd4839fde302d219ebe5))
* **api:** OpenAPI spec update ([e89f7f4](https://github.com/braintrustdata/braintrust-node/commit/e89f7f445a0ac2fa62b6789e7934f25f6d7c482a))
* **api:** OpenAPI spec update ([17f9845](https://github.com/braintrustdata/braintrust-node/commit/17f984532de37a2d843b2a330ec01d9e34dbfee8))
* **api:** OpenAPI spec update ([a03df06](https://github.com/braintrustdata/braintrust-node/commit/a03df06ced09d5bf857ee4e623ec7d093627783e))
* **api:** update via SDK Studio ([b7bf29d](https://github.com/braintrustdata/braintrust-node/commit/b7bf29da36139dc4b35f65220cd56731c22ef10e))
* **api:** update via SDK Studio ([d4eaafc](https://github.com/braintrustdata/braintrust-node/commit/d4eaafc4afeebeec65b29dfde64d996df0b7e089))
* **api:** update via SDK Studio ([e1c2eeb](https://github.com/braintrustdata/braintrust-node/commit/e1c2eeb60ab039811e64b0cfcd6001626bc8275b))
* **api:** update via SDK Studio ([be335c9](https://github.com/braintrustdata/braintrust-node/commit/be335c9d41448b58ce78562795bf2c8f0c0ab488))
* **api:** update via SDK Studio ([895aebc](https://github.com/braintrustdata/braintrust-node/commit/895aebcc98852fccddc4c697a9b92a54b94ca7a6))
* **api:** update via SDK Studio ([59b9b0b](https://github.com/braintrustdata/braintrust-node/commit/59b9b0b32aa731bfe7867594218a18f47bbf8e54))
* **api:** update via SDK Studio ([218d211](https://github.com/braintrustdata/braintrust-node/commit/218d211732d896995a21db4198d0076f53717105))
* **api:** update via SDK Studio ([01505b5](https://github.com/braintrustdata/braintrust-node/commit/01505b5b872a18bc667ff0618dabaf3fe98b9340))
* **api:** update via SDK Studio ([3a4a066](https://github.com/braintrustdata/braintrust-node/commit/3a4a06663620444750075e2105f887bd94fc236a))
* **api:** update via SDK Studio ([fb21e9b](https://github.com/braintrustdata/braintrust-node/commit/fb21e9bb1036cfffb53884fba0a5b4a293a3da16))
* **api:** update via SDK Studio ([079372f](https://github.com/braintrustdata/braintrust-node/commit/079372f76612ee3f86e308f947af8fdec4a960b8))
* **api:** update via SDK Studio ([a1ea80a](https://github.com/braintrustdata/braintrust-node/commit/a1ea80a1c5c3503045110d93449a0fce7f14b2f0))
* **api:** update via SDK Studio ([9d24119](https://github.com/braintrustdata/braintrust-node/commit/9d2411993bee28d599f6ac1046c04bb389c9369e))
* **api:** update via SDK Studio ([8272acf](https://github.com/braintrustdata/braintrust-node/commit/8272acfcd5ec27db98360758f2d0e97c928ce8be))
* **api:** update via SDK Studio ([7c54e3a](https://github.com/braintrustdata/braintrust-node/commit/7c54e3aedb3746b62404c47de80ddc86a4a82479))
* **api:** update via SDK Studio ([b37a905](https://github.com/braintrustdata/braintrust-node/commit/b37a905f5cbea9dfa96b3f2eea4184fdd2d779a4))
* **api:** update via SDK Studio ([9436261](https://github.com/braintrustdata/braintrust-node/commit/94362615f341fda4614c24413e456e32a5dcb755))
* **api:** update via SDK Studio ([19e607e](https://github.com/braintrustdata/braintrust-node/commit/19e607e81f863f67bc5a32fb8f00dc91ca8571bb))
* **api:** update via SDK Studio ([3385d89](https://github.com/braintrustdata/braintrust-node/commit/3385d89ba3566884943f18764d0932b4b0fee178))
* OpenAPI spec update ([1be2745](https://github.com/braintrustdata/braintrust-node/commit/1be27455e06896845c10148766156da13bb23eb9))
* OpenAPI spec update ([ad1fd36](https://github.com/braintrustdata/braintrust-node/commit/ad1fd36e4226ecb52ca01dfc67130b30e5505978))
* OpenAPI spec update ([03a25a7](https://github.com/braintrustdata/braintrust-node/commit/03a25a7e468eb0092a573f9576e402d65e89334f))
* OpenAPI spec update ([f268dd3](https://github.com/braintrustdata/braintrust-node/commit/f268dd359ef39ec08daca846df2db15d753f879a))
