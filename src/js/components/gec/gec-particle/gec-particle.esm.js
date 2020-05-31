import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-a63006aa.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["gec-particle",[[0,"gec-particle",{"pid":[1],"loc":[1],"label":[1],"placeholder":[1],"btnText":[1,"btn-text"],"btnTextOnsubmit":[1,"btn-text-onsubmit"],"subText":[1,"sub-text"],"submitSuccessMsg":[1,"submit-success-msg"],"submitFailedMsg":[1,"submit-failed-msg"],"colorValidation":[1,"color-validation"],"gecState":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
