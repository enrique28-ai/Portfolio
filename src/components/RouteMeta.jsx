import { useEffect } from 'react'
import {
  homepageStructuredData,
  notFoundMetadata,
  routeMetadata,
} from '../data/routeMetadata.js'

const OPEN_GRAPH_DEFAULTS = {
  'og:type': 'website',
  'og:site_name': 'Enrique Preciado Portfolio',
  'og:locale': 'en_US',
}

const STRUCTURED_DATA_ID = 'portfolio-structured-data'

function normalizePathname(pathname) {
  return pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
}

function upsertHeadElement(selector, tagName) {
  const matches = [...document.head.querySelectorAll(selector)]
  const element = matches.shift() ?? document.createElement(tagName)

  matches.forEach((duplicate) => duplicate.remove())

  if (!element.isConnected) {
    document.head.append(element)
  }

  return element
}

function setMetaByName(name, content) {
  const element = upsertHeadElement(`meta[name="${name}"]`, 'meta')
  element.setAttribute('name', name)
  element.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  const element = upsertHeadElement(`meta[property="${property}"]`, 'meta')
  element.setAttribute('property', property)
  element.setAttribute('content', content)
}

function removeHeadElements(selector) {
  document.head.querySelectorAll(selector).forEach((element) => element.remove())
}

function setCanonical(href) {
  const element = upsertHeadElement('link[rel="canonical"]', 'link')
  element.setAttribute('rel', 'canonical')
  element.setAttribute('href', href)
}

function setHomepageStructuredData() {
  const selector = `script#${STRUCTURED_DATA_ID}[type="application/ld+json"]`
  const element = upsertHeadElement(selector, 'script')
  element.id = STRUCTURED_DATA_ID
  element.type = 'application/ld+json'
  element.textContent = JSON.stringify(homepageStructuredData)
}

function removePublicRouteMetadata() {
  removeHeadElements('meta[name="description"]')
  removeHeadElements('link[rel="canonical"]')
  removeHeadElements('meta[property^="og:"]')
  removeHeadElements('meta[name^="twitter:"]')
  removeHeadElements(`script#${STRUCTURED_DATA_ID}`)
}

function RouteMeta({ pathname }) {
  useEffect(() => {
    const normalizedPathname = normalizePathname(pathname)
    const metadata = routeMetadata[normalizedPathname]

    if (!metadata) {
      document.title = notFoundMetadata.title
      removePublicRouteMetadata()
      setMetaByName('robots', notFoundMetadata.robots)
      return
    }

    document.title = metadata.title
    setMetaByName('description', metadata.description)
    setCanonical(metadata.canonical)
    removeHeadElements('meta[name="robots"]')

    Object.entries(OPEN_GRAPH_DEFAULTS).forEach(([property, content]) => {
      setMetaByProperty(property, content)
    })
    setMetaByProperty('og:title', metadata.title)
    setMetaByProperty('og:description', metadata.description)
    setMetaByProperty('og:url', metadata.canonical)

    setMetaByName('twitter:card', 'summary')
    setMetaByName('twitter:title', metadata.title)
    setMetaByName('twitter:description', metadata.description)

    if (normalizedPathname === '/') {
      setHomepageStructuredData()
    } else {
      removeHeadElements(`script#${STRUCTURED_DATA_ID}`)
    }
  }, [pathname])

  return null
}

export default RouteMeta
