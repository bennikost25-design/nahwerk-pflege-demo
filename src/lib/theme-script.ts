/**
 * Synchrone Theme-Initialisierung vor Hydration – verhindert Flackern.
 * Als Script im <head> einbinden.
 */
export const themeInitScript = `(function(){try{var k=${JSON.stringify("nahwerk-theme")};var s=localStorage.getItem(k);var p=(s==="light"||s==="dark"||s==="system")?s:"system";var r=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;var d=document.documentElement;d.setAttribute("data-theme",r);d.setAttribute("data-theme-pref",p);d.style.colorScheme=r;}catch(e){document.documentElement.setAttribute("data-theme","light");document.documentElement.setAttribute("data-theme-pref","system");document.documentElement.style.colorScheme="light";}})();`;
