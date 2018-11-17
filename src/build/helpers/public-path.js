/* eslint-env browser */
/* globals RC_BASE_ZF_DIST_PATH */

/** Dynamically set absolute public path from current protocol and host */
if (RC_BASE_ZF_DIST_PATH) {
  __webpack_public_path__ = RC_BASE_ZF_DIST_PATH; // eslint-disable-line no-undef, camelcase
}
