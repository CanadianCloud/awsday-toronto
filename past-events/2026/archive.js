'use strict';
// Keep historical registration controls visible, but do not reopen old sign-up forms.
const closedDialog=document.createElement('dialog');
closedDialog.className='archive-closed-dialog';
closedDialog.setAttribute('aria-labelledby','archive-closed-title');
closedDialog.innerHTML='<h2 id="archive-closed-title">The 2026 event has ended.</h2><p>This is a preserved copy of the Toronto event website from 29 August 2026. Registration, speaking, sponsorship and volunteer applications for this event are closed.</p><div><a href="/">Current Toronto site</a><button type="button" autofocus>Close</button></div>';
document.body.appendChild(closedDialog);
closedDialog.querySelector('button').addEventListener('click',()=>closedDialog.close());
closedDialog.addEventListener('click',event=>{const box=closedDialog.getBoundingClientRect();if(event.target===closedDialog&&(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom))closedDialog.close();});
document.addEventListener('click',event=>{const trigger=event.target.closest('a,[data-tally-open]');if(!trigger)return;const href=trigger.getAttribute('href')||'';const oldRegistration=trigger.hasAttribute('data-tally-open')||/^https?:\/\/(?:www\.)?(?:luma\.com|lu\.ma|tally\.so)\//i.test(href)||(/hackerrivals\.com/i.test(href)&&/register|enter/i.test(trigger.textContent));if(!oldRegistration)return;event.preventDefault();event.stopImmediatePropagation();if(!closedDialog.open)closedDialog.showModal();},true);
