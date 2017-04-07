/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/anypoint-styles/anypoint-styles.html","e584adafd34699dd90e18a97c52bd033"],["/bower_components/anypoint-styles/colors.html","417372e96fb8ada00e2ae0e79e955ade"],["/bower_components/anypoint-styles/din-pro.html","f36a651ab9818ec11e2c165e1c66240f"],["/bower_components/anypoint-styles/typography.html","dd38d453fc0fc895756445a2afa4c02c"],["/bower_components/api-console-ext-comm/api-console-ext-comm.html","2c59524b4bdea6eda1df39be6352d860"],["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","a7474857c8dd25d6a9e5aabe763ec01f"],["/bower_components/app-layout/app-drawer/app-drawer.html","e9076e309f6194958ac1dd3894a3e371"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","0916d57aa30b3c1b54946399c8c01f04"],["/bower_components/app-layout/app-header/app-header.html","f5c92182d2100c582b099fdba4b1267f"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","e72d2053c9d6d462083e5a3c47279f2c"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","4f3bc3dee2d48426998c6e4425df2b14"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","a78d5b787591fb1728631fc5e087cd1c"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bde0a79d3265bef565ee86c699b6bbae"],["/bower_components/app-layout/helpers/helpers.html","6a9eeb74102bb1e3ba297c47c441f869"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","f3550c2eff5c339841d95e47c26dfba6"],["/bower_components/arc-definitions/arc-definitions.html","cf2d5119c82da43159accbfa8a665c6c"],["/bower_components/arc-icons/arc-icons.html","909ae34db90b5b240ce5d33c5851f140"],["/bower_components/auth-methods/auth-method-basic.html","f15f56ce77c09537ca2bacf846b54b0a"],["/bower_components/auth-methods/auth-method-digest.html","6fbe666357726b8b0019956968b56e8e"],["/bower_components/auth-methods/auth-method-ntlm.html","493088b3effd5bf5332646a19fa93fda"],["/bower_components/auth-methods/auth-method-oauth1.html","52ff0d29f06ee42cfd8126e3a986b138"],["/bower_components/auth-methods/auth-method-oauth2.html","49b0afac4d1098e6c8de18be3cf02727"],["/bower_components/auth-methods/auth-methods-behavior.html","1a7a78ee55b3c242bfd2d1d5fdf72d10"],["/bower_components/auth-methods/auth-methods-styles.html","8a4efe8653650ed50a0787063d129303"],["/bower_components/auth-methods/auth-methods.html","7e76a0b0f60bed3615d240cf44b54094"],["/bower_components/auth-methods/cryptojs-import.html","120f21756fd337b0673bd6f7a9354721"],["/bower_components/auth-methods/polyfills.html","859efe4378c7b7a7f5dca401547bc661"],["/bower_components/authorization-panel/authorization-panel.html","8756a4d7639ba4dad7c4be1112118503"],["/bower_components/body-form-editor/body-form-editor.html","636ca6a0551eef87312bbc59905e7f8c"],["/bower_components/body-json-editor/body-json-editor-behavior.html","c581020f45371ff2e1b739b8f45239f5"],["/bower_components/body-json-editor/body-json-editor.html","181a310b9c1ae667f98ff9189f3a5507"],["/bower_components/body-json-editor/object-editor.html","470e2fd102eabe5838374ffa5cc37d29"],["/bower_components/body-json-editor/simple-type-editor.html","9efcbf64f029aa0d063bc59b5eed4674"],["/bower_components/clipboard-copy/clipboard-copy.html","b272640d50d335d1c7222f3c460fd13a"],["/bower_components/code-mirror/code-mirror.html","da078f93749d810171b8287af6d6e12f"],["/bower_components/code-mirror/code-mirror.js","58edf481a6a13225a39773c7d56b4116"],["/bower_components/code-mirror/codemirror-import.html","0e7d9ef014c4c4819796bba68ab02c25"],["/bower_components/code-mirror/styles/3024-day-styles.html","b985602d6542776da82383fc47cb0e3b"],["/bower_components/code-mirror/styles/3024-night-styles.html","54c40cfd0f460f9c419792c2631525b2"],["/bower_components/code-mirror/styles/ambiance-mobile-styles.html","c9e4ad1a081fd86fcd84787f1a5f5083"],["/bower_components/code-mirror/styles/ambiance-styles.html","ac0285940410e79eb624b5beae9b2f7d"],["/bower_components/code-mirror/styles/base16-dark-styles.html","3163a372020325448d5d8c04ad3f23a0"],["/bower_components/code-mirror/styles/base16-light-styles.html","5b0a82fa682635cc5a580c7a0ff31fbe"],["/bower_components/code-mirror/styles/blackboard-styles.html","0465045a6de537268708da2dbdfa6bc0"],["/bower_components/code-mirror/styles/cobalt-styles.html","5fc838f30c9a1f6ce193fe36481eb12a"],["/bower_components/code-mirror/styles/codemirror-styles.html","cfa034b22b137ba0020357f87f8fd754"],["/bower_components/code-mirror/styles/colorforth-styles.html","36078c64a6940ec64a3ee6512feaaf4e"],["/bower_components/code-mirror/styles/eclipse-styles.html","0795336fe2b87cc17d662a89c4cebc85"],["/bower_components/code-mirror/styles/elegant-styles.html","0dd97d55061a5cfb109fd42796468842"],["/bower_components/code-mirror/styles/erlang-dark-styles.html","cc27845618f95c7fc0a7c4abc53fa530"],["/bower_components/code-mirror/styles/lesser-dark-styles.html","c32d46b2a0dff46054490885ebf98ef1"],["/bower_components/code-mirror/styles/liquibyte-styles.html","38524b3e9bf598d35b5d1fb195dbb926"],["/bower_components/code-mirror/styles/mbo-styles.html","5d332cdb1621a7276a0d85d230f3270d"],["/bower_components/code-mirror/styles/mdn-like-styles.html","98b778556ede0013f12fea6f2ba6663a"],["/bower_components/code-mirror/styles/midnight-styles.html","441dca2632dc775efa80642fad6254a5"],["/bower_components/code-mirror/styles/monokai-styles.html","81446baf66034eec7e57cfbd10518394"],["/bower_components/code-mirror/styles/neat-styles.html","ec6d8846a03ded43b4a9583a5e762307"],["/bower_components/code-mirror/styles/neo-styles.html","a7df507bbf5f33cb33d3b369dcc85b43"],["/bower_components/code-mirror/styles/night-styles.html","dd48f25d2153614d8f537f335cb99e31"],["/bower_components/code-mirror/styles/paraiso-dark-styles.html","6bf2c1d10fe71335b68fc7ddd4923cf8"],["/bower_components/code-mirror/styles/paraiso-light-styles.html","27ead6746fa8e17d025bc892514fbd9d"],["/bower_components/code-mirror/styles/pastel-on-dark-styles.html","f1745773022efd8e3ed6d6248f7905dd"],["/bower_components/code-mirror/styles/rubyblue-styles.html","1c692750217822b058a1f0417d780eac"],["/bower_components/code-mirror/styles/solarized-styles.html","e3beecdbecc9a6ef1dae06f4c66b34f4"],["/bower_components/code-mirror/styles/the-matrix-styles.html","73cf2bb2d0689ec25bac3b1dcec33b65"],["/bower_components/code-mirror/styles/tomorrow-night-bright-styles.html","febb8bd0a1c87e422b4373d36749c9ad"],["/bower_components/code-mirror/styles/tomorrow-night-eighties-styles.html","fc458d98bc0ba272c88883db41a28b10"],["/bower_components/code-mirror/styles/ttcn-styles.html","f6adc6f42be6409c4f5c965ba5db18db"],["/bower_components/code-mirror/styles/twilight-styles.html","d305a5dd01cf993f4fa1db692b7e6615"],["/bower_components/code-mirror/styles/vibrant-ink-styles.html","ff519a531122d165370bb99f8412f61e"],["/bower_components/code-mirror/styles/xq-dark-styles.html","e169f6ba0d10d62efbe11070f762b62f"],["/bower_components/code-mirror/styles/xq-light-styles.html","513c763cc063597b763ebafea1dde418"],["/bower_components/code-mirror/styles/zenburn-styles.html","304b8edc874f891ecfcb99b653eec711"],["/bower_components/codemirror/addon/mode/loadmode.js","6eb4ac9f24c5a2d7319515988cb655b4"],["/bower_components/codemirror/lib/codemirror.js","6ff28063fd293078e342dab60e5c54a9"],["/bower_components/codemirror/mode/htmlmixed/htmlmixed.js","c7c7fca14112d57b9dec60bda8a121ab"],["/bower_components/codemirror/mode/meta.js","c8c6ab0328956aaa5b3fa1920b7062ef"],["/bower_components/cryptojslib/rollups/md5.js","54d94aaa7e6f2ef7d269cf68797b5866"],["/bower_components/date-time/date-time.html","08063718941db19a695682aa64171b38"],["/bower_components/docs-parameters-table/docs-body-parameters-table.html","b32baddb7cd344a7d255049afc315b9f"],["/bower_components/docs-parameters-table/docs-body-table.html","293e44ef8bda26c79447f4436c5be5af"],["/bower_components/docs-parameters-table/docs-form-parameters-table.html","f864bcca6d72e244451bd50daf19ecda"],["/bower_components/docs-parameters-table/docs-headers-table.html","2a90dddad70742bb963098b7ffbccb2b"],["/bower_components/docs-parameters-table/docs-json-parameters-table.html","ddbc791bf7618ac215eec48026324e83"],["/bower_components/docs-parameters-table/docs-parameters-behavior.html","8bd2c5ced2f5ecc48d1add75a6dac219"],["/bower_components/docs-parameters-table/docs-parameters-table-shared-styles.html","f0bdd80fa3eca0007384742c003bfd45"],["/bower_components/docs-parameters-table/docs-parameters-table.html","112f2d1e9e5f27fd9fbc596d569efcd2"],["/bower_components/docs-parameters-table/docs-xml-parameters-table.html","7b32448a089b61d8e73b28027b37f56b"],["/bower_components/docs-parameters-table/structure-display.html","c6c27b70051c6d7cc35582acfb86e432"],["/bower_components/error-message/error-message.html","02690aa161f9f6ae62ecb458b9a694c8"],["/bower_components/fetch-polyfill/fetch-polyfill.html","f3dd60ab9794368730ed2a4bdc2bbadd"],["/bower_components/fetch/fetch.js","948a66a688ce8bc8c3b3e7a88fdafcf5"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/headers-list-view/headers-list-item-value.html","688d64e50474d077b965fc110f7cd0ab"],["/bower_components/headers-list-view/headers-list-item.html","d30dc018509653937a0a533dd2e4d386"],["/bower_components/headers-list-view/headers-list-view.html","6dcc383027b2262ea0e98944919efaea"],["/bower_components/headers-parser-behavior/headers-parser-behavior.html","7232d66a1b9e569309094686835d7908"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","9b51ca6689770fc9c7efb27129b7c5d7"],["/bower_components/iron-a11y-keys/iron-a11y-keys.html","fd2760ee5676b7615aaa24d695c5295d"],["/bower_components/iron-ajax/iron-ajax.html","6fe26e77115b2757c9db65a71153509c"],["/bower_components/iron-ajax/iron-request.html","1881ad6ae9bf637ce49ad766bb17701a"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-collapse/iron-collapse.html","30ca05c987397312c698967a9bbe6499"],["/bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","4ab3b41a92b93eb0ca6e9846311b6c69"],["/bower_components/iron-dropdown/iron-dropdown.html","0c8c3226b6e6a351b098fa4d794ee702"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","e048e061e5752630ff76e4597db84d22"],["/bower_components/iron-flex-layout/classes/iron-flex-layout.html","52518a396b7b6638323e33320af1e2a5"],["/bower_components/iron-flex-layout/classes/iron-shadow-flex-layout.html","82233435af1c9e0c4f7533a5db91d30f"],["/bower_components/iron-flex-layout/iron-flex-layout.html","be17bfc442cd8270b7dec1bb39051621"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-form/iron-form.html","f5c640d1fc19f7248955e6ccc355acb3"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-input/iron-input.html","eaf5e01ff7402c9715651d1f5e37a893"],["/bower_components/iron-location/iron-location.html","8a4f71232319aed73115b2e356c19fde"],["/bower_components/iron-location/iron-query-params.html","32a96be5536aea89a925d16146cb7015"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","094bb8b9546dcf49b5a3e5d2572c1b53"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","a0cc6674fc6d9d7ba0b68ff680b4e56b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","6f9ea0b495a22d3c4c51773a1b94e19e"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","b0f11806f873e049d1a79fd2ed8ba4cd"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","ba435264a6aaeda615475a29ee5965fc"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-range-behavior/iron-range-behavior.html","34f5b83882b6b6c5cfad7543caab080e"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","0ba4675c3ec856c26912022dd5b05036"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","91eeea310058c0a1b837b685922c03a5"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/json-table/json-table-array.html","28c3470f701c33bd2342d2fb6ed16416"],["/bower_components/json-table/json-table-behavior.html","24f7ceeccb3cd371bc4caf7325ac01b8"],["/bower_components/json-table/json-table-object.html","3d04695608c1f0feccc2c389cfa495f4"],["/bower_components/json-table/json-table-primitive-teaser.html","5882d34e1717f8f6b3898a3a07347ee1"],["/bower_components/json-table/json-table.html","6cca79a83878c0e7c74cad9137f60f4c"],["/bower_components/json-viewer/js-max-number-error.html","03af0efc44ef657c3c540e66233aef08"],["/bower_components/json-viewer/json-viewer.html","0dda2f1313a9434ca108295eadb35fab"],["/bower_components/markdown-styles/markdown-styles.html","3f4d6dc74105b92d57c25e4cb310c4a1"],["/bower_components/marked-element/marked-element.html","e74cc3cd33dcfd5dabf0ad86c952a46f"],["/bower_components/marked-element/marked-import.html","935603373e4046660d3944abb73939f1"],["/bower_components/marked/lib/marked.js","4ce764861eed3ccf5bf03fe4bc6c185b"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/oauth-authorization/oauth2-authorization.html","48dca7b6d031b3e96241310061e5ed05"],["/bower_components/oauth2-scope-selector/oauth2-scope-selector.html","5f220b535f161670fde9c311827dd023"],["/bower_components/paper-autocomplete/paper-autocomplete.html","f906ad6b7ea589a244f29b18d99a688c"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f061a077ee938fac479622156071296"],["/bower_components/paper-checkbox/paper-checkbox.html","5c930d6a22083244247f2cb1ef54d3f6"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","b9cf5384b29cd12a724965080916b6f1"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","8fb5282b6149bc429b6baef5c077a285"],["/bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","49e3023a68129496c360dc9613f34bfc"],["/bower_components/paper-dialog/paper-dialog.html","7a8d86ed89c215baf8cc42e4d7335271"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","d309383cfdcf6733d4e6827c3b877c72"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","c18c68e91e13e2102f577c1c55ce7598"],["/bower_components/paper-dropdown-menu/paper-dropdown-menu.html","879115bf8199d7d13c336144a32115d4"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","c8745b07240ae4cf14ff950427c0ea70"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","9bc3dc572b1612bcffafd2405d24c82a"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","3385511052db3467ca6ec155faa619ad"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-body.html","8b91d21da1ac0ab23442d05b4e377286"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-listbox/paper-listbox.html","bfbc631d72b3e7b2b611c9a32430e3c6"],["/bower_components/paper-masked-input/paper-masked-input.html","69e41875e2381a25161ea1e16fcc71f7"],["/bower_components/paper-masked-input/paper-masked-input.js","e101fa7eb6476003d7e57fa7f324c341"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-material/paper-material.html","47301784c93c3d9989abfbab68ec9859"],["/bower_components/paper-menu-button/paper-menu-button-animations.html","a6d6ed67a145ca00d4487c40c4b06273"],["/bower_components/paper-menu-button/paper-menu-button.html","a27f6566ce497d9a5212b3b1669e850e"],["/bower_components/paper-menu/paper-menu-shared-styles.html","9b2ae6e8b26011a37194ea3b4bdd043d"],["/bower_components/paper-menu/paper-menu.html","5270d7b4b603d9fdfcfdb079c750a3cd"],["/bower_components/paper-progress/paper-progress.html","5dd0b9f89efdfd4f3cce0a13bd67fe6f"],["/bower_components/paper-ripple/paper-ripple.html","417d76dccb679ca1000ac8ca18be4968"],["/bower_components/paper-spinner/paper-spinner-behavior.html","7e58a415d4a9b43fbef2651029d61ad0"],["/bower_components/paper-spinner/paper-spinner-styles.html","a2122d2c0f3ac98e6911160d8886d31a"],["/bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/paper-styles.html","3fd71f69f3adc823ef9c03611d296cfc"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-tabs/paper-tab.html","395fdc6be051eb7218b1c77a94eff726"],["/bower_components/paper-tabs/paper-tabs-icons.html","9fb57777c667562392afe684d85ddbe2"],["/bower_components/paper-tabs/paper-tabs.html","fefbf72ae2b803db65d54622474c0faa"],["/bower_components/paper-toast/paper-toast.html","f64d10724104f3751cae8b764aef56ff"],["/bower_components/paper-tooltip/paper-tooltip.html","7a5d4aa47799c8465b33e0a8aae849d4"],["/bower_components/payload-parser-behavior/payload-parser-behavior.html","c1159b1f7da968bc11503af8c04789d7"],["/bower_components/polymer/polymer-micro.html","dbbd6fa1a1a3afdc6ab3a774d796b436"],["/bower_components/polymer/polymer-mini.html","e1d2a48eca579ef566846aaa926ea2a5"],["/bower_components/polymer/polymer.html","a9b2f8e35750eb21d9990934756dc6e6"],["/bower_components/prism-element/prism-highlighter.html","5bfaea1678d10fa0ce8235fc03820bd9"],["/bower_components/prism-element/prism-import.html","94e49629fc3c5cb76c1e23563547923f"],["/bower_components/prism-element/prism-theme-default.html","440043a3ffdbed9376cfe428c9af6051"],["/bower_components/prism-highlight/prism-highlight.html","6ba5017ff85a496cda6a9ab817449b2e"],["/bower_components/prism-highlight/prism-import.html","604de06cd9176959e921f1f41020843f"],["/bower_components/prism-highlight/prism-styles.html","e5dc3c82be7fdbd1fa46d98e3bcd8349"],["/bower_components/prism/prism.js","91b86e485909b29eaf1e3710c69345d7"],["/bower_components/prism/themes/prism.css","298e3aafa62f48b863042aa3696a2b34"],["/bower_components/promise-polyfill/Promise-Statics.js","b87a570030962c1b861c278177a9220f"],["/bower_components/promise-polyfill/Promise.js","543d053e97b2f3bf434212aa4db1fb2a"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/promise-polyfill/promise-polyfill.html","97dd009429dbc654aa105abcd0dfb927"],["/bower_components/raml-aware/raml-aware.html","5b54d94f5aa529a35076f399483d3404"],["/bower_components/raml-behaviors/raml-behavior.html","d70bd8bd1aee37305ee718391dda74c5"],["/bower_components/raml-body-editor-panel/cm-arc-styles.html","19cd40f0d398492ba71c8e3faea572ae"],["/bower_components/raml-body-editor-panel/raml-body-editor-panel.html","b769c546cf7db5b752d6c72ce8c2a0b9"],["/bower_components/raml-docs-documentation-viewer/raml-docs-documentation-viewer.html","87ba6aa53907fc789a0450e6af241e7e"],["/bower_components/raml-docs-method-viewer/raml-docs-method-viewer.html","d6c9fed3f0ea043b0a8f6067c9857345"],["/bower_components/raml-docs-resource-viewer/raml-docs-resource-viewer.html","2f684f8ec44b6b4a5dae3f59fa9e8413"],["/bower_components/raml-docs-response-panel/raml-docs-response-panel.html","67dda1424d1bd01adda0ea32c32a1157"],["/bower_components/raml-docs-types-viewer/raml-docs-types-viewer.html","f395ab550b39b1241cd29213ba21be39"],["/bower_components/raml-documentation-panel/raml-documentation-empty-state.html","57bea3af158d9b72b980f3a5cdcabc03"],["/bower_components/raml-documentation-panel/raml-documentation-panel-icons.html","1cfb130a67737335f06797fad9bd3aba"],["/bower_components/raml-documentation-panel/raml-documentation-panel.html","330d706ac1bb121556b6fb041c65d621"],["/bower_components/raml-headers-form/raml-headers-form.html","f53c9f358519d1da543d46a42f1ddcd5"],["/bower_components/raml-js-parser/polyfills.js","f9fdcb65e10594093dae53a48537cf2d"],["/bower_components/raml-js-parser/raml-1-parser.js","9b9e67fb29c18b052228b5814384dbff"],["/bower_components/raml-js-parser/raml-js-parser-imports.html","ad016d6bc511d952554f680f6b1b675a"],["/bower_components/raml-js-parser/raml-js-parser.html","9dde41e0d333f1aa376faabe33bb4c78"],["/bower_components/raml-json-enhance/raml-json-enhance.html","7a3a771996b7cce17125e4c5748b0a78"],["/bower_components/raml-path-selector/path-selector-behavior.html","9f3f81e07c171569abab573f882f9996"],["/bower_components/raml-path-selector/path-selector-documentation.html","249a9767db8c2030c9c0591b198728f8"],["/bower_components/raml-path-selector/path-selector-resource.html","86a18a6dcf442b6149f1c6a82144fdb3"],["/bower_components/raml-path-selector/path-selector-styles.html","8a087f62c519918d21d1aa641d214b67"],["/bower_components/raml-path-selector/path-selector-types.html","31601f2ff27577fc72672a5ab9b519de"],["/bower_components/raml-path-selector/raml-documentation-tree-item.html","9a8a37fa112d16aeeb62ee12001b184b"],["/bower_components/raml-path-selector/raml-path-selector.html","1ca51cc11b52f0cad4a3c8922371b063"],["/bower_components/raml-path-selector/raml-resource-tree-item.html","77beda0c3dba01ed4298ca57b47f71a2"],["/bower_components/raml-path-selector/raml-structure-tree.html","7bc5d1d2b5cc4504ef5883040da51777"],["/bower_components/raml-path-selector/raml-tree-item-behavior.html","02e14e400529ae35aa6623ffaaa8ab00"],["/bower_components/raml-path-selector/raml-tree-item-styles.html","ff44b7485e729218b79362e63b3d3fbd"],["/bower_components/raml-path-selector/raml-type-tree-item.html","f2a3a5d140b0e63e90f78bfeb7ddbbce"],["/bower_components/raml-path-to-object/raml-path-to-object.html","3be750b0115145147526f45a33725765"],["/bower_components/raml-request-headers-editor/cm-arc-styles.html","669bb1afe360e5e6454e929a34a2374f"],["/bower_components/raml-request-headers-editor/cm-headers-addon.js","88fbfaecc1a2b5d6e34088aae5feac52"],["/bower_components/raml-request-headers-editor/cm-hint-http-headers.js","4bbe1812c254cb1a19ef64a488b50f42"],["/bower_components/raml-request-headers-editor/cm-modules-import.html","5c5c379db357d0296e5103387a8aaec7"],["/bower_components/raml-request-headers-editor/cm-show-hint.js","f5a78a49c36deaafbe6d35b661f9568e"],["/bower_components/raml-request-headers-editor/raml-request-headers-editor.html","0c60976ba59db6be3fa1692b7e337395"],["/bower_components/raml-request-panel/raml-request-panel-simple-xhr.html","ff4e26d5fc3d1ce75ad00948c4e05eed"],["/bower_components/raml-request-panel/raml-request-panel.html","6af2942aa64be347dddc9b487ec53c42"],["/bower_components/raml-request-parameters-editor/raml-request-parameters-editor.html","5324cda66e07be07edb07260ed460883"],["/bower_components/raml-request-parameters-editor/raml-request-parameters-form.html","fd0e041bed5968707323f3cd27bc55db"],["/bower_components/raml-request-url-editor/raml-request-url-editor.html","8d881518a8027d62235fdb63ada13c93"],["/bower_components/raml-request-url-editor/url-input.html","047f0810a24295c43009ba7fa967b1c3"],["/bower_components/raml-summary-view/raml-summary-view.html","09672f33184f0cbe0a3565474a8099d9"],["/bower_components/request-timings/request-timings-panel.html","f7862e9fb42b8d791d1b745a5c9ab8b3"],["/bower_components/request-timings/request-timings.html","b98575696d9ab1a2ee5e3e6ff169d9bd"],["/bower_components/response-body-view/response-body-view.html","12d6ee2b51d43d4458cf4beca848e091"],["/bower_components/response-error-view/response-error-view.html","e26ef786553132e090070153866d49f7"],["/bower_components/response-highlighter/response-highlighter.html","a8f9735c8dbdb75af36da6179ccc87c7"],["/bower_components/response-raw-viewer/response-raw-viewer.html","f0f4dba37025595e69e84f6f801bcc4a"],["/bower_components/response-status-view/http-source-message-view.html","8c15bc45fd062c5345af48d4c6b6a2d8"],["/bower_components/response-status-view/response-status-view.html","9464e03732d1b674ef9c4cd25c481d75"],["/bower_components/response-status-view/status-message.html","021cdf1241bb037c1ae11c28ef8306f1"],["/bower_components/response-view/response-view.html","cb9e7d219f015b98d83197ee9864c8e5"],["/bower_components/text-search-behavior/text-search-behavior.html","0f6f3b6399e8f62ff6db80d8947a0466"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","be9e94180423c179afab62aa7e9b533a"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","a95deb54f6feaeb9cb96266b7800dbb1"],["/bower_components/xml-viewer/xml-viewer.html","15782a903885adf307af298fe2cc5af1"],["/index.html","49c37f07ebca6a96c7e8f3e641d127c2"],["/manifest.json","5120ac22c707f311d088b94ba5ca80ed"],["/src/api-console-app.html","44b094fae348d6b6b67d616adfeec430"],["/src/api-console-styles.html","39101a38ee658702aa1a1968c8642822"],["/src/docs.html","267de9abee58321407bbc4116a77c0b8"],["/src/request.html","75288cc0a58cbb3495188efe40197e9e"],["/src/view404.html","6fdb77e7c1f4f6936b55127292007876"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




