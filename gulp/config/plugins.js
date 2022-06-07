import replace from "gulp-replace";
import browserSync from "browser-sync";
import newer from 'gulp-newer'
import ifPlugin from "gulp-if"

export const plugins = {
  replace, // replace @img to img/ ot other path
  browserSync, // reloads page in browser
  newer, // check img update in build 
  if: ifPlugin
}