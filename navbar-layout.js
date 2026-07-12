(() => {
  const desktopQuery = window.matchMedia('(min-width: 1024px)')
  let scheduled = false

  function arrangeTopbar() {
    scheduled = false
    if (!desktopQuery.matches) return

    const navbar = document.querySelector('#navbar')
    const right = document.querySelector('topbar-right-container')
    if (!navbar || !right) return

    const themeToggle = document.querySelector('[data-component-name="theme-toggle"]')
    if (themeToggle) {
      themeToggle.classList.add('kh-theme-centered')
      themeToggle.setAttribute('title', 'Change theme')
      themeToggle.setAttribute('aria-label', themeToggle.getAttribute('aria-label') || 'Change theme')
      if (themeToggle.parentElement !== navbar) navbar.appendChild(themeToggle)
    }

    const search = document.querySelector('#search-bar-entry')
    if (search) {
      search.classList.add('kh-search-icon-only')
      search.setAttribute('title', 'Search documentation')
      search.setAttribute('aria-label', 'Search documentation')
      if (search.parentElement !== right) right.appendChild(search)
    }

    const assistant = document.querySelector('#assistant-entry')
    if (assistant) {
      assistant.classList.add('kh-assistant-right')
      assistant.setAttribute('title', 'KmerHosting AI Assistant')
      if (assistant.parentElement !== right) right.appendChild(assistant)
    }
  }

  function scheduleArrange() {
    if (scheduled) return
    scheduled = true
    window.requestAnimationFrame(arrangeTopbar)
  }

  const observer = new MutationObserver(scheduleArrange)
  observer.observe(document.documentElement, { childList: true, subtree: true })

  document.addEventListener('DOMContentLoaded', scheduleArrange, { once: true })
  window.addEventListener('load', scheduleArrange, { once: true })
  window.addEventListener('popstate', scheduleArrange)
  desktopQuery.addEventListener?.('change', scheduleArrange)
  scheduleArrange()
})()
