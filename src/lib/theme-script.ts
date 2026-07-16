/**
 * Synchrone Theme- und JS-Erkennung vor Hydration.
 * Als Script im <head> einbinden.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add("js");var k=${JSON.stringify("nahwerk-theme")};var s=localStorage.getItem(k);var p=(s==="light"||s==="dark"||s==="system")?s:"system";var r=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;d.setAttribute("data-theme",r);d.setAttribute("data-theme-pref",p);d.style.colorScheme=r;}catch(e){var el=document.documentElement;el.classList.add("js");el.setAttribute("data-theme","light");el.setAttribute("data-theme-pref","system");el.style.colorScheme="light";}})();`;
