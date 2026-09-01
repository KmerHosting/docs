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

  function enforceTwoThemeModes() {
    const preference = document.querySelector('[aria-label="Theme preference"]')
    if (!preference) return

    const system = preference.querySelector('button[aria-label="Switch to system theme"]')
    if (system) {
      // Remove the unsupported third choice entirely so it is not reachable
      // by keyboard or assistive technology. Mintlify can recreate the
      // preference group after navigation; the observer removes it again.
      system.remove()
    }

    // Mintlify exposes system/light/dark as a three-way preference. KmerHosting
    // supports explicit light and dark choices; docs.json sets light as default.
  }

  function enforceExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      try {
        if (new URL(link.href, window.location.href).origin === window.location.origin) return
      } catch {
        return
      }
      if (link.getAttribute('target') !== '_blank') link.setAttribute('target', '_blank')
      if (link.getAttribute('rel') !== 'noopener noreferrer') link.setAttribute('rel', 'noopener noreferrer')
    })
  }

  function ensureSidebarToggle() {
    if (!window.matchMedia('(min-width: 1024px)').matches) return

    let toggle = document.querySelector('#kh-sidebar-toggle')
    if (!toggle) {
      toggle = document.createElement('button')
      toggle.id = 'kh-sidebar-toggle'
      toggle.type = 'button'
      toggle.addEventListener('click', () => {
        const collapsed = document.body.classList.toggle('kh-sidebar-collapsed')
        toggle.setAttribute('aria-expanded', String(!collapsed))
        toggle.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation')
        toggle.textContent = collapsed ? '»' : '«'
        try {
          window.localStorage.setItem('kh-sidebar-collapsed', String(collapsed))
        } catch {
          // Private browsing or blocked storage should not break navigation.
        }
      })
      document.body.appendChild(toggle)
    }

    if (!toggle.hasAttribute('aria-expanded')) {
      let collapsed = false
      try {
        collapsed = window.localStorage.getItem('kh-sidebar-collapsed') === 'true'
      } catch {
        // Use the expanded default when storage is unavailable.
      }
      document.body.classList.toggle('kh-sidebar-collapsed', collapsed)
      toggle.setAttribute('aria-expanded', String(!collapsed))
      toggle.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation')
      toggle.textContent = collapsed ? '»' : '«'
    }
  }

  function scheduleArrange() {
    if (scheduled) return
    scheduled = true
    window.requestAnimationFrame(() => {
      arrangeTopbar()
      enforceTwoThemeModes()
      enforceExternalLinks()
      ensureSidebarToggle()
    })
  }

  const observer = new MutationObserver(scheduleArrange)
  observer.observe(document.documentElement, { childList: true, subtree: true })

  document.addEventListener('DOMContentLoaded', scheduleArrange, { once: true })
  window.addEventListener('load', scheduleArrange, { once: true })
  window.addEventListener('popstate', scheduleArrange)
  desktopQuery.addEventListener?.('change', scheduleArrange)
  scheduleArrange()
})()
