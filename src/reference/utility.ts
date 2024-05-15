export function deleteCookie(Ldocument: Document, name: string) {
  var d = new Date();
  d.setTime(d.getTime() - 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  Ldocument.cookie = name + '=;' + expires + ';path=/';
}

export function getCookie(Ldocument: Document, name: string) {
  var cname = name + '=';
  var decodedCookie = decodeURIComponent(Ldocument.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return '';
}

export function setCookie(
  Ldocument: Document,
  name: string,
  value: string,
  exp_mins: number,
) {
  var d = new Date();
  d.setTime(d.getTime() + exp_mins * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  Ldocument.cookie = name + '=' + value + ';' + expires + ';path=/';
}

export function getRGBAlpha(rgba: string) {
  const [r, g, b, a] = rgba.match(/[\d.]+/g) as any;
  return { r, g, b, a };
}

export function setRGBAAlpha(rgba: string, alphaMultiplier: number): string {
  const [r, g, b, a] = rgba.match(/[\d.]+/g) as any;
  return `rgba(${r},${g},${b},${a * alphaMultiplier})`;
}

// validate email
export function validateEmail(email: string) {
  return (
    email
      .toLowerCase()
      // eslint-disable-next-line
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  );
}

export function getTimeDifference(date: Date | string) {
  const compareDate = date instanceof Date ? date : new Date(date + ' UTC');
  const today = new Date();
  const secondsdiff = (today.getTime() - compareDate.getTime()) / 1000; //getTime = milisenconds since Jan 1 1970 UTC
  const minutes = Math.abs(Math.round(secondsdiff / 60));
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  if (minutes < 1) return `just now`;
  if (minutes < 2) return `${minutes} min. ago`;
  if (minutes < 60) return `${minutes} mins. ago`;
  if (hours < 2) return `${hours} hour ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 2) return `${days} day ago`;
  if (days < 15) return `${days} days ago`;
  return compareDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function compareDates(
  datea: Date | string | null,
  dateb: Date | string | null,
) {
  if (datea && dateb) {
    if (datea instanceof String) datea = new Date(datea);
    if (dateb instanceof String) dateb = new Date(dateb);
    if (datea < dateb) return 1;
    else if (datea > dateb) return -1;
    else return 0;
  }
  return 0;
}

export function newDocument(userID: string) {
  const timestamp = new Date();
  const doc = {
    owner: userID,
    author: 'user',
    blurb: '',
    created: timestamp,
    modified: timestamp,
    archived: false,
    deleted: false,
    editors: [],
    viewers: [],
    userlastviewed: [{ userID, datetime: timestamp }],
    name: '',
    workingName: 'Untitled',
  };
  return doc;
}

// convert a string in CSS style formar to an object representation
export function stylesStringToObject(styles: string): {} {
  let styleObj = {};
  const fontstyles = styles.split(';');
  fontstyles.forEach((style) => {
    const styleparts = style.split(':');
    const key = styleparts[0];
    const keyParts = key.split('-');
    keyParts.forEach((part: string, i: number) => {
      if (i !== 0) keyParts[i] = part.charAt(0).toUpperCase() + part.slice(1);
    });
    styleObj = { ...styleObj, [keyParts.join('')]: styleparts[1] };
  });
  return styleObj;
}

// clean up a string and reomve possible issues with script tags etc.
export function cleanString(
  input: string,
  removeInvisible: boolean = true,
  removeHtml: boolean = true,
) {
  let clean: string = input;
  const scriptsRegEx = /\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  clean = clean.replace(scriptsRegEx, '');
  if (removeInvisible) {
    const invisibleRegEx = /[\r\n\t]/gi;
    clean = clean.replace(invisibleRegEx, '');
  }
  if (removeHtml) {
    const htmlRegEx = /<\/?[a-z][^>]*>/gi;
    clean = clean.replace(htmlRegEx, '');
  }
  return clean;
}

export function getHTMLFromSelection(): string | null {
  // extract the html fragment of the selection as a flat string
  // need to do this from the selection object itself as tiptap does not provide
  const winselection = window.getSelection();
  const winrange = winselection?.getRangeAt(0);
  const fragment = winrange?.cloneContents();
  // use the XML serializer to convert the fragment to a string removing the
  // xmlns namespace that gets attached to every html tag if there is any
  const xml = new XMLSerializer();
  let html: string | null = null;
  const match = new RegExp(/xmlns="[^"]+"/g);
  if (fragment) html = xml.serializeToString(fragment).replace(match, '');
  // return the html string or null contents
  return html;
}

export function setSizeStyle(size: string | number): string {
  if (typeof size === 'string') return size;
  return size + 'px';
}
