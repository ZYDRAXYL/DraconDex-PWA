'use strict';
// os.tmpdir() is the only thing the data layer asks for (temp copies around
// Drive backup and merge-import). It points at a directory inside the virtual
// filesystem like every other path in this build.
export const tmpdir = () => '/ddx/tmp';
export const homedir = () => '/ddx/home';
export const platform = () => 'browser';
export const EOL = '\n';
export const cpus = () => [];
export default { tmpdir, homedir, platform, EOL, cpus };
