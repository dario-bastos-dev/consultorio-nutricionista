/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ServicesLazyImport = createFileRoute('/services')()
const ContactLazyImport = createFileRoute('/contact')()
const AppointmentLazyImport = createFileRoute('/appointment')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ServicesLazyRoute = ServicesLazyImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/services.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const AppointmentLazyRoute = AppointmentLazyImport.update({
  id: '/appointment',
  path: '/appointment',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/appointment.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/appointment': {
      id: '/appointment'
      path: '/appointment'
      fullPath: '/appointment'
      preLoaderRoute: typeof AppointmentLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/appointment': typeof AppointmentLazyRoute
  '/contact': typeof ContactLazyRoute
  '/services': typeof ServicesLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/appointment': typeof AppointmentLazyRoute
  '/contact': typeof ContactLazyRoute
  '/services': typeof ServicesLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/appointment': typeof AppointmentLazyRoute
  '/contact': typeof ContactLazyRoute
  '/services': typeof ServicesLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/appointment' | '/contact' | '/services'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/appointment' | '/contact' | '/services'
  id: '__root__' | '/' | '/about' | '/appointment' | '/contact' | '/services'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  AppointmentLazyRoute: typeof AppointmentLazyRoute
  ContactLazyRoute: typeof ContactLazyRoute
  ServicesLazyRoute: typeof ServicesLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  AppointmentLazyRoute: AppointmentLazyRoute,
  ContactLazyRoute: ContactLazyRoute,
  ServicesLazyRoute: ServicesLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/appointment",
        "/contact",
        "/services"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/appointment": {
      "filePath": "appointment.lazy.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/services": {
      "filePath": "services.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
